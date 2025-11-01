import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    launchingSoon: 'Launching Soon',
    stayTuned: "We're preparing something extraordinary. Stay tuned for updates.",
    companyStory: 'Company Story',
    companyStoryShort: 'Innovating the future of business with cutting-edge solutions that empower organizations to achieve their full potential.',
    companyStoryFull: "Founded with a vision to transform how businesses operate, our company stands at the intersection of innovation and excellence. We believe in creating solutions that not only meet today's challenges but anticipate tomorrow's opportunities.\n\nOur team of dedicated professionals brings together decades of combined experience across various industries, united by a common goal: to deliver exceptional value to our clients. We approach every project with creativity, precision, and an unwavering commitment to quality.\n\nThrough strategic partnerships and continuous innovation, we've built a reputation for reliability and results. Our solutions are designed to be scalable, sustainable, and tailored to each client's unique needs.\n\nAs we prepare to launch our new platform, we're excited to share our vision with the world. Join us on this journey as we redefine what's possible in modern business.",
    ourMission: 'Our Mission',
    missionText: 'To empower businesses with innovative solutions that drive growth and success.',
    getInTouch: 'Get In Touch',
    contactInfo: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    followUs: 'Follow Us',
    emailPlaceholder: 'info@company.com',
    phonePlaceholder: '+1 (555) 123-4567',
    addressPlaceholder: '123 Business Avenue, Suite 100, City, State 12345',
  },
  es: {
    home: 'Inicio',
    about: 'Acerca de',
    contact: 'Contacto',
    launchingSoon: 'Próximamente',
    stayTuned: 'Estamos preparando algo extraordinario. Mantente atento a las actualizaciones.',
    companyStory: 'Historia de la Empresa',
    companyStoryShort: 'Innovando el futuro de los negocios con soluciones de vanguardia que empoderan a las organizaciones para alcanzar su máximo potencial.',
    companyStoryFull: "Fundada con la visión de transformar cómo operan las empresas, nuestra compañía se encuentra en la intersección de la innovación y la excelencia. Creemos en crear soluciones que no solo enfrentan los desafíos de hoy, sino que anticipan las oportunidades de mañana.\n\nNuestro equipo de profesionales dedicados reúne décadas de experiencia combinada en diversas industrias, unidos por un objetivo común: entregar valor excepcional a nuestros clientes. Abordamos cada proyecto con creatividad, precisión y un compromiso inquebrantable con la calidad.\n\nA través de alianzas estratégicas e innovación continua, hemos construido una reputación de confiabilidad y resultados. Nuestras soluciones están diseñadas para ser escalables, sostenibles y adaptadas a las necesidades únicas de cada cliente.\n\nMientras nos preparamos para lanzar nuestra nueva plataforma, estamos emocionados de compartir nuestra visión con el mundo. Únete a nosotros en este viaje mientras redefinimos lo que es posible en los negocios modernos.",
    ourMission: 'Nuestra Misión',
    missionText: 'Empoderar a las empresas con soluciones innovadoras que impulsan el crecimiento y el éxito.',
    getInTouch: 'Contáctanos',
    contactInfo: 'Información de Contacto',
    email: 'Correo',
    phone: 'Teléfono',
    address: 'Dirección',
    followUs: 'Síguenos',
    emailPlaceholder: 'info@empresa.com',
    phonePlaceholder: '+34 (555) 123-4567',
    addressPlaceholder: 'Avenida de Negocios 123, Suite 100, Ciudad, Estado 12345',
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    contact: 'Contact',
    launchingSoon: 'Bientôt Disponible',
    stayTuned: 'Nous préparons quelque chose d\'extraordinaire. Restez à l\'écoute pour les mises à jour.',
    companyStory: 'Histoire de l\'Entreprise',
    companyStoryShort: 'Innover l\'avenir des affaires avec des solutions de pointe qui permettent aux organisations d\'atteindre leur plein potentiel.',
    companyStoryFull: "Fondée avec la vision de transformer la façon dont les entreprises fonctionnent, notre société se trouve à l'intersection de l'innovation et de l'excellence. Nous croyons en la création de solutions qui non seulement relèvent les défis d'aujourd'hui, mais anticipent les opportunités de demain.\n\nNotre équipe de professionnels dévoués réunit des décennies d'expérience combinée dans diverses industries, unis par un objectif commun : offrir une valeur exceptionnelle à nos clients. Nous abordons chaque projet avec créativité, précision et un engagement inébranlable envers la qualité.\n\nGrâce à des partenariats stratégiques et à l'innovation continue, nous avons construit une réputation de fiabilité et de résultats. Nos solutions sont conçues pour être évolutives, durables et adaptées aux besoins uniques de chaque client.\n\nAlors que nous nous préparons à lancer notre nouvelle plateforme, nous sommes ravis de partager notre vision avec le monde. Rejoignez-nous dans ce voyage alors que nous redéfinissons ce qui est possible dans les affaires modernes.",
    ourMission: 'Notre Mission',
    missionText: 'Autonomiser les entreprises avec des solutions innovantes qui stimulent la croissance et le succès.',
    getInTouch: 'Contactez-Nous',
    contactInfo: 'Informations de Contact',
    email: 'Email',
    phone: 'Téléphone',
    address: 'Adresse',
    followUs: 'Suivez-Nous',
    emailPlaceholder: 'info@entreprise.com',
    phonePlaceholder: '+33 (555) 123-4567',
    addressPlaceholder: '123 Avenue des Affaires, Suite 100, Ville, État 12345',
  },
  ar: {
    home: 'الرئيسية',
    about: 'عن الشركة',
    contact: 'اتصل بنا',
    launchingSoon: 'قريباً',
    stayTuned: 'نحن نحضر شيئًا استثنائيًا. ترقبوا التحديثات.',
    companyStory: 'قصة الشركة',
    companyStoryShort: 'ابتكار مستقبل الأعمال بحلول متطورة تمكن المؤسسات من تحقيق إمكاناتها الكاملة.',
    companyStoryFull: "تأسست الشركة برؤية لتحويل طريقة عمل الشركات، وتقف شركتنا عند تقاطع الابتكار والتميز. نؤمن بإنشاء حلول لا تلبي تحديات اليوم فحسب، بل تتوقع فرص الغد.\n\nيجمع فريقنا من المحترفين المتفانين عقودًا من الخبرة المشتركة عبر مختلف الصناعات، متحدين بهدف مشترك: تقديم قيمة استثنائية لعملائنا. نتعامل مع كل مشروع بإبداع ودقة والتزام لا يتزعزع بالجودة.\n\nمن خلال الشراكات الاستراتيجية والابتكار المستمر، بنينا سمعة للموثوقية والنتائج. تم تصميم حلولنا لتكون قابلة للتطوير ومستدامة ومصممة خصيصًا لتلبية الاحتياجات الفريدة لكل عميل.\n\nبينما نستعد لإطلاق منصتنا الجديدة، نحن متحمسون لمشاركة رؤيتنا مع العالم. انضم إلينا في هذه الرحلة بينما نعيد تعريف ما هو ممكن في الأعمال الحديثة.",
    ourMission: 'مهمتنا',
    missionText: 'تمكين الشركات بحلول مبتكرة تدفع النمو والنجاح.',
    getInTouch: 'تواصل معنا',
    contactInfo: 'معلومات الاتصال',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    address: 'العنوان',
    followUs: 'تابعنا',
    emailPlaceholder: 'info@company.com',
    phonePlaceholder: '+966 (555) 123-4567',
    addressPlaceholder: '123 شارع الأعمال، جناح 100، المدينة، الولاية 12345',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
