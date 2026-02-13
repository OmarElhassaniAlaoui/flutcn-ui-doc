import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://flutcnui.netlify.app"),
  alternates: {
    canonical: "https://flutcnui.netlify.app",
    languages: {
      "en-US": "https://flutcnui.netlify.app",
    },
  },
  title: {
    default: "Flutcn UI - Beautiful Flutter Widgets",
    template: "%s | Flutcn UI",
  },
  description:
    "A Flutter widgets library inspired by shadcn/ui that helps you build beautiful user interfaces with minimal effort.",
  keywords: [
    "Flutter widgets",
    "Flutter UI",
    "Flutter components",
    "shadcn/ui Flutter",
    "Flutter design system",
  ],
  authors: [{ name: "Omar elhassani alaoui" }],
  creator: "Omar elhassani alaoui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flutcnui.netlify.app",
    siteName: "Flutcn UI",
    title: "Flutcn UI - Beautiful Flutter Widgets",
    description:
      "A Flutter widgets library inspired by shadcn/ui that helps you build beautiful user interfaces with minimal effort.",
    images: [
      {
        url: "/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Flutcn UI - Flutter Widgets Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutcn UI - Beautiful Flutter Widgets",
    description:
      "A Flutter widgets library inspired by shadcn/ui that helps you build beautiful user interfaces with minimal effort.",
    images: ["/images/cover.png"],
    creator: "@OmarElhassaniA",
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
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
