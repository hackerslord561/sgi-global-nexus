"use client";

import React from 'react';
import dynamic from "next/dynamic";
import { LiveTicker } from "@/components/ui/live-ticker";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MapPin, Shield, Activity } from "lucide-react";

const TrilateralGlobe = dynamic(() => import("@/components/three/trilateral-globe"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] lg:h-[700px] flex items-center justify-center bg-navy-900 rounded-[2.5rem] animate-pulse">
            <span className="text-steel-light font-bold uppercase tracking-widest text-xs">Initializing WebGL Cortex...</span>
        </div>
    ),
});

export default function TrilateralCorridor() {
    return (
        <div className="min-h-screen flex flex-col bg-ghost text-navy-900 font-sans selection:bg-gold selection:text-navy overflow-hidden">
            <LiveTicker />
            <Navbar />

            <main className="flex-grow pt-28">

                <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-navy-800 uppercase tracking-widest">Global Telemetry Online</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-navy-900 mb-6 leading-[1.05]">
                            The Trilateral <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-steel">Corridor</span>
                        </h1>
                        <p className="text-lg text-navy-800/80 font-medium leading-relaxed max-w-2xl">
                            An interactive visualization of our 24/7 global operational link bridging Washington D.C., Accra, and Singapore.
                        </p>
                    </div>
                </section>

                <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-20">
                    <div className="w-full h-[500px] lg:h-[700px] rounded-[2.5rem] bg-navy-900 shadow-2xl overflow-hidden relative block">
                        <TrilateralGlobe />
                    </div>
                </section>

                <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 lg:py-24 border-t border-navy-900/10">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight mb-4">
                            Tri-Hub Operational Strategy
                        </h2>
                        <p className="text-navy-800/70 text-lg font-medium">Synchronized capabilities across three time zones.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                                <Shield className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold text-ghost mb-2">Washington D.C.</h3>
                            <p className="text-gold text-sm font-bold mb-6 tracking-widest uppercase">Global HQ</p>
                            <div className="flex-grow">
                                <p className="text-steel-light leading-relaxed font-medium mb-4">
                                    <span className="text-ghost block mb-1">Defense Policy & Treasury</span>
                                    Direct engagement with the Pentagon and capital markets. Leads SGI Capital allocation.
                                </p>
                            </div>
                        </div>

                        <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                                <Activity className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold text-ghost mb-2">Singapore</h3>
                            <p className="text-gold text-sm font-bold mb-6 tracking-widest uppercase">Trading & Asia Hub</p>
                            <div className="flex-grow">
                                <p className="text-steel-light leading-relaxed font-medium mb-4">
                                    <span className="text-ghost block mb-1">Commodity Pricing & Liquidity</span>
                                    The epicenter for Sugar and Grain pricing. Manages Asian maritime logistics and arbitrage.
                                </p>
                            </div>
                        </div>

                        <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                                <MapPin className="w-6 h-6 text-gold" />
                            </div>
                            <h3 className="text-2xl font-bold text-ghost mb-2">Accra, Ghana</h3>
                            <p className="text-gold text-sm font-bold mb-6 tracking-widest uppercase">Regional HQ</p>
                            <div className="flex-grow">
                                <p className="text-steel-light leading-relaxed font-medium mb-4">
                                    <span className="text-ghost block mb-1">Origination & Infrastructure</span>
                                    The gateway to the AfCFTA. Manages physical grain silos, fuel farms, and local origination.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}