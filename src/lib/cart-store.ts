"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuItem } from "@/lib/menu-data";

export interface CartLine {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
  count: () => number;
  subtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      add: (item) =>
        set((s) => {
          const existing = s.lines.find((l) => l.id === item.id);
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.id === item.id ? { ...l, qty: l.qty + 1 } : l
              ),
              isOpen: true,
            };
          }
          return {
            lines: [
              ...s.lines,
              {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                qty: 1,
              },
            ],
            isOpen: true,
          };
        }),
      remove: (id) =>
        set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),
      inc: (id) =>
        set((s) => ({
          lines: s.lines.map((l) =>
            l.id === id ? { ...l, qty: l.qty + 1 } : l
          ),
        })),
      dec: (id) =>
        set((s) => ({
          lines: s.lines
            .map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l))
            .filter((l) => l.qty > 0),
        })),
      clear: () => set({ lines: [] }),
      setOpen: (open) => set({ isOpen: open }),
      count: () => get().lines.reduce((n, l) => n + l.qty, 0),
      subtotal: () =>
        get().lines.reduce((n, l) => n + l.qty * l.price, 0),
    }),
    { name: "sd-cart" }
  )
);
