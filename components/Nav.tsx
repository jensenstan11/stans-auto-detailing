"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import InstagramIcon from "@/components/InstagramIcon";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/memberships", label: "Memberships" },
  { href: "/service-areas", label: "Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line bg-deep/80 py-2 pl-5 pr-2 backdrop-blur-md">
        <Link href="/" aria-label="Stan's Auto Detailing — home" className="shrink-0">
          <Image
            src="/brand/logo-small-white.png"
            alt="Stan's Auto Detailing"
            width={132}
            height={102}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-[0.78rem] font-bold uppercase tracking-[0.08em] transition-colors hover:text-ink ${
                pathname.startsWith(l.href) ? "text-ink" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden text-[0.82rem] font-medium tracking-wide text-muted transition-colors hover:text-ink lg:block"
          >
            {site.phone}
          </a>
          {site.instagram && (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stan's Auto Detailing on Instagram"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent md:flex"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          <Link
            href="/book"
            className="btn btn-primary btn-sm"
          >
            Book now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <span aria-hidden className="text-lg leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 bg-deep/95 backdrop-blur-md md:hidden">
          <nav
            className="flex flex-col gap-2 px-8 pt-10"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display border-b border-line py-4 text-[1.35rem] text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-8 flex gap-3">
              <a
                href={site.phoneHref}
                className="btn btn-ghost flex-1"
              >
                Call
              </a>
              <a
                href={site.smsHref}
                className="btn btn-ghost flex-1"
              >
                Text
              </a>
            </div>
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost mt-4 w-full"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
                @stansautodetailing
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
