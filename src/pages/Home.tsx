import { useLanguage } from '@/contexts/LanguageContext';
import CompanyLogo from '@/components/CompanyLogo';
import SocialLinks from '@/components/SocialLinks';
import heroBackground from '@/assets/hero-background.jpg';
import { Sparkles } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Logo and Story */}
          <div className="space-y-8 animate-slide-in">
            <div className="flex justify-center lg:justify-start">
              <CompanyLogo className="w-32 h-32 lg:w-40 lg:h-40" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  {t('companyStory')}
                </span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                {t('companyStoryShort')}
              </p>
            </div>

            <div className="pt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Right Side - Coming Soon */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-strong p-12 rounded-3xl space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>{t('launchingSoon')}</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold">
                Something Amazing
                <br />
                <span className="text-primary">Is Coming</span>
              </h2>

              <p className="text-foreground/70 text-lg">
                {t('stayTuned')}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="glass px-6 py-3 rounded-full">
                  <div className="text-2xl font-bold text-primary">2025</div>
                  <div className="text-xs text-foreground/60">Launch Year</div>
                </div>
                <div className="glass px-6 py-3 rounded-full">
                  <div className="text-2xl font-bold text-accent">Q1</div>
                  <div className="text-xs text-foreground/60">Expected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
};

export default Home;
