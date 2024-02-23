import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SiX, SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";

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
      <body className={inter.className}>
        <div id="app">
          <header className="container bg-primary text-primary-foreground rounded-b-3xl">
            <div className="py-6">
              <p className="font-semibold text-xl">
                <Link href="/">Slip n Slide Stairs</Link>
              </p>
            </div>
          </header>
          <main className="min-h-svh">{children}</main>
          <footer className="container bg-primary text-primary-foreground rounded-t-3xl">
            <div className="pt-8 pb-3">
              <p className="font-semibold text-3xl">Slip n Slide Stairs</p>
            </div>
            <nav className="py-3">
              <ul className="flex flex-wrap gap-3">
                <li>About Us</li>
                <li>Get a Quote</li>
                <li>Shop Now</li>
              </ul>
              <ul className="flex flex-wrap gap-3">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact us</li>
              </ul>
            </nav>
            <nav className="py-3 flex flex-wrap gap-1">
              <p className="sr-only">Social Media Links</p>
              <Link
                href="#https://x.com"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <SiX size={24} />
              </Link>
              <Link
                href="#https://instagram.com"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <SiInstagram size={24} />
              </Link>
              <Link
                href="#https://facebook.com"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <SiFacebook size={24} />
              </Link>
            </nav>
            <p className="text-muted-foreground py-2">
              &copy; 2024 Slip n Slide Stairs. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
