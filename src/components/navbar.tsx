"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { BRAND } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#highlights", label: "Specials" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const count = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  const setOpen = useCart((s) => s.setOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#2A1609]/85 backdrop-blur-xl border-b border-[#F2C14E]/15 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-[#F2C14E] to-[#C8792B] flex items-center justify-center shadow-lg shadow-[#F2C14E]/30 transition-transform group-hover:rotate-[-8deg] group-hover:scale-105">
              <span className="font-display text-2xl text-[#2A1609] leading-none">S</span>
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#FF6B8B] ring-2 ring-[#2A1609]" />
            </div>
            <div className="leading-none">
              <div className="font-display text-base sm:text-lg text-[#FAFAFA] tracking-tight">
                SD Waffles <span className="text-[#F2C14E]">&</span> Shakes
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#F2C14E]/70 mt-0.5 hidden sm:block">
                Miryalaguda
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-[#FAFAFA]/80 hover:text-[#F2C14E] transition-colors group"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-[#F2C14E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold text-[#F2C14E] border border-[#F2C14E]/30 hover:bg-[#F2C14E]/10 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>

            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-[#FAFAFA] border border-[#FAFAFA]/15 hover:bg-[#FF6B8B] hover:border-[#FF6B8B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="relative h-10 px-3 sm:px-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F2C14E] to-[#C8792B] text-[#2A1609] font-bold text-sm shadow-lg shadow-[#F2C14E]/30 hover:shadow-[#F2C14E]/50 hover:scale-[1.03] active:scale-95 transition-all"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1 rounded-full bg-[#FF6B8B] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-[#2A1609]"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full text-[#FAFAFA] border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/10"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[#2A1609]/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="absolute top-20 inset-x-4 rounded-3xl bg-[#3D2314] border border-[#F2C14E]/20 p-4 shadow-2xl"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="flex items-center justify-between px-4 py-4 rounded-2xl text-[#FAFAFA] hover:bg-[#F2C14E]/10 transition-colors border-b border-[#F2C14E]/10 last:border-0"
                >
                  <span className="font-display text-lg">{link.label}</span>
                  <span className="text-[#F2C14E]/50 text-sm">0{i + 1}</span>
                </motion.a>
              ))}
              <div className="flex gap-2 mt-3">
                <a
                  href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#F2C14E] text-[#2A1609] font-bold"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#FF6B8B] text-white font-bold"
                >
                  <Instagram className="h-4 w-4" /> DM
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
