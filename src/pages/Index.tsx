import { MessageCircle, Search, Shield, Star, Menu, X } from "lucide-react";
import { useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import appLogo from "@/assets/app-logo.png";
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
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
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

const StoreBadge = ({ type }: { type: "apple" | "google" }) => (
  <a
    href={type === "apple" ? "https://apps.apple.com" : "https://play.google.com"}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-xl px-5 py-3 hover:opacity-90 transition-all hover:scale-[1.02]"
    style={{ backgroundColor: "#000", color: "#fff" }}
  >
    {type === "apple" ? (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ) : (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594z" />
        <path fill="#34A853" d="M5.262 1.042L13.584 10l3.012-2.994L5.263 1.042a1.636 1.636 0 00-.326-.18z" />
        <path fill="#FBBC04" d="M2.184 23.79c.07.273.212.523.417.726l11.007-10.94-3.028-3.012L2.184 23.79z" />
        <path fill="#EA4335" d="M2.601.518A1.482 1.482 0 002.184.78l8.396 12.227L13.584 10 5.262 1.042C5.002.839 4.695.704 4.368.65c-.654-.108-1.31.068-1.767.468z" />
        <path fill="#34A853" d="M13.584 14.023l-11.4 9.767c.456.4 1.113.577 1.767.468a1.636 1.636 0 00.326-.18l11.319-6.478-2.012-3.577z" />
        <path fill="#4285F4" d="M22.018 10.704L18.1 8.486l-1.504 1.494 3.515 3.493 1.907-1.08a1.49 1.49 0 000-1.69z" />
      </svg>
    )}
    <div className="text-left">
      <div className="text-[10px] opacity-70 leading-none" style={{ color: "#ccc" }}>
        {type === "apple" ? "Download on the" : "GET IT ON"}
      </div>
      <div className="text-base font-semibold leading-tight" style={{ color: "#fff" }}>
        {type === "apple" ? "App Store" : "Google Play"}
      </div>
    </div>
  </a>
);

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const MobileSidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-card z-50 shadow-card p-6 flex flex-col gap-6 animate-in slide-in-from-left duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="Shoflak Klba" className="w-7 h-7 object-contain" />
            <span className="font-display text-lg font-bold text-foreground">Shoflak Klba</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-muted transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {[
            { label: "Features", id: "features" },
            { label: "Screenshots", id: "screenshots" },
            { label: "About", id: "about" },
            { label: "Download", id: "download" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                scrollToSection(e, item.id);
                onClose();
              }}
              className="px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hero section */}
      <div className="relative mx-4 mt-4 rounded-[2rem] overflow-hidden hero-gradient">
        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-1 rounded-lg hover:bg-foreground/10 transition-colors mr-1"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
            <img src={appLogo} alt="Shoflak Klba" className="w-8 h-8 object-contain" />
            <span className="font-display text-lg font-bold text-foreground">Shoflak Klba</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => scrollToSection(e, "features")} className="text-sm text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="#screenshots" onClick={(e) => scrollToSection(e, "screenshots")} className="text-sm text-foreground/70 hover:text-foreground transition-colors">Screenshots</a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-sm text-foreground/70 hover:text-foreground transition-colors">About</a>
          </div>
          <a href="#download" onClick={(e) => scrollToSection(e, "download")} className="hidden md:block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Download
          </a>
        </nav>

        {/* Hero content - side by side */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-12 md:pt-20 pb-0">
            <div className="flex-1 text-center md:text-left pb-8 md:pb-20">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
                Find your pet's perfect match
              </h1>
              <p className="text-foreground/60 text-lg md:text-xl max-w-lg mb-8">
                Get the app and find the ideal partner for your furry companion
              </p>
              <div className="flex flex-row gap-3 justify-center md:justify-start flex-wrap" id="download">
                <StoreBadge type="apple" />
                <StoreBadge type="google" />
              </div>
            </div>
            <div className="flex-shrink-0 w-[240px] md:w-[280px]">
              <PhoneMockup screenshot={screenshotHome} alt="Shoflak Klba home screen" />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 md:px-12 py-24 scroll-mt-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Why pet owners love us
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to find the perfect match for your companion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <f.icon className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Screenshots */}
      <section id="screenshots" className="mx-4 rounded-[2rem] bg-card border border-border/30 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Take a peek inside
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Browse pets, chat with owners, save favorites, and manage your profile.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12">
            {[
              { img: screenshotHome, label: "Browse", alt: "Home screen" },
              { img: screenshotMessages, label: "Chat", alt: "Messages screen" },
              { img: screenshotFavorites, label: "Favorites", alt: "Favorites screen" },
              { img: screenshotProfile, label: "Profile", alt: "Profile screen" },
            ].map((item, i) => (
              <div key={item.label} className={`flex flex-col items-center ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}>
                <PhoneMockup screenshot={item.img} alt={item.alt} className="max-w-[160px] sm:max-w-[180px] lg:max-w-[220px]" />
                <p className="text-center mt-4 text-xs sm:text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="max-w-5xl mx-auto px-6 md:px-12 py-24 scroll-mt-8">
        <div className="bg-foreground text-background rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Growing every day
          </h2>
          <p className="text-sm opacity-50 max-w-md mx-auto mb-12">
            Thousands of pets have found their perfect match through Shoflak Klba.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-5xl font-display font-bold">10K+</div>
              <div className="text-xs opacity-40 mt-2 uppercase tracking-wider">Happy Pets</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-display font-bold">5K+</div>
              <div className="text-xs opacity-40 mt-2 uppercase tracking-wider">Matches Made</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-display font-bold flex items-center justify-center gap-2">
                4.8 <Star className="w-5 h-5 text-primary fill-current" />
              </div>
              <div className="text-xs opacity-40 mt-2 uppercase tracking-wider">App Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Ready to find a match?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Download Shoflak Klba today and let your pet meet their soulmate.
        </p>
        <div className="flex flex-row gap-3 justify-center flex-wrap">
          <StoreBadge type="apple" />
          <StoreBadge type="google" />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="Shoflak Klba" className="w-5 h-5 object-contain" />
            <span className="font-display font-bold text-foreground text-sm">Shoflak Klba</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shoflak Klba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
