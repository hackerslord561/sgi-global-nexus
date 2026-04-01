import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "SGI International | Global Nexus",
        template: "%s | SGI International",
    },
    description: "The official digital nerve center for SG International. Bridging the trilateral corridor between Washington D.C., Accra, and Singapore with sovereign-grade reliability.",
    keywords: ["SGI International", "Global Nexus", "Trilateral Corridor", "Commodity Trading", "Defense Logistics", "Sovereign Infrastructure"],
    authors: [{ name: "Hackerslord Studios", url: "https://hackerslord-portfolio.vercel.app" }],
    creator: "Hackerslord Studios",

    // Google Search & SEO
    robots: {
        index: true,
        follow: true,
    },

    // OpenGraph (Next.js will automatically find your opengraph-image.png in the app folder)
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sgi-global-nexus.vercel.app",
        siteName: "SGI Global Nexus",
        title: "SGI International | Global Presence. Sovereign Reliability.",
        description: "Institutional-grade infrastructure bridging Washington D.C., Accra, and Singapore.",
    },

    // Twitter (Next.js will automatically find your twitter-image.png in the app folder)
    twitter: {
        card: "summary_large_image",
        title: "SGI International | Global Nexus",
        description: "Sovereign-grade infrastructure and commodity trading cortex.",
    },

    // Favicon mapping
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
        </body>
        </html>
    );
}