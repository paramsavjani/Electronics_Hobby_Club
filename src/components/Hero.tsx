"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ThreeBackground } from "./three-background";

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setMatches("matches" in e ? e.matches : e.matches);
    };
    setMatches(mql.matches);
    const listener = (e: MediaQueryListEvent) => onChange(e);
    mql.addEventListener?.("change", listener);
    return () => mql.removeEventListener?.("change", listener);
  }, [query]);
  return matches;
}
function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isShort = useMediaQuery("(max-height: 700px)");
  const reduceMotion = usePrefersReducedMotion();

  const bgDensity = React.useMemo(() => {
    if (reduceMotion) return 600;
    if (isMobile || isShort) return 1200;
    return 2200;
  }, [reduceMotion, isMobile, isShort]);

  const bgSpeed = React.useMemo(() => {
    if (reduceMotion) return 0.0;
    if (isMobile || isShort) return 0.035;
    return 0.065;
  }, [reduceMotion, isMobile, isShort]);

  const bgOpacity = React.useMemo(() => {
    if (isMobile || isShort) return 0.5;
    return 0.7;
  }, [isMobile, isShort]);

  const bgDepth = React.useMemo(() => (isMobile ? 720 : 900), [isMobile]);

  const handleExplore = React.useCallback(() => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#about";
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Contrast overlay to ensure WCAG AA text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/60 to-background/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(70% 50% at 85% 85%, rgba(255,122,26,0.16) 0%, rgba(255,122,26,0.08) 30%, rgba(0,0,0,0) 60%), radial-gradient(120% 90% at 50% 65%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Three.js electronics + drone background (decorative) */}
      <ThreeBackground
        className="pointer-events-none absolute inset-0 text-cyan-300"
        density={bgDensity}
        opacity={bgOpacity}
        speed={bgSpeed}
        depth={bgDepth}
        colors={["#22d3ee", "#ff7a1a", "#38bdf8"]}
        droneEnabled={!reduceMotion}
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 py-12 sm:py-20">
        <header className="space-y-3 sm:space-y-4">
          <h1
            id="hero-title"
            className="text-pretty font-heading font-black leading-tight text-4xl sm:text-6xl lg:text-7xl"
          >
            Learn. Build.
            <br />
            <span className="block text-5xl sm:text-7xl lg:text-8xl">
              Innovate.
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-muted-foreground text-base sm:text-xl leading-relaxed">
            DAU&apos;s oldest technical club celebrating 25 years of excellence.
            Join our legacy in electronics, drones, robotics, and emerging
            technologies since 2001.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            size="lg"
            onClick={handleExplore}
            className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4"
            aria-label="Explore the About section"
          >
            Explore
          </Button>
        </div>

        {/* Scroll cue */}
        <div className="pt-2 sm:pt-4 hidden sm:flex justify-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  );
}
