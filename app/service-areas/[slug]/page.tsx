import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { areas, packages, site } from "@/lib/site";

// One on-location shot per city page (illustrative, not geo-specific).
const areaPhotos: Record<string, [string, string]> = {
  raleigh: ["tesla-plaid-van.jpg", "Tesla Model S Plaid detailed on site with the Stan's Auto Detailing van"],
  durham: ["chrysler-300s.jpg", "Blacked-out Chrysler 300S detailed in a client's driveway"],
  cary: ["genesis-gv80.jpg", "Silver Genesis GV80 after a full exterior detail"],
  apex: ["tacoma-trdpro-white.jpg", "White Toyota Tacoma TRD Pro detailed at golden hour"],
  "wake-forest": ["xc90-red.jpg", "Red Volvo XC90 R-Design after an exterior detail"],
  morrisville: ["tesla-model3.jpg", "Gray Tesla Model 3 with fresh paint gloss"],
  "holly-springs": ["gla45-white.jpg", "White Mercedes-AMG GLA 45 after a full exterior detail"],
  "fuquay-varina": ["tacoma-trd-house.jpg", "White Toyota Tacoma TRD Pro detailed in a driveway"],
  garner: ["tundra-silver.jpg", "Silver Toyota Tundra TRD during a mobile detail"],
  knightdale: ["4runner-van.jpg", "Black Toyota 4Runner detailed on site with the Stan's van behind it"],
};

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Mobile Car Detailing in ${area.name}, NC`,
    description: `Professional mobile auto detailing in ${area.name}, NC. Full details from $175, interior deep cleans & exterior hand washes — we come to your home or office. Book online today.`,
    alternates: { canonical: `/service-areas/${slug}` },
  };
}

export default async function AreaPage({
  params,
}: PageProps<"/service-areas/[slug]">) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Service areas",
        item: `${site.domain}/service-areas`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${area.name}, NC`,
        item: `${site.domain}/service-areas/${area.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow">
              <Link href="/service-areas" className="hover:brightness-110">
                Service areas
              </Link>{" "}
              / {area.name}
            </p>
            <h1 className="display mt-6 max-w-3xl text-[7.5vw] sm:text-7xl">
              Mobile detailing
              <br />
              <span className="dim">in {area.name}.</span>
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              {area.blurb} No shop to drive to, no lobby to wait in — our fully
              equipped mobile setup comes to your driveway, office, or job
              site.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="btn btn-primary"
              >
                Book in {area.name}
              </Link>
              <a
                href={site.smsHref}
                className="btn btn-ghost"
              >
                Text {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 pt-14">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl sm:aspect-[21/9]">
              <Image
                src={`/photos/${(areaPhotos[area.slug] ?? ["van-sunset.jpg", "The Stan's Auto Detailing mobile van"])[0]}`}
                alt={(areaPhotos[area.slug] ?? ["", "Mobile detailing by Stan's Auto Detailing"])[1]}
                fill
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Popular in {area.name}</p>
            <h2 className="display mt-6 text-[8vw] sm:text-5xl">
              Packages &<br />
              <span className="dim">pricing.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="bg-raised">
                <div className="flex h-full flex-col p-8">
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="display mt-3 text-2xl">{p.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-auto pt-8">
                    <p className="font-display text-3xl font-bold">
                      ${p.priceCoupe}
                      <span className="ml-2 text-sm font-normal text-muted">
                        coupe / sedan
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      ${p.priceTruck} truck / large SUV
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href="/services"
              className="font-display text-sm font-bold uppercase tracking-[0.08em] text-accent transition hover:brightness-110"
            >
              Full package details & add-ons →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="eyebrow">Why mobile works in {area.name}</p>
            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
              {[
                [
                  "Your schedule, not ours",
                  `We detail while you work, watch the kids, or relax at home — anywhere in ${area.name} and the surrounding Triangle.`,
                ],
                [
                  "Professional-grade products",
                  "Eco-friendly, pro-line chemicals and tools — the same process on a daily commuter as on the exotics in our gallery.",
                ],
                [
                  "Fully insured",
                  "Your vehicle is protected from the moment we arrive. Locally owned, not a franchise.",
                ],
              ].map(([title, body], i) => (
                <div key={title} className={i ? "border-t border-line pt-6 md:border-t-0 md:pt-0" : ""}>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-12">
            <p className="text-sm text-muted">
              Also serving:{" "}
              {areas
                .filter((a) => a.slug !== area.slug)
                .slice(0, 6)
                .map((a, i, arr) => (
                  <span key={a.slug}>
                    <Link
                      href={`/service-areas/${a.slug}`}
                      className="text-accent transition hover:brightness-110"
                    >
                      {a.name}
                    </Link>
                    {i < arr.length - 1 ? " · " : ""}
                  </span>
                ))}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
