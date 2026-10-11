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
  ["mclaren-spider-front.jpg", "Black McLaren 570S Spider with orange calipers after a full detail in Raleigh"],
  ["defender-grille.jpg", "Blacked-out Land Rover Defender 110 grille after an exterior detail"],
  ["tacoma-trdpro-white.jpg", "White Toyota Tacoma TRD Pro detailed at golden hour in Raleigh"],
  ["mclaren-interior.jpg", "McLaren 570S orange and alcantara interior after an interior detail"],
  ["gle63-front.jpg", "Satin black Mercedes-AMG GLE 63 S coupe detailed at a client's home"],
  ["porsche-911-yellow.jpg", "Yellow Porsche 911 Carrera cabriolet after a full detail"],
  ["tesla-plaid-van.jpg", "Tesla Model S Plaid detailed on site with the Stan's van behind it"],
  ["corvette-garage.jpg", "Orange Chevrolet Corvette C8 convertible detailed in a parking garage"],
  ["range-rover-hood.jpg", "Blacked-out Range Rover Sport hood and grille after an exterior detail"],
  ["genesis-gv80.jpg", "Silver Genesis GV80 after a full exterior detail in Raleigh"],
  ["tacoma-army.jpg", "Lifted army green Toyota Tacoma TRD with fresh paint gloss"],
  ["IMG_5769.jpg", "Black McLaren 570S with a Land Rover Defender behind it after mobile detailing"],
  ["volvo-interior.jpg", "Volvo XC60 blonde leather interior after a full interior detail"],
  ["xc90-red.jpg", "Red Volvo XC90 R-Design after an exterior detail in the Triangle"],
  ["range-rover-sport-gray.jpg", "New Range Rover Sport after a full mobile detail"],
  ["bmw-x1-interior.jpg", "BMW X1 red and black interior after a full interior detail"],
  ["chrysler-300s.jpg", "Blacked-out Chrysler 300S detailed in a client's driveway"],
  ["IMG_1406.jpg", "Matte gray Mercedes-AMG GT 63 detailed at a client's home"],
  ["gla45-white.jpg", "White Mercedes-AMG GLA 45 after a full exterior detail"],
  ["tacoma-trd-house.jpg", "White Toyota Tacoma TRD Pro detailed in a Raleigh driveway"],
  ["tesla-model3.jpg", "Gray Tesla Model 3 with fresh paint gloss after an exterior detail"],
  ["IMG_5759.jpg", "Black Land Rover Defender with gloss black wheels after a full detail"],
  ["tundra-silver.jpg", "Silver Toyota Tundra TRD mid-wash during a mobile detail"],
  ["mclaren-spider-rear.jpg", "McLaren 570S Spider rear three-quarter after a full exterior detail"],
  ["4runner-van.jpg", "Black Toyota 4Runner TRD detailed on site with the Stan's van behind it"],
  ["van-sunset.jpg", "The Stan's Auto Detailing mobile van at sunset — driven by perfection"],
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
              className="btn btn-ghost mt-8"
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
