"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Flame, Sparkles, Star, Leaf, Search } from "lucide-react";
import { CATEGORIES, MENU_ITEMS, type MenuItem } from "@/lib/menu-data";
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

const ACCENT_BG: Record<string, string> = {
  gold: "from-[#F2C14E]/20 to-[#C8792B]/10",
  strawberry: "from-[#FF6B8B]/20 to-[#E84A6C]/10",
  choco: "from-[#3D2314]/15 to-[#2A1609]/5",
  cream: "from-[#FFF5E6] to-[#F5EDE3]",
};

function MenuCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const [pulse, setPulse] = useState(false);
  const badge = item.badge ? BADGE_STYLES[item.badge] : null;
  const cat = CATEGORIES.find((c) => c.id === item.category);
  const accent = cat?.accent || "gold";

  const handleAdd = () => {
    add(item);
    setPulse(true);
    setTimeout(() => setPulse(false), 400);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex gap-3 p-3 rounded-2xl bg-white border border-[#EFE3D3] hover:border-[#F2C14E]/50 hover:shadow-lg hover:shadow-[#3D2314]/8 transition-all duration-300"
    >
      {/* Thumbnail: image or emoji fallback */}
      <div className={cn(
        "relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br flex items-center justify-center",
        ACCENT_BG[accent]
      )}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-4xl sm:text-5xl drop-shadow-md select-none transition-transform duration-500 group-hover:scale-110">
            {item.emoji}
          </span>
        )}
        {/* badge */}
        {badge && (
          <div
            className={cn(
              "absolute -top-1.5 -left-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider shadow-md",
              badge.cls
            )}
          >
            <badge.icon className="h-2 w-2" />
            {badge.label}
          </div>
        )}
        {/* veg/non-veg dot */}
        <div
          className={cn(
            "absolute -bottom-1 -right-1 h-5 w-5 rounded-md border-2 flex items-center justify-center bg-white shadow",
            item.veg ? "border-[#3D2314]" : "border-[#FF6B8B]"
          )}
        >
          {item.veg ? (
            <div className="h-2 w-2 rounded-full bg-[#3D2314]" />
          ) : (
            <div className="h-2 w-2 rounded-full bg-[#FF6B8B]" />
          )}
        </div>
      </div>

      {/* content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <h3 className="font-display text-sm sm:text-base text-[#3D2314] leading-tight line-clamp-2">
            {item.name}
          </h3>
          {item.variants && (
            <div className="text-[10px] text-[#F2C14E] font-bold uppercase tracking-wider mt-0.5">
              {item.variants}
            </div>
          )}
          {item.description && (
            <p className="mt-1 text-[11px] sm:text-xs text-[#8B6F5C] leading-snug line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 mt-1.5">
          <span className="font-display text-base sm:text-lg text-[#3D2314]">
            ₹{item.price}
          </span>
          <button
            onClick={handleAdd}
            className={cn(
              "inline-flex items-center justify-center gap-1 h-8 px-3 rounded-full bg-[#3D2314] text-[#F2C14E] font-bold text-xs hover:bg-[#2A1609] active:scale-95 transition-all",
              pulse && "animate-cart-bounce"
            )}
          >
            <Plus className="h-3 w-3" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Menu() {
  const [active, setActive] = useState<string>("waffle-sandwich");
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const filtered = MENU_ITEMS.filter((item) => {
    const matchQuery = query
      ? item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.description || "").toLowerCase().includes(query.toLowerCase()) ||
        (item.tags || []).some((t) => t.toLowerCase().includes(query.toLowerCase()))
      : true;
    // When searching, look across ALL categories. Otherwise, filter by active tab.
    const matchCat = query ? true : item.category === active;
    return matchCat && matchQuery;
  });

  const isSearching = query.trim().length > 0;

  const activeCat = CATEGORIES.find((c) => c.id === active)!;
  const counts = CATEGORIES.map((c) => ({
    ...c,
    count: MENU_ITEMS.filter((i) => i.category === c.id).length,
  }));

  // Auto-scroll active tab into view
  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const tab = activeTabRef.current;
      const container = tabsRef.current;
      const tabRect = tab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (tabRect.left < containerRect.left + 20 || tabRect.right > containerRect.right - 20) {
        tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [active]);

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
            The Full Menu
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
            Mix. Match. Munch. {MENU_ITEMS.length}+ treats across {CATEGORIES.length} categories — build your sweetest order.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B6F5C]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search waffles, shakes, snacks..."
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[#EFE3D3] focus:border-[#F2C14E] focus:ring-4 focus:ring-[#F2C14E]/20 outline-none text-sm text-[#3D2314] placeholder:text-[#8B6F5C]/60 transition-all shadow-sm"
          />
        </div>

        {/* Tabs — horizontal scrollable */}
        <div className="sticky top-[64px] z-30 mb-8 -mx-4 px-4 py-2 bg-[#FAFAFA]/80 backdrop-blur-md">
          <div
            ref={tabsRef}
            className="mx-auto max-w-4xl flex gap-1.5 overflow-x-auto no-scrollbar pb-1 justify-start sm:justify-center"
          >
            {counts.map((cat) => (
              <button
                key={cat.id}
                ref={cat.id === active ? activeTabRef : null}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "relative shrink-0 whitespace-nowrap px-3.5 py-2.5 rounded-full text-sm font-bold transition-colors",
                  active === cat.id
                    ? "text-[#2A1609]"
                    : "text-[#3D2314]/70 hover:text-[#3D2314] bg-white/60 hover:bg-white border border-[#EFE3D3]"
                )}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F2C14E] to-[#C8792B] shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  <span className="text-base">{cat.emoji}</span>
                  <span>{cat.short}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full",
                      active === cat.id
                        ? "bg-[#2A1609]/20 text-[#2A1609]"
                        : "bg-[#3D2314]/8 text-[#3D2314]/60"
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
          {isSearching ? (
            <p className="text-[#8B6F5C] text-sm">
              Showing <span className="font-bold text-[#3D2314]">{filtered.length}</span> results for &ldquo;<span className="font-bold text-[#F2C14E]">{query}</span>&rdquo; across all categories
            </p>
          ) : (
            <p className="text-[#8B6F5C] text-sm">
              <span className="font-bold text-[#3D2314]">{activeCat.label}</span> —{" "}
              {activeCat.blurb}
            </p>
          )}
        </div>

        {/* Grid — compact list cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
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
