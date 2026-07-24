import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Send, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';


export const Navbar = () => {
  const { lang, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'ar', label: 'العربية', native: 'AR' },
    { code: 'en', label: 'English',  native: 'EN' },
    { code: 'am', label: 'አማርኛ',   native: 'AM' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { href: '#home',       label: t('nav.home')       },
    { href: '#portfolio',  label: t('nav.portfolio')  },
    { href: '#about',      label: t('nav.about')      },
    { href: '#services',   label: t('nav.services')   },
    { href: '#contact',    label: t('nav.contact')    },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  /* Nav background — always dark glass, slightly stronger when scrolled */
  const navBg = isScrolled
    ? 'rgba(3,8,15,0.97)'
    : 'rgba(3,8,15,0.72)';
  const navBorder = isScrolled
    ? 'rgba(205,170,125,0.18)'
    : 'rgba(255,255,255,0.05)';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: navBg,
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: `1px solid ${navBorder}`,
        boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
        paddingTop: isScrolled ? '10px' : '14px',
        paddingBottom: isScrolled ? '10px' : '14px',
      }}
    >
      {/* Top gold accent line — always visible */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent 0%, rgba(205,170,125,0.5) 40%, rgba(205,170,125,0.5) 60%, transparent 100%)' }}
      />

      <div dir="ltr" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Brand Logo ── */}
        <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
          <div
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-[1.5px] transition-transform duration-300 group-hover:scale-105 overflow-hidden flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #CDAA7D 0%, #8B6D3A 50%, #CDAA7D 100%)',
              boxShadow: '0 0 12px rgba(205,170,125,0.3)',
            }}
          >
            <div className="w-full h-full rounded-[10px] overflow-hidden flex items-center justify-center" style={{ background: '#03080F' }}>
              <img
                src="/images/Logo.jpg"
                alt="Hiba Calligraphy Logo"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm sm:text-base tracking-tight text-white transition-colors duration-300 group-hover:text-[#CDAA7D]">
              {t('nav.brandTitle')}
            </span>
            <span
              className="text-[9px] tracking-[0.22em] uppercase font-semibold hidden sm:block"
              style={{ color: 'rgba(205,170,125,0.55)' }}
            >
              {t('nav.brandSubtitle')}
            </span>
          </div>
        </a>

        {/* ── Desktop Nav links ── */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative px-3.5 py-2 text-sm font-semibold transition-all duration-300 group"
              style={{ color: activeLink === link.href ? '#CDAA7D' : 'rgba(255,255,255,0.75)' }}
            >
              {link.label}
              {/* Underline on hover/active */}
              <span
                className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#CDAA7D] rounded-full transition-all duration-300"
                style={{ width: activeLink === link.href ? '60%' : '0%' }}
              />
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#CDAA7D]/40 rounded-full transition-all duration-300 group-hover:w-[50%] w-0" />
            </a>
          ))}
        </nav>

        {/* ── Desktop Right Controls ── */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">

          {/* Language dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border"
              style={{
                background: 'rgba(205,170,125,0.06)',
                borderColor: langDropdownOpen ? 'rgba(205,170,125,0.5)' : 'rgba(205,170,125,0.2)',
                color: 'rgba(205,170,125,0.9)',
              }}
              aria-label="Select Language"
            >
              <Globe size={13} className="text-[#CDAA7D] flex-shrink-0" />
              <span className="whitespace-nowrap">{currentLang.label}</span>
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`}
                style={{ color: '#CDAA7D' }}
              />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden py-1 z-50"
                  style={{
                    background: 'rgba(3,8,15,0.98)',
                    border: '1px solid rgba(205,170,125,0.22)',
                    backdropFilter: 'blur(24px)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  }}
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => { setLanguage(item.code); setLangDropdownOpen(false); }}
                      className="w-full px-4 py-2.5 text-xs font-semibold text-left flex items-center justify-between transition-colors"
                      style={{
                        background: lang === item.code ? 'rgba(205,170,125,0.1)' : 'transparent',
                        color: lang === item.code ? '#CDAA7D' : 'rgba(255,255,255,0.65)',
                      }}
                      onMouseEnter={e => { if (lang !== item.code) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                      onMouseLeave={e => { if (lang !== item.code) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span>{item.label}</span>
                      {lang === item.code && <Check size={12} className="text-[#CDAA7D]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button — gold gradient, matching hero primary button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black tracking-wide transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_6px_24px_rgba(205,170,125,0.35)] active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #E8D5A3 0%, #CDAA7D 45%, #8B6D3A 100%)',
              color: '#07192A',
              boxShadow: '0 2px 12px rgba(205,170,125,0.2)',
            }}
          >
            <Send size={12} />
            {t('nav.cta')}
          </a>
        </div>

        {/* ── Mobile Controls ── */}
        <div className="flex md:hidden items-center gap-2 flex-shrink-0">
          {/* Mobile language selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all"
              style={{
                background: 'rgba(205,170,125,0.06)',
                borderColor: 'rgba(205,170,125,0.25)',
                color: 'rgba(205,170,125,0.9)',
              }}
            >
              <Globe size={11} className="text-[#CDAA7D]" />
              <span>{currentLang.native}</span>
              <ChevronDown size={10} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} style={{ color: '#CDAA7D' }} />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                  className="absolute right-0 mt-1.5 w-32 rounded-xl overflow-hidden py-1 z-50"
                  style={{
                    background: 'rgba(3,8,15,0.98)',
                    border: '1px solid rgba(205,170,125,0.2)',
                    backdropFilter: 'blur(24px)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                  }}
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => { setLanguage(item.code); setLangDropdownOpen(false); }}
                      className="w-full px-3.5 py-2 text-xs font-semibold text-left flex items-center justify-between"
                      style={{
                        background: lang === item.code ? 'rgba(205,170,125,0.1)' : 'transparent',
                        color: lang === item.code ? '#CDAA7D' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      <span>{item.label}</span>
                      {lang === item.code && <Check size={11} className="text-[#CDAA7D]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border transition-colors"
            style={{
              background: mobileMenuOpen ? 'rgba(205,170,125,0.1)' : 'rgba(255,255,255,0.04)',
              borderColor: mobileMenuOpen ? 'rgba(205,170,125,0.4)' : 'rgba(255,255,255,0.12)',
              color: mobileMenuOpen ? '#CDAA7D' : 'rgba(255,255,255,0.8)',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{
              background: 'rgba(3,8,15,0.98)',
              backdropFilter: 'blur(24px)',
              borderColor: 'rgba(205,170,125,0.12)',
            }}
          >
            {/* Top gold line inside drawer */}
            <div className="h-px mx-4" style={{ background: 'linear-gradient(to right, transparent, rgba(205,170,125,0.3), transparent)' }} />

            <div className="px-4 py-4 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMobileMenuOpen(false); setActiveLink(link.href); }}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl transition-all"
                  style={{
                    color: activeLink === link.href ? '#CDAA7D' : 'rgba(255,255,255,0.7)',
                    background: activeLink === link.href ? 'rgba(205,170,125,0.07)' : 'transparent',
                  }}
                  onMouseEnter={e => { if (activeLink !== link.href) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { if (activeLink !== link.href) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: activeLink === link.href ? '#CDAA7D' : 'rgba(255,255,255,0.2)' }} />
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-black text-sm tracking-wide transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #E8D5A3 0%, #CDAA7D 45%, #8B6D3A 100%)',
                    color: '#07192A',
                    boxShadow: '0 4px 16px rgba(205,170,125,0.25)',
                  }}
                >
                  <Send size={14} />
                  {t('nav.cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
