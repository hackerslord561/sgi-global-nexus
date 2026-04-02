"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LiveTicker } from "@/components/ui/live-ticker";
import { Navbar } from "@/components/layout/navbar";
import { Radar, LockKeyhole, Satellite, Shield } from "lucide-react";

const NodeNetwork = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    const nodes = Array.from({ length: 12 });

    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/40 z-20 backdrop-blur-md"
            >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                    <Satellite className="w-5 h-5 text-white" />
                </div>
            </motion.div>

            {nodes.map((_, i) => {
                const radius = 100 + (i * 12);
                const duration = 15 + (i * 2);
                const delay = i * 0.5;

                return (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 rounded-full border border-white/10"
                        style={{ width: radius * 2, height: radius * 2, x: "-50%", y: "-50%" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)] -translate-x-1/2 -translate-y-1/2"
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default function SGISentinel() {
    return (
        <div className="min-h-screen flex flex-col bg-ghost text-navy-900 font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
            <LiveTicker />
            <Navbar />

            <main className="flex-grow pt-16 lg:pt-28">

                <section className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <div className="flex flex-col items-start text-left max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-navy-800 uppercase tracking-widest">Active Defense Protocol</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-navy-900 mb-6 leading-[1.05]">
                            SGI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Sentinel</span>
                        </h1>

                        <p className="mt-2 text-lg md:text-xl text-navy-800/80 font-medium leading-relaxed max-w-xl">
                            Military-grade maritime tracking, encrypted logistics communications, and global threat mitigation ensuring the absolute security of the Trilateral Corridor.
                        </p>
                    </div>

                    {/* Node Network Container - Now Deep Navy */}
                    <div className="relative w-full h-[400px] lg:h-[600px] rounded-[2.5rem] bg-navy-900 shadow-2xl overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.15)_0%,transparent_70%)]" />
                        <NodeNetwork />
                    </div>
                </section>

                <section className="relative z-20 max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-20 lg:py-32 border-t border-navy-900/10">

                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight mb-4">
                            Core Security Infrastructure
                        </h2>
                        <p className="text-navy-800/70 text-lg font-medium">
                            Protecting strategic assets across three continents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                                <Radar className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-ghost mb-4">Real-Time Telemetry</h3>
                            <p className="text-steel-light leading-relaxed flex-grow font-medium">
                                Live AIS tracking of all maritime assets. SGI Sentinel ensures continuous oversight of commodity transit from origination in West Africa to liquidity hubs in Asia.
                            </p>
                        </div>

                        <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                                <LockKeyhole className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-ghost mb-4">Encrypted Routing</h3>
                            <p className="text-steel-light leading-relaxed flex-grow font-medium">
                                Financial and logistical data moving between Washington D.C., Accra, and Singapore is secured utilizing quantum-resistant cryptographic protocols.
                            </p>
                        </div>

                        <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-ghost mb-4">Threat Mitigation</h3>
                            <p className="text-steel-light leading-relaxed flex-grow font-medium">
                                Proactive intelligence gathering to anticipate and neutralize physical and digital threats to our sovereign infrastructure.
                            </p>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}