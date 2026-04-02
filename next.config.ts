import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes
                source: '/(.*)',
                headers: [
                    {
                        // Prevents Clickjacking (others cannot embed your site in an iframe)
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        // Forces browsers to only use HTTPS
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        // Stops browsers from trying to guess content types (prevents MIME-sniffing attacks)
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        // Controls how much information the browser sends when navigating away
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        // The ultimate shield: Content Security Policy (CSP)
                        // Explicitly whitelists your fonts, WebGL textures, and internal scripts.
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://api.fontshare.com; font-src 'self' https://api.fontshare.com https://cdn.fontshare.com; img-src 'self' data: https:; connect-src 'self' https://unpkg.com;",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;