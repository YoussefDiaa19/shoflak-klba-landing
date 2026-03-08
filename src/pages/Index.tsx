import { MessageCircle, Search, Shield, Star, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import appLogo from "@/assets/app-logo-cropped.png";
import screenshotHome from "@/assets/screenshot-home.png";
import screenshotMessages from "@/assets/screenshot-messages.png";
import screenshotFavorites from "@/assets/screenshot-favorites.png";
import screenshotProfile from "@/assets/screenshot-profile.png";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";

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

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const FadeInSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200"
  >
    {children}
  </a>
);

const MobileSidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-40 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-64 bg-card z-50 shadow-card p-6 flex flex-col gap-6 animate-in slide-in-from-left duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="Shoflak Klba" className="w-7 h-7 object-contain rounded-lg" />
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
            <img src={appLogo} alt="Shoflak Klba" className="w-8 h-8 object-contain rounded-lg" />
            <span className="font-display text-lg font-bold text-foreground">Shoflak Klba</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => scrollToSection(e, "features")} className="text-sm text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="#screenshots" onClick={(e) => scrollToSection(e, "screenshots")} className="text-sm text-foreground/70 hover:text-foreground transition-colors">Screenshots</a>
          </div>
          <div className="hidden md:block w-20" />
        </nav>

        {/* Hero content - side by side */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-12 md:pt-20 pb-0">
            <motion.div
              className="flex-1 text-center md:text-left pb-8 md:pb-20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
                Find your pet's perfect match
              </h1>
              <p className="text-foreground/60 text-lg md:text-xl max-w-lg mb-8">
                Get the app and find the ideal partner for your furry companion
              </p>
              <div className="flex flex-row gap-3 justify-center md:justify-start flex-wrap" id="download">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-all hover:scale-[1.02]">
                  <img src={appStoreBadge} alt="Download on the App Store" className="h-[44px]" />
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-all hover:scale-[1.02]">
                  <img src={googlePlayBadge} alt="Get it on Google Play" className="h-[44px]" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="flex-shrink-0 w-[240px] md:w-[280px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <PhoneMockup screenshot={screenshotHome} alt="Shoflak Klba home screen" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 md:px-12 py-24 scroll-mt-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why pet owners love us
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Everything you need to find the perfect match for your companion.
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-card hover:to-secondary/30 cursor-default">
                <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <f.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* App Screenshots */}
      <section id="screenshots" className="mx-4 rounded-[2rem] bg-card border border-border/30 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Take a peek inside
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Browse pets, chat with owners, save favorites, and manage your profile.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12">
            {[
              { img: screenshotHome, label: "Browse", alt: "Home screen" },
              { img: screenshotMessages, label: "Chat", alt: "Messages screen" },
              { img: screenshotFavorites, label: "Favorites", alt: "Favorites screen" },
              { img: screenshotProfile, label: "Profile", alt: "Profile screen" },
            ].map((item, i) => (
              <FadeInSection key={item.label} delay={i * 0.1}>
                <div className={`flex flex-col items-center ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}>
                  <PhoneMockup screenshot={item.img} alt={item.alt} className="max-w-[160px] sm:max-w-[180px] lg:max-w-[220px]" />
                  <p className="text-center mt-4 text-xs sm:text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                    {item.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Ready to find a match?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Download Shoflak Klba today and let your pet meet their soulmate.
          </p>
          <div className="flex flex-row gap-3 justify-center flex-wrap">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-all hover:scale-[1.02]">
              <img src={appStoreBadge} alt="Download on the App Store" className="h-[44px]" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-all hover:scale-[1.02]">
              <img src={googlePlayBadge} alt="Get it on Google Play" className="h-[44px]" />
            </a>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="Shoflak Klba" className="w-5 h-5 object-contain rounded" />
            <span className="font-display font-bold text-foreground text-sm">Shoflak Klba</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://tiktok.com" label="TikTok">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://x.com" label="X (Twitter)">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialIcon>
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
