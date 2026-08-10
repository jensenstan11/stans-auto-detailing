import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & FAQ | Mobile Detailing in Raleigh, NC",
  description:
    "Questions about mobile detailing in Raleigh–Durham? Call or text Stan's Auto Detailing at 315-380-4885, or read our answers to the most common questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h1 className="display mt-6 text-5xl sm:text-7xl">
                Talk to
                <br />
                <span className="dim">Stan&apos;s.</span>
              </h1>
              <p className="mt-8 max-w-md leading-relaxed text-muted">
                The fastest way to reach us is a text — send your vehicle, the
                service you&apos;re after, and where you&apos;re located, and
                we&apos;ll get right back to you.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={site.smsHref}
                  className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#05131f] transition hover:brightness-110"
                >
                  Text {site.phone}
                </a>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-line px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
                >
                  Call us
                </a>
              </div>
              <div className="mt-12 space-y-4 border-t border-line pt-8 text-sm">
                <p className="text-muted">
                  <span className="font-semibold text-ink">Hours: </span>
                  by appointment, seven days a week
                </p>
                <p className="text-muted">
                  <span className="font-semibold text-ink">Coverage: </span>
                  {site.serviceAreaLabel} —{" "}
                  <Link
                    href="/service-areas"
                    className="text-accent transition hover:brightness-110"
                  >
                    see all areas
                  </Link>
                </p>
                <p className="text-muted">
                  <span className="font-semibold text-ink">Reviews: </span>
                  <a
                    href={site.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition hover:brightness-110"
                  >
                    find us on Google
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-line bg-raised p-8">
                <p className="eyebrow">Common questions</p>
                <div className="mt-4 divide-y divide-line">
                  {faqs.map((f) => (
                    <details key={f.q} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span
                          aria-hidden
                          className="text-accent transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
