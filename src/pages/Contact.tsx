import { useLanguage } from '@/contexts/LanguageContext';
import SocialLinks from '@/components/SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: t('emailPlaceholder'),
      href: `mailto:${t('emailPlaceholder')}`,
    },
    {
      icon: Phone,
      label: t('phone'),
      value: t('phonePlaceholder'),
      href: `tel:${t('phonePlaceholder')}`,
    },
    {
      icon: MapPin,
      label: t('address'),
      value: t('addressPlaceholder'),
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Content */}
  <div className="relative z-10 container mx-auto px-6 py-44">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">



          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="glass-light p-6 rounded-2xl space-y-4 hover:bg-primary/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-foreground/60 font-medium">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium break-words">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Section */}
          <div className="glass p-8 lg:p-12 rounded-3xl space-y-6 text-center">
            <p className="text-foreground/70">
              Connect to stay in the loop
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
