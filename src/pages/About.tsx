import { useLanguage } from '@/contexts/LanguageContext';
import logoPng from '@/assets/logo.png';

const About = () => {
  const { t } = useLanguage();
  

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img src={logoPng} alt="Company logo" className="w-20 h-20 object-contain" />
            </div>

          </div>

          {/* Story */}
            <h2 className="text-2xl font-bold text-primary">{t('companyStory')}</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              {t('companyStoryFull').split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

          {/* (Other sections removed) */}
        </div>
      </div>
    </div>
  );
};

export default About;
