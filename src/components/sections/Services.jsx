import React from 'react';
import { servicesData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from './ServiceCard';
import { GeometricPattern } from '../common/GeometricPattern';

/** Floating faint Arabic calligraphy glyphs in the background */
const BgGlyphs = () => {
  const glyphs = [
    { ch: 'ح', x: '5%',  y: '20%', s: '5rem',   a: 'animate-glyph-drift-2' },
    { ch: 'ل', x: '85%', y: '15%', s: '5.5rem', a: 'animate-glyph-drift-3' },
    { ch: 'م', x: '10%', y: '75%', s: '6rem',   a: 'animate-glyph-drift-4' },
    { ch: 'ع', x: '82%', y: '70%', s: '4.5rem', a: 'animate-glyph-drift'   },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {glyphs.map((g, i) => (
        <span
          key={i}
          className={`absolute select-none ${g.a}`}
          style={{
            left: g.x, top: g.y, fontSize: g.s,
            color: '#CDAA7D', opacity: 0.04, lineHeight: 1,
            fontFamily: "'Aref Ruqaa', 'Cairo', cursive",
          }}
        >
          {g.ch}
        </span>
      ))}
    </div>
  );
};

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 sm:py-28 relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(180deg, #0B1019 0%, #101724 50%, #070B12 100%)' }}
    >
      {/* Distinct Top Transition Banner */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-[#061120]/70 to-transparent pointer-events-none" />

      {/* Atmospheric Background Layers */}
      <GeometricPattern opacity={0.06} color="#CDAA7D" />
      <BgGlyphs />
      <div
        className="absolute top-[15%] right-[15%] w-80 h-80 rounded-full pointer-events-none animate-breathe-orb"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[15%] left-[10%] w-96 h-96 rounded-full pointer-events-none animate-breathe-orb2"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.05) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <SectionTitle
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          badge="خدماتنا الفنية / Premium Services"
          darkTheme={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </Container>

      {/* Bottom Transition Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/30 to-transparent" />
    </section>
  );
};
