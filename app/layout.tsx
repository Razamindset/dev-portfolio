import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Raza Khalid | Automation · Web Apps · WhatsApp Bots",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
