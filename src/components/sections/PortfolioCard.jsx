import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Tag } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const PortfolioCard = ({ item, onSelect }) => {
  const { lang, t } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={() => onSelect(item)}
      className="group relative bg-white/[0.03] backdrop-blur-md rounded-[18px] overflow-hidden border border-white/10 hover:border-[#CDAA7D]/50 shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Image Container with Zoom & Overlay */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#03080F]">
        <img
          src={item.image}
          alt={item.title[lang]}
          loading="lazy"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03080F]/95 via-[#03080F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#CDAA7D] text-[#07192A] mb-2 shadow-md">
              <Tag size={10} />
              {item.categoryLabel[lang]}
            </span>

            <button className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs shadow-xl hover:bg-[#CDAA7D] hover:text-[#07192A] hover:border-[#CDAA7D] transition-all">
              <Eye size={14} />
              <span>{t('portfolio.card.view')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white/[0.02]">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#CDAA7D] block mb-1">
            {item.categoryLabel[lang]}
          </span>
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#CDAA7D] transition-colors duration-300 line-clamp-1 font-serif">
            {item.title[lang]}
          </h3>
          <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed hidden sm:block">
            {item.description[lang]}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
