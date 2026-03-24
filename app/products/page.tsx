import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

const STATS = [
  { label: "UPTIME",   value: "99.97%",  color: "#39ff14" },
  { label: "PRODUCTS", value: "24",      color: "#00e5ff" },
  { label: "ORDERS",   value: "1,337",   color: "#ff0090" },
  { label: "LATENCY",  value: "2ms",     color: "#ffe600" },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* ── Hero ── */}
      <div
        className="relative border border-cyber-cyan/25 px-8 py-14 mb-3 text-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg,#05050f 0%,#0d0d28 50%,#05050f 100%)",
          boxShadow: "0 0 0 1px #00e5ff18,0 0 80px #00e5ff0a,inset 0 0 80px #00e5ff05",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.07) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial glow behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse 60% 50% at 50% 50%,#00e5ff08 0%,transparent 70%)" }}
        />

        {/* Top / bottom accent bars */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-magenta to-transparent" />

        {/* Corner brackets */}
        <div className="absolute top-3 left-3  w-7 h-7 border-t-2 border-l-2 border-cyber-cyan/60" />
        <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-cyber-cyan/60" />
        <div className="absolute bottom-3 left-3  w-7 h-7 border-b-2 border-l-2 border-cyber-magenta/60" />
        <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-cyber-magenta/60" />

        {/* Vertical side lines */}
        <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent hidden lg:block" />
        <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent hidden lg:block" />

        {/* Content */}
        <div className="relative z-10">
          <p className="font-mono text-[10px] text-cyber-muted uppercase tracking-[0.45em] mb-5">
            <span className="text-cyber-green">●</span>
            {" "}// SYSTEM ONLINE // NODE: SHOP-HUB // 2087 //
          </p>

          <h1
            className="font-cyber font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-widest mb-3 leading-tight"
            style={{ color:"#00e5ff", textShadow:"0 0 30px #00e5ff,0 0 60px #00e5ff44" }}
          >
            WELCOME TO
          </h1>
          <h2
            className="font-cyber font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-widest mb-6 leading-tight"
            style={{ color:"#ff0090", textShadow:"0 0 30px #ff0090,0 0 60px #ff009044" }}
          >
            SHOPHUB
          </h2>

          <div
            className="w-40 h-px mx-auto mb-5"
            style={{ background:"linear-gradient(90deg,transparent,#00e5ff,#ff0090,transparent)" }}
          />

          <p className="font-mono text-cyber-muted text-sm uppercase tracking-widest">
            &gt; Next-gen products. Zero compromises.
            <span className="animate-pulse ml-1 text-cyber-cyan">▮</span>
          </p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-10 border border-cyber-border overflow-hidden">
        {STATS.map(({ label, value, color }) => (
          <div
            key={label}
            className="relative px-5 py-3 flex flex-col gap-0.5 group hover:bg-white/[.02] transition-colors"
            style={{ background:"rgba(10,10,30,.8)" }}
          >
            <p className="font-mono text-[10px] text-cyber-muted uppercase tracking-widest">{label}</p>
            <p className="font-cyber font-bold text-xl" style={{ color, textShadow:`0 0 12px ${color}66` }}>
              {value}
            </p>
            {/* Bottom accent */}
            <div
              className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              style={{ background: color }}
            />
          </div>
        ))}
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
