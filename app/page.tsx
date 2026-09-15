import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import InstagramStrip from "@/components/InstagramStrip";
import Reveal from "@/components/Reveal";
import { addOns, packages, premiumServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stan's Auto Detailing | Mobile Car Detailing in Raleigh–Durham, NC",
  description:
    "Mobile car detailing that comes to your driveway in Raleigh, Durham, Cary & Apex. Full details from $175, interior deep cleans, ceramic coating & paint correction. Book online today.",
};

const steps = [
  {
    title: "Book in under a minute",
    body: "Pick a package and a time online, or just text us a photo of your vehicle for a quote.",
  },
  {
    title: "We come to you",
    body: "Home, office, or job site — our fully equipped mobile setup arrives anywhere in the Triangle.",
  },
  {
    title: "Walk out to a new car",
    body: "Do a walk-around with us when the work is done. You pay when you're happy with every panel.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
        <Image
          src="/photos/IMG_5768.jpg"
          alt="Freshly detailed black McLaren 570S in a Raleigh driveway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_center] sm:object-[62%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-deep/80 to-transparent"
        />
        <div className="absolute inset-x-0 top-24 z-10 flex justify-center px-6 sm:top-28">
          <p className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-deep/70 px-4 py-2 font-display text-[0.58rem] font-bold uppercase tracking-[0.08em] text-ink backdrop-blur sm:text-[0.7rem] sm:tracking-[0.14em]">
            <span aria-hidden className="text-accent">
              ●
            </span>
            <span className="hidden sm:inline">Serving&nbsp;</span>
            Raleigh · Durham · Cary · Apex
          </p>
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-40 text-center sm:pb-32">
          <h1 className="display text-[7.5vw] sm:text-8xl lg:text-[7.5rem]">
            Driven by{" "}
            <br />
            <span className="dim">perfection.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85">
            Professional-grade auto detailing, delivered to your driveway.
            Locally owned, fully insured, and obsessive about the details the
            car wash misses.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="btn btn-primary"
            >
              Book your detail
            </Link>
            <Link
              href="/services"
              className="btn btn-ghost"
            >
              See packages & pricing
            </Link>
          </div>
        </div>
      </section>

      <InstagramStrip />

      {/* Packages strip */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow">Packages</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-xl text-[8vw] sm:text-6xl">
                Three details.
                <br />
                <span className="dim">Zero shortcuts.</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Straightforward pricing by vehicle size. Every package is a
                hand wash — your paint never touches an automated brush.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="bg-raised">
                <div className="flex h-full flex-col p-8">
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="display mt-3 text-2xl">{p.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-auto pt-8">
                    <p className="font-display text-4xl font-bold">
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

      {/* Ceramic coating feature */}
      <section className="border-t border-line bg-deep">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/photos/IMG_5763.jpg"
                  alt="Mirror-gloss black paint after ceramic coating by Stan's Auto Detailing"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Ceramic coating</p>
              <h2 className="display mt-6 text-[7vw] sm:text-5xl">
                Years of gloss.
                <br />
                <span className="dim">One application.</span>
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-muted">
                A professional SiO2 ceramic coating bonds to your clear coat
                and outlasts any wax — repelling water, UV, pollen, and road
                grime while your paint stays glass-smooth. Corrected, prepped,
                and applied at your home.
              </p>
              <ul className="mt-7 space-y-2.5 text-sm">
                {[
                  "Years of protection, not weeks",
                  "Hydrophobic — rain carries dirt off the paint",
                  "Priced by vehicle & paint condition",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-0.5 text-accent">
                      ✓
                    </span>
                    <span className="text-ink/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={site.smsHref} className="btn btn-primary">
                  Text for an estimate
                </a>
                <Link href="/ceramic-coating" className="btn btn-ghost">
                  Learn more
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="display mt-6 text-[8vw] sm:text-6xl">
              Simple. Mobile.
              <br />
              <span className="dim">Done right.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="border-t border-line pt-6">
                  <p className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the wash — premium + add-ons teaser */}
      <section className="border-t border-line bg-deep">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Beyond the wash</p>
              <h2 className="display mt-6 text-[7vw] sm:text-5xl">
                Protection &<br />
                <span className="dim">restoration.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                North Carolina sun, pollen, and humidity are hard on a car.
                From ceramic coating to headlight restoration, we offer the
                treatments that keep your vehicle protected between details.
              </p>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="font-display text-sm font-bold uppercase tracking-[0.08em] text-accent transition hover:brightness-110"
                >
                  Explore all services →
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {[premiumServices[1], ...addOns.slice(0, 3)].map((s, i) => (
                <Reveal key={s.name} delay={i * 70} className="bg-raised">
                  <div className="h-full p-7">
                    <h3 className="font-semibold">{s.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {s.blurb}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Why Stan&apos;s</p>
            <h2 className="display mt-6 text-3xl sm:text-5xl">
              Every detail
              <br />
              <span className="dim">matters.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted">
              We&apos;re a locally owned detailing team, not a franchise. We use
              eco-friendly, professional-grade products, we&apos;re fully
              insured, and we treat every car like it&apos;s our own — from
              daily commuters to the McLaren in the photos above.
            </p>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6">
              {[
                ["100%", "mobile — we come to you"],
                ["5★", "rated by Raleigh drivers"],
                ["Insured", "and locally owned"],
              ].map(([stat, label]) => (
                <div key={label} className="border-t border-line pt-5">
                  <p className="font-display text-2xl font-bold sm:text-3xl">
                    {stat}
                  </p>
                  <p className="font-display mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
