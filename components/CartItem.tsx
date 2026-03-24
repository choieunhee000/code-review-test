"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { CartItem as CartItemType } from "@/types";
import { TrashIcon, PlusIcon, MinusIcon } from "@/components/icons";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartStore();
  const { product, quantity } = item;

  return (
    <div
      className="flex gap-4 p-4 mb-3 border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-200"
      style={{
        background:"rgba(10,10,30,.65)",
        backdropFilter:"blur(8px)",
        WebkitBackdropFilter:"blur(8px)",
      }}
    >
      {/* Image */}
      <Link
        href={`/products/${product.id}`}
        className="relative w-22 h-22 flex-shrink-0 overflow-hidden bg-cyber-bg border border-cyber-border hover:border-cyber-cyan/50 transition-colors scanlines"
        style={{ width:88, height:88, boxShadow:"0 0 0 1px #00e5ff11" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="88px"
          className="object-cover brightness-75 saturate-50 hover:brightness-90 hover:saturate-70 transition-all duration-200"
        />
      </Link>

      {/* Details */}
      <div className="flex flex-col flex-1 min-w-0 gap-1.5">
        <div className="flex justify-between gap-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="text-[13px] font-cyber text-cyber-text hover:text-neon-cyan transition-colors line-clamp-2 leading-snug tracking-wide">
              {product.name}
            </h3>
          </Link>
          <button
            onClick={() => removeFromCart(product.id)}
            className="flex-shrink-0 text-cyber-muted hover:text-cyber-magenta transition-colors p-1 hover:bg-cyber-magenta/10 rounded-sm"
            aria-label="Remove item"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>

        <span className="text-[10px] font-cyber text-cyber-cyan/80 uppercase tracking-widest">
          ▸ {product.category}
        </span>

        <div className="flex items-center justify-between mt-auto pt-1.5">
          {/* Quantity */}
          <div className="flex items-center clip-cyber-sm border border-cyber-border overflow-hidden">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="px-2.5 py-1.5 hover:bg-cyber-cyan hover:text-cyber-bg transition-colors text-cyber-text border-r border-cyber-border text-xs"
              aria-label="Decrease"
            >
              <MinusIcon className="w-3 h-3" />
            </button>
            <span className="px-4 text-sm font-cyber text-cyber-cyan min-w-[2.5rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="px-2.5 py-1.5 hover:bg-cyber-cyan hover:text-cyber-bg transition-colors text-cyber-text border-l border-cyber-border text-xs"
              aria-label="Increase"
            >
              <PlusIcon className="w-3 h-3" />
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-lg font-cyber font-bold text-neon-cyan leading-none">
              ${(product.price * quantity).toFixed(2)}
            </p>
            {quantity > 1 && (
              <p className="text-[10px] text-cyber-muted mt-0.5">
                ${product.price.toFixed(2)} × {quantity}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
