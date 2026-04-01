"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LiveTicker } from "@/components/ui/live-ticker";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TrendingUp, BarChart3, Shield, Activity, ArrowUpRight, DollarSign, Briefcase, LucideIcon } from "lucide-react";

interface MetricCardProps {
    title: string;
    value: string;
    trend: string;
    icon: LucideIcon;
    delay: number;
}

const MetricCard = ({ title, value, trend, icon: Icon, delay }: MetricCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-navy-900 p-8 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon className="w-20 h-20 text-gold" />
        </div>
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <Icon className="w-5 h-5 text-gold" />
        </div>
        <h4 className="text-steel-light text-sm font-bold uppercase tracking-widest mb-4">{title}</h4>
        <div className="flex items-end gap-3">
            <h2 className="text-4xl lg:text-5xl font-black text-ghost tracking-tighter">{value}</h2>
            <span className="text-green-400 text-sm font-bold mb-2 flex items-center bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
        <ArrowUpRight className="w-4 h-4 mr-1" />
                {trend}
      </span>
        </div>
    </motion.div>
);

const LiveChart = () => {
    const [bars, setBars] = useState<number[]>(Array(12).fill(20));

    useEffect(() => {
        const timer = setTimeout(() => {
            setBars(Array.from({ length: 12 }, () => Math.floor(Math.random() * 60) + 40));
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-64 w-full flex items-end justify-between gap-2 mt-8">
            {bars.map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                    className="w-full bg-gradient-to-t from-navy-800 to-gold/60 rounded-t-md relative group hover:to-gold/80 transition-colors cursor-pointer"
                >
                </motion.div>
            ))}
        </div>
    );
};

export default function SGICapital() {
    return (
        <div className="min-h-screen flex flex-col bg-ghost text-navy-900 font-sans selection:bg-gold selection:text-navy overflow-hidden">
            <LiveTicker />
            <Navbar />

            <main className="flex-grow pt-28">
                <section className="relative px-6 lg:px-12 py-16 lg:py-24 max-w-[1600px] mx-auto">

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 backdrop-blur-md mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-gold"></span>
                                <span className="text-xs font-bold text-navy-800 uppercase tracking-widest">Private Equity & Sovereign Funding</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-navy-900 mb-6 leading-[1.05]">
                                SGI <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-steel">Capital</span>
                            </h1>
                            <p className="text-lg md:text-xl text-navy-800/80 font-medium leading-relaxed max-w-xl mb-10">
                                Strategic capital allocation focused on critical infrastructure, defense sustainment, and high-yield commodity trade finance across the Trilateral Corridor.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <div className="bg-navy-900 p-8 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] text-left">
                                <DollarSign className="text-gold w-8 h-8 mb-6" />
                                <p className="text-4xl lg:text-5xl font-black text-ghost tracking-tight mb-2">$4.2B</p>
                                <p className="text-steel-light text-sm font-bold uppercase tracking-widest">Assets Under Management</p>
                            </div>
                            <div className="bg-navy-900 p-8 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)] text-left">
                                <TrendingUp className="text-gold w-8 h-8 mb-6" />
                                <p className="text-4xl lg:text-5xl font-black text-ghost tracking-tight mb-2">14.8%</p>
                                <p className="text-steel-light text-sm font-bold uppercase tracking-widest">Target IRR (Infrastructure)</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="px-6 lg:px-12 py-20 bg-navy-900/5 border-y border-navy-900/10">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h2 className="text-3xl font-black text-navy-900 tracking-tight flex items-center gap-4 mb-2">
                                    <Activity className="text-gold w-8 h-8" /> Live Deployment Metrics
                                </h2>
                                <p className="text-navy-800/70 font-medium">Real-time capital flow across our global hubs.</p>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 border border-navy-800 shadow-md">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs text-ghost font-bold uppercase tracking-widest">System Online // Washington D.C.</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            <MetricCard title="Active Trade Finance" value="$850M" trend="+4.2%" icon={Briefcase} delay={0.1} />
                            <MetricCard title="Energy Infrastructure" value="$2.1B" trend="+1.8%" icon={BarChart3} delay={0.2} />
                            <MetricCard title="Defense Sustainment" value="$1.2B" trend="+8.4%" icon={Shield} delay={0.3} />
                        </div>

                        {/* Live Chart Container - Flipped to Navy */}
                        <div className="mt-8 bg-navy-900 p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,26,56,0.3)]">
                            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-ghost tracking-tight mb-1">Quarterly Liquidity Flow</h3>
                                    <p className="text-steel-light text-sm font-medium">Volume analysis across Singapore and Accra hubs.</p>
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                    <span className="text-gold font-bold text-sm tracking-widest uppercase">YTD 2026</span>
                                </div>
                            </div>
                            <LiveChart />
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}