"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#fff",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "0 1px 0 #E5E7EB",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          className="navbar-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 48px",
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: "#F97316",
              letterSpacing: "-0.5px",
              textDecoration: "none",
            }}
          >
            &lt;Ali Raza Khalid /&gt;
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 8 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#374151",
                  padding: "6px 14px",
                  borderRadius: 6,
                  position: "relative",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#F97316";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                }}
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="https://github.com/Razamindset"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#f3f4f6",
                color: "#111827",
                marginLeft: 12,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#111827";
                el.style.color = "#fff";
                el.style.transform = "translateY(-2px) rotate(8deg)";
                el.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#f3f4f6";
                el.style.color = "#111827";
                el.style.transform = "translateY(0) rotate(0)";
                el.style.boxShadow = "none";
              }}
            >
              <FaGithub size={20} />
            </a>

            <button
              onClick={() => handleNav("#contact")}
              style={{
                marginLeft: 8,
                background: "#F97316",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 22px",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#EA6C10";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#F97316";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Hire Me
            </button>
          </nav>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#374151",
              display: "none",
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 70,
              left: 0,
              right: 0,
              background: "#fff",
              borderBottom: "1px solid #E5E7EB",
              zIndex: 49,
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#374151",
                  padding: "12px 0",
                  textAlign: "left",
                  borderBottom: "1px solid #F3F4F6",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              style={{
                marginTop: 12,
                background: "#F97316",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px",
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .navbar-inner { padding: 0 16px !important; }
        }
      `}</style>
    </>
  );
}
