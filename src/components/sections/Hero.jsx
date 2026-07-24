import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/* ─────────────────────────────────────────
   DECORATIVE SUB-COMPONENTS
───────────────────────────────────────── */

/** Thin dashed geometric ring with dot markers */
const GeomRing = ({ size = 120, className = '' }) => {
  const dots = Array.from({ length: 12 });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#CDAA7D" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="3 7" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#CDAA7D" strokeWidth="0.4" strokeOpacity="0.2" />
      {dots.map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <circle key={i} cx={50 + 47 * Math.cos(a)} cy={50 + 47 * Math.sin(a)}
            r={i % 3 === 0 ? 2 : 1} fill="#CDAA7D" fillOpacity={i % 3 === 0 ? 0.55 : 0.3} />
        );
      })}
      <polygon
        points="50,5 56,36 86,26 68,50 86,74 56,64 50,95 44,64 14,74 32,50 14,26 44,36"
        fill="none" stroke="#CDAA7D" strokeWidth="0.5" strokeOpacity="0.28" strokeLinejoin="round"
      />
    </svg>
  );
};

/** Floating faint Arabic calligraphy glyphs in the background */
const BgGlyphs = () => {
  const glyphs = [
    { ch: 'ب', x: '6%',  y: '14%', s: '6rem',  a: 'animate-glyph-drift'   },
    { ch: 'ل', x: '76%', y: '8%',  s: '4.5rem', a: 'animate-glyph-drift-2' },
    { ch: 'م', x: '12%', y: '72%', s: '5rem',   a: 'animate-glyph-drift-3' },
    { ch: 'ن', x: '46%', y: '4%',  s: '3.5rem', a: 'animate-glyph-drift-4' },
    { ch: 'ح', x: '3%',  y: '46%', s: '3.5rem', a: 'animate-glyph-drift-2' },
    { ch: 'ص', x: '85%', y: '55%', s: '4rem',   a: 'animate-glyph-drift-3' },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {glyphs.map((g, i) => (
        <span
          key={i}
          className={`absolute select-none ${g.a}`}
          style={{
            left: g.x, top: g.y, fontSize: g.s,
            color: '#CDAA7D', opacity: 0.055, lineHeight: 1,
            fontFamily: "'Aref Ruqaa', 'Cairo', cursive",
          }}
        >
          {g.ch}
        </span>
      ))}
    </div>
  );
};

/** SVG ornamental vine divider */
const Vine = ({ flip = false }) => (
  <svg viewBox="0 0 280 20" className="w-full max-w-xs" style={{ transform: flip ? 'scaleX(-1)' : 'none' }} aria-hidden="true">
    <path d="M0 10 Q30 2 58 10 Q80 16 100 10 Q120 4 140 10"
      fill="none" stroke="#CDAA7D" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" className="animate-ink-draw" />
    <rect x="148" y="6" width="8" height="8" rx="1" transform="rotate(45 152 10)" fill="#CDAA7D" fillOpacity="0.55" />
    <rect x="151" y="9" width="2" height="2" rx="0.3" transform="rotate(45 152 10)" fill="#CDAA7D" fillOpacity="0.9" />
    <path d="M160 10 Q180 4 200 10 Q220 16 240 10 Q258 4 280 10"
      fill="none" stroke="#CDAA7D" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" className="animate-ink-draw" />
    {[136, 142, 162, 168].map(x => (
      <circle key={x} cx={x} cy="10" r="1.4" fill="#CDAA7D" fillOpacity="0.45" />
    ))}
  </svg>
);

/** Bottom scrolling ticker — single Quranic mercy words, always Arabic */
const MERCY_WORDS = [
  'الرَّحْمَنُ',
  'الرَّحِيمُ',
  'الرَّحْمَةُ',
  'الرَّؤُوفُ',
  'الغَفُورُ',
  'الغَفَّارُ',
  'الوَدُودُ',
  'الرَّزَّاقُ',
  'الكَرِيمُ',
  'اللَّطِيفُ',
  'السَّلاَمُ',
  'الوَهَّابُ',
  'الحَلِيمُ',
  'العَفُوُّ',
  'المُجِيبُ',
  'الوَاسِعُ',
];

const REPEATED_WORDS = [...MERCY_WORDS, ...MERCY_WORDS];

const Ticker = () => {
  return (
    <div className="overflow-hidden flex items-center w-full select-none" aria-label="Quranic words of mercy" dir="ltr">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Track Half A */}
        <div className="flex items-center flex-shrink-0">
          {REPEATED_WORDS.map((word, i) => (
            <span
              key={`a-${i}`}
              className="inline-flex items-center gap-7 px-8 sm:px-10 whitespace-nowrap"
              style={{
                fontFamily: "'Amiri', 'Tajawal', 'Cairo', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                color: '#CDAA7D',
                letterSpacing: '0.03em',
                fontWeight: 700,
                lineHeight: 1.6,
                textShadow: '0 2px 12px rgba(205,170,125,0.25)',
              }}
            >
              <span dir="rtl">{word}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#CDAA7D]/50 flex-shrink-0" />
            </span>
          ))}
        </div>

        {/* Track Half B (100% identical clone for seamless 50% endless loop) */}
        <div className="flex items-center flex-shrink-0" aria-hidden="true">
          {REPEATED_WORDS.map((word, i) => (
            <span
              key={`b-${i}`}
              className="inline-flex items-center gap-7 px-8 sm:px-10 whitespace-nowrap"
              style={{
                fontFamily: "'Amiri', 'Tajawal', 'Cairo', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                color: '#CDAA7D',
                letterSpacing: '0.03em',
                fontWeight: 700,
                lineHeight: 1.6,
                textShadow: '0 2px 12px rgba(205,170,125,0.25)',
              }}
            >
              <span dir="rtl">{word}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#CDAA7D]/50 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN HERO COMPONENT
───────────────────────────────────────── */
export const Hero = () => {
  const { isRtl, t } = useLanguage();

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  });

  const stats = [
    { value: '+4',  label: t('hero.stat1.label') },
    { value: '+50', label: t('hero.stat2.label') },
    { value: '+50', label: t('hero.stat3.label') },
  ];

  const specialties = [t('hero.service1.title'), t('hero.service2.title')];

  return (
    /*
     * KEY FIX 1: h-screen + overflow-hidden → locks entire section to exactly 100vh.
     * flex-col makes ticker sit at the bottom within that 100vh.
     */
    <section
      id="home"
      className="relative w-full overflow-hidden flex flex-col"
      style={{
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        background: 'linear-gradient(135deg, #03080F 0%, #060D1A 45%, #08101E 100%)',
      }}
    >

      {/* ═══════════════════════════════════════
          MAIN BODY — fills all space above ticker
      ═══════════════════════════════════════ */}
      <div
        className={`relative flex flex-col lg:flex-row flex-1 min-h-0 ${isRtl ? 'lg:flex-row-reverse' : ''}`}
      >

        {/* ─────────── CONTENT PANEL (left/main) ─────────── */}
        <div className="relative flex flex-col justify-center lg:w-[58%] px-6 sm:px-10 lg:px-14 xl:px-20 pt-20 pb-4 lg:pt-0 lg:pb-0 z-10 flex-shrink-0">

          <BgGlyphs />

          {/* Giant faint "ب" watermark */}
          <span
            className="absolute select-none pointer-events-none font-arabic animate-glyph-drift-4"
            style={{
              fontSize: 'clamp(12rem, 22vw, 28rem)',
              color: '#CDAA7D', opacity: 0.022,
              fontFamily: "'Aref Ruqaa', cursive",
              right: isRtl ? 'auto' : '-6%',
              left: isRtl ? '-6%' : 'auto',
              top: '50%', transform: 'translateY(-50%)',
              lineHeight: 1, pointerEvents: 'none',
            }}
            aria-hidden="true"
          >ب</span>

          {/* Gold breathing orbs */}
          <div className="absolute top-[15%] right-[20%] w-72 h-72 rounded-full pointer-events-none animate-breathe-orb"
            style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-[10%] left-[5%] w-56 h-56 rounded-full pointer-events-none animate-breathe-orb2"
            style={{ background: 'radial-gradient(circle, rgba(30,136,229,0.05) 0%, transparent 70%)' }} />

          {/* Rotating geometric ring */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-6 animate-rotate-ccw opacity-10 hidden xl:block" aria-hidden="true">
            <GeomRing size={240} />
          </div>

          {/* ── Content ── */}
          <div className={`relative z-10 max-w-[560px] ${isRtl ? 'ml-auto text-right' : 'text-left'}`}>


            {/* Badge pill */}
            <motion.div {...fadeUp(0.1)} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}
              style={{ background: 'rgba(205,170,125,0.06)', borderColor: 'rgba(205,170,125,0.28)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CDAA7D] animate-pulse" />
              <span className="text-[#CDAA7D] text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Main heading — distinct design, size, and color contrast */}
            <div className="mb-3 overflow-hidden">
              <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.6 }}
                className="leading-[1.05] tracking-tight">
                {/* titleMain: Subdued, elegant uppercase tag/pre-title in soft gold tint */}
                <motion.span
                  initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#DFCAAB]/85 text-base sm:text-xl lg:text-2xl font-semibold tracking-[0.08em] uppercase mb-1 font-sans"
                >
                  {t('hero.titleMain')}
                </motion.span>

                {/* titleName: Bold, magnificent hero title in radiant gold shimmer with drop-shadow glow */}
                <motion.span
                  initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.34, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-serif font-black animate-gold-shimmer text-3xl sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-[0_4px_25px_rgba(205,170,125,0.3)]"
                >
                  {t('hero.titleName')}
                </motion.span>
              </motion.h1>
            </div>

            {/* Arabic subtitle */}
            <motion.div {...fadeUp(0.46)} className={`flex items-center gap-3 my-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="h-px w-6 bg-[#CDAA7D]/40" />
              <span className="font-arabic text-base sm:text-lg"
                style={{ fontFamily: "'Aref Ruqaa', cursive", color: 'rgba(205,170,125,0.6)' }}>
                الفنانة هبة
              </span>
              <div className="h-px w-6 bg-[#CDAA7D]/25" />
              <span className="text-[#CDAA7D]/45 text-sm">✦</span>
              <div className="h-px flex-1 max-w-[70px] bg-gradient-to-r from-[#CDAA7D]/18 to-transparent" />
            </motion.div>

            {/* Ornamental vine divider */}
            <motion.div {...fadeUp(0.5)} className="mb-4">
              <Vine flip={isRtl} />
            </motion.div>

            {/* Specialty chips */}
            <motion.div {...fadeUp(0.55)} className={`flex flex-wrap gap-2 mb-5 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
              {specialties.map((s, i) => (
                <span key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border text-gray-300 tracking-wide"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.09)' }}>
                  <span className="w-1 h-1 rounded-full bg-[#CDAA7D] inline-block" />
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.67)} className={`flex flex-wrap gap-3 mb-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <a href="#portfolio"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(205,170,125,0.35)] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #E8D5A3 0%, #CDAA7D 45%, #8B6D3A 100%)',
                  color: '#07192A', boxShadow: '0 4px 18px rgba(205,170,125,0.2)',
                }}>
                {isRtl && <ArrowLeft size={14} />}
                {t('hero.btnExplore')}
                {!isRtl && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />}
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white border transition-all duration-300 hover:scale-[1.03] hover:border-white/25 active:scale-[0.98]"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}>
                <MessageCircle size={14} style={{ color: '#CDAA7D' }} />
                {t('hero.btnContact')}
              </a>
            </motion.div>

            {/* Stats — glassmorphism pills */}
            <motion.div {...fadeUp(0.8)} className={`flex flex-wrap gap-2.5 items-center ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
              {stats.map((s, i) => (
                <div key={i}
                  className="flex flex-col items-center px-4 py-2.5 rounded-2xl border backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(205,170,125,0.14)' }}>
                  <span className="text-xl sm:text-2xl font-black leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #DFCAAB 0%, #CDAA7D 60%, #9B7746 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                    {s.value}
                  </span>
                  <span className="text-gray-500 text-[9px] sm:text-[10px] tracking-wide mt-0.5 font-medium">{s.label}</span>
                </div>
              ))}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 ml-1">
                <Award size={11} style={{ color: '#CDAA7D' }} />
                <span className="max-w-[120px] leading-snug text-[10px]">{t('hero.badgeExperience')}</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ─────────── IMAGE PANEL — right side ─────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          /*
           * FIX 2: No 'order-first' → image comes second in DOM → RIGHT side on desktop.
           * FIX 3: Narrower on desktop (36%), shorter on mobile (32vh).
           */
          className={`relative flex-shrink-0 w-full lg:w-[36%] hero-img-panel`}
        >
          <style>{`
            .hero-img-panel { height: 32vh; }
            @media(min-width:1024px){ .hero-img-panel { height: 100%; } }
          `}</style>

          <div className="relative w-full overflow-hidden" style={{ height: '100%' }}>
            <img
              src="/images/hero_caligrapy.jpg"
              alt="Arabic Calligraphy Artwork by Hiba"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 10%' }}
            />

            {/* Fade: left edge blends into content panel */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: isRtl
                  ? 'linear-gradient(to left, #06101D 0%, rgba(6,16,29,0.28) 12%, transparent 36%)'
                  : 'linear-gradient(to right, #06101D 0%, rgba(6,16,29,0.28) 12%, transparent 36%)',
              }} />

            {/* Top + bottom fades */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(3,8,15,0.55) 0%, transparent 18%, transparent 68%, rgba(3,8,15,0.92) 100%)' }} />

            {/* Mobile darkening */}
            <div className="absolute inset-0 lg:hidden pointer-events-none" style={{ background: 'rgba(3,8,15,0.3)' }} />

            {/*
             * FIX 1: Bismillah — clear the navbar height (~54px) on both mobile and desktop.
             * top-16 = 64px ensures it's always below the fixed navbar.
             */}
            <motion.div
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-2xl border backdrop-blur-md whitespace-nowrap z-10"
              style={{ background: 'rgba(3,8,15,0.82)', borderColor: 'rgba(205,170,125,0.4)', boxShadow: '0 4px 20px rgba(0,0,0,0.45)' }}
            >
              <span className="font-arabic text-sm"
                style={{ fontFamily: "'Aref Ruqaa', cursive", color: '#CDAA7D', letterSpacing: '0.05em' }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </span>
            </motion.div>

            {/* Left border rule (separator between panels) */}
            <div className="absolute top-0 bottom-0 pointer-events-none hidden lg:block"
              style={{
                left: 0, width: '1px',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(205,170,125,0.3) 25%, rgba(205,170,125,0.3) 75%, transparent 100%)',
              }} />

            {/* Rotating ring ornament */}
            <div className="absolute top-20 right-5 animate-rotate-fast opacity-20 hidden lg:block z-10" aria-hidden="true">
              <GeomRing size={64} />
            </div>

            {/* Bottom floating card — desktop only to avoid clutter on small strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[82%] max-w-[220px] p-3 rounded-2xl border backdrop-blur-md z-10 hidden lg:block"
              style={{
                background: 'rgba(3,8,15,0.9)',
                borderColor: 'rgba(205,170,125,0.28)',
                boxShadow: '0 16px 44px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CDAA7D] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CDAA7D]" />
                </span>
                <span className="text-white text-xs font-bold tracking-wide">{t('hero.floatingTag')}</span>
              </div>
              <p className="text-gray-500 text-[10px] leading-relaxed">{t('hero.badgeExperience')}</p>
            </motion.div>
          </div>
        </motion.div>


      </div>{/* /main body */}

      {/* ═══════════════════════════════════════
          BOTTOM TICKER — anchored at bottom of 100vh, full width
      ═══════════════════════════════════════ */}
      <div
        className="relative z-20 flex-shrink-0 border-t py-3 w-full overflow-hidden flex items-center"
        style={{ borderColor: 'rgba(205,170,125,0.18)', background: 'rgba(205,170,125,0.03)' }}
      >
        <Ticker />
      </div>

    </section>
  );
};
