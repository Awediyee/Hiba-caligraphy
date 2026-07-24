import React from 'react';
import { Send, Globe, Share2, MessageSquare, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../common/Container';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: <Globe size={15} />, href: 'https://hibacalligraphy.com', label: 'Website' },
    { icon: <Share2 size={15} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <MessageSquare size={15} />, href: 'https://wa.me/251902451206', label: 'WhatsApp' },
    { icon: <ExternalLink size={15} />, href: 'https://behance.net', label: 'Behance' },
  ];

  return (
    <footer className="bg-[#03080F] text-white border-t border-[#CDAA7D]/20 pt-14 sm:pt-20 pb-8 relative overflow-hidden">
      {/* Top Gold Ornament Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/50 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 mb-4 group">
              <div
                className="w-10 h-10 rounded-xl p-[1.5px] overflow-hidden flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #CDAA7D 0%, #8B6D3A 50%, #CDAA7D 100%)',
                  boxShadow: '0 0 12px rgba(205,170,125,0.3)',
                }}
              >
                <div className="w-full h-full bg-[#03080F] rounded-[10px] overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/Logo.jpg"
                    alt="Hiba Calligraphy Logo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white font-serif group-hover:text-[#CDAA7D] transition-colors">
                  {t('nav.brandTitle')}
                </span>
                <span className="text-[9px] text-[#CDAA7D]/60 font-semibold tracking-[0.2em] uppercase">
                  {t('nav.brandSubtitle')}
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              {t('footer.brandDescription')}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#CDAA7D] hover:bg-[#CDAA7D] hover:text-[#07192A] text-gray-300 flex items-center justify-center transition-all duration-300 shadow-md"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold text-[#CDAA7D] font-serif mb-4 pb-2 border-b border-white/10">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#CDAA7D] transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter Signup */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold text-[#CDAA7D] font-serif mb-4 pb-2 border-b border-white/10">
              {t('footer.newsletterTitle')}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
              {t('footer.newsletterDesc')}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#CDAA7D] text-xs sm:text-sm transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:scale-105 transition-all flex items-center gap-1.5 flex-shrink-0 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #E8D5A3 0%, #CDAA7D 45%, #8B6D3A 100%)',
                  color: '#07192A'
                }}
              >
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Crafted with</span>
            <Heart size={13} className="text-[#CDAA7D] fill-[#CDAA7D] inline" />
            <span>for Arabic Art Lovers</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
