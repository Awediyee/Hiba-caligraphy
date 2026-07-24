import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Palette, BookOpen, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';

export const ServiceCard = ({ service, index }) => {
  const { lang, isRtl, t } = useLanguage();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool size={26} className="text-[#CDAA7D] group-hover:scale-110 transition-transform" />;
      case 'Palette':
        return <Palette size={26} className="text-[#CDAA7D] group-hover:scale-110 transition-transform" />;
      case 'BookOpen':
      default:
        return <BookOpen size={26} className="text-[#CDAA7D] group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/[0.03] backdrop-blur-md rounded-[22px] p-6 sm:p-8 border border-white/10 hover:border-[#CDAA7D]/50 shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-400 flex flex-col justify-between"
    >
      {/* Top Accent Gold Shimmer Line */}
      <div className="absolute top-0 inset-x-6 h-[2.5px] bg-gradient-to-r from-[#E8D5A3] via-[#CDAA7D] to-[#8B6D3A] rounded-t-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div>
        {/* Icon Circle */}
        <div
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-400 border shadow-md"
          style={{
            background: 'rgba(205,170,125,0.08)',
            borderColor: 'rgba(205,170,125,0.25)',
          }}
        >
          {getIcon(service.iconName)}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#CDAA7D] transition-colors duration-300 mb-3 font-serif">
          {service.title[lang]}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.description[lang]}
        </p>

        {/* Feature Points */}
        <ul className="space-y-2.5 mb-6 sm:mb-8">
          {service.features[lang].map((feat, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 font-medium">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 border"
                style={{
                  background: 'rgba(205,170,125,0.15)',
                  borderColor: 'rgba(205,170,125,0.3)',
                  color: '#CDAA7D'
                }}
              >
                <Check size={10} strokeWidth={3} />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="pt-4 border-t border-white/10">
        <Button
          variant="gold"
          size="md"
          href="#contact"
          className="w-full justify-between text-sm font-bold shadow-md"
          icon={isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          iconPosition="left"
        >
          {t('services.btnOrder')}
        </Button>
      </div>
    </motion.div>
  );
};
