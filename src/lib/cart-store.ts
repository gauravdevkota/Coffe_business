"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuItem } from "./menu-data";

export interface CartLine {
  id: string; // matches MenuItem.id
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (item: MenuItem) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      isOpen: false,
      setOpen: (open) => set({ isOpen: open }),
      add: (item) =>
        set((state) => {
          const existing = state.lines.find((l) => l.id === item.id);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.id === item.id ? { ...l, qty: l.qty + 1 } : l
              ),
            };
          }
          return {
            lines: [
              ...state.lines,
              {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                qty: 1,
              },
            ],
          };
        }),
      increment: (id) =>
        set((state) => ({
          lines: state.lines.map((l) =>
            l.id === id ? { ...l, qty: l.qty + 1 } : l
          ),
        })),
      decrement: (id) =>
        set((state) => ({
          lines: state.lines
            .map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l))
            .filter((l) => l.qty > 0),
        })),
      remove: (id) =>
        set((state) => ({
          lines: state.lines.filter((l) => l.id !== id),
        })),
      clear: () => set({ lines: [] }),
    }),
    {
      name: "chiyaholics-cart",
    }
  )
);

// Selectors / helpers
export const selectCount = (s: CartState) =>
  s.lines.reduce((sum, l) => sum + l.qty, 0);

export const selectSubtotal = (s: CartState) =>
  s.lines.reduce((sum, l) => sum + l.qty * l.price, 0);
