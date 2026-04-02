import type { Metadata } from "next";
import "./globals.css";

// Import your global architecture components
import { LiveTicker } from "@/components/ui/live-ticker";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/ui/cookie-banner";

export const metadata: Metadata = {
    title: {
        default: "SG International | Global Nexus",
        template: "%s | SG International",
    },
    description: "The official digital nerve center for SG International. Bridging the trilateral corridor between Washington D.C., Accra, and Singapore with sovereign-grade reliability.",
    keywords: ["SG International", "Global Nexus", "Trilateral Corridor", "Commodity Trading", "Defense Logistics", "Sovereign Infrastructure"],
    authors: [{ name: "Hackerslord Studios", url: "https://hackerslord-portfolio.vercel.app" }],
    creator: "Hackerslord Studios",

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sgi-global-nexus.vercel.app",
        siteName: "SG Global Nexus",
        title: "SG International | Global Presence. Sovereign Reliability.",
        description: "Institutional-grade infrastructure bridging Washington D.C., Accra, and Singapore.",
    },

    twitter: {
        card: "summary_large_image",
        title: "SG International | Global Nexus",
        description: "Sovereign-grade infrastructure and commodity trading cortex.",
    },

    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
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
                href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
                rel="stylesheet"
            />
        </head>
        {/* INTENSIVE FIX:
        Added flex column layout to the body to ensure the footer always pushes to the bottom,
        even if the page content (like the Energy Desk) is short.
      */}
        <body className="bg-ghost text-navy-900 font-sans antialiased selection:bg-gold/20 selection:text-navy-900 transition-colors duration-300 flex flex-col min-h-screen">

        {/* Top-level Global UI */}
        <LiveTicker />
        <Navbar />

        {/* Page Content Wrapper */}
        <main className="flex-grow w-full relative z-10">
            {children}
        </main>

        {/* Bottom-level Global UI */}
        <Footer />
        <CookieBanner />

        </body>
        </html>
    );
}