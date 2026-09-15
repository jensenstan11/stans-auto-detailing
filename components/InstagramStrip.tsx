import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/InstagramIcon";
import Reveal from "@/components/Reveal";
import { getInstagramData } from "@/lib/instagram";
import { site } from "@/lib/site";

// Fallback tiles when the live feed is unavailable (no token / API error).
const staticTiles = [
  ["IMG_5768.jpg", "Black McLaren 570S fresh off a full detail"],
  ["IMG_5759.jpg", "Black Land Rover Defender after a full detail"],
  ["IMG_5763.jpg", "Paintwork gloss after a mobile detail"],
  ["IMG_1406.jpg", "Matte Mercedes-AMG GT 63 detailed on site"],
  ["IMG_5765.jpg", "McLaren 570S rear three-quarter, freshly detailed"],
  ["IMG_5770.jpg", "Finished mobile detail in the Raleigh area"],
] as const;

// Profile-card strip; live posts and counts when the Instagram API
// token is configured, curated photos otherwise.
export default async function InstagramStrip() {
  const live = await getInstagramData();

  const followers = live?.profile.followers_count ?? site.instagramProfile.followers;
  const posts = live?.profile.media_count ?? site.instagramProfile.posts;
  const avatar = live?.profile.profile_picture_url ?? "/brand/ig-avatar.jpg";

  return (
    <section className="border-t border-line bg-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
            <a
              href={site.instagram ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="shrink-0 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2.5px]">
                <Image
                  src={avatar}
                  alt="Stan's Auto Detailing Instagram profile picture"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full border-2 border-deep object-cover sm:h-16 sm:w-16"
                />
              </span>
              <span>
                <span className="font-display block text-sm font-bold uppercase tracking-[0.08em] text-ink transition-colors group-hover:text-accent">
                  {site.instagramProfile.handle}
                </span>
                <span className="mt-0.5 block text-sm text-muted">
                  {site.instagramProfile.name} · Mobile detailing · Raleigh, NC
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  <span className="font-semibold text-ink/80">{posts}</span>{" "}
                  posts ·{" "}
                  <span className="font-semibold text-ink/80">{followers}</span>{" "}
                  followers
                </span>
              </span>
            </a>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={site.instagram ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <InstagramIcon className="h-4 w-4" />
                Follow
              </a>
              <Link
                href="/gallery"
                className="font-display text-xs font-bold uppercase tracking-[0.08em] text-muted transition-colors hover:text-ink"
              >
                Full gallery →
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="mt-7 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {live
            ? live.posts.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <a
                    href={p.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      p.caption
                        ? `Instagram post: ${p.caption.slice(0, 80)}`
                        : "View this post on Instagram"
                    }
                    className="group relative block aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={
                        p.media_type === "VIDEO"
                          ? (p.thumbnail_url ?? p.media_url)
                          : p.media_url
                      }
                      alt={p.caption?.slice(0, 100) ?? "Stan's Auto Detailing on Instagram"}
                      fill
                      sizes="(min-width: 640px) 16vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <InstagramIcon className="h-6 w-6 text-ink" />
                    </span>
                  </a>
                </Reveal>
              ))
            : staticTiles.map(([file, alt], i) => (
                <Reveal key={file} delay={i * 60}>
                  <a
                    href={site.instagram ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${alt} — view on Instagram`}
                    className="group relative block aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`/photos/${file}`}
                      alt={alt}
                      fill
                      sizes="(min-width: 640px) 16vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <InstagramIcon className="h-6 w-6 text-ink" />
                    </span>
                  </a>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
