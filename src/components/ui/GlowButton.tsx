import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

export const GlowButton = ({
    className,
    variant = 'primary',
    children,
    ...props
}: GlowButtonProps) => {
    const baseStyles = "relative px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group tracking-wide shadow-lg";

    const variants = {
        primary: "bg-gradient-to-b from-blue-500 to-blue-700 text-white border border-blue-400/20 shadow-[0_4px_10px_rgba(37,99,235,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-blue-400 hover:to-blue-600 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6),inset_0_1px_0_rgba(255,255,255,0.4)]",
        secondary: "bg-surfaceHighlight text-white hover:bg-white/10 border border-white/5",
        outline: "bg-white/[0.02] border border-white/10 text-gray-300 hover:text-white hover:bg-white/[0.08] hover:border-white/30 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
};
