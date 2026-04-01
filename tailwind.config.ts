import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Ensures dark mode is always preferred by class
    theme: {
        extend: {
            // 1. Defining "General Sans" as the default font family
            fontFamily: {
                sans: ['"General Sans"', 'sans-serif'],
            },
            // 2. Setting SGI's executive colors
            colors: {
                navy: {
                    DEFAULT: '#001a38', // SGI Dark Navy
                    800: '#001a38',
                    900: '#00152e',     // Even deeper background
                },
                gold: {
                    DEFAULT: '#D4AF37', // Meridian Gold
                    hover: '#C0A030',
                },
                steel: {
                    DEFAULT: '#8a9aab', // Meridian Silver/Steel
                    light: '#b0bcc8',
                },
                ghost: '#F8F8FF',     // Institutional Off-White text
            },
        },
    },
    plugins: [],
};
export default config;