import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import InstagramIcon from "@/components/InstagramIcon";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Detailing Gallery | Our Work Around Raleigh, NC",
  description:
    "Recent mobile detailing work by Stan's Auto Detailing across Raleigh–Durham — full details, interior deep cleans, and paint care on real customer vehicles.",
  alternates: { canonical: "/gallery" },
};

const photos: [string, string][] = [
  ["IMG_5768.jpg", "Black McLaren 570S detailed in a Raleigh driveway, front three-quarter view"],
  ["IMG_5769.jpg", "Black McLaren 570S with a Land Rover Defender behind it after mobile detailing"],
  ["IMG_5765.jpg", "Black McLaren 570S rear three-quarter view after a full exterior detail"],
  ["IMG_1406.jpg", "Matte gray Mercedes-AMG GT 63 detailed at a client's home"],
  ["IMG_5758.jpg", "Customer vehicle after a full detail in the Raleigh–Durham area"],
  ["IMG_5759.jpg", "Black Land Rover Defender with gloss black wheels after a full detail"],
  ["IMG_5760.jpg", "Freshly detailed customer vehicle in a Triangle-area driveway"],
  ["IMG_5762.jpg", "Detailed customer vehicle photographed on location in Raleigh"],
  ["IMG_5763.jpg", "Paintwork shining after a mobile detail in the Raleigh–Durham area"],
  ["IMG_5764.jpg", "Customer vehicle after detailing service in the Triangle"],
  ["IMG_5766.jpg", "Exterior detail results on a customer vehicle in Raleigh"],
  ["IMG_5770.jpg", "Finished mobile detail on a customer vehicle in the Raleigh area"],
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Gallery</p>
            <h1 className="display mt-8 max-w-3xl text-[7.5vw] sm:text-7xl">
              The proof is in
              <br />
              <span className="dim">the paint.</span>
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              Every photo below is a real customer vehicle, detailed on
              location somewhere in the Triangle. No stock imagery, no studio
              lighting — just clean cars in their own driveways.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map(([f, alt], i) => (
              <Reveal key={f} delay={(i % 3) * 80}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={`/photos/${f}`}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram follow strip */}
      <section className="border-t border-line bg-deep">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <Reveal>
            <InstagramIcon className="mx-auto h-8 w-8 text-accent" />
            <h2 className="display mt-6 text-3xl sm:text-5xl">
              The latest work,
              <br />
              <span className="dim">as it happens.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted">
              Before-and-afters, satisfying process clips, and every fresh
              detail land on Instagram first.
            </p>
            <a
              href={site.instagram ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              Follow @stansautodetailing
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
