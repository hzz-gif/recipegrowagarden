import type { Metadata } from "next";
import Script from "next/script";
// import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "🍕 Latest & Ultimate Grow a Garden Recipes – All in One Place!",
  description: "Discover the latest grow a garden recipes for hot dog, sandwich, sushi, ice cream, pizza, waffle and more. Complete cooking guide with verified ingredients and rewards.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://recipegrowagarden.com/',
  },
  openGraph: {
    title: "Ultimate Grow a Garden Recipes Guide",
    description: "Complete collection of verified Grow a Garden recipes including Prismatic, Divine, and Mythical cooking combinations. Get maximum rewards with our tested ingredients guide.",
    url: 'https://recipegrowagarden.com/',
    siteName: 'Recipe Grow a Garden',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ultimate Grow a Garden Recipes Guide",
    description: "Complete collection of verified Grow a Garden recipes. Master cooking with our comprehensive ingredient guide!",
    site: '@recipegrowagarden',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* <StructuredData /> */}
        <Script
          defer
          data-domain="recipegrowagarden.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
