"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...categories].map((cat) => {
        const active = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`clip-cyber-sm px-3.5 py-1.5 text-[11px] font-cyber uppercase tracking-widest border transition-all duration-200 active:scale-95 ${
              active
                ? "bg-cyber-cyan text-cyber-bg border-cyber-cyan font-bold"
                : "bg-transparent text-cyber-muted border-cyber-border hover:text-cyber-cyan hover:border-cyber-cyan"
            }`}
            style={
              active
                ? { boxShadow: "0 0 12px #00e5ff55, inset 0 0 8px #00e5ff11" }
                : undefined
            }
          >
            {active ? `[ ${cat} ]` : cat}
          </button>
        );
      })}
    </div>
  );
}
