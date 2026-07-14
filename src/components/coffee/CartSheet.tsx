"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart, selectSubtotal } from "@/lib/cart-store";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TAX_RATE = 0.0875;

export function CartSheet() {
  const { lines, isOpen, setOpen, increment, decrement, remove, clear } =
    useCart();
  const subtotal = useCart(selectSubtotal);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  const { toast } = useToast();
  const [checkingOut, setCheckingOut] = useState(false);

  const handleCheckout = () => {
    if (lines.length === 0) return;
    setCheckingOut(true);
    window.setTimeout(() => {
      setCheckingOut(false);
      toast({
        title: "Order placed!",
        description: `Your total of $${total.toFixed(2)} has been received. See you soon.`,
      });
      clear();
      setOpen(false);
    }, 1400);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border/60 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="font-serif text-2xl">Your Order</SheetTitle>
              <SheetDescription className="mt-1">
                {lines.length === 0
                  ? "Your cart is empty."
                  : `${lines.reduce((s, l) => s + l.qty, 0)} item${
                      lines.reduce((s, l) => s + l.qty, 0) === 1 ? "" : "s"
                    } ready to brew`}
              </SheetDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setOpen(false)}
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-foreground">
                Nothing brewing yet
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add a coffee or pastry from the menu to get started.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-2 rounded-full"
              onClick={() => setOpen(false)}
            >
              Browse the menu
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-4">
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="flex gap-3 rounded-xl border border-border/60 bg-card p-3"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={line.image}
                        alt={line.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium leading-tight text-foreground">
                          {line.name}
                        </p>
                        <button
                          type="button"
                          onClick={() => remove(line.id)}
                          className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                          aria-label={`Remove ${line.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ${line.price.toFixed(2)} each
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1 rounded-full border border-border bg-background p-1">
                          <button
                            type="button"
                            onClick={() => decrement(line.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                            aria-label={`Decrease ${line.name} quantity`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => increment(line.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                            aria-label={`Increase ${line.name} quantity`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-serif text-base font-semibold text-primary">
                          ${(line.price * line.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={clear}
                className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Clear cart
              </button>
            </div>

            <SheetFooter className="border-t border-border/60 px-6 py-5">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (8.75%)</span>
                  <span className="tabular-nums">${tax.toFixed(2)}</span>
                </div>
                <Separator className="my-1" />
                <div className="flex justify-between font-serif text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                disabled={checkingOut}
                className="mt-4 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                {checkingOut ? "Placing order..." : "Place Order"}
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Free in-store pickup · Ready in ~8 minutes
              </p>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
