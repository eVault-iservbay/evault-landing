import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.jpg";
import logoPng from "@/assets/logo.png";
import BellBadge from "@/components/BellBadge";

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
          {/* Mobile Layout - CTA-First (Aggressive) */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-7 animate-fade-in">
            {/* Logo - Medium sized */}
            <img
              src={logoPng}
              alt="eVault logo"
              className="w-28 h-28 object-contain"
            />

            {/* Now Available Badge - Immediate */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 animate-inelastic-bounce">
              <span className="text-xs font-semibold text-amber-100">Now Available</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl font-bold text-foreground leading-tight">
              Get your TIN without the headache
            </h2>

            {/* Description */}
            <p className="text-sm text-foreground/60 max-w-sm leading-snug">
              Professional TIN processing. WhatsApp updates, <br />
              48-hour guarantee, from ₦3,500.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col w-full max-w-sm gap-2.5 pt-1">
              <a 
                href="https://taxease.evaultmoney.com"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get Started
              </a>
              <a 
                href="https://taxease.evaultmoney.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary/20 hover:bg-primary/5 text-foreground/80 font-medium transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Trust Badges with Icons */}
            <div className="flex flex-col items-start gap-2.5 text-xs text-foreground/60 w-full max-w-sm pt-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span>48-hour guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <span>WhatsApp updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <span>95%+ approval rate</span>
              </div>
            </div>

            {/* Tagline and BELL Badge - After CTA (secondary info) */}
            <div className="pt-6 border-t border-foreground/5 w-full flex flex-col items-center gap-3">
              <p className="text-xs text-foreground/40 font-medium">
                {t("taglineShort")}
              </p>
              <BellBadge />
            </div>
          </div>

          {/* Desktop Layout - Staggered (Same as Option A) */}
          <div className="hidden lg:block relative max-w-7xl mx-auto min-h-[600px]">
            {/* Left Side - Logo Section */}
            <div className="absolute top-0 left-0 flex flex-col items-start gap-6 animate-fade-in">
              {/* Logo - Reduced */}
              <img
                src={logoPng}
                alt="eVault logo"
                className="w-48 h-48 object-contain"
              />

              {/* Tagline */}
              <p className="text-base text-foreground/50 font-medium">
                {t("taglineShort")}
              </p>

              {/* BELL MFB Badge */}
              <BellBadge />
            </div>

            {/* Right Side - CTA Section (offset ~200px down) */}
            <div className="absolute top-[200px] right-0 max-w-xl space-y-6 animate-fade-in">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 animate-inelastic-bounce">
                  <span className="text-xs font-medium text-amber-100">Now Available</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  Get your TIN without the headache
                </h2>
                <p className="text-base text-foreground/60 max-w-md">
                  Professional TIN processing. WhatsApp updates, 48-hour guarantee, from ₦3,500.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://taxease.evaultmoney.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Started
                </a>
                <a 
                  href="https://taxease.evaultmoney.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary/20 hover:bg-primary/5 text-foreground/80 font-medium transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Trust Badges (offset ~500px down) */}
            <div className="absolute top-[500px] right-0 flex items-center gap-6 text-sm text-foreground/60 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span>48-hour guarantee</span>
              </div>
              
              <div className="w-px h-4 bg-foreground/20" />
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <span>WhatsApp updates</span>
              </div>
              
              <div className="w-px h-4 bg-foreground/20" />
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <span>95%+ approval rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-24">
          {/* Core Values - Three minimalist icons */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {/* Smart Wallet */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z"
                    stroke="currentColor"
                  />
                  <path
                    d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 7V5.60322C18 4.28916 16.7544 3.33217 15.4847 3.67075L4.48467 6.60409C3.60917 6.83756 3 7.63046 3 8.53656V9"
                    stroke="currentColor"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-foreground">
                  {t("smartWallet")}
                </h3>
                <p className="text-[10px] text-foreground/50 leading-tight">
                  {t("smartWalletDesc")}
                </p>
              </div>
            </div>

            {/* Digital Vault */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="text-primary"
                >
                  <path
                    d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z"
                    stroke="currentColor"
                  />
                  <path
                    d="M10 15C8.34315 15 7 13.6569 7 12C7 10.3431 8.34315 9 10 9C11.6569 9 13 10.3431 13 12C13 13.6569 11.6569 15 10 15Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path d="M18 14L18 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.5 9.5L13.5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.5 9.5L6.5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 15.5L7.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 15.5L12.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 8L3 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 6L3 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 16H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-foreground">
                  {t("digitalVault")}
                </h3>
                <p className="text-[10px] text-foreground/50 leading-tight">
                  {t("digitalVaultDesc")}
                </p>
              </div>
            </div>

            {/* Customer support */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="text-primary"
                >
                  <path
                    d="M4 11.4998L3.51493 11.6211C2.62459 11.8437 2 12.6436 2 13.5614V15.4382C2 16.356 2.62459 17.1559 3.51493 17.3785L5.25448 17.8134C5.63317 17.9081 6 17.6217 6 17.2313V11.7683C6 11.3779 5.63317 11.0915 5.25448 11.1862L4 11.4998ZM4 11.4998V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V11.4998M20 11.4998L20.4851 11.6211C21.3754 11.8437 22 12.6436 22 13.5614V15.4382C22 16.356 21.3754 17.1559 20.4851 17.3785L20 17.4998M20 11.4998L18.7455 11.1862C18.3668 11.0915 18 11.3779 18 11.7683V17.2313C18 17.6217 18.3668 17.9081 18.7455 17.8134L20 17.4998M15 20.5H18C19.1046 20.5 20 19.6046 20 18.5V18V17.4998M15 20.5C15 19.6716 14.3284 19 13.5 19H10.5C9.67157 19 9 19.6716 9 20.5C9 21.3284 9.67157 22 10.5 22H13.5C14.3284 22 15 21.3284 15 20.5Z"
                    stroke="currentColor"
                  />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-foreground">
                  {t("customerSupport")}
                </h3>
                <p className="text-[10px] text-foreground/50 leading-tight">
                  {t("customerSupportDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <p className="text-foreground/60 max-w-2xl mx-auto text-center text-semibold">
              {t("tagline")}
            </p>
          </div>
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
