import type { Metadata, Viewport } from "next";
import { Golos_Text, Nunito } from "next/font/google";
import { kindergarten } from "@/shared/data/kindergarten";
import { seo } from "@/shared/data/seo";
import { SITE_URL } from "@/shared/lib/site-url";
import { MotionProvider } from "@/shared/ui/MotionProvider";
import "@/styles/globals.css";

// Both families ship Ә Ғ Қ Ң Ө Ұ Ү Һ І in their cyrillic-ext files.
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});
const golos = Golos_Text({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: kindergarten.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    url: "/",
    siteName: kindergarten.fullName,
    title: seo.title,
    description: seo.description,
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: kindergarten.fullName,
  alternateName: ["Тасним", kindergarten.legalName, kindergarten.legalNameRu],
  url: SITE_URL,
  telephone: kindergarten.phone.tel,
  sameAs: [kindergarten.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: kindergarten.address.street,
    addressLocality: kindergarten.address.locality,
    addressRegion: `${kindergarten.address.region}, ${kindergarten.address.district}`,
    addressCountry: "KZ",
  },
  description: seo.description,
  geo: { "@type": "GeoCoordinates", latitude: kindergarten.geo.lat, longitude: kindergarten.geo.lng },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    opens: kindergarten.hours.opens,
    closes: kindergarten.hours.closes,
  },
  availableLanguage: ["kk"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${nunito.variable} ${golos.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
