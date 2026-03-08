import { Heart, MessageCircle, Search, Shield, Star, Download } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import PawPrint from "@/components/PawPrint";
import BoneIcon from "@/components/BoneIcon";
import heroDogsImg from "@/assets/hero-dogs.png";
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
      {/* Floating paw decorations */}
      <PawPrint className="fixed top-20 left-8 text-primary/10 rotate-[-25deg]" size={60} />
      <PawPrint className="fixed top-40 right-12 text-accent/10 rotate-[15deg]" size={45} />
      <PawPrint className="fixed bottom-32 left-16 text-primary/8 rotate-[30deg]" size={50} />
      <BoneIcon className="fixed top-60 left-[20%] text-primary/8 rotate-[20deg]" size={55} />
      <BoneIcon className="fixed bottom-48 right-[15%] text-accent/8 rotate-[-15deg]" size={45} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <PawPrint className="text-primary" size={28} />
          <span className="font-display text-xl font-bold text-foreground">Shoflak Klba</span>
        </div>
        <a
          href="#download"
          className="gradient-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          Download App
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 mb-6">
              <Heart className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm font-semibold text-secondary-foreground">#1 Pet Marriage App</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Find Your Pet's
              <span className="block gradient-primary bg-clip-text text-transparent">
                Perfect Match
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 mx-auto lg:mx-0">
              Connect with pet owners, browse adorable profiles, and find the ideal partner for your furry friend. 🐾
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" id="download">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-base font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Get it on</div>
                  <div className="text-base font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <img
              src={heroDogsImg}
              alt="Two cute dogs with a heart"
              className="w-80 md:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Pet Owners Love Us
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to find the perfect match for your furry companion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Screenshots */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Take a Peek Inside
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse pets, chat with owners, save favorites, and manage your profile — all in one app.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="animate-float">
            <PhoneMockup screenshot={screenshotHome} alt="Home screen showing pet listings" />
            <p className="text-center mt-4 font-display font-semibold text-foreground">Browse</p>
          </div>
          <div className="animate-float-delayed">
            <PhoneMockup screenshot={screenshotMessages} alt="Messages screen" />
            <p className="text-center mt-4 font-display font-semibold text-foreground">Chat</p>
          </div>
          <div className="animate-float">
            <PhoneMockup screenshot={screenshotFavorites} alt="Favorites screen" />
            <p className="text-center mt-4 font-display font-semibold text-foreground">Favorites</p>
          </div>
          <div className="animate-float-delayed">
            <PhoneMockup screenshot={screenshotProfile} alt="Profile screen" />
            <p className="text-center mt-4 font-display font-semibold text-foreground">Profile</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="gradient-primary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <PawPrint className="absolute top-4 left-6 text-primary-foreground/20 rotate-[-15deg]" size={50} />
          <BoneIcon className="absolute bottom-6 right-8 text-primary-foreground/15 rotate-[10deg]" size={60} />
          <PawPrint className="absolute top-8 right-20 text-primary-foreground/10 rotate-[25deg]" size={35} />
          <div className="grid grid-cols-3 gap-8 relative z-10">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">10K+</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Happy Pets</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">5K+</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Matches Made</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">4.8</div>
              <div className="text-sm text-primary-foreground/80 mt-1 flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <BoneIcon className="text-primary/20 mx-auto mb-6 animate-wiggle" size={60} />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Find a Match?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Download Shoflak Klba today and let your pet meet their soulmate! 🐶❤️
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">App Store</span>
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">Google Play</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <PawPrint className="text-primary" size={20} />
          <span className="font-display font-bold text-foreground">Shoflak Klba</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shoflak Klba. Made with ❤️ for pets.
        </p>
      </footer>
    </div>
  );
};

export default Index;
