import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title:
    "Elevate Your Home with Slip n Slide Stairs - Transforming Everyday Stairs into Thrilling Adventures",
  description:
    "Discover the ultimate staircase transformation with Slip n Slide Stairs. Our patented technology combines safety and excitement, offering a unique experience for both kids and adults. Explore customizable designs, enjoy thrilling descents, and turn climbing stairs into a fun workout. Get a personalized quote for installation and bring the joy of Slip n Slide Stairs to your home today!",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "en_US",
    url: "https://sss.feli.page",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
