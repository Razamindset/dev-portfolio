"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const handleScroll = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const ORANGE = "#F97316";
const INDIGO = "#4F46E5";

const stats = [
  { num: "50+", label: "Projects Done",  color: ORANGE },
  { num: "30+", label: "Happy Clients",  color: INDIGO },
  { num: "5+",  label: "Years Exp.",     color: ORANGE },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="dot-grid"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 70, background: "#fff" }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ─── Left ─── */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#EEF2FF", border: "1px solid #A5B4FC",
              borderRadius: 50, padding: "6px 16px", marginBottom: 28,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: INDIGO, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: INDIGO, letterSpacing: 0.3 }}>
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-2px", color: "#111827", marginBottom: 20 }}
          >
            I Build{" "}
            <span style={{ color: ORANGE }}>Solutions</span>
            <br />
            That{" "}
            <span style={{ color: INDIGO }}>Work.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{ fontSize: 18, color: "#6B7280", fontWeight: 500, marginBottom: 40, letterSpacing: 0.2 }}
          >
            Automations · Web Apps · WhatsApp Bots · eCommerce
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            {/* Primary — Orange */}
            <button
              onClick={() => handleScroll("#portfolio")}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: ORANGE, color: "#fff", border: "none", borderRadius: 10,
                padding: "14px 28px", fontSize: 16, fontWeight: 700, cursor: "pointer",
                fontFamily: "Inter, sans-serif", transition: "all 0.2s",
                boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "#EA6C10"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = ORANGE; el.style.transform = "translateY(0)"; }}
            >
              See My Work <ArrowRight size={18} />
            </button>

            {/* Secondary — Indigo outline */}
            <button
              onClick={() => handleScroll("#contact")}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "transparent", color: INDIGO, border: `2px solid ${INDIGO}`,
                borderRadius: 10, padding: "13px 28px", fontSize: 16, fontWeight: 700,
                cursor: "pointer", fontFamily: "Inter, sans-serif", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = INDIGO; el.style.color = "#fff"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "transparent"; el.style.color = INDIGO; el.style.transform = "translateY(0)"; }}
            >
              <MessageCircle size={18} /> Hire Me
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
            style={{ marginTop: 56, display: "flex", gap: 36, flexWrap: "wrap" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── Right ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div style={{ position: "relative" }}>

            {/* Dual-color glow blob */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: 360,
                height: 360,
                borderRadius: "50%",
                background: "radial-gradient(circle at 40% 40%, rgba(249,115,22,0.15) 0%, rgba(79,70,229,0.12) 60%, transparent 80%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 0,
              }}
            />

            {/* Spinning ring — indigo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: -10, borderRadius: "50%",
                border: "2px dashed rgba(79,70,229,0.35)",
                zIndex: 1,
              }}
            />

            {/* Slow counter-spinning ring — orange */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: -22, borderRadius: "50%",
                border: "1.5px dashed rgba(249,115,22,0.25)",
                zIndex: 1,
              }}
            />

            {/* Profile photo */}
            <div
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                zIndex: 2,
                boxShadow: "0 20px 60px rgba(79,70,229,0.2), 0 8px 30px rgba(249,115,22,0.15)",
                border: "4px solid #fff",
                outline: "3px solid rgba(79,70,229,0.3)",
              }}
            >
              <Image
                src="/me.png"
                alt="Developer photo"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
