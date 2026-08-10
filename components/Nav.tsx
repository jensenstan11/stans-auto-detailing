"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-nav fixed inset-x-0 top-0 z-50 ${
        open || scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Stan's Auto Detailing — home" className="shrink-0">
          <Image
            src="/brand/logo-small-white.png"
            alt="Stan's Auto Detailing"
            width={132}
            height={102}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.82rem] font-medium uppercase tracking-[0.14em] transition-colors hover:text-ink ${
                pathname.startsWith(l.href) ? "text-ink" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-[0.82rem] font-medium tracking-wide text-muted transition-colors hover:text-ink lg:block"
          >
            {site.phone}
          </a>
          <Link
            href="/book"
            className="rounded-full bg-accent px-5 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#05131f] transition hover:brightness-110"
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
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-deep/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-2 px-8 pt-10" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display border-b border-line py-4 text-3xl text-ink"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-8 flex gap-3">
              <a
                href={site.phoneHref}
                className="flex-1 rounded-full border border-line py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em]"
              >
                Call
              </a>
              <a
                href={site.smsHref}
                className="flex-1 rounded-full border border-line py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em]"
              >
                Text
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
