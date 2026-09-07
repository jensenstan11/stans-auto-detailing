import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="border-t border-line bg-deep">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="display mt-6 text-[8vw] sm:text-6xl">
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
              className="btn btn-primary"
            >
              Book your detail
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
  );
}
