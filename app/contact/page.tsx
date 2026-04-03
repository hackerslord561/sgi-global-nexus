"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, MessageCircle, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        entity: '',
        email: '',
        sector: 'commodity_energy',
        payload: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setStatus('success');
            setFormData({ entity: '', email: '', sector: 'commodity_energy', payload: '' });

            // Reset to idle after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('Transmission failed. Ensure network integrity and try again.');
        }
    };

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

                {/* Directory Layout: Text/Cards Left, Form Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Institutional Info & Comms */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h2 className="text-2xl md:text-4xl font-black text-navy-900 uppercase tracking-tight leading-tight mb-6">
                                Direct Access to Sovereign Liquidity
                            </h2>
                            <div className="w-12 h-1 bg-gold rounded-full mb-6" />
                            <p className="text-navy-800/80 text-lg md:text-xl leading-relaxed font-medium">
                                The SGI Energy Desk provides institutional partners and sovereign entities with direct access to global commodity markets. Whether coordinating West African energy deployments, securing maritime defense logistics, or executing high-volume capital transactions via Singapore, our operational command is standing by to facilitate secure, off-market communications.
                            </p>
                        </div>

                        {/* Comms Card */}
                        <div className="flex items-start gap-6 p-8 md:p-10 bg-white border border-navy-900/10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-navy-900/5 group-hover:bg-navy-900 group-hover:text-gold text-navy-900 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                                <h3 className="text-sm font-black text-navy-900 uppercase tracking-widest mb-6">Encrypted Channels</h3>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 pb-4 border-b border-navy-900/10">
                                        <Mail className="w-5 h-5 text-steel" />
                                        <a href="mailto:adama@sremgya.com" className="text-navy-900 text-lg font-bold hover:text-gold transition-colors">
                                            adama@sremgya.com
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 pb-4 border-b border-navy-900/10">
                                        <MessageCircle className="w-5 h-5 text-steel" />
                                        <a
                                            href="https://wa.me/12029251041"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy-900 text-lg font-bold hover:text-gold transition-colors flex items-center gap-2"
                                        >
                                            +1 (202) 925-1041 <span className="text-[10px] font-bold text-steel uppercase tracking-widest mt-1">(WhatsApp)</span>
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 pb-4 border-b border-navy-900/10">
                                        <Phone className="w-5 h-5 text-steel" />
                                        <a href="tel:+14433924444" className="text-navy-900 text-lg font-bold hover:text-gold transition-colors">
                                            +1 443 392 4444
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-steel" />
                                        <a href="tel:+233248393310" className="text-navy-900 text-lg font-bold hover:text-gold transition-colors">
                                            +233 24 839 3310
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Multi-Node Location Data */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="pb-6 border-b md:border-b-0 md:border-r border-navy-900/10 md:pr-6">
                                <p className="text-navy-900 text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-gold"/> USA Node</p>
                                <p className="text-navy-800/70 text-md font-medium">12889 Hoadly Manor Drive</p>
                                <p className="text-navy-800/70 text-md font-medium">Virginia 20112, USA</p>
                            </div>
                            <div className="md:pl-6">
                                <p className="text-navy-900 text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-gold"/> Ghana Node</p>
                                <p className="text-navy-800/70 text-md font-medium">10 Parsnip St, East Legon</p>
                                <p className="text-navy-800/70 text-md font-medium">Accra, Ghana</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Secure Transmission Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className="bg-navy-900 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">

                            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                <ShieldCheck className="w-48 h-48 text-white" />
                            </div>

                            <h3 className="text-2xl font-black text-ghost uppercase tracking-tighter mb-2 relative z-10">
                                Secure Transmission Protocol
                            </h3>
                            <p className="text-steel-light/70 text-sm font-medium mb-8 relative z-10">
                                Direct conduit to SGI Operations Command.
                            </p>

                            <form className="relative z-10 flex flex-col gap-5" onSubmit={handleSubmit}>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-bold text-gold uppercase tracking-widest">Entity / Organization</label>
                                    <input
                                        type="text"
                                        name="entity"
                                        required
                                        value={formData.entity}
                                        onChange={handleInputChange}
                                        placeholder="E.g., Ministry of Defense / Merchant House"
                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ghost placeholder:text-steel-light/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-gold uppercase tracking-widest">Clearance ID (Email)</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="operative@domain.com"
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ghost placeholder:text-steel-light/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-bold text-gold uppercase tracking-widest">Sector</label>
                                        <select
                                            name="sector"
                                            value={formData.sector}
                                            onChange={handleInputChange}
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ghost focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="commodity_energy" className="bg-navy-900 text-ghost">Commodity / Energy</option>
                                            <option value="defense_logistics" className="bg-navy-900 text-ghost">Defense Logistics</option>
                                            <option value="capital_deployment" className="bg-navy-900 text-ghost">Capital Deployment</option>
                                            <option value="general_inquiry" className="bg-navy-900 text-ghost">General Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-bold text-gold uppercase tracking-widest">Transmission Payload</label>
                                    <textarea
                                        name="payload"
                                        required
                                        value={formData.payload}
                                        onChange={handleInputChange}
                                        rows={5}
                                        placeholder="Enter operational parameters or inquiry..."
                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ghost placeholder:text-steel-light/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none custom-scrollbar"
                                    ></textarea>
                                </div>

                                <AnimatePresence mode="wait">
                                    {status === 'error' && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-red-400 text-xs font-bold uppercase tracking-widest"
                                        >
                                            {errorMessage}
                                        </motion.p>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`mt-4 font-black uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group
                    ${status === 'success'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                        : 'bg-gold hover:bg-yellow-500 text-navy-900'
                                    }
                    ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                                >
                                    {status === 'idle' && (
                                        <>
                                            Initiate Handshake
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                    {status === 'loading' && (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Encrypting Payload...
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            Transmission Secured
                                        </>
                                    )}
                                </button>

                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}