import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Feather } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../common/Container';
import { AnimatedSection } from '../common/AnimatedSection';
import { GeometricPattern } from '../common/GeometricPattern';

/** Floating faint Arabic calligraphy glyphs in the background */
const BgGlyphs = () => {
  const glyphs = [
    { ch: 'ف', x: '6%',  y: '20%', s: '5rem',   a: 'animate-glyph-drift-3' },
    { ch: 'ن', x: '88%', y: '15%', s: '5.5rem', a: 'animate-glyph-drift-2' },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {glyphs.map((g, i) => (
        <span
          key={i}
          className={`absolute select-none ${g.a}`}
          style={{
            left: g.x, top: g.y, fontSize: g.s,
            color: '#CDAA7D', opacity: 0.05, lineHeight: 1,
            fontFamily: "'Aref Ruqaa', 'Cairo', cursive",
          }}
        >
          {g.ch}
        </span>
      ))}
    </div>
  );
};

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Award size={24} className="text-[#CDAA7D]" />,
      value: t('about.stat1.value'),
      label: t('about.stat1.label'),
    },
    {
      icon: <Briefcase size={24} className="text-[#CDAA7D]" />,
      value: t('about.stat2.value'),
      label: t('about.stat2.label'),
    },
    {
      icon: <Users size={24} className="text-[#CDAA7D]" />,
      value: t('about.stat3.value'),
      label: t('about.stat3.label'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A192F 0%, #0D223A 50%, #061120 100%)' }}
    >
      {/* Top Transition Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#02050A]/70 to-transparent pointer-events-none" />

      {/* Subtle Geometric Pattern Overlay */}
      <GeometricPattern opacity={0.08} color="#CDAA7D" />
      <BgGlyphs />

      {/* Decorative ambient blobs */}
      <div
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-breathe-orb"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-breathe-orb2"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.06) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column (Portrait Image) */}
          <AnimatedSection animation="slide-right" className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Gold Border Ornament Ring */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-[28px] bg-gradient-to-tr from-[#CDAA7D] via-[#DFCAAB] to-[#8B6D3A] opacity-30 blur-md" />

              {/* Main Image Frame */}
              <div className="relative rounded-[22px] overflow-hidden border-2 border-[#CDAA7D]/40 shadow-2xl bg-[#061120]">
                <img
                  src="/images/artist.jpg"
                  alt="Artist Portrait - Hiba Calligraphy"
                  className="w-full h-auto aspect-[4/5] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#061120] via-[#061120]/80 to-transparent p-5 text-center">
                  <span className="text-[#CDAA7D] text-[10px] font-bold uppercase tracking-widest block mb-1">
                    فنان ومصمم خطوط / Master Calligrapher
                  </span>
                  <h4 className="text-lg font-bold text-white font-serif">
                    هبة للخط العربي
                  </h4>
                </div>
              </div>

              {/* Ink Splash Ornament */}
              <div className="absolute -bottom-5 -right-4 rtl:right-auto rtl:-left-4 bg-gradient-to-r from-[#E8D5A3] to-[#CDAA7D] text-[#07192A] px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 border border-white/20">
                <Feather size={18} />
                <span className="text-[11px] font-bold whitespace-nowrap">حبر وشغف / Pure Ink</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column (Biography & Statistics) */}
          <AnimatedSection animation="slide-left" className="lg:col-span-7 flex flex-col text-right rtl:text-right ltr:text-left mt-6 lg:mt-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 w-fit border"
              style={{ background: 'rgba(205,170,125,0.1)', borderColor: 'rgba(205,170,125,0.35)', color: '#CDAA7D' }}
            >
              <span>{t('about.title')}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight font-serif">
              {t('about.subtitle')}
            </h2>

            {/* Bio Paragraphs */}
            <p className="text-base sm:text-lg text-[#CDAA7D] font-medium leading-relaxed mb-4 font-serif">
              "{t('about.bioLead')}"
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
              {t('about.bioText1')}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-7">
              {t('about.bioText2')}
            </p>

            {/* Signature */}
            <div className="mb-8 pb-5 border-b border-white/10 flex items-center gap-5">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 mb-1">{t('about.signatureLabel')}</span>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#CDAA7D] tracking-widest hover:scale-105 transition-transform origin-right">
                  هبة الخطاط
                </span>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white/5 backdrop-blur-md border border-white/12 rounded-[18px] p-3 sm:p-5 flex flex-col items-center text-center shadow-xl hover:border-[#CDAA7D]/50 transition-all duration-300"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <span className="text-xl sm:text-3xl font-extrabold text-white font-serif">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-300 mt-1 font-medium leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Bottom Transition Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/30 to-transparent" />
    </section>
  );
};
