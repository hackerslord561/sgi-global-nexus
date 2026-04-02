"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Corridor', href: '/trilateral-corridor' },
    { name: 'Sentinel', href: '/sgi-sentinel' },
    { name: 'Capital', href: '/capital' },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-10 left-0 w-full z-[90] bg-ghost/90 backdrop-blur-xl border-b border-navy-900/10 transition-all duration-300">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

                {/* Logo Image + Corrected SG International Typography */}
                <Link
                    href="/"
                    className="flex items-center gap-2 md:gap-3 group z-50 relative"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {/* Added shrink-0 so the logo image never gets squished on tiny screens */}
                    <div className="relative h-7 w-7 md:h-9 md:w-9 transition-transform duration-300 group-hover:scale-105 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="SG International Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Scaled text sizes for mobile */}
                    <div className="text-[18px] md:text-[22px] font-black text-navy-900 uppercase tracking-tighter leading-none whitespace-nowrap">
                        SG <span className="text-steel font-medium">International</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-1 p-1 bg-navy-900/5 border border-navy-900/10 rounded-full backdrop-blur-sm">
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

                {/* Empty div for layout balance on Desktop */}
                <div className="hidden md:block w-12 h-9" />

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-navy-900/5 text-navy-900 hover:bg-navy-900/10 transition-colors z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-ghost border-b border-navy-900/10 shadow-xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${
                    isMobileMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                }`}
            >
                <div className="flex flex-col px-4 gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-xl text-sm uppercase tracking-widest font-bold transition-colors ${
                                    isActive
                                        ? 'bg-navy-900 text-ghost shadow-md'
                                        : 'text-navy-800 hover:bg-navy-900/5'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};