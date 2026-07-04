import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const materialSymbols = localFont({
  src: "../../public/material-symbols.ttf",
  variable: "--font-material-symbols",
  display: "block",
});

export const metadata: Metadata = {
  title: "Amit Kumar | Portfolio",
  description: "Portfolio of Amit Kumar - B.Tech CSE student at IIIT Raichur, focused on full-stack systems, real-time applications, and AI-powered products.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased selection:bg-primary-container selection:text-on-primary-container"
    >
      <body className={`${plusJakartaSans.variable} ${materialSymbols.variable} min-h-full bg-surface text-on-surface`}>
        {children}
      </body>
    </html>
  );
}
