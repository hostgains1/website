'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'cta';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  fullWidth = false,
  type = 'button',
  disabled = false,
  ariaLabel
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] sm:min-h-[48px] disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    // Standard Dark Green (Branding) - Primary action
    primary: "bg-hostgains text-white hover:bg-hostgains-dark focus:ring-hostgains rounded-lg uppercase text-xs sm:text-sm tracking-wide",
    // Secondary - Muted Green
    secondary: "bg-hostgains-light text-white hover:bg-hostgains focus:ring-hostgains-light rounded-lg uppercase text-xs sm:text-sm tracking-wide",
    // Outline - Elegant border
    outline: "bg-transparent border-2 border-hostgains text-hostgains hover:bg-hostgains hover:text-white rounded-lg uppercase text-xs sm:text-sm tracking-wide",
    // White - For dark backgrounds
    white: "bg-sand text-hostgains hover:bg-white rounded-lg uppercase text-xs sm:text-sm tracking-wide",
    // CTA Style - Premium, calm, authoritative
    cta: "bg-hostgains text-white hover:bg-hostgains-dark focus:ring-hostgains rounded-lg shadow-lg hover:shadow-xl text-base sm:text-lg border border-hostgains-light/20",
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
};
