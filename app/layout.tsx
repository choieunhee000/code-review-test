import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CyberBackground from "@/components/CyberBackground";
import CyberCharacter from "@/components/CyberCharacter";

export const metadata: Metadata = {
  title: "ShopHub // CYBER MARKET",
  description: "Next-gen shopping. Zero compromises.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Ambient background effects */}
        <CyberBackground />
        <CyberCharacter />

        <Navbar />
        <main className="min-h-screen relative" style={{ zIndex: 3 }}>{children}</main>
        <footer className="relative border-t border-cyber-border bg-cyber-panel" style={{ zIndex: 3 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="font-cyber text-xs text-cyber-muted tracking-widest uppercase">
              <span className="text-neon-cyan">©</span> {new Date().getFullYear()}{" "}
              <span className="text-neon-magenta">ShopHub</span>{" "}
              <span className="text-cyber-muted">// All Systems Operational //</span>{" "}
              <span className="text-neon-cyan">v2.0.87</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
