import { Heart, MessageCircle, Search, Shield, Star } from "lucide-react";
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

const StoreBadges = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
      <img src={appStoreBadge} alt="Download on the App Store" className="h-12" />
    </a>
    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
      <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12" />
    </a>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Subtle paw pattern background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='68' rx='18' ry='14' fill='%23333'/%3E%3Ccircle cx='34' cy='44' r='9' fill='%23333'/%3E%3Ccircle cx='50' cy='38' r='8' fill='%23333'/%3E%3Ccircle cx='66' cy='44' r='9' fill='%23333'/%3E%3Ccircle cx='76' cy='56' r='7' fill='%23333'/%3E%3Ccircle cx='24' cy='56' r='7' fill='%23333'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <Heart className="w-4.5 h-4.5 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">Shoflak Klba</span>
        </div>
        <a
          href="#download"
          className="gradient-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          Download
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 mb-6">
              <Heart className="w-3.5 h-3.5 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold text-secondary-foreground">#1 Pet Marriage App</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Find Your Pet's
              <span className="block gradient-primary bg-clip-text text-transparent">
                Perfect Match
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-10 mx-auto lg:mx-0 leading-relaxed">
              Connect with pet owners, browse adorable profiles, and find the ideal partner for your furry friend.
            </p>
            <div id="download">
              <StoreBadges className="justify-center lg:justify-start" />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="animate-float">
              <PhoneMockup screenshot={screenshotHome} alt="Shoflak Klba home screen" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Pet Owners Love Us
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Everything you need to find the perfect match for your companion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-border/30"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Take a Peek Inside
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse pets, chat with owners, save favorites, and manage your profile — all in one app.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {[
            { img: screenshotHome, label: "Browse", alt: "Home screen" },
            { img: screenshotMessages, label: "Chat", alt: "Messages screen" },
            { img: screenshotFavorites, label: "Favorites", alt: "Favorites screen" },
            { img: screenshotProfile, label: "Profile", alt: "Profile screen" },
          ].map((item, i) => (
            <div key={item.label} className={i % 2 === 0 ? "animate-float" : "animate-float-delayed"}>
              <PhoneMockup screenshot={item.img} alt={item.alt} />
              <p className="text-center mt-5 font-display font-semibold text-foreground text-sm tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="gradient-primary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary-foreground/5" />
          <div className="grid grid-cols-3 gap-8 relative z-10">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">10K+</div>
              <div className="text-sm text-primary-foreground/75 mt-1">Happy Pets</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">5K+</div>
              <div className="text-sm text-primary-foreground/75 mt-1">Matches Made</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">4.8</div>
              <div className="text-sm text-primary-foreground/75 mt-1 flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" /> Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Find a Match?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Download Shoflak Klba today and let your pet meet their soulmate.
        </p>
        <StoreBadges className="justify-center" />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-2">
          <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-foreground">Shoflak Klba</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Shoflak Klba. Made with love for pets.
        </p>
      </footer>
    </div>
  );
};

export default Index;
