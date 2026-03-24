"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types";
import { CheckIcon, ShoppingCartIcon } from "@/components/icons";

interface AddToCartButtonProps {
  product: Product;
  size?: "sm" | "md" | "lg";
}

export default function AddToCartButton({ product, size = "sm" }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const sizeClasses = {
    sm: "text-[11px] py-2 px-3 gap-1.5",
    md: "text-xs py-2.5 px-4 gap-2",
    lg: "text-sm py-3 px-6 gap-2",
  };

  return (
    <button
      onClick={handleAdd}
      className={`shimmer clip-cyber-sm w-full flex items-center justify-center font-cyber font-bold uppercase tracking-widest border transition-all duration-200 active:scale-95 ${sizeClasses[size]} ${
        added
          ? "bg-cyber-green border-cyber-green text-cyber-bg"
          : "bg-transparent border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg shadow-neon-cyan"
      }`}
      style={
        added
          ? { boxShadow: "0 0 16px #39ff14, 0 0 32px #39ff1433" }
          : undefined
      }
    >
      {added ? (
        <>
          <CheckIcon className="w-3.5 h-3.5 shrink-0" />
          // ACQUIRED
        </>
      ) : (
        <>
          <ShoppingCartIcon className="w-3.5 h-3.5 shrink-0" />
          ADD TO CART
        </>
      )}
    </button>
  );
}
