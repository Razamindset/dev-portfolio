"use client";

import { motion } from "framer-motion";
import {
  Bot, MessageSquare, Globe, ShoppingCart, LayoutDashboard, Monitor,
} from "lucide-react";
import { useState } from "react";

const ORANGE = "#F97316";
const INDIGO = "#4F46E5";

const services = [
  { icon: Bot,             title: "Automation Solutions",       desc: "Python-powered bots, workflow automation, and scheduled tasks that save you hours every day.", accent: ORANGE, accentBg: "#FFF7ED", shadowColor: "rgba(249,115,22,0.12)" },
  { icon: MessageSquare,   title: "WhatsApp Bots",              desc: "Automated messaging, lead capture, and customer engagement — all through WhatsApp.",            accent: INDIGO, accentBg: "#EEF2FF", shadowColor: "rgba(79,70,229,0.1)"   },
  { icon: Globe,           title: "Landing Pages & Websites",   desc: "Fast, responsive, conversion-focused sites that turn visitors into paying clients.",              accent: ORANGE, accentBg: "#FFF7ED", shadowColor: "rgba(249,115,22,0.12)" },
  { icon: ShoppingCart,    title: "eCommerce Solutions",        desc: "Full online store builds with payment integration, inventory management, and admin panels.",       accent: INDIGO, accentBg: "#EEF2FF", shadowColor: "rgba(79,70,229,0.1)"   },
  { icon: LayoutDashboard, title: "Complex Web Applications",   desc: "Custom dashboards, SaaS platforms, internal tools — anything you can imagine, I can build.",     accent: ORANGE, accentBg: "#FFF7ED", shadowColor: "rgba(249,115,22,0.12)" },
];

function Card({ s, i }: { s: typeof services[0]; i: number }) {
  const [hov, setHov] = useState(false);
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff", borderRadius: 16, padding: "32px 28px",
        position: "relative", overflow: "hidden",
        boxShadow: hov ? `0 12px 40px ${s.shadowColor}` : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease", transform: hov ? "translateY(-4px)" : "translateY(0)",
        borderTop: `3px solid ${hov ? s.accent : "transparent"}`,
      }}
    >
      <div style={{ width: 52, height: 52, borderRadius: 12, background: hov ? s.accentBg : "#F9FAFB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, transition: "background 0.3s" }}>
        <Icon size={26} color={hov ? s.accent : "#9CA3AF"} strokeWidth={1.8} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 10 }}>{s.title}</h3>
      <p style={{ fontSize: 14.5, color: "#6B7280", lineHeight: 1.7 }}>{s.desc}</p>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: hov ? "100%" : "0%", height: 2, background: s.accent === ORANGE ? "linear-gradient(90deg,#F97316,#FB923C)" : "linear-gradient(90deg,#4F46E5,#818CF8)", transition: "width 0.4s ease" }} />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "#F3F4F6", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: INDIGO, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 12 }}>What I Do</span>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#111827", letterSpacing: "-1.5px", lineHeight: 1.15, marginBottom: 16 }}>
            Services Built to <span style={{ color: ORANGE }}>Deliver</span>
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 520, margin: "0 auto" }}>From a single automation script to a full-scale platform — I handle it end to end.</p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="services-grid">
          {services.map((s, i) => <Card key={s.title} s={s} i={i} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.services-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.services-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
