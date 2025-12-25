import { useLanguage } from '@/contexts/LanguageContext'; // Adjust path if needed
import logoPng from '@/assets/logo.png';
import heroBackground from '@/assets/hero-background.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay - matching Home page */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-10" />
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
         
          {/* Header */}
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img src={logoPng} alt="eVault logo" className="w-20 h-20 object-contain" />
            </div>
            <p className="text-3xl text-primary font-bold">
              {t('aboutHeader')}
            </p>
          </div>
          {/* Our Vision */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutVisionTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutVisionText')}
            </p>
          </section>
          {/* How We're Different */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutDifferentTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutDifferentPara1')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutDifferentPara2')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutDifferentPara3')}
            </p>
          </section>
          {/* Built on Strategic Partnerships */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutPartnershipsTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutPartnershipsPara1')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutPartnershipsPara2')}
            </p>
          </section>
          {/* The Complete Payment Platform */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutPlatformTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutPlatformText')}
            </p>
          </section>
          {/* Innovation in Development */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutInnovationTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutInnovationPara1')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutInnovationPara2')}
            </p>
          </section>
          {/* Early Adopter Benefits */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutEarlyAdoptersTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutEarlyAdoptersText')}
            </p>
          </section>
          {/* Our Commitment to You */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutCommitmentTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutCommitmentPara1')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutCommitmentPara2')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutCommitmentPara3')}
            </p>
          </section>
          {/* Stay Informed */}
          <section className="space-y-6 pb-12">
            <h2 className="text-3xl font-semibold text-primary">{t('aboutStayInformedTitle')}</h2>
           
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aboutStayInformedText')}
            </p>
            {/* <p className="text-2xl text-center font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pt-8">
              {t('aboutSlogan')}
            </p> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;