"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Flame, Sparkles, Plus, ArrowUpRight } from "lucide-react";
import { FEATURED_ITEMS } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

function TiltCard({
  item,
  index,
}: {
  item: (typeof FEATURED_ITEMS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const add = useCart((s) => s.add);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const isStrawberry = item.accent === "strawberry";
  const accentText = isStrawberry ? "text-[#FF6B8B]" : "text-[#F2C14E]";
  const accentBg = isStrawberry
    ? "from-[#FF6B8B] to-[#E84A6C]"
    : "from-[#F2C14E] to-[#C8792B]";
  const accentGlow = isStrawberry ? "#FF6B8B" : "#F2C14E";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="preserve-3d"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className={cn(
          "relative rounded-[2rem] overflow-hidden p-6 sm:p-8 min-h-[440px] flex flex-col",
          "bg-gradient-to-br",
          isStrawberry
            ? "from-[#3D1020] via-[#2A1609] to-[#1a0d04]"
            : "from-[#3D2314] via-[#2A1609] to-[#1a0d04]",
          "border border-[#F2C14E]/15 shadow-2xl"
        )}
      >
        {/* glow */}
        <div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[100px] opacity-50 pointer-events-none"
          style={{ background: accentGlow }}
        />

        {/* Badge */}
        <div style={{ transform: "translateZ(60px)" }} className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r text-[#2A1609] shadow-lg",
              accentBg
            )}
          >
            {isStrawberry ? <Sparkles className="h-3 w-3" /> : <Flame className="h-3 w-3" />}
            {item.subtitle}
          </span>
          <span className="text-[#FAFAFA]/30 text-5xl font-display">0{index + 1}</span>
        </div>

        {/* Image */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative flex-1 flex items-center justify-center my-2"
        >
          <div
            className={cn(
              "relative h-44 w-44 sm:h-52 sm:w-52 rounded-full overflow-hidden ring-4 transition-transform duration-500",
              isStrawberry ? "ring-[#FF6B8B]/40" : "ring-[#F2C14E]/40",
              hovered && "scale-105"
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          {/* rotating ring */}
          <div
            className={cn(
              "absolute h-56 w-56 sm:h-64 sm:w-64 rounded-full border border-dashed animate-spin-slow",
              isStrawberry ? "border-[#FF6B8B]/30" : "border-[#F2C14E]/30"
            )}
          />
        </div>

        {/* Title + desc */}
        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="font-display text-2xl sm:text-3xl text-[#FAFAFA] leading-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-[#FAFAFA]/60 leading-relaxed">
            {item.description}
          </p>

          {/* stats */}
          <div className="mt-4 flex gap-2">
            {item.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 rounded-xl bg-[#FAFAFA]/5 border border-[#F2C14E]/10 px-2 py-2 text-center"
              >
                <div className={cn("font-display text-lg", accentText)}>
                  {stat.value}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-[#FAFAFA]/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{ transform: "translateZ(60px)" }}
          className="mt-5 flex items-center justify-between gap-2"
        >
          <button
            onClick={() =>
              add({
                id: item.itemId,
                name: item.title,
                price: 189,
                image: item.image,
                category: "waffles",
                description: "",
              })
            }
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r text-[#2A1609] font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-transform",
              accentBg
            )}
          >
            <Plus className="h-4 w-4" /> Add to Cart
          </button>
          <a
            href="#menu"
            className={cn(
              "inline-flex items-center gap-1 text-sm font-semibold hover:underline",
              accentText
            )}
          >
            Explore <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Highlights() {
  return (
    <section id="highlights" className="relative py-20 sm:py-28 bg-[#FAFAFA] overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 bg-waffle-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#F2C14E]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#FF6B8B]/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-[#3D2314] text-[#F2C14E] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Crowd Favourites
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl text-[#3D2314] leading-[0.95]"
          >
            The stars of
            <br />
            <span className="text-gradient-choco-gold">the show</span>
          </motion.h2>
          <p className="mt-4 text-[#8B6F5C] text-base sm:text-lg">
            Two legendary creations that put SD on the map. Tilt your phone —
            these cards live in 3D.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {FEATURED_ITEMS.map((item, i) => (
            <TiltCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
