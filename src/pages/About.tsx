import { useLanguage } from '@/contexts/LanguageContext';
import CompanyLogo from '@/components/CompanyLogo';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters in delivering excellence',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Together we achieve more than alone',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new possibilities',
    },
  ];

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
              <CompanyLogo className="w-24 h-24" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('about')}
              </span>
            </h1>
          </div>

          {/* Story */}
          <div className="glass-strong p-8 lg:p-12 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-primary">{t('companyStory')}</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              {t('companyStoryFull').split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="glass p-8 lg:p-12 rounded-3xl space-y-4 border-l-4 border-primary">
            <h2 className="text-2xl font-bold">{t('ourMission')}</h2>
            <p className="text-xl text-foreground/80">{t('missionText')}</p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="glass-strong p-6 rounded-2xl space-y-4 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
