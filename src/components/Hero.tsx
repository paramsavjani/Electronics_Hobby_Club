import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping animation-delay-3000"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black gradient-text-hero leading-tight">
            Learn. Build.
            <br />
            <span className="text-6xl sm:text-7xl lg:text-8xl">Innovate.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DAU's oldest technical club celebrating 25 years of excellence. Join our legacy of 
            innovation in electronics, robotics, and emerging technologies since 2001.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="hero" size="lg" onClick={() => (window.location.href = "#about")} className="text-lg px-8 py-4">
            Explore
          </Button>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30"></div>
    </section>
  );
};

export default Hero;