"use client";

import { useState } from "react";
import { Product } from "@/types";
import { categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":  return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "rating":     return b.rating - a.rating;
      default:           return 0;
    }
  });

  return (
    <div>
      {/* ── Toolbar ── */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 p-3 border border-cyber-border"
        style={{ background:"rgba(15,15,42,.6)", backdropFilter:"blur(8px)" }}
      >
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <div className="flex items-center gap-3 shrink-0">
          {/* Count badge */}
          <span className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-cyber-muted uppercase tracking-widest">
            <span className="text-cyber-cyan">&gt;</span>
            {sorted.length} ITEM{sorted.length !== 1 ? "S" : ""}
            {selectedCategory !== "All" && ` :: ${selectedCategory.toUpperCase()}`}
            <span className="animate-pulse text-cyber-cyan">_</span>
          </span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="clip-cyber-sm border border-cyber-border bg-cyber-panel text-cyber-cyan font-cyber text-[11px] uppercase tracking-widest px-3 py-1.5 focus:outline-none focus:border-cyber-cyan hover:border-cyber-cyan/60 transition-colors cursor-pointer"
          >
            <option value="default">// FEATURED</option>
            <option value="price-asc">// PRICE ↑</option>
            <option value="price-desc">// PRICE ↓</option>
            <option value="rating">// TOP RATED</option>
          </select>
        </div>
      </div>

      {/* Count (mobile) */}
      <p className="sm:hidden text-[10px] font-cyber text-cyber-muted mb-4 tracking-widest uppercase">
        <span className="text-cyber-cyan">&gt;</span> {sorted.length} item{sorted.length !== 1 ? "s" : ""}
        {selectedCategory !== "All" && ` :: ${selectedCategory.toUpperCase()}`}
        <span className="animate-pulse ml-1 text-cyber-cyan">_</span>
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
