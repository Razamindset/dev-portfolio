"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const filters = ["All", "Automation", "Web", "WhatsApp", "Apps"] as const;
type Filter = (typeof filters)[number];

const PALETTE = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
];

const projects = [
  {
    id: 1,
    name: "Ali's WhatsApp Assistant",
    desc: "A custom WhatsApp bot that handles inquiries, provides information, and manages appointment bookings automatically.",
    tags: ["WhatsApp API", "Node.js", "Automation"],
    category: "WhatsApp" as Filter,
    bg: PALETTE[2],
    icon: "💬",
  },
  {
    id: 2,
    name: "Shopfinity eCommerce",
    desc: "A premium, full-featured eCommerce platform with advanced filtering, cart management, and secure checkout.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    category: "Web" as Filter,
    bg: PALETTE[1],
    icon: "🛒",
  },
  {
    id: 3,
    name: "Screen Snipper",
    desc: "A high-performance web tool for capturing, editing, and sharing screen snippets instantly. (screensnipper.app)",
    tags: ["React", "Canvas API", "SaaS"],
    category: "Web" as Filter,
    bg: PALETTE[0],
    icon: "✂️",
    link: "https://www.screensnipper.app"
  },
  {
    id: 4,
    name: "Chess Engine from Scratch",
    desc: "A powerful chess engine built with a custom evaluation function and move searching algorithms.",
    tags: ["C++", "Algorithms", "Game Dev"],
    category: "Apps" as Filter,
    bg: PALETTE[5],
    icon: "♟️",
  },
  {
    id: 5,
    name: "Cactus Cafe Landing Site",
    desc: "A vibrant, conversion-focused landing page for a popular cafe, featuring their menu and location details.",
    tags: ["HTML", "CSS", "UI/UX"],
    category: "Web" as Filter,
    bg: PALETTE[4],
    icon: "☕",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.12)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 190,
          background: project.bg,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          overflow: "hidden",
        }}
      >
        <span style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))" }}>
          {project.icon}
        </span>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(249,115,22,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <ExternalLink size={32} color="#fff" />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>View Project</span>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 28px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#F97316",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {project.category}
        </div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#111827",
            marginBottom: 8,
            letterSpacing: "-0.3px",
          }}
        >
          {project.name}
        </h3>
        <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, marginBottom: 16, flexGrow: 1 }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#F97316",
                border: "1.5px solid #FDBA74",
                borderRadius: 50,
                padding: "3px 12px",
                background: "#FFF7ED",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if ('link' in project && project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {card}
      </a>
    );
  }

  return card;
}

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" style={{ background: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#F97316",
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "block",
              marginBottom: 12,
            }}
          >
            My Work
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-1.5px",
              marginBottom: 16,
            }}
          >
            Projects That Delivered
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 480, margin: "0 auto" }}>
            A selection of real-world solutions built for businesses just like yours.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "9px 22px",
                borderRadius: 50,
                border: active === f ? "none" : "1.5px solid #E5E7EB",
                background: active === f ? "#F97316" : "#fff",
                color: active === f ? "#fff" : "#6B7280",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: active === f ? "0 4px 14px rgba(249,115,22,0.3)" : "none",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
