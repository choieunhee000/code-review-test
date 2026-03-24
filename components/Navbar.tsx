"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCartIcon } from "@/components/icons";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-cyber-bg/90 backdrop-blur-md border-cyber-cyan/50"
          : "bg-cyber-panel border-cyber-cyan/25"
      }`}
      style={{
        boxShadow: scrolled
          ? "0 4px 30px #00e5ff0a, 0 1px 0 #00e5ff33"
          : "0 1px 0 #00e5ff1a",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link href="/products" className="flex items-center gap-0.5 font-cyber font-black tracking-widest text-xl shrink-0">
          <span className="text-neon-cyan glitch-text">SHOP</span>
          <span className="neon-flicker" style={{ color:"#ff0090", textShadow:"0 0 8px #ff0090,0 0 20px #ff009066" }}>HUB</span>
          <span className="text-cyber-muted text-[10px] ml-1.5 hidden sm:inline font-mono opacity-50 tracking-wider">// MKT</span>
        </Link>

        {/* ── Center: status + nav ── */}
        <div className="hidden lg:flex items-center gap-8">
          {/* System status */}
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyber-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" style={{ boxShadow:"0 0 6px #39ff14", animation:"neon-flicker 4s ease-in-out infinite" }} />
            SYS:ONLINE
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 font-cyber text-[11px] uppercase tracking-widest">
            <Link
              href="/products"
              className="relative text-cyber-text hover:text-neon-cyan transition-colors duration-200 group"
            >
              [ Products ]
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyber-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>
        </div>

        {/* ── Cart ── */}
        <Link
          href="/cart"
          className="clip-cyber-sm relative flex items-center gap-2 font-cyber text-[11px] uppercase tracking-widest text-cyber-text hover:text-cyber-bg hover:bg-cyber-cyan border border-cyber-border hover:border-cyber-cyan px-3 py-1.5 transition-all duration-200 hover:shadow-neon-cyan"
        >
          <ShoppingCartIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 bg-cyber-magenta text-white font-mono font-bold w-4 h-4 flex items-center justify-center text-[10px] animate-counter-in"
              style={{ boxShadow:"0 0 8px #ff0090" }}
            >
              {totalItems > 9 ? "9+" : totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Bottom accent line with animated gradient */}
      <div
        className="absolute bottom-0 left-0 h-px w-full pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #00e5ff44 20%, #ff009044 50%, #00e5ff44 80%, transparent 100%)",
        }}
      />
    </header>
  );
}
