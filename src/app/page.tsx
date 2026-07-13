"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Highlights } from "@/components/sections/highlights";
import { Menu } from "@/components/sections/menu";
import { VisitUs } from "@/components/sections/visit-us";
import { Footer } from "@/components/sections/footer";
import { CartDrawer } from "@/components/cart-drawer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAFA]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Highlights />
        <Menu />
        <VisitUs />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
