import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const SectionTitle = ({
  title,
  subtitle,
  badge,
  align = 'center',
  darkTheme = true
}) => {
  const alignmentClass = {
    center: 'text-center items-center',
    right: 'text-right items-end',
    left: 'text-left items-start'
  }[align];

  return (
    <AnimatedSection animation="fade-up" className={`flex flex-col mb-12 sm:mb-16 ${alignmentClass}`}>
      {badge && (
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-sm border"
          style={{
            background: 'rgba(205,170,125,0.08)',
            borderColor: 'rgba(205,170,125,0.28)',
            color: '#CDAA7D'
          }}
        >
          {badge}
        </span>
      )}

      {/* Decorative Calligraphy Ornament Star */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#CDAA7D]/60" />
        <span className="text-[#CDAA7D] font-serif text-lg">✦</span>
        <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#CDAA7D]/60" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-serif">
        <span className="relative inline-block">
          {title}
          <span className="absolute -bottom-2 right-0 left-0 h-1 bg-gradient-to-r from-[#CDAA7D] via-[#DFCAAB] to-transparent rounded-full opacity-80" />
        </span>
      </h2>

      {subtitle && (
        <p className="mt-5 text-base sm:text-lg max-w-2xl font-normal leading-relaxed text-gray-300">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
};
