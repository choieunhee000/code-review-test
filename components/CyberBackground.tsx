"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%><=/|\\{}[]";

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FS = 13;
    let W = window.innerWidth;
    let H = window.innerHeight;
    let drops: number[];
    let speeds: number[];

    const init = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      const cols = Math.floor(W / FS);
      drops = Array.from({ length: cols }, () => Math.random() * -(H / FS));
      speeds = Array.from({ length: cols }, () => Math.random() * 0.4 + 0.2);
    };
    init();
    window.addEventListener("resize", init);

    let last = 0;
    let rafId: number;

    const draw = (now: number) => {
      rafId = requestAnimationFrame(draw);
      if (now - last < 55) return;
      last = now;

      // Trailing fade
      ctx.fillStyle = "rgba(5, 5, 15, 0.055)";
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${FS}px 'Share Tech Mono', monospace`;

      const cols = Math.floor(W / FS);
      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FS;
        const y = drops[i] * FS;

        // Occasional bright "head" character
        if (Math.random() > 0.94) {
          ctx.fillStyle = "rgba(200, 255, 255, 0.92)";
        } else {
          const op = (Math.random() * 0.3 + 0.07).toFixed(2);
          ctx.fillStyle = `rgba(0, 229, 255, ${op})`;
        }
        ctx.fillText(char, x, y);

        if (y > H && Math.random() > 0.978) drops[i] = 0;
        drops[i] += speeds[i];
      }
    };

    rafId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.2 }}
    />
  );
}
