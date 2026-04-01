"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const tickerData = [
    { label: "WTI CRUDE", value: "78.42 USD", change: "+1.2%", isUp: true },
    { label: "BRENT", value: "82.15 USD", change: "+0.8%", isUp: true },
    { label: "NAT GAS", value: "2.84 USD", change: "-1.4%", isUp: false },
    { label: "SGX IRON ORE", value: "112.50 USD", change: "-0.4%", isUp: false },
    { label: "ACCRA SILO VOL", value: "84.2%", change: "CAPACITY", neutral: true },
    { label: "SGI CAPITAL AUM", value: "$4.2B", change: "STABLE", neutral: true },
    { label: "DEFENSE LOGISTICS", value: "SECURE", change: "OPCON 1", neutral: true },
];

export const LiveTicker = () => {
    const scrollingItems = [...tickerData, ...tickerData, ...tickerData];

    return (
        // INTENSIVE FIX: z-[100] to stay above EVERYTHING
        <div className="fixed top-0 left-0 w-full h-10 bg-[#000a14] border-b border-white/10 z-[100] flex items-center overflow-hidden font-mono text-[10px] sm:text-xs">

            <div className="absolute left-0 top-0 h-full px-4 bg-[#000a14] border-r border-white/10 flex items-center gap-2 z-10 shadow-[5px_0_15px_rgba(0,0,0,0.8)]">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-steel-light font-bold uppercase tracking-widest">Global Telemetry</span>
            </div>

            <div className="flex flex-1 pl-40">
                <motion.div
                    className="flex whitespace-nowrap items-center gap-10"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {scrollingItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-steel font-medium tracking-wider">{item.label}:</span>
                            <span className="text-ghost font-bold">{item.value}</span>

                            {!item.neutral ? (
                                <span className={`flex items-center font-bold ${item.isUp ? 'text-green-400' : 'text-red-400'}`}>
                  {item.isUp ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                    {item.change}
                </span>
                            ) : (
                                <span className="flex items-center text-gold font-bold">
                  <Activity className="w-3 h-3 mr-1" />
                                    {item.change}
                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};