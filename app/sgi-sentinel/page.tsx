"use client";

import React from 'react';
// INTENSIVE FIX: Explicitly importing 'Variants' to satisfy strict TypeScript definitions
import { motion, Variants } from 'framer-motion';
import {
    ShieldCheck,
    MapPin,
    Globe2,
    Zap,
    Sprout,
    Building2,
    Anchor
} from 'lucide-react';

export default function SentinelPage() {
    // INTENSIVE FIX: Applying the Variants type lock
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-ghost pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">

            {/* Background Architectural Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                 style={{ backgroundImage: 'linear-gradient(#001A38 1px, transparent 1px), linear-gradient(90deg, #001A38 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* HERO & ABOUT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-20 md:mb-32 max-w-5xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="text-navy-900 font-bold uppercase tracking-widest text-sm">Corporate Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-navy-900 uppercase tracking-tighter leading-none mb-8">
                        SGI <span className="text-steel">Sentinel</span>
                    </h1>

                    <div className="w-24 h-1 bg-gold mb-8" />

                    <p className="text-navy-800 text-xl md:text-2xl font-medium leading-relaxed mb-6">
                        <strong className="text-navy-900 font-black">SG International (SGI)</strong> is a premier Global Hybrid Merchant House operating at the critical intersection of national security, industrial infrastructure, and commodity markets. Headquartered in Washington D.C., with strategic operational hubs in Accra and Singapore, SGI bridges the gap between sovereign priorities and private sector execution.
                    </p>
                    {/* INTENSIVE FIX: Replaced raw quotes with &quot; */}
                    <p className="text-navy-800/80 text-lg md:text-xl font-medium leading-relaxed">
                        SGI functions as a &quot;Hard-Asset&quot; powerhouse, utilizing a trilateral operational model to align international capital with the high-growth resource markets of the Global South.
                    </p>
                </motion.div>

                {/* THE TRILATERAL NEXUS */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-navy-900 uppercase tracking-tighter mb-4">The SGI Trilateral Nexus</h2>
                        <p className="text-navy-800/70 text-lg font-medium max-w-3xl">
                            We eliminate geographic and regulatory friction through a 24/7 operational cycle spanning three continents:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Washington D.C. */}
                        <motion.div variants={itemVariants} className="bg-white border border-navy-900/10 p-8 md:p-10 rounded-[2rem] shadow-lg hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-navy-900/5 text-navy-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy-900 group-hover:text-gold transition-colors">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-sm font-bold text-steel uppercase tracking-widest mb-2">Policy & Standards</h3>
                            <h4 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-4">Washington D.C.</h4>
                            <p className="text-navy-800/70 font-medium leading-relaxed">
                                Managing sovereign diplomacy and ensuring the highest levels of U.S. Federal regulatory compliance and transparency.
                            </p>
                        </motion.div>

                        {/* Accra */}
                        <motion.div variants={itemVariants} className="bg-white border border-navy-900/10 p-8 md:p-10 rounded-[2rem] shadow-lg hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-navy-900/5 text-navy-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy-900 group-hover:text-gold transition-colors">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <h3 className="text-sm font-bold text-steel uppercase tracking-widest mb-2">Origination & Infrastructure</h3>
                            <h4 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-4">Accra</h4>
                            <p className="text-navy-800/70 font-medium leading-relaxed">
                                Serving as a primary commercial gateway to the African Continental Free Trade Area (AfCFTA) ecosystem through physical asset management and regional logistics.
                            </p>
                        </motion.div>

                        {/* Singapore */}
                        <motion.div variants={itemVariants} className="bg-white border border-navy-900/10 p-8 md:p-10 rounded-[2rem] shadow-lg hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-navy-900/5 text-navy-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy-900 group-hover:text-gold transition-colors">
                                <Globe2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-sm font-bold text-steel uppercase tracking-widest mb-2">Market Execution</h3>
                            <h4 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-4">Singapore</h4>
                            <p className="text-navy-800/70 font-medium leading-relaxed">
                                Providing real-time price discovery, sophisticated hedging, and financial liquidity for global trade.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* CORE CAPABILITIES (Infographic Tiles) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-navy-900 uppercase tracking-tighter">Core Capabilities</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Energy Tile */}
                        <motion.div variants={itemVariants} className="bg-navy-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-6 -top-6 text-white/5 group-hover:text-white/10 transition-colors">
                                <Zap className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gold text-navy-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <Anchor className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-ghost uppercase tracking-tighter mb-4 leading-tight">Energy & Defense Logistics</h3>
                                {/* INTENSIVE FIX: Replaced raw quotes with &quot; */}
                                <p className="text-steel-light/80 font-medium leading-relaxed">
                                    SGI is a specialized provider of refined petroleum products, including EN590 (ULSD), JP-8, Jet A-1, and Naval Distillate (F-76). We apply defense-grade logistics to ensure a secure &quot;Chain of Custody&quot; for energy assets, supported by our proprietary SGI Sentinel transparency protocol.
                                </p>
                            </div>
                        </motion.div>

                        {/* Agri-Business Tile */}
                        <motion.div variants={itemVariants} className="bg-navy-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-6 -top-6 text-white/5 group-hover:text-white/10 transition-colors">
                                <Sprout className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gold text-navy-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <Sprout className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-ghost uppercase tracking-tighter mb-4 leading-tight">Agri-Business & Food Security</h3>
                                <p className="text-steel-light/80 font-medium leading-relaxed">
                                    We lead strategic growth initiatives in the global trade of energy and agricultural products. By bridging national ambition with international capital, SGI facilitates large-scale sovereign frameworks—such as our 10-year agricultural export agreement with Ukraine—to ensure regional and global food security.
                                </p>
                            </div>
                        </motion.div>

                        {/* Infrastructure Tile */}
                        <motion.div variants={itemVariants} className="bg-navy-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-6 -top-6 text-white/5 group-hover:text-white/10 transition-colors">
                                <Building2 className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gold text-navy-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-ghost uppercase tracking-tighter mb-4 leading-tight">Infrastructure & SGI Capital</h3>
                                {/* INTENSIVE FIX: Replaced raw quotes with &quot; and apostrophe with &apos; */}
                                <p className="text-steel-light/80 font-medium leading-relaxed">
                                    Through Public-Private Partnerships (PPP), we invest in the &quot;hard assets&quot; of trade: modular refineries, industrial-scale grain silos, and bonded warehouses. These projects are designed to strengthen Africa&apos;s competitive positioning as a predictable and opportunity-rich investment destination.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

                {/* CLOSING BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="mt-24 pt-12 border-t border-navy-900/10 text-center"
                >
                    <h3 className="text-xl md:text-3xl font-black text-navy-900 uppercase tracking-tighter leading-tight flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                        <span>Bridging Standards.</span>
                        <span className="hidden md:block w-2 h-2 rounded-full bg-gold"></span>
                        <span>Powering AfCFTA.</span>
                        <span className="hidden md:block w-2 h-2 rounded-full bg-gold"></span>
                        <span className="text-steel">Delivering Sovereignty.</span>
                    </h3>
                </motion.div>

            </div>
        </div>
    );
}