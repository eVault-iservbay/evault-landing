import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const languages = [
    { code: 'en' as const, name: 'English' },
    { code: 'es' as const, name: 'Español' },
    { code: 'fr' as const, name: 'Français' },
    { code: 'ar' as const, name: 'العربية' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-6">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive('/') ? 'text-primary' : 'text-foreground/80'
          }`}
        >
          {t('home')}
        </Link>
        <Link
          to="/about"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive('/about') ? 'text-primary' : 'text-foreground/80'
          }`}
        >
          {t('about')}
        </Link>
        <Link
          to="/contact"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive('/contact') ? 'text-primary' : 'text-foreground/80'
          }`}
        >
          {t('contact')}
        </Link>

        <div className="h-4 w-px bg-white/20" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Languages className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-strong">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={language === lang.code ? 'bg-primary/20' : ''}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-8 w-8 rounded-full"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
