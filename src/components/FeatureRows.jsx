import { 
  Coins, 
  CardWallet, 
  AntennaSignal, 
  Shield, 
  Headset, 
  Lock 
} from 'iconoir-react';

const FeatureRows = ({ variant = 'home' }) => {
  const homeFeatures = [
    {
      icon: Coins,
      title: 'Smart Wallet',
      description: 'Save, send, and transfer money with better rates. Powered by BELL MFB for bank-grade security and regulatory compliance.',
    },
    {
      icon: CardWallet,
      title: 'Complete Bills',
      description: 'Airtime, data, electricity, water, cable. All your payments in one secure place with instant processing.',
    },
    {
      icon: AntennaSignal,
      title: 'Know Before You Send',
      description: 'Real-time network strength indicator shows transaction success probability before authorization. No more anxiety, no more multi-day reversals.',
    },
  ];

  const aboutFeatures = [
    {
      icon: AntennaSignal,
      title: 'Network Strength Indicator',
      description: 'See real-time bank connectivity before authorizing payments. Know if your transaction will succeed before you send it.',
    },
    {
      icon: Headset,
      title: '24/7 Human Support',
      description: 'Call us anytime, day or night. Real humans answer—not chatbots. We resolve transaction issues in under 15 minutes.',
    },
    {
      icon: Lock,
      title: 'Digital Vault',
      description: 'Store sensitive credentials securely. Share with time-limited, single-use links that expire after one view.',
    },
    {
      icon: Shield,
      title: 'BELL MFB Partnership',
      description: 'Licensed microfinance bank partnership ensures regulatory compliance, fund security, and professional account management.',
    },
  ];

  const features = variant === 'home' ? homeFeatures : aboutFeatures;

  // For home page, use asymmetric bento grid layout
  if (variant === 'home') {
    return (
      <div className="max-w-6xl mx-auto">
        {/* Top row - 2 cards with different widths */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          {/* Card 1 - Coins (takes 5 columns = ~42% width) */}
          <div className="md:col-span-5 backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg rounded-3xl p-6 md:p-8 hover:bg-background/90 transition-all group">
            <div className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Coins className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {features[0].title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Card Wallet (takes 7 columns = ~58% width) */}
          <div className="md:col-span-7 backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg rounded-3xl p-6 md:p-8 hover:bg-background/90 transition-all group">
            <div className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CardWallet className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {features[1].title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - Full width card */}
        <div className="backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg rounded-3xl p-6 md:p-10 hover:bg-background/90 transition-all group">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <AntennaSignal className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
            </div>
            <div className="space-y-2 md:space-y-3 flex-1">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground">
                {features[2].title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For about page, use timeline layout
  return (
    <div className="max-w-2xl mx-auto">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="relative">
            {/* Connection line */}
            {index < features.length - 1 && (
              <div className="absolute left-7 top-20 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent" />
            )}
            
            {/* Feature */}
            <div className="flex gap-6 pb-12">
              {/* Number + Icon */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="text-xs font-mono text-primary/60">
                  0{index + 1}
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center border border-primary/10">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 pt-6">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureRows;