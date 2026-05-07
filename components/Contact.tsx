"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";

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
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const EMAIL = "razamindset.official@gmail.com";

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
    <section id="contact" style={{ background: "#F3F4F6", padding: "80px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
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
            Contact
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 40px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-1.5px",
              marginBottom: 14,
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 460, margin: "0 auto" }}>
            Reach out via any of the channels below or fill out the form.
          </p>
        </motion.div>

        {/* Contact Buttons Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/923215477083"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn wa"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background: "#25D366",
              color: "#fff",
              borderRadius: 12,
              padding: "16px",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(37,211,102,0.2)",
            }}
          >
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="contact-btn mail"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background: "#fff",
              color: "#374151",
              borderRadius: 12,
              padding: "16px",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid #E5E7EB",
              transition: "all 0.2s",
            }}
          >
            <MdEmail size={22} color="#F97316" />
            Send an Email
          </a>

          {/* Socials Row for Desktop, Column/Buttons for Mobile */}
          <div className="social-links-container">
            <a
              href="https://instagram.com/razamindset"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn insta"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                background: "#E1306C",
                color: "#fff",
                borderRadius: 12,
                padding: "16px",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                flex: 1,
              }}
            >
              <FaInstagram size={22} />
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/razamindset"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn linkedin"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                background: "#0077B5",
                color: "#fff",
                borderRadius: 12,
                padding: "16px",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                flex: 1,
              }}
            >
              <FaLinkedin size={22} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "40px",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
          }}
          className="form-card"
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 10 }}>
                Message Sent!
              </h3>
              <p style={{ fontSize: 16, color: "#6B7280" }}>
                I&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "#F97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "all 0.2s",
                }}
                className="submit-btn"
              >
                <IoSend size={18} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .contact-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
        .social-links-container {
          display: flex;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .social-links-container {
            flex-direction: column;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .form-card {
            padding: 24px !important;
          }
          #contact {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
