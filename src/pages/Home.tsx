
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
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Logo */}
            <div className="flex flex-col items-center justify-center gap-6 animate-fade-in">
              {/* Logo */}
              <img
                src={logoPng}
                alt="eVault logo"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 object-contain"
              />

              {/* Text Carousel */}
              <div className="text-center">
                <p className="text-sm md:text-base text-foreground/50 font-medium">
                  {t("taglineShort")}
                </p>
              </div>

              {/* BELL MFB Badge - centered below logo */}
              <BellBadge />
            </div>

            {/* Right Side - Launching Soon */}
            <div className="space-y-12">
              {/* Launching Soon */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("launchingSoon")}
                  </span>
                </h2>

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
                  <svg
                    width="24px"
                    stroke-width="1.5"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#ffffffff"
                  >
                    <path
                      d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z"
                      stroke="#ffffffff"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z"
                      fill="#ffffffff"
                      stroke="#ffffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18 7V5.60322C18 4.28916 16.7544 3.33217 15.4847 3.67075L4.48467 6.60409C3.60917 6.83756 3 7.63046 3 8.53656V9"
                      stroke="#ffffffff"
                      stroke-width="1.5"
                    ></path>
                  </svg>
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

            {/* 'Digital Vault */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffffff"
                >
                  <path
                    d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M10 15C8.34315 15 7 13.6569 7 12C7 10.3431 8.34315 9 10 9C11.6569 9 13 10.3431 13 12C13 13.6569 11.6569 15 10 15Z"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18 14L18 10"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.5 9.5L13.5 8.5"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.5 9.5L6.5 8.5"
                    stroke="#fdfdfdff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.5 15.5L7.5 14.5"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.5 15.5L12.5 14.5"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2 8L3 8"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2 6L3 6"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 16H2"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 18H2"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
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
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffffff"
                >
                  <path
                    d="M4 11.4998L3.51493 11.6211C2.62459 11.8437 2 12.6436 2 13.5614V15.4382C2 16.356 2.62459 17.1559 3.51493 17.3785L5.25448 17.8134C5.63317 17.9081 6 17.6217 6 17.2313V11.7683C6 11.3779 5.63317 11.0915 5.25448 11.1862L4 11.4998ZM4 11.4998V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V11.4998M20 11.4998L20.4851 11.6211C21.3754 11.8437 22 12.6436 22 13.5614V15.4382C22 16.356 21.3754 17.1559 20.4851 17.3785L20 17.4998M20 11.4998L18.7455 11.1862C18.3668 11.0915 18 11.3779 18 11.7683V17.2313C18 17.6217 18.3668 17.9081 18.7455 17.8134L20 17.4998M15 20.5H18C19.1046 20.5 20 19.6046 20 18.5V18V17.4998M15 20.5C15 19.6716 14.3284 19 13.5 19H10.5C9.67157 19 9 19.6716 9 20.5C9 21.3284 9.67157 22 10.5 22H13.5C14.3284 22 15 21.3284 15 20.5Z"
                    stroke="#ffffffff"
                    stroke-width="1.5"
                  ></path>
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
                     