import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jabez Livingstone | VP Recruitments & Tech Operations",
  description: "Professional portfolio of Jabez Livingstone - Vice President Recruitments & Tech Operations at APT IT Professional Services. Building Future-Ready Teams & Solutions with 15+ years of experience in technology operations and global recruitment.",
  keywords: "Jabez Livingstone, recruitment, technology operations, APT IT Professional Services, BNI, talent acquisition, software development, business development",
  authors: [{ name: "Jabez Livingstone" }],
  creator: "Jabez Livingstone",
  openGraph: {
    title: "Jabez Livingstone | VP Recruitments & Tech Operations",
    description: "Building Future-Ready Teams & Solutions | 15+ years experience in technology operations and global recruitment",
    url: "https://jabez-livingstone-portfolio.vercel.app",
    siteName: "Jabez Livingstone Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jabez Livingstone - Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabez Livingstone | VP Recruitments & Tech Operations",
    description: "Building Future-Ready Teams & Solutions",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
