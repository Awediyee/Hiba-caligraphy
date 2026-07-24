import { writeFileSync } from 'fs';

const portfolioItems = [
  {
    id: '1',
    title: { ar: 'لوحة فن الحروف الذهب - نداء الروح', am: 'የወርቅ ፊደላት ጥበብ - የነፍስ ጥሪ' },
    category: 'paintings',
    categoryLabel: { ar: 'لوحات خطية', am: 'የካሊግራፊ ስዕሎች' },
    image: '/images/art_1.jpg',
    description: {
      ar: 'لوحة فنية فاخرة بخط الثلث الجلي المركّب ومطعمة بذهب عيار 24 على خلفية نيلية ملكية ملهمة من الزخرفة الإسلامية.',
      am: 'በ24 ካራት ወርቅ የተለበጠ እና በጥንታዊ ሱሉስ የካሊግራፊ ዘይቤ በንጉሣዊ ሰማያዊ ዳራ ላይ የተሰራ የጥበብ ስዕል።'
    },
    details: { scriptType: 'ثلث جلي مركّب / Jali Thuluth', dimensions: '120 x 90 cm', year: '2025', client: 'المتحف الفني الخاص / Private Collection' }
  },
  {
    id: '2',
    title: { ar: 'مونوغرام هبة - شعار خطي فاخر', am: 'የሂባ ሎጎ - የካሊግራፊ ምልክት' },
    category: 'logos',
    categoryLabel: { ar: 'شعارات خطية', am: 'የካሊግራፊ ሎጎዎች' },
    image: '/images/art_2.jpg',
    description: {
      ar: 'تصميم شعار ومونوغرام هندسي خطي يدمج بين خط الكوفي المربع والتجريد الحديث لمؤسسة فاخرة.',
      am: 'የኩፊ አረብኛ ካሊግራፊን እና ዘመናዊ የወርቅ ንድፍን ያቀናጀ የሎጎ ንድፍ።'
    },
    details: { scriptType: 'كوفي مربع معاصر / Square Kufic', dimensions: 'Vector Branding', year: '2025' }
  },
  {
    id: '3',
    title: { ar: 'مخطوطة سورة الفاتحة - التذهيب الملكي', am: 'የአልፋቲሃ የካሊግራፊ ጽሑፍ - በወርቅ ጌጣጌጥ' },
    category: 'manuscripts',
    categoryLabel: { ar: 'مخطوطات كلاسيكية', am: 'ጥንታዊ ጽሑፎች' },
    image: '/images/hero_caligrapy.jpg',
    description: {
      ar: 'مخطوطة قرآنية كتبت بخط النسخ الشريف وحيطت بزخرفة تذهيبية إسلامية مستوحاة من العصر العثماني الذهبي.',
      am: 'በናስክ የካሊግራፊ ዘይቤ የተጻፈ እና በኢስላማዊ የወርቅ ጌጣጌጥ ያሸበረቀ ጥንታዊ ጽሑፍ።'
    },
    details: { scriptType: 'خط النسخ والتذهيب / Naskh & Illumination', dimensions: '70 x 50 cm', year: '2024' }
  },
  {
    id: '4',
    title: { ar: 'تكوين لا غالب إلا الله - أزور وجولد', am: 'ላ ጋሊበ ኢላ አላህ - የሰማያዊ እና ወርቅ ስዕል' },
    category: 'paintings',
    categoryLabel: { ar: 'لوحات خطية', am: 'የካሊግራፊ ስዕሎች' },
    image: '/images/art_1.jpg',
    description: {
      ar: 'عمل فني جداري حديث بأسلوب الحروفية المعاصرة باللون الأزرق الأكوامارين وضربات الحبر الذهبي البارزة.',
      am: 'በዘመናዊ የካሊግራፊ ስዕል ዘይቤ በሰማያዊ እና በወርቅ ቀለም የተሰራ ትልቅ የጋለሪ ስዕል።'
    },
    details: { scriptType: 'حروفية معاصرة / Contemporary Hurufiyya', dimensions: '150 x 100 cm', year: '2025' }
  },
  {
    id: '5',
    title: { ar: 'شعار مركز التراث والبحوث الإسلامية', am: 'የቅርስ እና ምርምር ማዕከል ሎጎ' },
    category: 'logos',
    categoryLabel: { ar: 'شعارات خطية', am: 'የካሊግራፊ ሎጎዎች' },
    image: '/images/art_2.jpg',
    description: {
      ar: 'شعار خطي دائر بخط الديواني الجلي المصمم بعناية فائقة ليعبر عن الرقي والتوازن الثقافي.',
      am: 'በዲዋኒ የካሊግራፊ ዘይቤ በክብ ንድፍ የተሰራ የባህል ማዕከል ሎጎ።'
    },
    details: { scriptType: 'ديواني جلي دائر / Circular Jali Diwani', dimensions: 'Digital Vector', year: '2024' }
  },
  {
    id: '6',
    title: { ar: 'توليفة الحرف العربي الرقمية - أفق', am: 'የአረብኛ ፊደል ዲጂታል ንድፍ - አድማስ' },
    category: 'digital',
    categoryLabel: { ar: 'تكوينات وخط رقمي', am: 'ዲጂታል የፊደላት ንድፎች' },
    image: '/images/hero_caligrapy.jpg',
    description: {
      ar: 'عمل فني رقمي ثلاثي الأبعاد يعيد صياغة انحناءات الحرف العربي في فضاء هندسي ضوئي ساحر.',
      am: 'የአረብኛ ፊደላት ተለዋዋጭነትን በ3D ዲጂታል ንድፍ የሚያሳይ የጥበብ ሥራ።'
    },
    details: { scriptType: 'خط حر رقمي / Digital Free Form', dimensions: '4K Ultra HD', year: '2025' }
  },
  {
    id: '7',
    title: { ar: 'إجازة الخط العربي - قصيدة البوسيري', am: 'የባህላዊ ካሊግራፊ ጽሑፍ ጥቅል' },
    category: 'manuscripts',
    categoryLabel: { ar: 'مخطوطات كلاسيكية', am: 'ጥንታዊ ጽሑፎች' },
    image: '/images/art_1.jpg',
    description: {
      ar: 'مخطوطة تقليدية مقهرة بحبر الشمط والحديد على ورق مقهر يدوياً بحسب التقنيات التاريخية العريقة.',
      am: 'በጥንታዊ በእጅ በተሰራ ወረቀት እና በተፈጥሮ ቀለም የተጻፈ ታሪካዊ የካሊግራፊ ጽሑፍ።'
    },
    details: { scriptType: 'ثلث ونسخ / Thuluth & Naskh', dimensions: '90 x 60 cm', year: '2023' }
  },
  {
    id: '8',
    title: { ar: 'لوحة تجريدية - سيمفونية الأزرق والذهب', am: 'የሰማያዊ እና ወርቅ ቅንብር - ስዕል' },
    category: 'paintings',
    categoryLabel: { ar: 'لوحات خطية', am: 'የካሊግራፊ ስዕሎች' },
    image: '/images/art_2.jpg',
    description: {
      ar: 'لوحة زيتية ضخمة تدمج طبقات اللون الكحلي واللازورد مع الخط الديواني الحر وورق الذهب العتيق.',
      am: 'የዲዋኒ አረብኛ ካሊግራፊን እና የወርቅ ቅጠልን ያቀናጀ ትልቅ የነዳጅ ስዕል።'
    },
    details: { scriptType: 'ديواني حروفي / Freeform Diwani', dimensions: '180 x 120 cm', year: '2025' }
  }
];

const servicesData = [
  {
    id: 'service-1',
    iconName: 'PenTool',
    title: { ar: 'تصميم شعارات', am: 'የሎጎ ንድፍ' },
    description: {
      ar: 'ابتكار شعارات ومونوغرامات خطية فريدة تجمع بين الهندسة الإسلامية والتصميم البصري العصري للشركات الفاخرة.',
      am: 'ለድርጅቶች እና ኩባንያዎች ልዩ የአረብኛ ካሊግራፊ ሎጎዎችን እና ምልክቶችን ማዘጋጀት።'
    },
    features: {
      ar: ['شعارات خطية مخصصة', 'ملفات الفيكتور بجودة طباعة عالية', 'دليل الهوية البصرية الخطية'],
      am: ['ልዩ የአረብኛ ሎጎዎች', 'ከፍተኛ ጥራት ያላቸው ቬክተር ፋይሎች', 'የሎጎ አጠቃቀም መመሪያ']
    }
  },
  {
    id: 'service-2',
    iconName: 'Palette',
    title: { ar: 'لوحات فنية', am: 'የጥበብ ስዕሎች' },
    description: {
      ar: 'رسم واقتناء لوحات جدارية أصيلة باستخدام الورق المقهر اليدوي وحبر الشمط الطبيعي وذهب عيار 24.',
      am: 'በ24 ካራት ወርቅ እና በተፈጥሮ ቀለሞች የተሰሩ የቤት እና የጋለሪ ስዕሎች።'
    },
    features: {
      ar: ['أحجام ومقاسات جدارية متنوعة', 'شهادة أصالة موثقة للعمل', 'تغليف ملكي وشحن آمن'],
      am: ['የተለያዩ የስዕል መጠኖች', 'የሥራው ትክክለኛነት ማረጋገጫ', 'ጥንቃቄ የተሞላበት ማሸግ እና ማጓጓዝ']
    }
  },
  {
    id: 'service-3',
    iconName: 'BookOpen',
    title: { ar: 'مخطوطات', am: 'የካሊግራፊ ጽሑፎች' },
    description: {
      ar: 'كتابة الآيات والمخطوطات العريقة وعناوين الكتب والأغلفة وفق أصعب قواعد الخطوط العربية الكلاسيكية.',
      am: 'የቁርዓን አንቀጾች እና መጽሐፍት ርዕሶችን በትክክለኛው የካሊግራፊ ደንብ መጻፍ።'
    },
    features: {
      ar: ['دقة عالية في قواعد الخط', 'زخرفة وتذهيب إسلامي أصيل', 'تسليم رقمي ونسخ أصلية'],
      am: ['ትክክለኛ የካሊግራፊ ደንቦች', 'ባህላዊ የኢስላማዊ ወርቅ ጌጣጌጥ', 'ዲጂታል እና ኦሪጅናል ኮፒዎች']
    }
  }
];

const testimonialsData = [
  {
    id: 't-1',
    name: { ar: 'الشيخ عبدالرحمن بن خالد', am: 'ሼክ አብዱልራህማን አል-ኻሊድ' },
    role: { ar: 'جامع مقتنيات فنية - الرياض', am: 'የጥበብ ሰብሳቢ - ሪያድ' },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    review: {
      ar: 'اقتنيت لوحة ذهبية بالخط الثلث من الفنانة هبة، وكانت النتيجة مبهرة بكل المقاييس. الدقة في تفاصيل التذهيب وتناغم الحروف ينم عن احترافية وأصالة نادرة جداً.',
      am: 'ከሂባ የተሰራ የወርቅ ካሊግራፊ ስዕል ገዝቻለሁ፤ ውጤቱም በጣም አስደናቂ ነበር። የወርቁ ውበት እና የፊደላቱ ስምምነት የላቀ ባለሙያነቷን ያሳያል።'
    },
    rating: 5
  },
  {
    id: 't-2',
    name: { ar: 'سارة العتيبي', am: 'ሳራ አል-ኦታይቢ' },
    role: { ar: 'مؤسسة علامة عطور فاخرة - دبي', am: 'የሽቶ ድርጅት መስራች - ዱባይ' },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
    review: {
      ar: 'قامت الفنانة هبة بتصميم الشعار الخطي لعلامتنا التجارية. الشعار أضاف لمسة ملكية غير مسبوقة لمنتجاتنا ونال إعجاب جميع عملائنا.',
      am: 'ሂባ ለሽቶ ድርጅታችን የካሊግራፊ ሎጎ ሰርታልናለች። ሎጎው ለምርቶቻችን ንጉሣዊ ውበት ሰጥቷቸዋል።'
    },
    rating: 5
  },
  {
    id: 't-3',
    name: { ar: 'د. طارق السعدي', am: 'ዶ/ር ታሪክ አል-ሳአዲ' },
    role: { ar: 'مدير معهد الفنون الإسلامية', am: 'የኢስላማዊ ጥበባት ኢንስቲትዩት ዳይሬክተር' },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop',
    review: {
      ar: 'أعمال هبة تتميز بالحفاظ على قواعد الخط الكلاسيكي الأصيل مع إدخال لمسات عصرية في التوزيع والكتلة البصرية يجعل أعمالها تحفاً فنية خالدة.',
      am: 'የሂባ ሥራዎች ጥንታዊውን የካሊግራፊ ደንብ ከዘመናዊ የጥበብ አቀራረብ ጋር በድንቅ ሁኔታ ያቀናጃሉ።'
    },
    rating: 5
  }
];

const header = "import type { PortfolioItem, ServiceItem, TestimonialItem } from '../types';\n\n";
const pItems = "export const portfolioItems: PortfolioItem[] = " + JSON.stringify(portfolioItems, null, 2) + ";\n\n";
const sData = "export const servicesData: ServiceItem[] = " + JSON.stringify(servicesData, null, 2) + ";\n\n";
const tData = "export const testimonialsData: TestimonialItem[] = " + JSON.stringify(testimonialsData, null, 2) + ";\n";

writeFileSync('src/data/portfolioData.ts', header + pItems + sData + tData, 'utf8');
console.log('portfolioData.ts rebuilt successfully');
