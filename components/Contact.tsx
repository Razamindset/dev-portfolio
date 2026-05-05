"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Copy,
  Check,
  Briefcase,
  GitBranch,
  Camera,
  Send,
} from "lucide-react";

const services = [
  "Automation Solutions",
  "WhatsApp Bots",
  "Landing Pages & Websites",
  "eCommerce Solutions",
  "Complex Web Applications",
];

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const EMAIL = "razamindset.official@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1.5px solid #E5E7EB",
    borderRadius: 10,
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    color: "#111827",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section id="contact" style={{ background: "#F3F4F6", padding: "100px 0" }}>
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
            Contact
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-1.5px",
              marginBottom: 14,
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 460, margin: "0 auto" }}>
            Let&apos;s build something great together.
          </p>
        </motion.div>

        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="contact-info-card"
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "40px 36px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 8,
                }}
              >
                Get In Touch
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "#6B7280",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Reach out via WhatsApp for the fastest response, or fill out the form and I&apos;ll
                reply within 24 hours.
              </p>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#25D366",
                  color: "#fff",
                  borderRadius: 12,
                  padding: "14px 20px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: 20,
                  transition: "all 0.2s",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 6px 20px rgba(37,211,102,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 14px rgba(37,211,102,0.3)";
                }}
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>

              {/* Email row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  background: "#F9FAFB",
                  borderRadius: 12,
                  border: "1px solid #E5E7EB",
                  marginBottom: 32,
                }}
              >
                <Mail size={18} color="#9CA3AF" />
                <span style={{ fontSize: 15, color: "#374151", flex: 1, fontWeight: 500, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {EMAIL}
                </span>
                <button
                  onClick={copyEmail}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: copied ? "#22C55E" : "#9CA3AF",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s",
                  }}
                  title="Copy email"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Social icons */}
              <div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9CA3AF",
                    fontWeight: 600,
                    marginBottom: 14,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Find me online
                </p>
                <div style={{ display: "flex", gap: 12 }}>
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
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "#FFF7ED",
                        border: "1.5px solid #FDBA74",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#F97316",
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
                        el.style.background = "#FFF7ED";
                        el.style.color = "#F97316";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="contact-form-card"
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "40px 36px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: "center",
                    padding: "48px 0",
                  }}
                >
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 10,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: 16, color: "#6B7280" }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
                    Send a Message
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                    className="form-row"
                  >
                    <div>
                      <label
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#374151",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "#F97316";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "#E5E7EB";
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#374151",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "#F97316";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "#E5E7EB";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#374151",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor = "#F97316";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLSelectElement).style.borderColor = "#E5E7EB";
                      }}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#374151",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project…"
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "#F97316";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "#E5E7EB";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: "#F97316",
                      color: "#fff",
                      border: "none",
                      borderRadius: 10,
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "all 0.2s",
                      boxShadow: "0 4px 18px rgba(249,115,22,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "#EA6C10";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "#F97316";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          #contact > div { padding-left: 20px !important; padding-right: 20px !important; }
          .contact-info-card { padding: 28px 20px !important; }
          .contact-form-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
