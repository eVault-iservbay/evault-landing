import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
          >
            <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
