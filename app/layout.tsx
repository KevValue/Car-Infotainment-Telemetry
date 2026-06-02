import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/shared/navigation/NavBar";
import { NavSpacer } from "@/components/shared/navigation/NavSpacer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Infotainment Telemetry",
  description: "By kevvalue@github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const coreLinks = [
    { label: "Telemetry", href: "/", order: 1, position: "left" },
    { label: "Explore", href: "/explore", order: 2, position: "middle" },
    { label: "Docs", href: "/docs", order: 3, position: "middle" },
    { label: "Navigation", href: "/navigation", order: 4, position: "middle" },
    { label: "Profile", href: "/profile", order: 5, position: "right" },
  ]

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="h-[200px] flex items-center justify-center">
          KV Telemetry
        </div>
        <NavSpacer>
          <div className="fixed top-0 w-full h-[200px]"></div>
          <NavBar links={coreLinks} />

        </NavSpacer>
        {children}
      </body>
    </html>
  );
}
