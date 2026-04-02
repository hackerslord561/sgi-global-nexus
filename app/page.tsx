"use client";

import React from 'react';
import dynamic from "next/dynamic";
import { LiveTicker } from "@/components/ui/live-ticker";
import { Navbar } from "@/components/layout/navbar";
import { Globe2, Anchor, ShieldCheck } from "lucide-react";

const TrilateralGlobe = dynamic(() => import("@/components/three/trilateral-globe"), {
  ssr: false,
  loading: () => (
      <div className="w-full h-[500px] lg:h-[650px] flex items-center justify-center bg-navy-900 rounded-3xl border border-white/5 animate-pulse">
        <span className="text-steel-light font-bold uppercase tracking-widest text-xs">Initializing Secure Link...</span>
      </div>
  ),
});

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col bg-ghost text-navy-900 font-sans selection:bg-gold selection:text-navy overflow-hidden">
        <LiveTicker />
        <Navbar />

        <main className="flex-grow flex flex-col relative w-full pt-16 lg:pt-28">

          {/* Subtle Masked Video Background - Re-engineered for Light Mode */}
          <div className="absolute top-0 left-0 w-full h-[80vh] z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-ghost/20 via-ghost/70 to-ghost z-10" />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-50 mix-blend-multiply"
            >
              <source src="/assets/maritime-bg.mp4" type="video/mp4" />
            </video>
          </div>

          {/* --- HERO SECTION --- */}
          <section className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            <div className="flex flex-col items-start text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 backdrop-blur-md mb-8">
                <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-xs font-bold text-navy-800 uppercase tracking-widest">Washington D.C. • Accra • Singapore</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-navy-900 mb-6 leading-[1.05]">
                Global Presence.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-steel">
                Sovereign Reliability.
              </span>
              </h1>

              <p className="mt-2 text-lg md:text-xl text-navy-800/80 font-medium leading-relaxed max-w-xl">
                SG International integrates the strategic foresight of Washington D.C., the high-growth energy markets of West Africa, and the premier commodity liquidity of Singapore.
              </p>
            </div>

            {/* Interactive Globe Container - Now Dark Navy */}
            <div className="relative w-full h-[500px] lg:h-[700px] rounded-[2.5rem] bg-navy-900 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-[-10%]">
                <TrilateralGlobe />
              </div>
            </div>
          </section>

          {/* --- THREE PILLARS --- */}
          <section className="relative z-20 max-w-[1600px] mx-auto w-full px-6 lg:px-12 py-20 lg:py-32">

            <div className="flex flex-col mb-16 gap-6">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight mb-4">
                  The Pillars of our<br />Global Infrastructure
                </h2>
                <p className="text-navy-800/70 text-lg font-medium">
                  A unified bridge for energy, agri-business, and defense logistics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

              {/* Dark Navy Cards */}
              <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                  <Globe2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-ghost mb-4">24/7 Trading</h3>
                <p className="text-steel-light leading-relaxed flex-grow font-medium">
                  Real-time execution across Singapore, Geneva, and Houston. We provide unmatched liquidity for soft and hard commodities.
                </p>
              </div>

              <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                  <Anchor className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-ghost mb-4">Strategic Assets</h3>
                <p className="text-steel-light leading-relaxed flex-grow font-medium">
                  Owned physical infrastructure in the Gulf of Guinea and Southeast Asia, bridging origination directly with global buyers.
                </p>
              </div>

              <div className="bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-ghost mb-4">Defense Grade</h3>
                <p className="text-steel-light leading-relaxed flex-grow font-medium">
                  A trusted, sovereign-grade partner for US and Allied sustainment operations, managed directly from our Washington D.C. headquarters.
                </p>
              </div>

            </div>
          </section>

        </main>
      </div>
  );
}