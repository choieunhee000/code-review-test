import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { StarIcon } from "@/components/icons";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    /* Animated gradient border shell */
    <div className="card-border clip-cyber card-animate group flex flex-col" style={{ minHeight: 0 }}>
      {/* Glass inner card */}
      <div className="card clip-cyber flex flex-col flex-1 transition-shadow duration-300 group-hover:shadow-neon-card-hover">

        {/* ── Image ── */}
        <Link
          href={`/products/${product.id}`}
          className="relative aspect-square overflow-hidden bg-cyber-bg scanlines"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
            className="object-cover brightness-[0.72] saturate-50 transition-all duration-500 group-hover:brightness-90 group-hover:saturate-75 group-hover:scale-105"
          />

          {/* Bottom gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-card/80 via-transparent to-transparent" />

          {/* Horizontal scan line on hover */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div
              className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
              style={{ animation: "scan-h 1.5s linear infinite" }}
            />
          </div>

          {/* Corner bracket top-left */}
          <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-cyber-cyan/60 pointer-events-none" />

          {/* Badges */}
          {discount && (
            <span
              className="absolute top-2 left-8 clip-cyber-sm bg-cyber-magenta text-white text-[10px] font-cyber font-bold px-2 py-0.5 tracking-wider"
              style={{ boxShadow:"0 0 8px #ff0090" }}
            >
              -{discount}%
            </span>
          )}
          {product.stock <= 10 && (
            <span
              className="absolute top-2 right-2 clip-cyber-sm bg-cyber-yellow text-cyber-bg text-[10px] font-cyber font-bold px-2 py-0.5 tracking-wider"
            >
              LOW STOCK
            </span>
          )}
        </Link>

        {/* ── Info ── */}
        <div className="flex flex-col flex-1 p-4 gap-2.5 relative">
          {/* Corner glow accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
            style={{ background:"linear-gradient(225deg,#00e5ff0c 0%,transparent 65%)" }}
          />

          {/* Category */}
          <span className="text-[10px] font-cyber text-cyber-cyan/80 uppercase tracking-widest">
            ▸ {product.category}
          </span>

          {/* Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="text-[13px] font-cyber text-cyber-text line-clamp-2 hover:text-neon-cyan transition-colors duration-200 leading-snug tracking-wide">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <StarIcon className="w-3.5 h-3.5 text-cyber-yellow shrink-0" />
            <span className="text-xs font-mono text-cyber-text">{product.rating}</span>
            <span className="text-[10px] text-cyber-muted">({product.reviewCount.toLocaleString()})</span>
          </div>

          {/* Price row */}
          <div
            className="flex items-baseline justify-between mt-auto pt-2.5"
            style={{ borderTop:"1px solid rgba(26,29,72,.9)" }}
          >
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-cyber font-bold text-neon-cyan leading-none">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-cyber-muted line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {discount && (
              <span className="text-[10px] font-cyber text-cyber-green">
                SAVE {discount}%
              </span>
            )}
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
