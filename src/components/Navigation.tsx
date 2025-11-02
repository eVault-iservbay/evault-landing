import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const languages = [
    { code: "en" as const, initials: "EN" },
    { code: "es" as const, initials: "ES" },
    { code: "fr" as const, initials: "FR" },
    { code: "ar" as const, initials: "AR" },
  ];

  const currentLanguageIndex = languages.findIndex(
    (lang) => lang.code === language
  );
  const currentLanguage = languages[currentLanguageIndex];

  const cycleLanguage = () => {
    const nextIndex = (currentLanguageIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in">
      <div className="px-6 py-3 rounded-3xl flex items-center gap-6 backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive("/") ? "text-primary" : "text-foreground/80"
          }`}
        >
          {t("home")}
        </Link>
        <Link
          to="/about"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive("/about") ? "text-primary" : "text-foreground/80"
          }`}
        >
          {t("about")}
        </Link>
        <Link
          to="/contact"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            isActive("/contact") ? "text-primary" : "text-foreground/80"
          }`}
        >
          {t("contact")}
        </Link>

        <div className="h-4 w-px bg-white/20" />

        <Button
          variant="ghost"
          size="icon"
          onClick={cycleLanguage}
          className="h-8 w-[60px] px-2 rounded-full flex items-center gap-2 hover:bg-primary/10"
        >
          <Languages className="h-4 w-4 flex-shrink-0" />
          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary flex-shrink-0">
            {currentLanguage.initials}
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
