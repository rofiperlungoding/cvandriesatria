import React from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    return (
        <div
            className={cn(
                "glass-card p-6 relative overflow-hidden",
                hoverEffect && "hover:bg-surface/60 hover:border-white/10 transition-colors duration-300",
                className
            )}
            {...props}
        >
            {/* Subtle shine effect on top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

            {children}
        </div>
    );
};
