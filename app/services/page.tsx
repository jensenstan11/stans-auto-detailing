import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { addOns, packages, premiumServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Detailing Services & Pricing in Raleigh, NC",
  description:
    "Transparent mobile detailing pricing in Raleigh–Durham: Exterior Detail from $75, Interior Detail from $125, Full Detail from $175. Ceramic coating, paint correction & add-ons available.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Services & pricing</p>
            <h1 className="display mt-8 max-w-3xl text-[7.5vw] sm:text-7xl">
              Transparent
              <br />
              <span className="dim">value.</span>
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              Professional detailing packages priced by vehicle size — no
              hidden fees, no upsell games. Every service is performed at your
              home or office anywhere in {site.serviceAreaLabel}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <article
                  className={`flex h-full flex-col rounded-2xl border p-8 ${
                    p.featured
                      ? "border-accent/60 bg-raised"
                      : "border-line bg-raised/60"
                  }`}
                >
                  {p.featured && (
                    <p className="font-display -mt-11 mb-4 self-start rounded-full bg-accent px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#05131f]">
                      Most popular
                    </p>
                  )}
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h2 className="display mt-3 text-3xl">{p.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-7 border-t border-line pt-6">
                    <p className="font-display text-5xl font-bold">
                      ${p.priceCoupe}
                      <span className="ml-2 text-sm font-normal tracking-normal text-muted">
                        coupe / sedan
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      ${p.priceTruck} truck / large SUV · {p.time}
                    </p>
                  </div>
                  <ul className="mt-7 space-y-2.5 text-sm">
                    {p.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-0.5 text-accent">
                          ✓
                        </span>
                        <span className="text-ink/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link
                      href="/book"
                      className={`btn w-full ${
                        p.featured ? "btn-primary" : "btn-ghost"
                      }`}
                    >
                      Book {p.name}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="text-xs text-muted">
              Starting prices — heavily soiled vehicles, pet hair, and excess
              debris may add to the quote. We&apos;ll always confirm the price
              before we start.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Premium services */}
      <section className="border-t border-line bg-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Protection & correction</p>
            <h2 className="display mt-8 max-w-2xl text-[8vw] sm:text-6xl">
              For paint that
              <br />
              <span className="dim">stays flawless.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {premiumServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 90} className="bg-raised">
                <div className="flex h-full flex-col p-9">
                  <h3 className="display text-2xl">{s.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-x-8 gap-y-3 pt-8">
                    <a
                      href={site.smsHref}
                      className="font-display text-sm font-bold uppercase tracking-[0.08em] text-accent transition hover:brightness-110"
                    >
                      Text us for a quote →
                    </a>
                    {s.name === "Ceramic Coating" && (
                      <Link
                        href="/ceramic-coating"
                        className="font-display text-sm font-bold uppercase tracking-[0.08em] text-muted transition-colors hover:text-ink"
                      >
                        Learn more
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section id="add-ons" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Add-on services</p>
            <h2 className="display mt-6 text-[8vw] sm:text-6xl">
              Finish it
              <br />
              <span className="dim">your way.</span>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
              Stack any of these onto a detail package. Tell us what your
              vehicle needs when you book and we&apos;ll confirm pricing up
              front.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 70}>
                <div className="border-t border-line pt-5">
                  <h3 className="font-semibold">{a.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {a.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
