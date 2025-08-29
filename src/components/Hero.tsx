"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ThreeBackground } from "./three-background";

export default function Hero() {
  const handleExplore = React.useCallback(() => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#about";
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90svh] md:min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        aria-hidden="true"
      />

      {/* Contrast overlay to ensure WCAG AA text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/55 to-background/25"
        aria-hidden="true"
      />
      {/* Vignette for cinematic depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 65%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Three.js particle field (decorative) */}
      <ThreeBackground
        className="pointer-events-none absolute inset-0 text-cyan-300"
        density={2200}
        opacity={0.4}
        speed={0.03}
        colors={["#22d1ee", "#a3e635", "#38bdf8", "#60a5fa"]}
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <header className="space-y-4">
          <h1
            id="hero-title"
            className="text-pretty font-heading font-black leading-tight text-5xl sm:text-6xl lg:text-7xl"
          >
            Learn. Build.
            <br />
            <span className="block text-6xl sm:text-7xl lg:text-8xl">
              Innovate.
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-muted-foreground text-lg sm:text-xl leading-relaxed">
            DAU&apos;s oldest technical club celebrating 25 years of excellence.
            Join our legacy of innovation in electronics, robotics, and emerging
            technologies since 2001.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleExplore}
            className="text-base sm:text-lg px-7 sm:px-8 py-4"
          >
            Explore
          </Button>
        </div>

        {/* Scroll cue */}
        <div className="pt-4 flex justify-center">
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
