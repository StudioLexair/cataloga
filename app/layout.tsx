import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const displayItal = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-ital",
  style: "italic",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getcataloga.vercel.app"),
  title: {
    default: "Cataloga — Catálogos digitales que venden por ti",
    template: "%s · Cataloga",
  },
  description:
    "El sistema de catálogos digitales premium para negocios. Convierte tus productos en una experiencia de compra: un link, tu marca, pedidos por WhatsApp y métricas en tiempo real.",
  keywords: [
    "catálogo digital",
    "catálogo para negocios",
    "catálogo online",
    "marketing digital",
    "e-commerce",
    "Cataloga",
  ],
  authors: [{ name: "Studio Lexair" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Cataloga",
    title: "Cataloga — Catálogos digitales que venden por ti",
    description:
      "Convierte tus productos en una experiencia de compra premium. Un solo link para mostrar tu marca, recibir pedidos y medir cada visita.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cataloga — Catálogos digitales que venden por ti",
    description:
      "Catálogos digitales premium para negocios que quieren vender mejor.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF7F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${displayItal.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
