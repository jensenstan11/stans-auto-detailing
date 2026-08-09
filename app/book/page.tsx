import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Mobile Detailing Online | Raleigh–Durham, NC",
  description:
    "Book your mobile car detail online in under a minute. Stan's Auto Detailing comes to your home or office anywhere in Raleigh, Durham, Cary & Apex.",
};

export default function BookPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-40">
          <Reveal>
            <p className="eyebrow">Book online</p>
            <h1 className="display mt-4 max-w-3xl text-5xl sm:text-7xl">
              Pick a time.
              <br />
              <span className="dim">We&apos;ll be there.</span>
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <p className="max-w-xl leading-relaxed text-muted">
                Choose your package and a window that works for you below. If
                weather shifts a mobile appointment, we&apos;ll reach out and
                reschedule at no charge. Prefer to talk it through?{" "}
                <a
                  href={site.smsHref}
                  className="font-semibold text-accent transition hover:brightness-110"
                >
                  Text {site.phone}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe
                src={site.bookingUrl}
                title="Book an appointment with Stan's Auto Detailing"
                className="h-[1100px] w-full"
              />
            </div>
            <p className="mt-4 text-xs text-muted">
              Booking window not loading?{" "}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition hover:brightness-110"
              >
                Open the booking page in a new tab
              </a>{" "}
              or call {site.phone}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
