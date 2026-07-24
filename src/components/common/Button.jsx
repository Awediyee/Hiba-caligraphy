import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  href,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 overflow-hidden cursor-pointer select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2 font-bold",
    lg: "px-7 py-3.5 text-base gap-2.5 font-extrabold shadow-lg"
  };

  const variantStyles = {
    gold: "bg-gradient-to-r from-[#E8D5A3] via-[#CDAA7D] to-[#8B6D3A] text-[#07192A] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(205,170,125,0.35)] border border-[#E8D5A3]/50 shadow-md",
    navy: "bg-white/5 text-white hover:bg-white/10 border border-white/15 hover:border-[#CDAA7D]/40 shadow-md",
    outline: "bg-transparent text-[#CDAA7D] border-2 border-[#CDAA7D]/50 hover:bg-[#CDAA7D] hover:text-[#07192A] transition-colors duration-300 font-bold",
    light: "bg-[rgba(205,170,125,0.1)] text-[#CDAA7D] hover:bg-[rgba(205,170,125,0.2)] border border-[rgba(205,170,125,0.3)] font-semibold"
  };

  const content = (
    <>
      {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} group ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} group ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
};
