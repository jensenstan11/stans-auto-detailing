import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Detailing Gallery | Our Work Around Raleigh, NC",
  description:
    "Recent mobile detailing work by Stan's Auto Detailing across Raleigh–Durham — full details, interior deep cleans, and paint care on real customer vehicles.",
};

const photos = [
  "IMG_5768.jpg",
  "IMG_5769.jpg",
  "IMG_5765.jpg",
  "IMG_1406.jpg",
  "IMG_5758.jpg",
  "IMG_5759.jpg",
  "IMG_5760.jpg",
  "IMG_5762.jpg",
  "IMG_5763.jpg",
  "IMG_5764.jpg",
  "IMG_5766.jpg",
  "IMG_5770.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Gallery</p>
            <h1 className="display mt-8 max-w-3xl text-5xl sm:text-7xl">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 80}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={`/photos/${f}`}
                    alt="Vehicle detailed by Stan's Auto Detailing in the Raleigh–Durham area"
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

      <CtaBand />
    </>
  );
}
