import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Map } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { AnimatedSection } from '../common/AnimatedSection';
import { GeometricPattern } from '../common/GeometricPattern';

/** Floating faint Arabic calligraphy glyphs in the background */
const BgGlyphs = () => {
  const glyphs = [
    { ch: 'ك', x: '7%',  y: '18%', s: '5rem',   a: 'animate-glyph-drift-3' },
    { ch: 'ط', x: '88%', y: '25%', s: '5.5rem', a: 'animate-glyph-drift-4' },
    { ch: 'م', x: '12%', y: '80%', s: '6rem',   a: 'animate-glyph-drift'   },
    { ch: 'هـ', x: '84%', y: '75%', s: '4.5rem', a: 'animate-glyph-drift-2' },
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

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', serviceType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  const contactCards = [
    {
      icon: <Phone size={20} className="text-[#CDAA7D]" />,
      title: t('contact.info.phone'),
      value: t('contact.info.phoneValue'),
      href: 'tel:+251902451206'
    },
    {
      icon: <Mail size={20} className="text-[#CDAA7D]" />,
      title: t('contact.info.email'),
      value: t('contact.info.emailValue'),
      href: 'mailto:contact@hibacalligraphy.com'
    },
    {
      icon: <MapPin size={20} className="text-[#CDAA7D]" />,
      title: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      href: '#map'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(160deg, #03070E 0%, #070F1C 50%, #02050A 100%)' }}
    >
      {/* Distinct Top Transition Banner */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/40 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-[#070B12]/80 to-transparent pointer-events-none" />

      {/* Atmospheric Background Layers */}
      <GeometricPattern opacity={0.06} color="#CDAA7D" />
      <BgGlyphs />
      <div
        className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full pointer-events-none animate-breathe-orb"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full pointer-events-none animate-breathe-orb2"
        style={{ background: 'radial-gradient(circle, rgba(205,170,125,0.04) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          badge="تواصل مباشر / Direct Inquiry"
          darkTheme={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Contact Form */}
          <AnimatedSection animation="slide-right" className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-[24px] p-6 sm:p-8 shadow-2xl border border-white/12 relative">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">{t('contact.form.successTitle')}</h5>
                    <p className="text-xs mt-0.5 text-emerald-300">{t('contact.form.successDesc')}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:border-[#CDAA7D] focus:bg-white/10 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:border-[#CDAA7D] focus:bg-white/10 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-[14px] bg-[#070F1C] border border-white/15 text-white focus:border-[#CDAA7D] focus:outline-none transition-all duration-300 text-sm"
                  >
                    <option value="" className="bg-[#070F1C] text-gray-400">{t('contact.form.serviceSelect')}</option>
                    <option value="logo" className="bg-[#070F1C] text-white">{t('services.service1.title')}</option>
                    <option value="painting" className="bg-[#070F1C] text-white">{t('services.service2.title')}</option>
                    <option value="manuscript" className="bg-[#070F1C] text-white">{t('services.service3.title')}</option>
                  </select>
                </div>

                {/* Message TextArea */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-[14px] bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:border-[#CDAA7D] focus:bg-white/10 focus:outline-none transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  variant="gold"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center text-sm font-bold"
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? 'جاري الإرسال...' : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Right Column: Contact Cards & Map */}
          <AnimatedSection animation="slide-left" className="lg:col-span-5 space-y-4 sm:space-y-5">
            {/* Info Cards */}
            {contactCards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="flex items-center gap-4 bg-white/[0.04] backdrop-blur-md p-4 sm:p-5 rounded-[18px] border border-white/12 shadow-lg hover:shadow-xl hover:border-[#CDAA7D]/50 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0 border"
                  style={{
                    background: 'rgba(205,170,125,0.1)',
                    borderColor: 'rgba(205,170,125,0.3)',
                  }}
                >
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                    {card.title}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white font-serif group-hover:text-[#CDAA7D] transition-colors truncate block">
                    {card.value}
                  </span>
                </div>
              </a>
            ))}

            {/* Embedded Google Map */}
            <div id="map" className="relative bg-[#02050A] rounded-[20px] overflow-hidden p-4 sm:p-5 border border-[#CDAA7D]/35 shadow-2xl text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Map className="text-[#CDAA7D]" size={18} />
                  <h4 className="font-bold text-sm font-serif text-[#CDAA7D]">
                    {t('contact.mapPlaceholder')}
                  </h4>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CDAA7D] animate-ping flex-shrink-0" />
              </div>

              <div className="relative rounded-xl overflow-hidden h-40 sm:h-48 bg-[#070F1C] border border-white/10">
                <iframe
                  title="Studio Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126765.74619710842!2d38.6521!3d9.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000001"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Bottom Transition Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CDAA7D]/30 to-transparent" />
    </section>
  );
};
