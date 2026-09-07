import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { memberships, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Detailing Memberships & Maintenance Plans in Raleigh, NC",
  description:
    "Keep your car showroom-ready year round. Monthly, bi-weekly, and weekly mobile detailing plans in Raleigh–Durham with member pricing on every add-on.",
  alternates: { canonical: "/memberships" },
};

export default function MembershipsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Memberships</p>
            <h1 className="display mt-8 max-w-3xl text-[7.5vw] sm:text-7xl">
              Always
              <br />
              <span className="dim">showroom-ready.</span>
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              Stop rebooking from scratch every time. Members get a standing
              spot on the schedule, locked-in savings, and a vehicle that never
              slips — we handle the calendar, you just hand over the keys.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {memberships.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <article
                  className={`flex h-full flex-col rounded-2xl border p-8 ${
                    m.featured
                      ? "border-accent/60 bg-raised"
                      : "border-line bg-raised/60"
                  }`}
                >
                  {m.featured && (
                    <p className="font-display -mt-11 mb-4 self-start rounded-full bg-accent px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#05131f]">
                      Best value · most popular
                    </p>
                  )}
                  <h2 className="display text-2xl sm:text-3xl">{m.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {m.blurb}
                  </p>
                  <div className="mt-7 border-t border-line pt-6">
                    <p className="font-display text-5xl font-bold">
                      ${m.price}
                      <span className="ml-2 text-sm font-normal text-muted">
                        / {m.per}
                      </span>
                    </p>
                    <p className="font-display mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                      {m.cadence} service
                    </p>
                  </div>
                  <ul className="mt-7 space-y-2.5 text-sm">
                    {m.perks.map((perk) => (
                      <li key={perk} className="flex gap-3">
                        <span aria-hidden className="mt-0.5 text-accent">
                          ✓
                        </span>
                        <span className="text-ink/90">{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <a
                      href={site.smsHref}
                      className={`btn w-full ${
                        m.featured ? "btn-primary" : "btn-ghost"
                      }`}
                    >
                      Text us to join
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="font-display text-center text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              No contracts · cancel or pause anytime · pricing confirmed before
              your first visit
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
