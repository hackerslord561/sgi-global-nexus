import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SG International | Global Nexus",
    description: "Trilateral Corridor: Washington D.C. - Accra - Singapore",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Removed the 'dark' class
        <html lang="en">
        <head>
            <link
                href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
                rel="stylesheet"
            />
        </head>
        {/* Flipped background to ghost and text to navy-900 */}
        <body className="bg-ghost text-navy-900 font-sans antialiased selection:bg-gold/20 selection:text-navy-900 transition-colors duration-300">
        {children}
        </body>
        </html>
    );
}