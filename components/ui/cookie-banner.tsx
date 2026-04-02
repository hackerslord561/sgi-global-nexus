"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, X } from 'lucide-react';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const consent = localStorage.getItem('sgi_cookie_consent');
        if (!consent) {
            // Small delay so it doesn't aggressively pop up the second the page loads
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        // Set the cookie consent token in local storage
        localStorage.setItem('sgi_cookie_consent', 'accepted');

        // Example of setting an actual secure session cookie
        document.cookie = "sgi_session=active; path=/; secure; samesite=strict; max-age=86400";

        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('sgi_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-[110]"
                >
                    <div className="bg-navy-900 border border-white/10 p-6 rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.6)] backdrop-blur-xl flex flex-col gap-4">

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <ShieldAlert className="w-4 h-4 text-gold" />
                                </div>
                                <h4 className="text-ghost font-bold text-sm uppercase tracking-widest">Security & Privacy</h4>
                            </div>
                            <button
                                onClick={declineCookies}
                                className="text-steel-light hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-steel-light text-xs leading-relaxed font-medium">
                            SG International utilizes encrypted cookies to ensure operational security and optimize your experience across the Trilateral Corridor.
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                            <button
                                onClick={acceptCookies}
                                className="flex-1 bg-gold hover:bg-yellow-500 text-navy-900 text-xs font-bold uppercase tracking-widest py-2.5 rounded-lg transition-colors"
                            >
                                Acknowledge
                            </button>
                            <button
                                onClick={declineCookies}
                                className="flex-1 bg-white/5 hover:bg-white/10 text-ghost text-xs font-bold uppercase tracking-widest py-2.5 rounded-lg border border-white/10 transition-colors"
                            >
                                Decline
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};