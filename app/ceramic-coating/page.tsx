import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ceramic Coating in Raleigh, NC | Applied at Your Home",
  description:
    "Professional SiO2 ceramic coating applied at your home in Raleigh, Durham, Cary & Apex. Years of gloss, hydrophobic protection & easier washes. Text a photo for a fast estimate.",
  alternates: { canonical: "/ceramic-coating" },
};

const benefits = [
  {
    title: "Years of protection",
    body: "A cured SiO2 layer bonds to your clear coat and keeps protecting long after any wax or sealant would have washed away.",
  },
  {
    title: "Deep, glass-like gloss",
    body: "Coated paint reads darker, wetter, and sharper — the finish people notice from across the parking lot.",
  },
  {
    title: "Water that cleans itself off",
    body: "Extreme hydrophobics make rain bead and sheet away, carrying road grime with it instead of letting it stick.",
  },
  {
    title: "Defense against NC weather",
    body: "UV, pollen, tree sap, bird droppings, and brake dust sit on the coating — not in your paint.",
  },
  {
    title: "Easier every wash",
    body: "Dirt releases with far less effort, which means faster washes and less chance of swirl marks over time.",
  },
  {
    title: "Resale value protected",
    body: "Paint is the first thing a buyer sees. A coated, corrected finish keeps your vehicle looking newer, longer.",
  },
];

const steps = [
  {
    title: "Paint evaluation",
    body: "Every coating starts with an inspection. We assess swirl marks, oxidation, and prior work to quote exactly what your paint needs.",
  },
  {
    title: "Correction & prep",
    body: "Decontamination, clay bar, and machine polishing — a coating locks in whatever is underneath it, so the surface has to be right first.",
  },
  {
    title: "Coating & cure",
    body: "The ceramic layer is applied panel by panel in your driveway or garage, then levels and cures to a hard, hydrophobic shell.",
  },
];

export default function CeramicCoatingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85svh] flex-col justify-end overflow-hidden">
        <Image
          src="/photos/IMG_5763.jpg"
          alt="Deep gloss on black paint after ceramic coating by Stan's Auto Detailing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/25"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-deep/80 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-44 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Ceramic coating</p>
            <h1 className="display mt-6 max-w-3xl text-[7.5vw] sm:text-7xl">
              Protection that
              <br />
              <span className="dim">outlasts seasons.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85">
              A professional-grade SiO2 ceramic coating, corrected and applied
              at your home anywhere in {site.serviceAreaLabel}.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.smsHref} className="btn btn-primary">
                Text for an estimate
              </a>
              <a href={site.phoneHref} className="btn btn-ghost">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Why coat your car</p>
            <h2 className="display mt-6 text-[8vw] sm:text-6xl">
              Wax fades.
              <br />
              <span className="dim">Ceramic doesn&apos;t.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 70}>
                <div className="border-t border-line pt-5">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">The process</p>
            <h2 className="display mt-6 text-[8vw] sm:text-6xl">
              Done right,
              <br />
              <span className="dim">in your driveway.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
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

      {/* Estimate CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h2 className="display mt-6 text-[8vw] sm:text-6xl">
              Quoted for
              <br />
              <span className="dim">your paint.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted">
              Every coating is priced by vehicle size and paint condition —
              a garage-kept coupe and a sun-baked truck need different prep.
              Text us a photo of your vehicle and what you&apos;re after, and
              we&apos;ll send a fast, no-pressure estimate.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={site.smsHref} className="btn btn-primary">
                Text {site.phone}
              </a>
              <a href={site.phoneHref} className="btn btn-ghost">
                Call instead
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
