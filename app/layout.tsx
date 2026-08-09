import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default:
      "Stan's Auto Detailing | Mobile Car Detailing in Raleigh–Durham, NC",
    template: "%s | Stan's Auto Detailing",
  },
  description:
    "Professional mobile auto detailing serving Raleigh, Durham, Cary, Apex and the Triangle. Full details, interior deep cleans, ceramic coating & paint correction — we come to you.",
  openGraph: {
    siteName: "Stan's Auto Detailing",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
