"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#102c27]">
      {/* Hero image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-[1.04] bg-cover bg-center animate-heroZoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        {/* Editorial overlays */}
        <div className="absolute inset-0 bg-[#102c27]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071b17]/90 via-[#102c27]/55 to-[#102c27]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071b17]/80 via-transparent to-[#071b17]/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] items-end px-5 pb-20 pt-32 sm:px-8 md:items-center md:px-10 md:pb-24 lg:px-14">
        <div
          className={`max-w-[780px] transition-all duration-[1200ms] ease-out ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
            <span className="h-px w-8 bg-[#d8bd
