import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const languages = [
    { code: 'en' as const, initials: 'Eng', label: 'English' },
    { code: 'ha' as const, initials: 'Hau', label: 'Hausa' },
    { code: 'yo' as const, initials: 'Yor', label: 'Yoruba' },
    { code: 'ig' as const, initials: 'Igb', label: 'Igbo' },
  ];

  const currentLanguageIndex = languages.findIndex(
    (lang) => lang.code === language
  );
  const currentLanguage = languages[currentLanguageIndex];

  const cycleLanguage = () => {
    const nextIndex = (currentLanguageIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code);
  };

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    // { path: 'https://taxease.evaultmoney.com', label: t('Tax-ease'), external: true },
    { 
      path: 'https://taxease.evaultmoney.com', 
      label: (
        <span className="flex items-center gap-1.5">
          {t('Tax-ease')}
          <span className="relative inline-flex items-center px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-500/20 text-amber-600 border border-amber-500/30">
            NEW
            <span className="absolute top-0 right-0 flex h-2 w-2 -mr-1 -mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
          </span>
        </span>
      ), 
      external: true 
    },
    { path: '/contact', label: t('contact') },
  ];

  const handleNavClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {isExpanded && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[99] animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in w-[calc(100%-2rem)] md:w-auto max-w-2xl">
        <div
          className={`backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg transition-all duration-300 ease-in-out ${
            isExpanded
              ? 'rounded-2xl px-6 py-4'
              : 'rounded-3xl px-6 py-3'
          }`}
        >
          {/* Top bar - always visible */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="eVault Logo" className="h-8 w-8 object-contain" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? 'text-primary' : 'text-foreground/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              
              <div className="h-4 w-px bg-white/20" />
              
              {/* Desktop Language Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={cycleLanguage}
                className="h-9 px-3 rounded-full flex items-center gap-2 hover:bg-primary/10 border border-primary/20"
              >
                <Languages className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {currentLanguage.label}
                </span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isExpanded ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Expanded Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              {navItems.map((item, index) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-primary/10 text-foreground/80 hover:text-primary"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isExpanded ? 'slideDown 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-primary/10 ${
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isExpanded ? 'slideDown 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              {/* Mobile Language Switcher */}
              <div className="pt-2 mt-2 border-t border-white/10">
                <Button
                  variant="ghost"
                  onClick={cycleLanguage}
                  className="w-full h-12 px-4 rounded-xl flex items-center justify-between hover:bg-primary/10 border border-primary/20"
                  style={{
                    animationDelay: `${navItems.length * 50}ms`,
                    animation: isExpanded ? 'slideDown 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Languages className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      Language
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {currentLanguage.label}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
