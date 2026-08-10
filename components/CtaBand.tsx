import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="border-t border-line bg-deep">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="display mt-6 text-4xl sm:text-6xl">
            Your driveway.
            <br />
            <span className="dim">Our detail.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted">
            Book online in under a minute, or text us a photo of your vehicle
            for a quick quote. We come to you anywhere in{" "}
            {site.serviceAreaLabel}.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#05131f] transition hover:brightness-110"
            >
              Book your detail
            </Link>
            <a
              href={site.smsHref}
              className="rounded-full border border-line px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
            >
              Text {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
