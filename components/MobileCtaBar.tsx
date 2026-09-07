import Link from "next/link";
import { site } from "@/lib/site";

// Sticky call/text/book bar — mobile only, sits above the safe area.
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-deep/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2 px-4 py-3">
        <a
          href={site.phoneHref}
          className="btn btn-ghost btn-sm"
        >
          Call
        </a>
        <a
          href={site.smsHref}
          className="btn btn-ghost btn-sm"
        >
          Text
        </a>
        <Link
          href="/book"
          className="btn btn-primary btn-sm"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
