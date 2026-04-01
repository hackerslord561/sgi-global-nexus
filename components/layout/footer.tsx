"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Pure Clock Component for Hydration Safety
const LiveClock = ({ timeZone, label }: { timeZone: string, label: string }) => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
            setTime(formatter.format(new Date()));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div className="flex flex-col items-center sm:items-start">
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{label}</span>
            <span className="text-ghost font-mono text-sm tracking-widest">{time || '00:00:00'}</span>
        </div>
    );
};

export const Footer = () => {
    return (
        // INTENSIVE FIX: Reverted to bg-navy-900 to anchor the light-themed pages
        <footer className="bg-navy-900 border-t border-white/5 py-16 px-6 lg:px-12 relative z-20">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Brand & Attribution Column */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-2xl font-black text-ghost uppercase tracking-tighter mb-3">
                        SGI GLOBAL <span className="text-steel font-light">NEXUS</span>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-steel-light/60 text-xs font-medium tracking-wide">
                            © {new Date().getFullYear()} SG International. All rights reserved.
                        </p>

                        {/* Hackerslord Studios Signature */}
                        <p className="text-steel-light/40 text-[10px] font-bold uppercase tracking-[0.15em]">
                            Built with ❤️ by{" "}
                            <Link
                                href="https://hackerslord-portfolio.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold hover:text-white transition-all duration-300 underline underline-offset-4 decoration-gold/30 hover:decoration-white"
                            >
                                Hackerslord Studios
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Global Hub Clocks - Integrated Navy Styling */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 bg-white/5 border border-white/10 backdrop-blur-md py-6 px-10 rounded-[2.5rem]">
                    <LiveClock label="Washington D.C." timeZone="America/New_York" />
                    <LiveClock label="Accra" timeZone="Africa/Accra" />
                    <LiveClock label="Singapore" timeZone="Asia/Singapore" />
                </div>

            </div>

            {/* Subtle bottom-edge finish */}
            <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/5 flex justify-center">
                <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                </div>
            </div>
        </footer>
    );
};