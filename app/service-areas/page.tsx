import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { areas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Detailing Service Areas | Raleigh, Durham, Cary & Apex, NC",
  description:
    "Stan's Auto Detailing comes to your driveway across the Triangle: Raleigh, Durham, Cary, Apex, Wake Forest, Holly Springs, Garner and more. Fully mobile — home, office, or job site.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Service areas</p>
            <h1 className="display mt-8 max-w-3xl text-[7.5vw] sm:text-7xl">
              Serving the
              <br />
              <span className="dim">Triangle.</span>
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              We&apos;re 100% mobile. Our fully equipped setup comes to your
              home, office, or job site anywhere in the Raleigh–Durham area —
              you never wait in a lobby or drop off a key.
            </p>
            <div className="mt-8 grid max-w-lg grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="border-t border-line pt-5">
                <h2 className="font-semibold">We work around you</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Weekday, weekend, home, or office — tell us where the car
                  will be and we&apos;ll be there.
                </p>
              </div>
              <div className="border-t border-line pt-5">
                <h2 className="font-semibold">Fully insured</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Your vehicle is protected from the moment we arrive, on every
                  job.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 80} className="bg-raised">
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="flex h-full flex-col p-8 transition-colors hover:bg-raised/60"
                >
                  <h2 className="display text-2xl">
                    <span aria-hidden className="mr-2 text-accent">
                      ◍
                    </span>
                    {a.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {a.blurb}
                  </p>
                  <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {a.name} detailing →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="text-sm text-muted">
              Not on the list? We regularly travel beyond these areas —{" "}
              <a
                href={site.smsHref}
                className="font-semibold text-accent transition hover:brightness-110"
              >
                text us your location
              </a>{" "}
              and we&apos;ll let you know if we can make it work.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
