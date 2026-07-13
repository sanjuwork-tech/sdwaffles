"use client";

import { motion } from "framer-motion";
import { Phone, UtensilsCrossed, ChevronDown, Star, Clock } from "lucide-react";
import { BRAND } from "@/lib/menu-data";
import { HeroScene } from "@/components/hero-scene";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#2A1609] pt-24 pb-16"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(/images/hero-chocolate.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1609]/85 via-[#2A1609]/70 to-[#2A1609]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1609] via-transparent to-[#2A1609]/40" />
        <div className="absolute inset-0 bg-waffle-grid opacity-30" />
        {/* glow blobs */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#F2C14E]/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-[#FF6B8B]/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100svh-6rem)]">
        {/* Left: copy */}
        <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-[#F2C14E] text-xs font-bold uppercase tracking-[0.2em] mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF6B8B] animate-pulse" />
            Now serving in Miryalaguda
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[14vw] sm:text-7xl lg:text-8xl text-[#FAFAFA] leading-[0.92]"
          >
            Where <span className="text-gradient-gold">waffles</span>
            <br />
            get wild <span className="text-gradient-strawberry">&amp;</span>
            <br />
            <span className="text-gradient-gold">shakes</span> get thick!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-md mx-auto lg:mx-0 text-[#FAFAFA]/70 text-base sm:text-lg"
          >
            Hand-pressed Belgian waffle sandwiches, spoon-standing thick shakes &
            viral dessert jars — crafted with serious sweet-tooth energy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#F2C14E] to-[#C8792B] text-[#2A1609] font-bold text-sm uppercase tracking-wide shadow-xl shadow-[#F2C14E]/30 hover:shadow-[#F2C14E]/60 hover:scale-[1.04] active:scale-95 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-gold opacity-60" />
              <UtensilsCrossed className="h-4 w-4 relative z-10" />
              <span className="relative z-10">View Menu</span>
            </a>
            <a
              href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-[#FAFAFA]/25 text-[#FAFAFA] font-bold text-sm uppercase tracking-wide hover:bg-[#FAFAFA]/10 hover:border-[#FF6B8B] transition-all"
            >
              <Phone className="h-4 w-4" />
              Call to Order
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
          >
            {[
              { icon: Star, value: "4.9★", label: "Rated" },
              { icon: Clock, value: "10:30–22:00", label: "Open Daily" },
              { icon: UtensilsCrossed, value: "20+", label: "Menu Items" },
            ].map((s, i) => (
              <div
                key={i}
                className="glass-dark rounded-2xl px-3 py-3 text-center"
              >
                <s.icon className="h-4 w-4 text-[#F2C14E] mx-auto mb-1" />
                <div className="text-[#FAFAFA] font-bold text-sm leading-tight">
                  {s.value}
                </div>
                <div className="text-[#FAFAFA]/50 text-[10px] uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D scene */}
        <div className="relative order-1 lg:order-2 h-[38vh] sm:h-[46vh] lg:h-[70vh] min-h-[280px]">
          <HeroScene className="absolute inset-0" />
          {/* Floating emoji accents */}
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 text-5xl drop-shadow-2xl select-none"
          >
            🍓
          </motion.div>
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [4, -4, 4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 right-6 text-6xl drop-shadow-2xl select-none"
          >
            🍫
          </motion.div>
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-12 text-4xl drop-shadow-2xl select-none"
          >
            🧇
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#F2C14E]/70 hover:text-[#F2C14E] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>

      {/* Bottom drip edge */}
      <div
        className="absolute -bottom-px inset-x-0 h-6 bg-[#FAFAFA]"
        style={{
          clipPath:
            "polygon(0 100%, 100% 100%, 100% 40%, 96% 60%, 92% 30%, 88% 55%, 84% 25%, 80% 50%, 76% 20%, 72% 55%, 68% 30%, 64% 60%, 60% 25%, 56% 55%, 52% 30%, 48% 60%, 44% 25%, 40% 55%, 36% 30%, 32% 60%, 28% 25%, 24% 55%, 20% 30%, 16% 60%, 12% 25%, 8% 55%, 4% 30%, 0 50%)",
        }}
      />
    </section>
  );
}
