"use client";

import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/Logo";
import { IconArrowRight, IconMenu, IconClose } from "@/components/icons";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        <LogoLockup />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[13.5px] font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#precios"
            className="text-[13.5px] font-semibold text-ink-soft hover:text-ink transition-colors px-3 py-2"
          >
            Hablar con ventas
          </a>
          <a href="/catalogo" className="btn-primary !py-2.5 !px-5 !text-[13.5px]">
            Ver Catálogo
            <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <a
            href="/catalogo"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            Ver Catálogo
          </a>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="p-2 rounded-full border border-ink/10 bg-white/70"
          >
            <IconMenu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-paper transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-site flex items-center justify-between py-5">
          <LogoLockup />
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="p-2 rounded-full border border-ink/10 bg-white/70"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>
        <nav className="container-site flex flex-col gap-1 mt-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl py-3 border-b border-line/70 text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/catalogo"
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 w-full"
          >
            Ver Catálogo en vivo
            <IconArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
