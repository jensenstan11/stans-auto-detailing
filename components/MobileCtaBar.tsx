import Link from "next/link";
import { site } from "@/lib/site";

// Sticky call/text/book bar — mobile only, sits above the safe area.
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-deep/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2 px-4 py-3">
        <a
          href={site.phoneHref}
          className="rounded-full border border-line py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink"
        >
          Call
        </a>
        <a
          href={site.smsHref}
          className="rounded-full border border-line py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink"
        >
          Text
        </a>
        <Link
          href="/book"
          className="rounded-full bg-accent py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#05131f]"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
