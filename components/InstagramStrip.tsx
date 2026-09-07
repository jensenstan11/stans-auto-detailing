import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/InstagramIcon";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const tiles = [
  ["IMG_5768.jpg", "Black McLaren 570S fresh off a full detail"],
  ["IMG_5759.jpg", "Black Land Rover Defender after a full detail"],
  ["IMG_5763.jpg", "Paintwork gloss after a mobile detail"],
  ["IMG_1406.jpg", "Matte Mercedes-AMG GT 63 detailed on site"],
  ["IMG_5765.jpg", "McLaren 570S rear three-quarter, freshly detailed"],
  ["IMG_5770.jpg", "Finished mobile detail in the Raleigh area"],
] as const;

// Feed-style strip of real work, linking out to the profile.
export default function InstagramStrip() {
  return (
    <section className="border-t border-line bg-deep">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a
              href={site.instagram ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
            >
              <InstagramIcon className="h-[18px] w-[18px] text-accent" />
              @stansautodetailing
            </a>
            <Link
              href="/gallery"
              className="font-display text-xs font-bold uppercase tracking-[0.08em] text-muted transition-colors hover:text-ink"
            >
              Full gallery →
            </Link>
          </div>
        </Reveal>
        <div className="mt-7 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {tiles.map(([file, alt], i) => (
            <Reveal key={file} delay={i * 60}>
              <a
                href={site.instagram ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${alt} — view on Instagram`}
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={`/photos/${file}`}
                  alt={alt}
                  fill
                  sizes="(min-width: 640px) 16vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6 text-ink" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
