"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from "../../lib/utils";

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: 'gold' | 'ghost' | 'navy';
}

export const ModernButton = ({ label, variant = 'gold', className, ...props }: ModernButtonProps) => {

    const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full overflow-hidden transition-all duration-300 shadow-lg active:scale-95";

    const variantClasses = {
        gold: "bg-gold text-navy-900 font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
        ghost: "bg-navy-900/5 backdrop-blur-sm border border-navy-900/10 text-navy-900 font-bold hover:bg-navy-900/10",
        navy: "bg-navy-900 text-ghost font-bold border border-navy-800 hover:border-gold/30 hover:bg-navy-800",
    };

    return (
        <button
            className={cn(baseClasses, variantClasses[variant], className)}
            {...props}
        >
      <span className="relative z-10 text-sm font-bold uppercase tracking-widest whitespace-nowrap">
        {label}
      </span>

            <div className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={3}
                />
            </div>

            <div className="absolute inset-0 h-full w-full bg-black/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
        </button>
    );
};