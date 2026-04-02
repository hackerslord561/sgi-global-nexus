"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, MessageCircle } from 'lucide-react';

export default function ContactPage() {
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
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="text-navy-900 font-bold uppercase tracking-widest text-sm">Secure Communications</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-navy-900 uppercase tracking-tighter leading-none mb-6">
                        Energy <span className="text-steel">Desk</span>
                    </h1>
                </motion.div>

                {/* Directory Layout: Text Left, Cards Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Institutional Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        <h2 className="text-2xl md:text-4xl font-black text-navy-900 uppercase tracking-tight leading-tight">
                            Direct Access to Sovereign Liquidity
                        </h2>
                        <div className="w-12 h-1 bg-gold rounded-full" />
                        <p className="text-navy-800/80 text-lg md:text-xl leading-relaxed font-medium">
                            The SGI Energy Desk provides institutional partners and sovereign entities with direct access to global commodity markets. Whether coordinating West African energy deployments, securing maritime defense logistics, or executing high-volume capital transactions via Singapore, our operational command is standing by to facilitate secure, off-market communications.
                        </p>
                    </motion.div>

                    {/* Right Column: Contact Data Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        {/* Multi-Node Location Card */}
                        <div className="flex items-start gap-6 p-8 md:p-10 bg-white border border-navy-900/10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-navy-900/5 group-hover:bg-navy-900 group-hover:text-gold text-navy-900 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                                <h3 className="text-sm font-black text-navy-900 uppercase tracking-widest mb-6">Operating Locations</h3>

                                <div className="flex flex-col gap-6">
                                    {/* USA Address */}
                                    <div className="pb-6 border-b border-navy-900/10">
                                        <p className="text-navy-900 text-lg font-bold">SG International Ltd.</p>
                                        <p className="text-navy-800/70 text-md font-medium mt-1">12889 Hoadly Manor Drive</p>
                                        <p className="text-navy-800/70 text-md font-medium">Virginia 20112, USA</p>
                                    </div>

                                    {/* Ghana Address */}
                                    <div>
                                        <p className="text-navy-900 text-lg font-bold">SG International Ltd.</p>
                                        <p className="text-navy-800/70 text-md font-medium mt-1">10 Parsnip St, East Legon</p>
                                        <p className="text-navy-800/70 text-md font-medium">Accra, Ghana</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Comms Card */}
                        <div className="flex items-start gap-6 p-8 md:p-10 bg-navy-900 rounded-[2rem] shadow-xl relative overflow-hidden group">
                            {/* Subtle background glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors" />

                            <div className="w-14 h-14 bg-white/5 text-gold rounded-2xl flex items-center justify-center shrink-0 border border-white/10 z-10">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div className="w-full z-10">
                                <h3 className="text-sm font-black text-ghost uppercase tracking-widest mb-4">Encrypted Comms</h3>

                                <div className="flex flex-col gap-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                                        <Mail className="w-5 h-5 text-steel-light/50" />
                                        <a href="mailto:adama@sremgya.com" className="text-ghost text-lg font-medium hover:text-gold transition-colors">
                                            adama@sremgya.com
                                        </a>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                                        <MessageCircle className="w-5 h-5 text-steel-light/50" />
                                        <a
                                            href="https://wa.me/12029251041"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-ghost text-lg font-medium hover:text-gold transition-colors flex items-center gap-2"
                                        >
                                            +1 (202) 925-1041 <span className="text-[10px] font-bold text-steel-light/50 uppercase tracking-widest mt-1">(WhatsApp)</span>
                                        </a>
                                    </div>

                                    {/* US Phone */}
                                    <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                                        <Phone className="w-5 h-5 text-steel-light/50" />
                                        <a href="tel:+14433924444" className="text-ghost text-lg font-medium hover:text-gold transition-colors">
                                            +1 443 392 4444
                                        </a>
                                    </div>

                                    {/* Ghana Phone */}
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-steel-light/50" />
                                        <a href="tel:+233248393310" className="text-ghost text-lg font-medium hover:text-gold transition-colors">
                                            +233 24 839 3310
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
}