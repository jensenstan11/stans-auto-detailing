import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/memberships",
    "/service-areas",
    "/gallery",
    "/book",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
