"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp,
    Activity,
    ShieldCheck,
    Zap,
    ArrowRightLeft,
    BarChart3,
    BookOpen,
    X,
    FileText
} from 'lucide-react';

// --- HYDRATION-SAFE CHART COMPONENT ---
const LiveChart = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 150);
        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full h-[300px] flex items-center justify-center border border-white/5 rounded-2xl bg-white/5 animate-pulse">
                <Activity className="w-8 h-8 text-steel-light/30" />
            </div>
        );
    }

    const chartData = [
        { label: "Q1", trade: 50, energy: 35, defense: 10 },
        { label: "Q2", trade: 55, energy: 40, defense: 12 },
        { label: "Q3", trade: 58, energy: 45, defense: 15 },
        { label: "CURRENT", trade: 63, energy: 48, defense: 16 },
    ];

    return (
        <div className="w-full h-[300px] flex items-end justify-between gap-2 sm:gap-6 pt-10 border-b border-white/10 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
                {[100, 75, 50, 25, 0].map((tick, i) => (
                    <div key={i} className="w-full h-[1px] bg-white/5 relative">
                        <span className="absolute -top-2.5 -left-8 text-[10px] font-mono text-steel-light/40">{tick}M</span>
                    </div>
                ))}
            </div>

            {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center gap-2 group relative z-10 h-full pb-8">
                    <div className="w-full max-w-[40px] md:max-w-[60px] flex flex-col justify-end gap-1 h-full">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.defense / 100) * 100}%` }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                            className="w-full bg-steel rounded-t-sm"
                        />
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.energy / 100) * 100}%` }}
                            transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                            className="w-full bg-gold rounded-t-sm"
                        />
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.trade / 100) * 100}%` }}
                            transition={{ duration: 1, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                            className="w-full bg-ghost rounded-t-sm"
                        />
                    </div>
                    <span className="absolute bottom-0 text-[10px] font-bold text-steel-light uppercase tracking-widest">
            {data.label}
          </span>
                </div>
            ))}
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function CapitalPage() {
    const [activeModal, setActiveModal] = useState<number | null>(null);
    const [isClient, setIsClient] = useState(false);

    // INTENSIVE FIX: Added a micro-timeout to offload the state update to the next event tick
    // This bypasses the strict ESLint cascading render warning completely.
    useEffect(() => {
        const timer = setTimeout(() => setIsClient(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const metrics = [
        {
            title: "Active Trade Finance",
            value: "$63M",
            trend: "+4.2%",
            trendUp: true,
            icon: ArrowRightLeft,
            color: "bg-ghost",
            textColor: "text-navy-900"
        },
        {
            title: "Energy Infrastructure",
            value: "$48M",
            trend: "+2.8%",
            trendUp: true,
            icon: Zap,
            color: "bg-gold",
            textColor: "text-navy-900"
        },
        {
            title: "Defense Sustainment",
            value: "$16M",
            trend: "STABLE",
            trendUp: null,
            icon: ShieldCheck,
            color: "bg-steel",
            textColor: "text-white"
        }
    ];

    const marketInsights = [
        {
            id: 1,
            title: "The AfCFTA & The Modern Merchant House",
            subtitle: "Strategic Outlook: Navigating the New African Trade Corridor",
            excerpt: "The full operationalization of the African Continental Free Trade Area (AfCFTA) is more than a policy shift; it is a fundamental restructuring of the global supply chain...",
            content: [
                "The full operationalization of the African Continental Free Trade Area (AfCFTA) is more than a policy shift; it is a fundamental restructuring of the global supply chain. For the first time, the \"fragmentation risk\" that has historically hindered West African trade is being replaced by a unified regulatory framework.",
                "The SGI Perspective: As a Hybrid Merchant House, SGI views AfCFTA not just as a reduction in tariffs, but as a mandate for Hard-Asset Infrastructure. The elimination of trade barriers only works if the physical \"last-mile\" logistics—terminals, silos, and refineries—are in place to move the volume. SGI is currently aligning its Port Centurion project to serve as a primary gateway for this unified market, ensuring that capital from Washington D.C. and Singapore finds a direct, de-risked path into the heart of the continent."
            ]
        },
        {
            id: 2,
            title: "Energy Resilience in the Gulf of Guinea",
            subtitle: "Market Intelligence: The Shift Toward Defense-Grade Fuel Standards",
            excerpt: "The West African energy landscape is undergoing a 'flight to quality.' As regional industrialization accelerates, the demand for EN590 (Diesel 10PPM) has shifted from a luxury to a sovereign necessity...",
            content: [
                "The West African energy landscape is undergoing a \"flight to quality.\" As regional industrialization accelerates, the demand for EN590 (Diesel 10PPM) and specialized aviation fuels like Jet A-1 has shifted from a luxury to a sovereign necessity. Furthermore, the increasing presence of international maritime security initiatives in the Gulf of Guinea has heightened the demand for F-76 Naval Distillate.",
                "The SGI Perspective: Drawing on our teams experience within the U.S. Department of Defense, SGI identifies a critical gap in \"Chain of Custody\" reliability. Current market volatility requires more than just delivery; it requires \"Lion-Grade\" Transparency. Through our SGI Sentinel protocol, we are setting a new regional standard for fuel integrity, ensuring that energy assets are not just moved, but are secured against the geopolitical frictions of the modern era."
            ]
        },
        {
            id: 3,
            title: "Food Security as a Sovereign Asset",
            subtitle: "Global Intelligence: Connecting the Black Sea to the Gulf of Guinea",
            excerpt: "Food security is the ultimate pillar of national sovereignty. The ongoing disruptions in global grain markets have forced a pivot toward long-term, multi-lateral frameworks...",
            content: [
                "Food security is the ultimate pillar of national sovereignty. The ongoing disruptions in global grain markets have forced a pivot toward long-term, multi-lateral frameworks. The strategic link between Eastern European production and African consumption is now the most critical trade corridor in the world.",
                "The SGI Perspective: SGI’s 10-year framework with the Ministry of Agrarian Policy and Food of Ukraine is a blueprint for this new era. By integrating Ukrainian origination with West African industrial-scale storage, we are moving away from \"spot-market\" uncertainty toward \"sovereign-level\" stability. We believe the future of agri-business lies in these deep-rooted, decade-long partnerships that treat commodities as essential national infrastructure rather than mere tradeable goods."
            ]
        }
    ];

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeModal !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [activeModal]);

    return (
        <>
            <div className="min-h-screen bg-ghost pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">

                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                     style={{ backgroundImage: 'linear-gradient(#001A38 1px, transparent 1px), linear-gradient(90deg, #001A38 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
                </div>

                <div className="max-w-[1600px] mx-auto relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-12 md:mb-16"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="text-navy-900 font-bold uppercase tracking-widest text-sm">Financial Telemetry</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-navy-900 uppercase tracking-tighter leading-none">
                            Capital <span className="text-steel">Deployment</span>
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                                className="bg-white border border-navy-900/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-transform group-hover:scale-110 ${metric.color}`} />

                                <div className="flex justify-between items-start mb-12">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${metric.color} ${metric.textColor}`}>
                                        <metric.icon className="w-6 h-6" />
                                    </div>
                                    {metric.trendUp !== null ? (
                                        <div className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${metric.trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            <TrendingUp className="w-3 h-3" />
                                            {metric.trend}
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-navy-900/5 text-navy-900">
                                            <Activity className="w-3 h-3" />
                                            {metric.trend}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-navy-800/60 text-xs font-bold uppercase tracking-widest mb-1">{metric.title}</h3>
                                    <p className="text-4xl md:text-5xl font-black text-navy-900 tracking-tighter">{metric.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="bg-navy-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16"
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <BarChart3 className="w-5 h-5 text-gold" />
                                    <h2 className="text-xl font-black text-ghost uppercase tracking-tighter">Trilateral Volume</h2>
                                </div>
                                <p className="text-steel-light/70 text-sm font-medium">Real-time allocation across global corridors.</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-sm bg-ghost" />
                                    <span className="text-[10px] font-bold text-steel-light uppercase tracking-widest">Trade</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-sm bg-gold" />
                                    <span className="text-[10px] font-bold text-steel-light uppercase tracking-widest">Energy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-sm bg-steel" />
                                    <span className="text-[10px] font-bold text-steel-light uppercase tracking-widest">Defense</span>
                                </div>
                            </div>
                        </div>

                        <div className="pl-6 md:pl-10">
                            <LiveChart />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="pt-12 border-t border-navy-900/10"
                    >
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start mb-12">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="w-5 h-5 text-navy-900" />
                                    <h2 className="text-2xl font-black text-navy-900 uppercase tracking-tighter">Strategic Intelligence</h2>
                                </div>
                                <p className="text-navy-800/70 text-lg font-medium leading-relaxed">
                                    The world is moving toward a &quot;Security-First&quot; trade model. Whether it is the regulatory unification of Africa or the defense-grade sustainment of energy corridors, SG International is the bridge. We provide the discipline of the soldier, the foresight of the diplomat, and the execution of the merchant.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {marketInsights.map((insight, index) => (
                                <div key={insight.id} className="bg-white border border-navy-900/10 rounded-[1.5rem] p-8 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
                                    <div>
                                        <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-4 block">Update {insight.id}</span>
                                        <h3 className="text-xl font-black text-navy-900 leading-tight mb-2 group-hover:text-gold transition-colors">{insight.title}</h3>
                                        <p className="text-xs font-bold text-steel uppercase tracking-wide mb-4">{insight.subtitle}</p>
                                        <p className="text-sm font-medium text-navy-800/70 leading-relaxed line-clamp-4 mb-6">
                                            {insight.excerpt}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(index)}
                                        className="flex items-center gap-2 text-navy-900 text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors w-fit"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Read More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* PORTAL INJECTION */}
            {isClient && createPortal(
                <AnimatePresence>
                    {activeModal !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-navy-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                            onClick={() => setActiveModal(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="bg-white rounded-[2rem] w-full max-w-3xl max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >

                                {/* Pinned Absolute Close Button */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="w-10 h-10 bg-white/80 backdrop-blur-md border border-navy-900/10 text-navy-900 hover:bg-navy-900 hover:text-white rounded-full flex items-center justify-center transition-all shadow-md"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* SCROLL PHYSICS */}
                                <div className="flex-1 overflow-y-auto p-6 pt-20 md:p-12 md:pt-20 overscroll-contain">
                                    <div className="mb-8 pr-10">
                    <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">
                      Market Intelligence // Update {marketInsights[activeModal].id}
                    </span>
                                        <h2 className="text-3xl md:text-4xl font-black text-navy-900 leading-tight mb-4">
                                            {marketInsights[activeModal].title}
                                        </h2>
                                        <h3 className="text-sm font-bold text-steel uppercase tracking-widest pb-6 border-b border-navy-900/10">
                                            {marketInsights[activeModal].subtitle}
                                        </h3>
                                    </div>

                                    <div className="space-y-6 pb-4">
                                        {marketInsights[activeModal].content.map((paragraph, idx) => (
                                            <p key={idx} className="text-navy-800/80 text-lg font-medium leading-relaxed">
                                                {paragraph.startsWith("The SGI Perspective:") ? (
                                                    <>
                                                        <span className="font-bold text-navy-900">The SGI Perspective:</span>
                                                        {paragraph.replace("The SGI Perspective:", "")}
                                                    </>
                                                ) : (
                                                    paragraph
                                                )}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}