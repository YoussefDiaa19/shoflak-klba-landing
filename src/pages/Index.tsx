import { Heart, MessageCircle, Search, Shield, Star, ArrowRight, ArrowDown } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";
import screenshotHome from "@/assets/screenshot-home.png";
import screenshotMessages from "@/assets/screenshot-messages.png";
import screenshotFavorites from "@/assets/screenshot-favorites.png";
import screenshotProfile from "@/assets/screenshot-profile.png";

const features = [
  {
    icon: Search,
    title: "Browse Pets",
    description: "Discover pets nearby filtered by breed, type, and more.",
  },
  {
    icon: Heart,
    title: "Match & Favorite",
    description: "Save your favorite pets and find the perfect match.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Owners",
    description: "Message pet owners directly to arrange meetups.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "All pets go through an approval process for safety.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <Heart className="w-4 h-4 text-background" fill="currentColor" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">Shoflak Klba</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#screenshots" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Screenshots</a>
              <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Download Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-6 tracking-tight">
              Find your pet's
              perfect match
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mb-10 mx-auto lg:mx-0 leading-relaxed">
              Connecting pet owners to find the ideal partner for their furry companions. Browse profiles, chat, and make the perfect match.
            </p>
            <div className="flex flex-row gap-3 justify-center lg:justify-start" id="download">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-foreground text-background rounded-xl px-5 py-3 hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-foreground text-background rounded-xl px-5 py-3 hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-70 leading-none">Get it on</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Decorative accent */}
            <div className="absolute -top-4 right-12 w-8 h-8 text-primary font-bold text-2xl select-none">+</div>
            <div className="absolute bottom-16 -left-4 w-6 h-6 text-primary font-bold text-xl select-none">+</div>
            <div className="relative">
              <PhoneMockup screenshot={screenshotHome} alt="Shoflak Klba home screen" className="relative z-10" />
              {/* Shadow glow behind phone */}
              <div className="absolute inset-0 blur-3xl opacity-20 gradient-primary rounded-full scale-75 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative z-10 mt-8">
        <div className="bg-foreground text-background py-6 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ArrowDown className="w-4 h-4 opacity-60" />
              <span className="text-xs opacity-60 uppercase tracking-widest">Trusted by pet lovers everywhere</span>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-sm font-semibold">4.8 Rating</span>
              </div>
              <div className="text-sm font-semibold">10K+ Users</div>
              <div className="text-sm font-semibold">5K+ Matches</div>
              <div className="hidden sm:block text-sm font-semibold">100+ Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Why pet owners love us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Everything you need to find the perfect match for your companion, all in one place.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section id="screenshots" className="relative z-10 bg-card border-y border-border/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Take a peek inside
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Browse pets, chat with owners, save favorites, and manage your profile.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { img: screenshotHome, label: "Browse", alt: "Home screen" },
              { img: screenshotMessages, label: "Chat", alt: "Messages screen" },
              { img: screenshotFavorites, label: "Favorites", alt: "Favorites screen" },
              { img: screenshotProfile, label: "Profile", alt: "Profile screen" },
            ].map((item, i) => (
              <div key={item.label} className={i % 2 === 0 ? "animate-float" : "animate-float-delayed"}>
                <PhoneMockup screenshot={item.img} alt={item.alt} />
                <p className="text-center mt-5 text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24">
        <div className="bg-foreground text-background rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-6 right-8 text-primary font-bold text-2xl select-none">+</div>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Growing every day
            </h2>
            <p className="text-sm opacity-60 max-w-md mx-auto">
              Thousands of pets have found their perfect match through Shoflak Klba.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-display font-bold">10K+</div>
              <div className="text-xs opacity-50 mt-2 uppercase tracking-wider">Happy Pets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-display font-bold">5K+</div>
              <div className="text-xs opacity-50 mt-2 uppercase tracking-wider">Matches Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-display font-bold flex items-center justify-center gap-2">
                4.8 <Star className="w-5 h-5 text-primary fill-current" />
              </div>
              <div className="text-xs opacity-50 mt-2 uppercase tracking-wider">App Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Ready to find a match?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Download Shoflak Klba today and let your pet meet their soulmate.
        </p>
        <div className="flex flex-row gap-3 justify-center">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-foreground text-background rounded-xl px-5 py-3 hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70 leading-none">Download on the</div>
              <div className="text-sm font-semibold leading-tight">App Store</div>
            </div>
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-foreground text-background rounded-xl px-5 py-3 hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70 leading-none">Get it on</div>
              <div className="text-sm font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-foreground text-background py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display font-bold">Shoflak Klba</span>
          </div>
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} Shoflak Klba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
