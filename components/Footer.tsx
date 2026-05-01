"use client";

import { Briefcase, GitBranch, Camera } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#111827", color: "#9CA3AF", padding: "60px 0 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 40,
          alignItems: "start",
          marginBottom: 40,
        }}
        className="footer-grid"
      >
        {/* Left */}
        <div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: "#F97316",
              letterSpacing: "-0.5px",
              display: "block",
              marginBottom: 8,
            }}
          >
            &lt;Ali /&gt;
          </span>
          <p style={{ fontSize: 14, color: "#6B7280", maxWidth: 240, lineHeight: 1.7 }}>
            Turning complex problems into simple, powerful solutions.
          </p>
        </div>

        {/* Center */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#6B7280",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#F97316";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#6B7280";
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          {[
            { Icon: Briefcase, href: "https://linkedin.com/in/razamindset", label: "LinkedIn" },
            { Icon: GitBranch, href: "https://github.com/razamindset", label: "GitHub" },
            { Icon: Camera, href: "https://instagram.com/razamindset", label: "Instagram" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "#1F2937",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B7280",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#F97316";
                el.style.color = "#fff";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#1F2937";
                el.style.color = "#6B7280";
                el.style.transform = "translateY(0)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1F2937",
          padding: "20px 48px",
          textAlign: "center",
          fontSize: 13,
          color: "#4B5563",
        }}
      >
        © 2025 &nbsp;·&nbsp; Built with purpose
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:last-child {
            justify-content: center !important;
          }
          .footer-grid nav {
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
