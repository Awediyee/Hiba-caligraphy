import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const CategoryFilter = ({ activeCategory, onSelectCategory }) => {
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('portfolio.filter.all') },
    { id: 'paintings', label: t('portfolio.filter.paintings') },
    { id: 'logos', label: t('portfolio.filter.logos') },
    { id: 'manuscripts', label: t('portfolio.filter.manuscripts') },
    { id: 'digital', label: t('portfolio.filter.digital') }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 select-none cursor-pointer border ${
              isActive
                ? 'text-[#07192A] border-[#E8D5A3]/60 shadow-lg'
                : 'text-gray-300 hover:text-[#CDAA7D] bg-white/5 border-white/10 hover:border-[#CDAA7D]/40 backdrop-blur-md'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] via-[#CDAA7D] to-[#8B6D3A] rounded-xl shadow-md -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};
