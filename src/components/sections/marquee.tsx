"use client";

const MARQUEE_ITEMS = [
  "🧇 WILD WAFFLES",
  "🥤 THICK SHAKES",
  "🍓 VIRAL BROWNIE JAR",
  "🍫 TRIPLE CHOCOLATE",
  "🍔 MR. BURGER",
  "🍹 BUBBLEGUM MOCKTAIL",
  "✨ DINE-IN & TAKEAWAY",
  "🔥 OPEN DAILY 10:30–22:00",
];

export function Marquee() {
  return (
    <div className="relative bg-gradient-to-r from-[#3D2314] via-[#2A1609] to-[#3D2314] py-4 sm:py-5 border-y border-[#F2C14E]/20 overflow-hidden marquee-pause">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="font-display text-xl sm:text-2xl lg:text-3xl text-[#FAFAFA] px-6 tracking-tight">
                  {item}
                </span>
                <span className="text-[#F2C14E] text-2xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
