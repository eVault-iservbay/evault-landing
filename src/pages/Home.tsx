import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.jpg";
import logoPng from "@/assets/logo.png";
import BellBadge from "@/components/BellBadge";
import FeatureRows from "@/components/FeatureRows";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
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
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Logo */}
            <div className="flex flex-col items-center justify-center gap-6 animate-fade-in">
              {/* Logo */}
              <img
                src={logoPng}
                alt="eVault logo"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 object-contain"
              />

              {/* BELL MFB Badge - centered below logo */}
              <BellBadge />
            </div>

            {/* Right Side - Story */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    {t("companyStory")}
                  </span>
                </h1>
                <p className="text-base text-foreground/70 leading-relaxed max-w-xl">
                  {t("companyStoryShort")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-24">
          <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
            Everything you need to manage money, pay bills, and send payments
            that actually work.
          </p>

          <FeatureRows />
        </div>

        {/* Footer */}
        <div className="container mx-auto px-6 py-8 relative">
          {/* Privacy policy link bottom-left */}
          <a
            href="/privacy"
            className="absolute left-6 bottom-6 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>

          {/* BELL Badge + Copyright bottom-right */}
          <div className="absolute right-6 bottom-6 text-right space-y-1">
            <BellBadge variant="footer" />
            <div className="text-sm text-foreground/70">© 2025 evault</div>
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
