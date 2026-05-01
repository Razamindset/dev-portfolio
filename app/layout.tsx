import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Dev | Automation · Web Apps · WhatsApp Bots",
  description:
    "Freelance tech developer specialising in automation solutions, WhatsApp bots, web development from landing pages to full eCommerce platforms and complex applications.",
  keywords: [
    "freelance developer",
    "automation",
    "WhatsApp bot",
    "web development",
    "eCommerce",
    "Python",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
