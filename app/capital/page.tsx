"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Activity,
    ShieldCheck,
    Zap,
    ArrowRightLeft,
    DollarSign,
    BarChart3
} from 'lucide-react';

// --- HYDRATION-SAFE CHART COMPONENT ---
// Uses de-synchronized mounting to prevent SSR/CSR visual glitches on Vercel
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

    // Realistic proportional heights based on your data ($63M, $48M, $16M)
    const chartData = [
        { label: "Q1", trade: 50, energy: 35, defense: 10 },
        { label: "Q2", trade: 55, energy: 40, defense: 12 },
        { label: "Q3", trade: 58, energy: 45, defense: 15 },
        { label: "CURRENT", trade: 63, energy: 48, defense: 16 },
    ];

    return (
        <div className="w-full h-[300px] flex items-end justify-between gap-2 sm:gap-6 pt-10 border-b border-white/10 relative">
            {/* Y-Axis Guidelines */}
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
                        {/* Defense Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.defense / 100) * 100}%` }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                            className="w-full bg-steel rounded-t-sm"
                        />
                        {/* Energy Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(data.energy / 100) * 100}%` }}
                            transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                            className="w-full bg-gold rounded-t-sm"
                        />
                        {/* Trade Bar */}
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

    return (
        <div className="min-h-screen bg-ghost pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">

            {/* Background Architectural Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                 style={{ backgroundImage: 'linear-gradient(#001A38 1px, transparent 1px), linear-gradient(90deg, #001A38 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* Header Section */}
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

                {/* Top Metrics Row */}
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

                {/* Main Chart Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="bg-navy-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Internal Dashboard Header */}
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

                    {/* The Chart */}
                    <div className="pl-6 md:pl-10">
                        <LiveChart />
                    </div>

                    {/* Aggregate Total */}
                    <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                        <div>
                            <p className="text-steel-light/50 text-[10px] font-bold uppercase tracking-widest mb-1">Total Active Deployment</p>
                            <p className="text-2xl font-mono text-ghost tracking-wider flex items-center gap-1">
                                <DollarSign className="w-5 h-5 text-gold" />
                                127,000,000
                            </p>
                        </div>
                        <div className="px-4 py-2 rounded-lg border border-gold/20 bg-gold/5 text-gold text-[10px] font-bold uppercase tracking-widest">
                            Live Feed
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}