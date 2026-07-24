import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.portfolio': 'أعمالي',
    'nav.about': 'عني',
    'nav.services': 'الخدمات',
    'nav.testimonials': 'آراء العملاء',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بي',
    'nav.cta': 'اطلب عملاً',
    'nav.brandTitle': 'هبة للخط العربي',
    'nav.brandSubtitle': 'فن وتراث أصيل',

    // Hero Section
    'hero.badge': 'متخصصة في فن كتابة الخط العربي الأصيل',
    'hero.titleMain': 'فن كتابة الخط العربي',
    'hero.titleName': 'هبة الخطاط',
    'hero.titleSub': 'أصالة الحرف وجمال الكتابة',
    'hero.description': 'أحيي جمال فن كتابة الخط العربي بخطوط أصيلة كالثلث والديواني والكوفي والنسخ، برؤية فنية معاصرة تجمع بين دقة قواعد الخط الكلاسيكي وجماليات التكوين الخطّي الحديث.',
    'hero.service1.title': 'كتابة الآيات القرآنية',
    'hero.service1.desc': 'بخط يدوي أصيل بالثلث والنسخ',
    'hero.service2.title': 'كتابة أي نص عربي',
    'hero.service2.desc': 'شعارات، لوحات، مخطوطات، هدايا',
    'hero.btnExplore': 'استكشف أعمالي الخطية',
    'hero.btnContact': 'تواصل معي',
    'hero.badgeExperience': 'خبرة 4 أعوام في فن كتابة الخط العربي الأصيل',
    'hero.floatingTag': 'خط يدوي أصيل',
    'hero.stat1.label': 'سنوات',
    'hero.stat2.label': 'عمل',
    'hero.stat3.label': 'عميل',

    // Portfolio Section
    'portfolio.title': 'أعمالي الخطية',
    'portfolio.subtitle': 'تشكيلة مختارة من أحدث اللوحات والشعارات والمخطوطات والتكوينات في فن الخط العربي',
    'portfolio.filter.all': 'الكل',
    'portfolio.filter.paintings': 'لوحات خطية',
    'portfolio.filter.logos': 'شعارات خطية',
    'portfolio.filter.manuscripts': 'مخطوطات كلاسيكية',
    'portfolio.filter.digital': 'تكوينات وخط رقمي',
    'portfolio.card.view': 'عرض العمل',
    'portfolio.card.lightboxTitle': 'تفاصيل العمل الخطّي',

    // About Section
    'about.title': 'عني',
    'about.subtitle': 'رحلة شغف في فن كتابة الخط العربي والزخرفة الإسلامية',
    'about.bioLead': 'أنا هبة، متخصصة حصراً في فن كتابة الخط العربي الكلاسيكي بخطوطه الأصيلة من ثلث وديواني وكوفي ونسخ.',
    'about.bioText1': 'على مدار 4 سنوات من العمل المتواصل، أبتكر لوحات ومخطوطات وشعارات خطية يدوية تعكس جمال الحرف العربي وعمق تراثه الكتابي.',
    'about.bioText2': 'أؤمن بأن الخط العربي ليس مجرد كتابة، بل هو فن يحكي قصة حضارة وهوية، وكل حرف يُكتب هو نبضة جمال.',
    'about.stat1.value': '+4',
    'about.stat1.label': 'سنوات في كتابة الخط',
    'about.stat2.value': '+50',
    'about.stat2.label': 'عمل خطّي يدوي',
    'about.stat3.value': '+50',
    'about.stat3.label': 'عميل راضٍ',
    'about.signatureLabel': 'توقيع الخطاط',

    // Services Section
    'services.title': 'خدماتي الخطية',
    'services.subtitle': 'خدمات متخصصة حصرياً في كتابة الخط العربي وتصميم الأعمال الخطية الراقية',
    'services.service1.title': 'تصميم شعارات خطية',
    'services.service1.desc': 'ابتكار مونوغرامات وشعارات بخطوط عربية أصيلة تعكس الأصالة والتميز للمؤسسات والشركات.',
    'services.service2.title': 'لوحات وأعمال خطية',
    'services.service2.desc': 'كتابة ورسم لوحات جدارية أصيلة بخط الثلث والديواني والكوفي بالذهب وحبر الشمط للمقتنيين والمنازل الفاخرة.',
    'services.service3.title': 'مخطوطات وكتابة فاخرة',
    'services.service3.desc': 'كتابة المخطوطات والآيات القرآنية والقصائد وعناوين الكتب بدقة وفق قواعد الخط العربي الصارمة.',
    'services.btnOrder': 'طلب الخدمة الخطية',

    // Testimonials Section
    'testimonials.title': 'آراء العملاء',
    'testimonials.subtitle': 'شهادات نعتز بها من عملاء اقتنوا أعمالنا واستمتعوا بتجربتنا',

    // Contact Section
    'contact.title': 'اتصل بي',
    'contact.subtitle': 'هل لديك مشروع خطّي أو ترغب في اقتناء لوحة بخط اليد؟ يسعدني التواصل معك',
    'contact.info.phone': 'الهاتف / واتساب',
    'contact.info.phoneValue': '+251902451206',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.emailValue': 'contact@hibacalligraphy.com',
    'contact.info.location': 'الموقع',
    'contact.info.locationValue': 'أديس أبابا، إثيوبيا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.namePlaceholder': 'أدخل اسمك الكريم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'example@domain.com',
    'contact.form.service': 'نوع الخدمة الخطية المطلوبة',
    'contact.form.serviceSelect': 'اختر الخدمة الخطية',
    'contact.form.message': 'تفاصيل الطلب أو الرسالة',
    'contact.form.messagePlaceholder': 'اكتب تفاصيل النص أو اللوحة الخطية المطلوبة هنا...',
    'contact.form.submit': 'إرسال الطلب الآن',
    'contact.form.successTitle': 'تم إرسال رسالتك بنجاح!',
    'contact.form.successDesc': 'شكراً لتواصلك. سأقوم بالرد عليك في أقرب وقت ممكن.',
    'contact.mapPlaceholder': 'موقع الاستوديو - أديس أبابا، إثيوبيا',

    // Footer
    'footer.brandDescription': 'هبة للخط العربي — متخصصة في فن كتابة الخط العربي الكلاسيكي اليدوي بخطوط الثلث والديواني والكوفي والنسخ. أديس أبابا، إثيوبيا.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.servicesTitle': 'الخدمات الفنية',
    'footer.newsletterTitle': 'النشرة البريدية',
    'footer.newsletterDesc': 'اشترك لتصلك أحدث اللوحات والأعمال الخطية المعروضة للاقتناء.',
    'footer.newsletterPlaceholder': 'بريدك الإلكتروني...',
    'footer.newsletterBtn': 'اشترك',
    'footer.rights': 'جميع الحقوق محفوظة © 2026 هبة للخط العربي Hiba Calligraphy.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Order now',
    'nav.brandTitle': 'Hiba Calligraphy',
    'nav.brandSubtitle': 'Authentic Arabic Art',

    // Hero Section
    'hero.badge': 'Specialist in Authentic Arabic Calligraphy',
    'hero.titleMain': 'The Art of Arabic Calligraphy',
    'hero.titleName': 'Hiba  Calligrapher',
    'hero.titleSub': 'Elegance of Letters & Heritage',
    'hero.description': 'Bringing to life the timeless beauty of Arabic script using classic Thuluth, Diwani, Kufic, and Naskh styles, infused with a modern artistic vision.',
    'hero.service1.title': 'Quranic Verses & Manuscripts',
    'hero.service1.desc': 'Handwritten in Thuluth & Naskh with gold leafing',
    'hero.service2.title': 'Custom Calligraphy Design',
    'hero.service2.desc': 'Logos, artworks, manuscripts & luxury gifts',
    'hero.btnExplore': 'Explore Portfolio',
    'hero.btnContact': 'Get in Touch',
    'hero.badgeExperience': '4 Years of Master Calligraphy Experience',
    'hero.floatingTag': 'Handcrafted Calligraphy',
    'hero.stat1.label': 'Years',
    'hero.stat2.label': 'Artworks',
    'hero.stat3.label': 'Clients',

    // Portfolio Section
    'portfolio.title': 'Calligraphy Masterworks',
    'portfolio.subtitle': 'A curated collection of recent paintings, calligraphic logos, and classical manuscripts',
    'portfolio.filter.all': 'All',
    'portfolio.filter.paintings': 'Paintings',
    'portfolio.filter.logos': 'Logos',
    'portfolio.filter.manuscripts': 'Manuscripts',
    'portfolio.filter.digital': 'Digital Art',
    'portfolio.card.view': 'View Artwork',
    'portfolio.card.lightboxTitle': 'Calligraphy Artwork Details',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'A Passionate Journey in Arabic Calligraphy & Islamic Illumination',
    'about.bioLead': 'I am Hiba, a calligrapher dedicated exclusively to classic Arabic calligraphy styles including Thuluth, Diwani, Kufic, and Naskh.',
    'about.bioText1': 'Over 4 years of continuous practice, I create bespoke paintings, illuminated manuscripts, and brand logos that celebrate the profound depth of Arabic script.',
    'about.bioText2': 'I believe Arabic calligraphy is not merely writing—it is a visual melody of heritage, culture, and pure artistic elegance.',
    'about.stat1.value': '+4',
    'about.stat1.label': 'Years Experience',
    'about.stat2.value': '+50',
    'about.stat2.label': 'Master Calligraphy Artworks',
    'about.stat3.value': '+50',
    'about.stat3.label': 'Happy Clients',
    'about.signatureLabel': 'Master Signature',

    // Services Section
    'services.title': 'My Services',
    'services.subtitle': 'Bespoke artistic services crafted exclusively in authentic Arabic calligraphy',
    'services.service1.title': 'Calligraphic Logo Design',
    'services.service1.desc': 'Creating custom Arabic monograms and logos blending classical geometry with contemporary luxury branding.',
    'services.service2.title': 'Fine Art Paintings',
    'services.service2.desc': 'Original wall paintings crafted with handmade parchment paper, natural ink, and 24K gold leaf.',
    'services.service3.title': 'Classical Manuscripts',
    'services.service3.desc': 'Transcribing sacred verses, poetry, book titles, and certificates following strict traditional rules.',
    'services.btnOrder': 'Request Service',

    // Testimonials Section
    'testimonials.title': 'Client Reviews',
    'testimonials.subtitle': 'Kind words from art collectors and clients around the world',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Have a calligraphy project or wish to acquire an original painting? I would love to hear from you.',
    'contact.info.phone': 'Phone / WhatsApp',
    'contact.info.phoneValue': '+251902451206',
    'contact.info.email': 'Email',
    'contact.info.emailValue': 'contact@hibacalligraphy.com',
    'contact.info.location': 'Location',
    'contact.info.locationValue': 'Addis Ababa, Ethiopia',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'example@domain.com',
    'contact.form.service': 'Requested Calligraphy Service',
    'contact.form.serviceSelect': 'Select a Service',
    'contact.form.message': 'Project Details or Message',
    'contact.form.messagePlaceholder': 'Describe your text or desired calligraphy artwork here...',
    'contact.form.submit': 'Send Inquiry Now',
    'contact.form.successTitle': 'Message Sent Successfully!',
    'contact.form.successDesc': 'Thank you for reaching out. I will reply to your inquiry as soon as possible.',
    'contact.mapPlaceholder': 'Studio Location - Addis Ababa, Ethiopia',

    // Footer
    'footer.brandDescription': 'Hiba Calligraphy — Dedicated to authentic classical Arabic calligraphy in Thuluth, Diwani, Kufic, and Naskh scripts. Based in Addis Ababa, Ethiopia.',
    'footer.quickLinks': 'Quick Links',
    'footer.servicesTitle': 'Artistic Services',
    'footer.newsletterTitle': 'Newsletter',
    'footer.newsletterDesc': 'Subscribe to receive updates on new artworks available for acquisition.',
    'footer.newsletterPlaceholder': 'Your email address...',
    'footer.newsletterBtn': 'Subscribe',
    'footer.rights': 'All rights reserved © 2026 Hiba Calligraphy.',
  },
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.portfolio': 'ሥራዎቼ',
    'nav.about': 'ስለ እኔ',
    'nav.services': 'አገልግሎቶች',
    'nav.testimonials': 'የደንበኞች አስተያየት',
    'nav.blog': 'ብሎግ',
    'nav.contact': 'አግኙኝ',
    'nav.cta': 'ሥራ ይዘዙ',
    'nav.brandTitle': 'ሂባ የአረብኛ ካሊግራፊ',
    'nav.brandSubtitle': 'የአረብኛ የጽሑፍ ጥበብ',

    // Hero Section
    'hero.badge': 'የአረብኛ ካሊግራፊ (የጽሑፍ ጥበብ) ባለሙያ',
    'hero.titleMain': 'የአረብኛ ካሊግራፊ ጥበብ',
    'hero.titleName': 'ሂባ  ካሊግራፈር',
    'hero.titleSub': 'ውብ የእጅ ጽሑፍ፣ ጥንታዊ ቅርስ',
    'hero.description': 'የአረብኛ ካሊግራፊ — የፊደላት ጥበብ — በሱሉስ፣ ዲዋኒ፣ ኩፊ እና ናስክ ዘይቤዎች። ጥንታዊ የጽሑፍ ደንቦችን ከዘመናዊ ውበት ጋር በማቀናጀት ልዩ ሥራዎችን እፈጥራለሁ።',
    'hero.service1.title': 'የቁርዓን አንቀጾች መጻፍ',
    'hero.service1.desc': 'በሱሉስ እና ናስክ ዘይቤ በእጅ',
    'hero.service2.title': 'ማንኛውም የአረብኛ ጽሑፍ',
    'hero.service2.desc': 'ሎጎ፣ ስዕሎች፣ ጽሑፎች፣ ስጦታ',
    'hero.btnExplore': 'ሥራዎቼን ይመልከቱ',
    'hero.btnContact': 'ያግኙኝ',
    'hero.badgeExperience': '4 ዓመት የአረብኛ ካሊግራፊ ልምድ',
    'hero.floatingTag': 'እጅ የተጻፈ ካሊግራፊ',
    'hero.stat1.label': 'ዓመታት',
    'hero.stat2.label': 'ሥራዎች',
    'hero.stat3.label': 'ደንበኞች',

    // Portfolio Section
    'portfolio.title': 'ሥራዎቼ',
    'portfolio.subtitle': 'የተመረጡ የቅርብ ጊዜ የካሊግራፊ ስዕሎች፣ ሎጎዎች እና ጥንታዊ ጽሑፎች',
    'portfolio.filter.all': 'ሁሉም',
    'portfolio.filter.paintings': 'ስዕሎች',
    'portfolio.filter.logos': 'ሎጎዎች',
    'portfolio.filter.manuscripts': 'ጽሑፎች',
    'portfolio.filter.digital': 'ዲጂታል ንድፎች',
    'portfolio.card.view': 'ሥራውን ይመልከቱ',
    'portfolio.card.lightboxTitle': 'የጥበብ ሥራ ዝርዝር',

    // About Section
    'about.title': 'ስለ እኔ',
    'about.subtitle': 'የአረብኛ ካሊግራፊ (የጽሑፍ ጥበብ) ለ4 ዓመታት',
    'about.bioLead': 'እኔ ሂባ ነኝ፤ በአረብኛ ካሊግራፊ — የፊደላት ጥበብ — ብቻ የተካንኩ ባለሙያ።',
    'about.bioText1': 'ላለፉት 4 ዓመታት የሱሉስ፣ ዲዋኒ፣ ኩፊ እና ናስክ ዘይቤዎችን በቅርቡ እጅ እጽፋለሁ። ከ50 በላይ ሥራዎችን አዲስ አበባ ከምትኖሩ ደንበኞች ጋር አሠርቻለሁ።',
    'about.bioText2': 'እያንዳንዱ የአረብኛ ፊደል ልዩ ውበትና ታሪክ አለው — ካሊግራፊ ጽሑፍ ሳይሆን ጥበብ ነው።',
    'about.stat1.value': '+4',
    'about.stat1.label': 'ዓመታት ልምድ',
    'about.stat2.value': '+50',
    'about.stat2.label': 'የካሊግራፊ ሥራዎች',
    'about.stat3.value': '+50',
    'about.stat3.label': 'ደስተኛ ደንበኞች',
    'about.signatureLabel': 'የካሊግራፈር ፊርማ',

    // Services Section
    'services.title': 'አገልግሎቶቼ',
    'services.subtitle': 'ለግለሰቦች እና ድርጅቶች የቀረቡ ጥራት ያላቸው የጥበብ አገልግሎቶች',
    'services.service1.title': 'የሎጎ ንድፍ',
    'services.service1.desc': 'ለድርጅቶች እና ኩባንያዎች ልዩ የአረብኛ ካሊግራፊ ሎጎዎችን እና ምልክቶችን ማዘጋጀት።',
    'services.service2.title': 'የጥበብ ስዕሎች',
    'services.service2.desc': 'በ24 ካራት ወርቅ እና በተፈጥሮ ቀለሞች የተሰሩ የቤት እና የጋለሪ ስዕሎች።',
    'services.service3.title': 'የካሊግራፊ ጽሑፎች',
    'services.service3.desc': 'የቁርዓን አንቀጾች እና መጽሐፍት ርዕሶችን በትክክለኛው የካሊግራፊ ደንብ መጻፍ።',
    'services.btnOrder': 'አገልግሎቱን ይዘዙ',

    // Testimonials Section
    'testimonials.title': 'የደንበኞች አስተያየት',
    'testimonials.subtitle': 'የጥበብ ሥራዎቻችንን የገዙ ደንበኞች የሰጡት ምስክርነት',

    // Contact Section
    'contact.title': 'አግኙኝ',
    'contact.subtitle': 'የጥበብ ሥራ ማዘዝ ይፈልጋሉ? ደስ ብሎኝ አናግራችኋለሁ',
    'contact.info.phone': 'ስልክ / ዋትስአፕ',
    'contact.info.phoneValue': '+251902451206',
    'contact.info.email': 'ኢሜይል',
    'contact.info.emailValue': 'contact@hibacalligraphy.com',
    'contact.info.location': 'አድራሻ',
    'contact.info.locationValue': 'አዲስ አበባ፣ ኢትዮጵያ',
    'contact.form.name': 'ሙሉ ስም',
    'contact.form.namePlaceholder': 'ሙሉ ስምዎን ያስገቡ',
    'contact.form.email': 'ኢሜይል አድራሻ',
    'contact.form.emailPlaceholder': 'example@domain.com',
    'contact.form.service': 'የሚፈልጉት አገልግሎት',
    'contact.form.serviceSelect': 'አገልግሎት ይምረጡ',
    'contact.form.message': 'የመልእክት ዝርዝር',
    'contact.form.messagePlaceholder': 'ስለሚፈልጉት ሥራ ዝርዝር ይጻፉ...',
    'contact.form.submit': 'መልእክቱን ላክ',
    'contact.form.successTitle': 'መልእክትዎ በስኬት ተልኳል!',
    'contact.form.successDesc': 'ስላገኙን እናመሰግናለን። በቅርቡ እንመልስልዎታለን።',
    'contact.mapPlaceholder': 'የካሊግራፊ ስቱዲዮ - አዲስ አበባ፣ ኢትዮጵያ',

    // Footer
    'footer.brandDescription': 'ሂባ ካሊግራፊ — የአረብኛ ካሊግራፊ (የጽሑፍ ጥበብ) ስቱዲዮ። አዲስ አበባ፣ ኢትዮጵያ። ሱሉስ፣ ዲዋኒ፣ ኩፊ እና ናስክ ዘይቤዎች።',
    'footer.quickLinks': 'ፈጣን ሊንኮች',
    'footer.servicesTitle': 'የጥበብ አገልግሎቶች',
    'footer.newsletterTitle': 'የዜና መጽሔት',
    'footer.newsletterDesc': 'አዳዲስ የካሊግራፊ ሥራዎችን ለማየት በኢሜይል ይመዝገቡ።',
    'footer.newsletterPlaceholder': 'ኢሜይልዎ...',
    'footer.newsletterBtn': 'ተመዝገብ',
    'footer.rights': 'መብቱ በህግ የተጠበቀ ነው © 2026 ሂባ ካሊግራፊ Hiba Calligraphy።',
  }
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => {
      if (prev === 'ar') return 'en';
      if (prev === 'en') return 'am';
      return 'ar';
    });
  };

  const setLanguage = (newLang) => {
    if (['ar', 'en', 'am'].includes(newLang)) {
      setLang(newLang);
    }
  };

  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || translations['ar']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
