import logoPng from '@/assets/logo.png';
import heroBackground from '@/assets/hero-background.jpg';

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-mono">
      {/* Background Image with Overlay - matching Home page */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
          
          {/* Header */}
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <img src={logoPng} alt="eVault logo" className="w-20 h-20 object-contain" />
            </div>


            <p className="text-3xl text-primary font-bold">
              Rethinking Payment Infrastructure for Nigeria
            </p>
          </div>

          {/* Our Vision */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Our Vision</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              The Nigerian payment landscape has evolved significantly, yet fundamental challenges remain. Transactions fail without warning, leaving funds in limbo. Customer support operates during business hours only, forcing users to wait days for resolution. Sharing sensitive financial credentials means hoping they won't be misused. We founded eVault to address these systemic issues with technology designed specifically for the Nigerian market.
            </p>
          </section>

          {/* How We're Different */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">How We're Different</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              At eVault, we believe transparency should come before authorization, not after. Our network strength indicator analyzes real-time bank connectivity before you initiate any transaction, showing you whether your payment is likely to succeed. This simple innovation eliminates the anxiety of wondering whether your transfer went through and the frustration of multi-day reversal processes when it doesn't.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              We've structured our customer support around a principle that sounds obvious but remains rare in Nigerian fintech: humans should answer when you call. Our support team operates twenty-four hours daily, seven days weekly, by phone and chat. When a transaction issue arises at two in the morning, you speak with a trained representative who resolves your problem in minutes, not a chatbot that creates a ticket you'll follow up on during business hours.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              For business users and professionals, we developed the Digital Vault    a secure credential management system that solves a problem most fintechs ignore. When you need to share banking details, verification documents, or access credentials, the Vault generates time-limited, single-use links. Recipients can view the information once before the link expires permanently, even if they forward it to others. Your sensitive data remains secure without requiring complex encryption knowledge from either party.
            </p>
          </section>

          {/* Built on Strategic Partnerships */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Built on Strategic Partnerships</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Rather than attempting to become a bank ourselves, we've partnered with BELL Microfinance Bank to provide our users with fully licensed, regulated accounts. This partnership allows us to focus on what we do best    building superior payment technology and customer experience    while BELL handles account management, regulatory compliance, and fund security under Central Bank of Nigeria oversight. Your eVault account functions as a complete banking solution with faster transfers and lower fees than traditional banks, backed by BELL's microfinance banking license.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Security architecture underpins everything we build. We employ bank-grade encryption standards used by international financial institutions, ensuring your funds and personal information remain protected. Every service operates with redundant backup systems, so if one payment gateway experiences issues, another activates automatically without interrupting your transaction. Your payments succeed because our infrastructure is designed for Nigerian network realities, not imported assumptions about connectivity.
            </p>
          </section>

          {/* The Complete Payment Platform */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">The Complete Payment Platform</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond our core innovations, eVault provides all the payment services Nigerians use daily. Purchase airtime for any network, activate data bundles starting at ₦499 for one gigabyte, pay electricity and water bills for major providers, and recharge cable subscriptions for DSTV, GOtv, and Startimes. These aren't our differentiators    they're expected conveniences we've made reliable and affordable within a single platform.
            </p>
          </section>

          {/* Innovation in Development */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Innovation in Development</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              We're currently building contactless payment capabilities that will launch in phases. Business users will benefit from NFC tap-to-pay functionality at partnered merchant locations, while personal users will have QR code-based transfers for instant peer-to-peer payments. Each user receives a unique QR code upon signup for receiving funds, and our scanning feature enables payments to any other eVault user. We're developing this infrastructure thoughtfully, prioritizing security and reliability over rushed deployment.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond contactless payments, our development roadmap includes AI-powered transaction analysis that identifies optimal payment times based on historical network patterns, smart budgeting tools that automate savings without requiring conscious effort, and advanced fraud detection that prevents suspicious activity before it affects your account. These features represent our longer-term vision for what Nigerian fintech should become.
            </p>
          </section>

          {/* Early Adopter Benefits */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Early Adopter Benefits</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Users who join eVault before our official launch receive permanent benefits as appreciation for their early trust. You'll earn one percent cashback on all airtime purchases, increasing to two percent when you refer ten or more verified users. Early adopters receive priority customer support during our first ninety days and first access to new features as they launch. These aren't promotional offers that expire    they're permanent benefits for our founding user community.
            </p>
          </section>

          {/* Our Commitment to You */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Our Commitment to You</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              We're not building eVault to compete in the crowded fintech space by offering slightly better rates or marginally faster transfers. We're rethinking how payment infrastructure should work in Nigeria, starting with three principles that guide every decision we make.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              First, users deserve to know whether their transaction will succeed before they authorize it, not discover failures afterward. Second, when you need help, you should speak with a human who can resolve your issue immediately, regardless of the time or day. Third, sharing sensitive information shouldn't require choosing between convenience and security    you should have both.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              These principles shape everything from our technical architecture to our staffing decisions. They're expensive to implement correctly and impossible to fake long-term. But they're also the foundation of the payment platform Nigeria deserves, and we're committed to building it right rather than building it fast.
            </p>
          </section>

          {/* Stay Informed */}
          <section className="space-y-6 pb-12">
            <h2 className="text-3xl font-semibold text-primary">Stay Informed</h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Subscribe to our newsletter for updates on our launch date, new feature announcements, and early access opportunities. We're building something significant, and we want you involved from the beginning.
            </p>

            <p className="text-2xl text-center font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pt-8">
              eVault: Smart, safe, and reliable.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
