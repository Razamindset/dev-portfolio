"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "Node.js",
  "React",
  "Next.js",
  "WhatsApp API",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Automation",
];

const stats = [
  { num: "7+", label: "Projects Delivered" },
  { num: "6+", label: "Happy Clients" },
  { num: "5+", label: "Years Experience" },
  { num: "12+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "#F3F4F6", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            About Me
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-1.5px",
            }}
          >
            The Developer Behind the Work
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                width: 48,
                height: 4,
                background: "#F97316",
                borderRadius: 2,
                marginBottom: 28,
              }}
            />
            <p
              style={{
                fontSize: 17,
                color: "#374151",
                lineHeight: 1.85,
                marginBottom: 24,
              }}
            >
              I&apos;m a freelance tech developer who turns complex problems into simple,
              powerful solutions. Whether you need a workflow automated, a bot built, or a full
              web platform — I deliver results that actually work.
            </p>
            <p
              style={{
                fontSize: 17,
                color: "#374151",
                lineHeight: 1.85,
                marginBottom: 40,
              }}
            >
              I work directly with business owners and decision-makers, translating business
              goals into clean, reliable software. No fluff. Just solutions that move the needle.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 20,
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "24px 20px",
                    textAlign: "center",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 900,
                      color: "#F97316",
                      letterSpacing: "-1px",
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#9CA3AF",
                      fontWeight: 600,
                      marginTop: 6,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "40px 36px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid #E5E7EB",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 8,
                letterSpacing: "-0.5px",
              }}
            >
              Tech Stack &amp; Tools
            </h3>
            <p style={{ fontSize: 14, color: "#9CA3AF", marginBottom: 28 }}>
              Technologies I work with daily
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.06, background: "#FFF7ED" }}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#F97316",
                    background: "#FFF7ED",
                    border: "1.5px solid #FDBA74",
                    borderRadius: 50,
                    padding: "8px 18px",
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Extra info cards */}
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { emoji: "⚡", label: "Fast turnaround — most projects in 1–3 weeks" },
                { emoji: "🔒", label: "NDA-friendly, confidential & secure" },
                { emoji: "🌍", label: "Work with clients globally, remote-first" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 16px",
                    background: "#F9FAFB",
                    borderRadius: 10,
                    border: "1px solid #F3F4F6",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{item.emoji}</span>
                  <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about > div { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
