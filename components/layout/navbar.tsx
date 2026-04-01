"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
    { name: 'Corridor', href: '/trilateral-corridor' },
    { name: 'Sentinel', href: '/sgi-sentinel' },
    { name: 'Capital', href: '/capital' },
];

export const Navbar = () => {
    const pathname = usePathname();

    return (
        // INTENSIVE FIX: z-[90] to stay above 3D labels but below the ticker
        <nav className="fixed top-10 left-0 w-full z-[90] bg-ghost/90 backdrop-blur-xl border-b border-navy-900/10 transition-all duration-300">
            <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-9 w-9 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="SGI Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="text-[22px] font-black text-navy-900 uppercase tracking-tighter leading-none">
                        SGI <span className="text-steel font-medium">International</span>
                    </div>
                </Link>

                <div className="flex items-center gap-1 p-1 bg-navy-900/5 border border-navy-900/10 rounded-full backdrop-blur-sm">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest font-bold transition-colors ${
                                    isActive
                                        ? 'bg-navy-900 text-ghost shadow'
                                        : 'text-navy-800/60 hover:text-navy-900 hover:bg-navy-900/5'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="w-12 h-9" />
            </div>
        </nav>
    );
};