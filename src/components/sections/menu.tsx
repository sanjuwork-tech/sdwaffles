"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Flame, Sparkles, Star, Leaf, Search } from "lucide-react";
import { CATEGORIES, MENU_ITEMS, type MenuCategory, type MenuItem } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const BADGE_STYLES: Record<string, { label: string; cls: string; icon: typeof Flame }> = {
  bestseller: {
    label: "Best Seller",
    cls: "bg-gradient-to-r from-[#F2C14E] to-[#C8792B] text-[#2A1609]",
    icon: Flame,
  },
  viral: {
    label: "Viral",
    cls: "bg-gradient-to-r from-[#FF6B8B] to-[#E84A6C] text-white",
    icon: Sparkles,
  },
  new: {
    label: "New",
    cls: "bg-gradient-to-r from-[#FF6B8B] to-[#E84A6C] text-white",
    icon: Star,
  },
  chef: {
    label: "Chef's Pick",
    cls: "bg-gradient-to-r from-[#F2C14E] to-[#C8792B] text-[#2A1609]",
    icon: Star,
  },
};

function MenuCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const [pulse, setPulse] = useState(false);
  const badge = item.badge ? BADGE_STYLES[item.badge] : null;

  const handleAdd = () => {
    add(item);
    setPulse(true);
    setTimeout(() => setPulse(false), 400);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl bg-white border border-[#EFE3D3] overflow-hidden hover:border-[#F2C14E]/40 hover:shadow-2xl hover:shadow-[#3D2314]/10 transition-all duration-300"
    >
      {/* image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#FFF5E6] to-[#F5EDE3]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1609]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* badge */}
        {badge && (
          <div
            className={cn(
              "absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg",
              badge.cls
            )}
          >
            <badge.icon className="h-3 w-3" />
            {badge.label}
          </div>
        )}

        {/* veg/non-veg */}
        <div
          className={cn(
            "absolute top-3 right-3 h-6 w-6 rounded-md border-2 flex items-center justify-center bg-white/90 backdrop-blur",
            item.veg ? "border-[#3D2314]" : "border-[#FF6B8B]"
          )}
        >
          {item.veg ? (
            <Leaf className="h-3 w-3 text-[#3D2314]" />
          ) : (
            <div className="h-2 w-2 rounded-full bg-[#FF6B8B]" />
          )}
        </div>

        {/* price chip */}
        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#2A1609]/90 backdrop-blur text-[#F2C14E] font-display text-lg shadow-lg">
          ₹{item.price}
        </div>
      </div>

      {/* content */}
      <div className="p-4">
        <h3 className="font-display text-lg text-[#3D2314] leading-tight line-clamp-2 min-h-[2.5rem]">
          {item.name}
        </h3>
        <p className="mt-1.5 text-xs text-[#8B6F5C] leading-relaxed line-clamp-2 min-h-[2rem]">
          {item.description}
        </p>

        {/* tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-[#FFF5E6] text-[#8B6F5C] text-[10px] font-semibold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* add button */}
        <button
          onClick={handleAdd}
          className={cn(
            "mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#3D2314] text-[#F2C14E] font-bold text-sm hover:bg-[#2A1609] active:scale-95 transition-all relative overflow-hidden",
            pulse && "animate-cart-bounce"
          )}
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export function Menu() {
  const [active, setActive] = useState<MenuCategory>("waffles");
  const [query, setQuery] = useState("");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filtered = MENU_ITEMS.filter((item) => {
    const matchCat = item.category === active;
    const matchQuery = query
      ? item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        (item.tags || []).some((t) => t.toLowerCase().includes(query.toLowerCase()))
      : true;
    return matchCat && matchQuery;
  });

  const activeCat = CATEGORIES.find((c) => c.id === active)!;
  const counts = CATEGORIES.map((c) => ({
    ...c,
    count: MENU_ITEMS.filter((i) => i.category === c.id).length,
  }));

  return (
    <section
      id="menu"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FAFAFA] to-[#FFF5E6] overflow-hidden"
    >
      <div className="absolute inset-0 bg-waffle-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-[#FF6B8B]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-[#F2C14E]/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-[#3D2314] text-[#F2C14E] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            The Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl text-[#3D2314] leading-[0.95]"
          >
            What are you
            <br />
            <span className="text-gradient-strawberry">craving today?</span>
          </motion.h2>
          <p className="mt-4 text-[#8B6F5C] text-base sm:text-lg">
            Mix. Match. Munch. Tap a category and build your sweetest order.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B6F5C]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search waffles, shakes, snacks..."
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[#EFE3D3] focus:border-[#F2C14E] focus:ring-4 focus:ring-[#F2C14E]/20 outline-none text-sm text-[#3D2314] placeholder:text-[#8B6F5C]/60 transition-all shadow-sm"
          />
        </div>

        {/* Tabs */}
        <div className="sticky top-[68px] z-30 mb-8 -mx-4 px-4">
          <div className="mx-auto max-w-3xl rounded-full bg-[#3D2314] p-1.5 shadow-xl flex gap-1 overflow-x-auto no-scrollbar">
            {counts.map((cat) => (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[cat.id] = el;
                }}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "relative flex-1 min-w-fit whitespace-nowrap px-3 sm:px-5 py-2.5 rounded-full text-sm font-bold transition-colors",
                  active === cat.id
                    ? "text-[#2A1609]"
                    : "text-[#FAFAFA]/70 hover:text-[#F2C14E]"
                )}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F2C14E] to-[#C8792B] shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center justify-center gap-1.5">
                  <span className="text-base">{cat.emoji}</span>
                  <span className="hidden sm:inline">{cat.short}</span>
                  <span className="sm:hidden">{cat.short.split(" ")[0]}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full",
                      active === cat.id
                        ? "bg-[#2A1609]/20 text-[#2A1609]"
                        : "bg-[#FAFAFA]/10 text-[#FAFAFA]/60"
                    )}
                  >
                    {cat.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active category blurb */}
        <div className="text-center mb-8">
          <p className="text-[#8B6F5C] text-sm">
            <span className="font-bold text-[#3D2314]">{activeCat.label}</span> —{" "}
            {activeCat.blurb}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-3">🔍</div>
            <p className="text-[#8B6F5C] font-semibold">
              No items match &ldquo;{query}&rdquo; in this category.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-3 text-[#F2C14E] font-bold underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
