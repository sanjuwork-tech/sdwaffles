"use client";

import { Phone, Instagram, Clock, MapPin, ArrowUp, Heart } from "lucide-react";
import { BRAND } from "@/lib/menu-data";

export function Footer() {
  return (
    <footer className="relative bg-[#1a0d04] text-[#FAFAFA] mt-auto safe-bottom border-t border-[#F2C14E]/15">
      {/* Top drip accent */}
      <div
        className="h-3 bg-gradient-to-r from-[#F2C14E] via-[#FF6B8B] to-[#F2C14E]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 0, 96% 100%, 92% 0, 88% 100%, 84% 0, 80% 100%, 76% 0, 72% 100%, 68% 0, 64% 100%, 60% 0, 56% 100%, 52% 0, 48% 100%, 44% 0, 40% 100%, 36% 0, 32% 100%, 28% 0, 24% 100%, 20% 0, 16% 100%, 12% 0, 8% 100%, 4% 0, 0 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#F2C14E] to-[#C8792B] flex items-center justify-center shadow-lg">
                <span className="font-display text-2xl text-[#2A1609]">S</span>
              </div>
              <div>
                <div className="font-display text-xl">
                  SD Waffles <span className="text-[#F2C14E]">&</span> Shakes
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#F2C14E]/70">
                  {BRAND.location}
                </div>
              </div>
            </div>
            <p className="font-display text-2xl sm:text-3xl text-gradient-gold leading-tight max-w-md">
              {BRAND.tagline}
            </p>
            <p className="mt-3 text-sm text-[#FAFAFA]/50 max-w-md leading-relaxed">
              A youthful dessert destination crafting wild waffle sandwiches,
              thick shakes & viral sweet treats in the heart of Miryalaguda.
            </p>
            <div className="flex gap-2 mt-5">
              <a
                href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`}
                className="h-10 w-10 rounded-full bg-[#F2C14E]/10 border border-[#F2C14E]/30 flex items-center justify-center text-[#F2C14E] hover:bg-[#F2C14E] hover:text-[#2A1609] transition-colors"
                aria-label="Call"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#FF6B8B]/10 border border-[#FF6B8B]/30 flex items-center justify-center text-[#FF6B8B] hover:bg-[#FF6B8B] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C14E] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#home", label: "Home" },
                { href: "#highlights", label: "Specials" },
                { href: "#menu", label: "Full Menu" },
                { href: "#visit", label: "Visit Us" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#FAFAFA]/60 hover:text-[#F2C14E] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C14E] mb-4">
              Find Us
            </h4>
            <ul className="space-y-3 text-sm text-[#FAFAFA]/60">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 text-[#FF6B8B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BRAND.primaryAddress}</span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="h-4 w-4 text-[#FF6B8B] shrink-0 mt-0.5" />
                <span>
                  {BRAND.hours.open} – {BRAND.hours.close}
                  <br />
                  <span className="text-xs text-[#FAFAFA]/40">
                    {BRAND.hours.days}
                  </span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 text-[#FF6B8B] shrink-0 mt-0.5" />
                <span>
                  {BRAND.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-[#F2C14E] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 pt-6 border-t border-[#F2C14E]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#FAFAFA]/40 text-center sm:text-left">
            © {new Date().getFullYear()} SD Waffles & Shakes. All rights reserved.
            <span className="hidden sm:inline"> · {BRAND.altInstagramHandle}</span>
          </p>
          <p className="text-xs text-[#FAFAFA]/40 flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 text-[#FF6B8B] fill-[#FF6B8B]" /> for
            sweet tooths in Miryalaguda
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F2C14E] hover:text-[#F9D77E] transition-colors"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
