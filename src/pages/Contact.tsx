
import { useLanguage } from '@/contexts/LanguageContext';
import SocialLinks from '@/components/SocialLinks';
import EmailCapture from '@/components/EmailCapture';
import { Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Have questions about eVault? Want to learn more about our features or partnership opportunities? We'd love to hear from you.
            </p>
          </div>

          {/* Email Contact Card */}
          <div className="max-w-md mx-auto">
            <a
              href={`mailto:${t('emailPlaceholder')}`}
              className="glass-light p-8 rounded-2xl space-y-4 hover:bg-primary/10 transition-all group block"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-foreground/60 font-medium">
                  Email Us
                </div>
                <div className="text-foreground font-medium break-words">
                  {t('emailPlaceholder')}
                </div>
                <p className="text-sm text-foreground/60">
                  We typically respond within 24 hours
                </p>
              </div>
            </a>
          </div>


          {/* Social Section */}
          <div className="glass p-8 lg:p-12 rounded-3xl space-y-6 text-center">
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <p className="text-foreground/70">
              Follow us for updates, behind-the-scenes content, and launch announcements
            </p>
            <div className="flex justify-center pt-4">
              <SocialLinks />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;