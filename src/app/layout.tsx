import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Raza Khalid - Portfolio",
  description: "Machine Learning Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#f4775b]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
