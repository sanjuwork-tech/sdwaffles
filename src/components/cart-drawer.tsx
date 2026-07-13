"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, Phone, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { BRAND } from "@/lib/menu-data";
import { toast } from "sonner";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function CartDrawer() {
  const { lines, isOpen, setOpen, inc, dec, remove, subtotal, clear } = useCart();
  const total = subtotal();

  const buildOrderMessage = () => {
    let msg = "Hi SD Waffles & Shakes! 🧇 I'd like to order:\n\n";
    lines.forEach((l, i) => {
      msg += `${i + 1}. ${l.name} × ${l.qty} — ₹${l.price * l.qty}\n`;
    });
    msg += `\nTotal: ₹${total}\n\nPlease confirm. Thanks!`;
    return encodeURIComponent(msg);
  };

  const handleOrder = () => {
    if (lines.length === 0) return;
    const phone = BRAND.phones[0].replace(/[^0-9]/g, "");
    window.open(
      `https://wa.me/${phone}?text=${buildOrderMessage()}`,
      "_blank"
    );
    toast.success("Opening WhatsApp with your order...");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60]"
        >
          <div
            className="absolute inset-0 bg-[#2A1609]/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 36 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAFAFA] flex flex-col shadow-2xl safe-bottom"
          >
            {/* header */}
            <div className="flex items-center justify-between p-5 bg-[#2A1609] text-[#FAFAFA]">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#F2C14E] to-[#C8792B] flex items-center justify-center text-[#2A1609]">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display text-lg leading-none">Your Sweet Cart</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#F2C14E]/70 mt-0.5">
                    {lines.length} {lines.length === 1 ? "item" : "items"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {lines.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-6">
                  <div className="text-7xl mb-3">🍩</div>
                  <div className="font-display text-2xl text-[#3D2314]">
                    Your cart is empty
                  </div>
                  <p className="text-sm text-[#8B6F5C] mt-2 max-w-xs">
                    Waffles & shakes are waiting. Add something sweet to get
                    started!
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-5 px-5 py-2.5 rounded-full bg-[#3D2314] text-[#F2C14E] font-bold text-sm hover:bg-[#2A1609] transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                lines.map((line) => (
                  <motion.div
                    key={line.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-3 p-3 rounded-2xl bg-white border border-[#EFE3D3]"
                  >
                    <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 bg-[#FFF5E6]">
                      <img
                        src={line.image}
                        alt={line.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-sm text-[#3D2314] leading-tight line-clamp-2">
                        {line.name}
                      </div>
                      <div className="text-[#F2C14E] font-bold text-sm mt-0.5">
                        ₹{line.price}{" "}
                        <span className="text-[#8B6F5C] text-xs font-normal">
                          × {line.qty}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => dec(line.id)}
                          className="h-7 w-7 rounded-full bg-[#FFF5E6] hover:bg-[#F2C14E]/20 flex items-center justify-center text-[#3D2314]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-bold text-sm text-[#3D2314] min-w-6 text-center">
                          {line.qty}
                        </span>
                        <button
                          onClick={() => inc(line.id)}
                          className="h-7 w-7 rounded-full bg-[#FFF5E6] hover:bg-[#F2C14E]/20 flex items-center justify-center text-[#3D2314]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => remove(line.id)}
                          className="ml-auto h-7 w-7 rounded-full bg-[#FF6B8B]/10 hover:bg-[#FF6B8B]/20 flex items-center justify-center text-[#FF6B8B]"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="font-display text-base text-[#3D2314] shrink-0">
                      ₹{line.price * line.qty}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* footer */}
            {lines.length > 0 && (
              <div className="border-t border-[#EFE3D3] p-5 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8B6F5C] uppercase tracking-wider">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl text-[#3D2314]">
                    ₹{total}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#8B6F5C]">
                  <span>Dine-in / Takeaway</span>
                  <span>Taxes included</span>
                </div>
                <button
                  onClick={handleOrder}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Order on WhatsApp
                </button>
                <a
                  href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border-2 border-[#3D2314] text-[#3D2314] font-bold text-sm hover:bg-[#3D2314] hover:text-[#F2C14E] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call to Order
                </a>
                <button
                  onClick={() => {
                    clear();
                    toast("Cart cleared", { description: "Start fresh!" });
                  }}
                  className="w-full text-xs text-[#8B6F5C] hover:text-[#FF6B8B] underline"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
