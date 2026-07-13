import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SD Waffles & Shakes — Where waffles get wild & shakes get thick!",
  description:
    "SD Waffles & Shakes in Miryalaguda, Telangana. Premium Belgian waffle sandwiches, thick chocolate shakes, snacks & mocktails. Dine-in & Takeaway. Open daily 10:30 AM – 10:00 PM.",
  keywords: [
    "SD Waffles and Shakes",
    "waffles Miryalaguda",
    "thick shakes Telangana",
    "waffle sandwich",
    "dessert Miryalaguda",
    "brownie jar",
    "mocktails",
  ],
  authors: [{ name: "SD Waffles & Shakes" }],
  openGraph: {
    title: "SD Waffles & Shakes — Where waffles get wild & shakes get thick!",
    description:
      "Premium Belgian waffle sandwiches, thick shakes & mocktails in Miryalaguda. Open daily 10:30 AM – 10:00 PM.",
    siteName: "SD Waffles & Shakes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Waffles & Shakes",
    description: "Where waffles get wild & shakes get thick! Miryalaguda, Telangana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${plusJakarta.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
