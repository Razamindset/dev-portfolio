"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ali built us a WhatsApp bot that handles 80% of our customer queries automatically. Response time dropped from hours to seconds. Genuinely impressive work.",
    name: "Marcus T.",
    role: "CEO, RetailFlow Ltd.",
    stars: 5,
  },
  {
    quote:
      "We needed a complex inventory automation connecting our warehouse, Shopify, and accounting software. Ali nailed it in two weeks. Saved us 20+ hours per week.",
    name: "Priya S.",
    role: "Operations Manager, Nexus Trade",
    stars: 5,
  },
  {
    quote:
      "Our eCommerce site went from concept to live in 3 weeks. Clean design, fast, and built exactly to spec. Will definitely be working with Ali again on our next project.",
    name: "James R.",
    role: "Founder, Craft & Co.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#F97316" color="#F97316" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
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
            Testimonials
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
            What Clients Say
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 460, margin: "0 auto" }}>
            Real feedback from real business owners who&apos;ve seen the results.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(249,115,22,0.1)" }}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "36px 32px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                position: "relative",
                transition: "box-shadow 0.3s",
                cursor: "default",
              }}
            >
              {/* Big quote mark */}
              <span
                style={{
                  position: "absolute",
                  top: 24,
                  right: 28,
                  fontSize: 80,
                  lineHeight: 1,
                  color: "#F97316",
                  opacity: 0.12,
                  fontFamily: "Georgia, serif",
                  fontWeight: 900,
                  userSelect: "none",
                }}
              >
                &ldquo;
              </span>

              {/* Orange accent bar */}
              <div
                style={{
                  width: 40,
                  height: 3,
                  background: "#F97316",
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              />

              <Stars count={t.stars} />

              <p
                style={{
                  fontSize: 15.5,
                  color: "#374151",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: 28,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #F97316, #FB923C)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
