// Live Instagram data via the official Instagram API (Instagram Login flow).
// Requires INSTAGRAM_ACCESS_TOKEN in the environment (Vercel project settings).
// Every fetch revalidates hourly; any failure returns null and the site falls
// back to the curated static strip.

const API = "https://graph.instagram.com/v23.0";

export type IgProfile = {
  username: string;
  followers_count: number;
  media_count: number;
  profile_picture_url: string | null;
};

export type IgPost = {
  id: string;
  caption: string | null;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url: string | null;
  permalink: string;
};

export type IgData = { profile: IgProfile; posts: IgPost[] };

export async function getInstagramData(): Promise<IgData | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  try {
    const [profileRes, mediaRes] = await Promise.all([
      fetch(
        `${API}/me?fields=username,followers_count,media_count,profile_picture_url&access_token=${token}`,
        { next: { revalidate: 3600 } },
      ),
      fetch(
        `${API}/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=12&access_token=${token}`,
        { next: { revalidate: 3600 } },
      ),
    ]);

    if (!profileRes.ok || !mediaRes.ok) return null;

    const profile = (await profileRes.json()) as IgProfile;
    const media = (await mediaRes.json()) as { data: IgPost[] };
    if (!profile.username || !Array.isArray(media.data)) return null;

    // Six most recent posts that have a renderable image.
    const posts = media.data
      .filter((p) => p.media_url || p.thumbnail_url)
      .slice(0, 6);

    return { profile, posts };
  } catch {
    return null;
  }
}
