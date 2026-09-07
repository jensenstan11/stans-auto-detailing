import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/InstagramIcon";
import { areas, packages, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-small-white.png"
              alt="Stan's Auto Detailing"
              width={132}
              height={102}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Locally owned mobile auto detailing serving {site.serviceAreaLabel}.
              Professional-grade products, driveway-side convenience, and results
              driven by perfection.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="rounded-full border border-line px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
              >
                Call {site.phone}
              </a>
              <a
                href={site.smsHref}
                className="rounded-full border border-line px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-accent hover:text-accent"
              >
                Text us
              </a>
            </div>
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
                @stansautodetailing
              </a>
            )}
          </div>

          <nav aria-label="Services">
            <p className="eyebrow">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {packages.map((p) => (
                <li key={p.slug}>
                  <Link
                    href="/services"
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services#add-ons" className="text-muted transition-colors hover:text-ink">
                  Add-on services
                </Link>
              </li>
              <li>
                <Link href="/memberships" className="text-muted transition-colors hover:text-ink">
                  Memberships
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <p className="eyebrow">Service areas</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {areas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {a.name} mobile detailing
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-muted transition-colors hover:text-ink"
                >
                  All service areas
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="eyebrow">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/gallery" className="text-muted transition-colors hover:text-ink">
                  Our work
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-muted transition-colors hover:text-ink">
                  Book online
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted transition-colors hover:text-ink">
                  Contact & FAQ
                </Link>
              </li>
              <li>
                <a
                  href={site.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Leave a Google review
                </a>
              </li>
              {site.instagram && (
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-ink"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {site.facebook && (
                <li>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-ink"
                  >
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Stan&apos;s Auto Detailing. All rights
            reserved.
          </p>
          <p>Mobile car detailing — {site.serviceAreaLabel}</p>
        </div>
      </div>
    </footer>
  );
}
