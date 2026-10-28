import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { school } from "@/data/school";

export const metadata: Metadata = {
  title: {
    default: school.name + " | Learn, Lead, Grow",
    template: "%s | " + school.name,
  },
  description: school.description,
  applicationName: school.name,
  openGraph: {
    type: "website",
    siteName: school.name,
    title: school.name + " | Learn, Lead, Grow",
    description: school.description,
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102b46",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
