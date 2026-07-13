import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sdwaffles.vercel.app";
const SITE_NAME = "SD Waffles & Shakes";
const SITE_DESCRIPTION =
  "SD Waffles & Shakes in Miryalaguda, Telangana — premium Belgian waffle sandwiches, thick chocolate shakes, brownies, mocktails & more. Dine-in & Takeaway. Open daily 10:30 AM – 10:00 PM. Order on WhatsApp.";

export const viewport: Viewport = {
  themeColor: "#2A1609",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SD Waffles & Shakes — Where waffles get wild & shakes get thick!",
    template: "%s | SD Waffles & Shakes",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "SD Waffles and Shakes",
    "SD Waffles Miryalaguda",
    "waffles Miryalaguda",
    "waffle sandwich",
    "thick shakes Telangana",
    "chocolate shake",
    "Nutella waffle",
    "brownie jar",
    "sizzling brownie",
    "mocktails Miryalaguda",
    "dessert shop Miryalaguda",
    "Nalgonda desserts",
    "waffles near me",
    "milkshake Miryalaguda",
    "best dessert Telangana",
  ],
  authors: [{ name: "SD Waffles & Shakes", url: SITE_URL }],
  creator: "SD Waffles & Shakes",
  publisher: "SD Waffles & Shakes",
  category: "Food & Beverage",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SD Waffles & Shakes — Where waffles get wild & shakes get thick!",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero-chocolate.png",
        width: 1344,
        height: 768,
        alt: "SD Waffles & Shakes — melting chocolate waffle dessert hero",
      },
      {
        url: "/images/logo-sd.png",
        width: 1024,
        height: 1024,
        alt: "SD Waffles & Shakes logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Waffles & Shakes",
    description:
      "Where waffles get wild & shakes get thick! Premium waffles, thick shakes & desserts in Miryalaguda.",
    images: ["/images/hero-chocolate.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "SD Waffles & Shakes",
  description: SITE_DESCRIPTION,
  slogan: "Where waffles get wild & shakes get thick!",
  url: SITE_URL,
  image: `${SITE_URL}/images/logo-sd.png`,
  logo: `${SITE_URL}/images/logo-sd.png`,
  telephone: ["+917093258864", "+919989455263"],
  priceRange: "₹₹",
  servesCuisine: ["Desserts", "Waffles", "Shakes", "Fast Food", "Mocktails"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "Below Venky's Salon, Behind Bagara Hotel, Sagar Road",
      addressLocality: "Miryalaguda",
      addressRegion: "Telangana",
      addressCountry: "IN",
      postalCode: "508207",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "Near Abhyas High School, Hotel Vaishnavi Road, Doctors Colony",
      addressLocality: "Miryalaguda",
      addressRegion: "Telangana",
      addressCountry: "IN",
      postalCode: "508207",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "16.8628",
    longitude: "79.5829",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:30",
      closes: "22:00",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "SD Waffles & Shakes Full Menu",
    hasMenuSection: [
      "Waffle Sandwiches",
      "Premium Thick Shakes",
      "Choco Thick Shakes",
      "Fruit Shakes",
      "Mocktails",
      "Waffle Sundae",
      "Brownies & Sizzlers",
      "Ice Creams",
      "Snacks",
      "Burgers",
      "Momos",
      "Mini Pan Cakes",
      "Hot Beverages",
    ],
  },
  sameAs: ["https://www.instagram.com/sd_wafflesandshakes/"],
  acceptsReservations: "False",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${plusJakarta.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
