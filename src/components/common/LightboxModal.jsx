import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Tag } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from './Button';

export const LightboxModal = ({ item, onClose }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#03080F]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-[#060D1A] text-white border border-[#CDAA7D]/30 rounded-[24px] shadow-2xl max-w-5xl w-full overflow-hidden z-10 grid grid-cols-1 lg:grid-cols-12 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-[#03080F]/80 text-gray-300 hover:text-[#07192A] hover:bg-[#CDAA7D] transition-all duration-300 border border-white/10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Image Container */}
          <div className="lg:col-span-7 relative bg-black/50 flex items-center justify-center p-6 sm:p-8 min-h-[320px] lg:min-h-[480px]">
            <img
              src={item.image}
              alt={item.title[lang]}
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-[#03080F]/80 text-[#CDAA7D] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#CDAA7D]/30 backdrop-blur-sm flex items-center gap-1.5">
              <ZoomIn size={14} /> High-Res Calligraphy
            </span>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#060D1A] to-[#08101E]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-[rgba(205,170,125,0.1)] text-[#CDAA7D] border border-[rgba(205,170,125,0.3)] flex items-center gap-1">
                  <Tag size={12} />
                  {item.categoryLabel[lang]}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight font-serif">
                {item.title[lang]}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description[lang]}
              </p>

              {/* Specs Table */}
              {item.details && (
                <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs sm:text-sm mb-6">
                  {item.details.scriptType && (
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="text-gray-400">نوع الخط / Script:</span>
                      <span className="font-semibold text-[#CDAA7D]">{item.details.scriptType}</span>
                    </div>
                  )}
                  {item.details.dimensions && (
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span className="text-gray-400">الأبعاد / Size:</span>
                      <span className="font-semibold text-gray-200">{item.details.dimensions}</span>
                    </div>
                  )}
                  {item.details.year && (
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-gray-400">سنة الإنتاج / Year:</span>
                      <span className="font-semibold text-gray-200">{item.details.year}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Button
                variant="gold"
                size="md"
                className="w-full"
                href="#contact"
                onClick={onClose}
              >
                طلب اقتناء لوحة ممثالة
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
