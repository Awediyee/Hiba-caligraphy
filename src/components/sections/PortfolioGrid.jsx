import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { portfolioItems } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioCard } from './PortfolioCard';
import { LightboxModal } from '../common/LightboxModal';
import { GeometricPattern } from '../common/GeometricPattern';

/** Floating faint Arabic calligraphy glyphs in the background */
const BgGlyphs = () => {
  const glyphs = [
    { ch: 'ص', x: '8%',  y: '15%', s: '5.5rem', a: 'animate-glyph-drift'   },
    { ch: 'ق', x: '82%', y: '25%', s: '6rem',   a: 'animate-glyph-drift-2' },
    { ch: 'ن', x: '15%', y: '75%', s: '5rem',   a: 'animate-glyph-drift-3' },
    { ch: 'و', x: '88%', y: '80%', s: '4.5rem', a: 'animate-glyph-drift-4' },
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

export const PortfolioGrid = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(180deg, #02050A 0%, #050B14 50%, #02050A 100%)' }}
    >
      {/* Distinct Top Transition Banner */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#03080F]/80 to-transparent pointer-events-none" />

      {/* Atmospheric Background Effects */}
      <GeometricPattern opacity={0.06} color="#CDAA7D" />
      <BgGlyphs />
      <div
        className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full pointer-events-none animate-breathe-orb"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full pointer-events-none animate-breathe-orb2"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.04) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <SectionTitle
          title={t('portfolio.title')}
          subtitle={t('portfolio.subtitle')}
          badge="معرض الإبداع / Masterworks"
          darkTheme={true}
        />

        {/* Category Filters */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Portfolio Grid — 2-col on mobile, 4-col on large */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onSelect={setSelectedItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox Preview Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Bottom Transition Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/30 to-transparent" />
    </section>
  );
};
