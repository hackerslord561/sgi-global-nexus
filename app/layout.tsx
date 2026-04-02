import type { Metadata } from "next";
import { CookieBanner } from "@/components/ui/cookie-banner";
import "./globals.css";

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
        <body className="bg-ghost text-navy-900 font-sans antialiased selection:bg-gold/20 selection:text-navy-900 transition-colors duration-300">
        {children}
        {/* Injected the Global Cookie Protocol */}
        <CookieBanner />
        </body>
        </html>
    );
}