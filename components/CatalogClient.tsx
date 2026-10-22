"use client";

import { useEffect, useMemo, useState } from "react";
import {
  categories,
  formatPrice,
  products,
  type Product,
} from "@/data/catalog";
import { fetchCatalog, type CatalogRow } from "@/lib/supabase";
import {
  IconArrowRight,
  IconChat,
  IconCheck,
  IconClose,
  IconLeaf,
  IconSearch,
  IconSparkle,
  IconStar,
  IconTruck,
  IconWhatsApp,
} from "@/components/icons";
import { LogoMark } from "@/components/Logo";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "15551234567";

/** Convierte una fila de Supabase al modelo visual del catálogo. */
function rowToProduct(row: CatalogRow): Product {
  return {
    id: row.id,
    name: row.name,
    category: row.category as Product["category"],
    price: Number(row.price),
    blurb: row.blurb ?? "",
    description: row.description ?? "",
    badge: (row.badge as Product["badge"]) ?? undefined,
    materials: row.materials ?? "",
    dimensions: row.dimensions ?? "",
    finishes: row.finishes ?? [],
    art: row.art_url ?? "/products/sofa-liria.svg",
    tint: row.tint ?? "#F4EDE4",
  };
}

function waLink(product?: Product) {
  const text = product
    ? `Hola Casa Lum 👋 Me interesa el producto "${product.name}" (${formatPrice(product.price)}) del catálogo. ¿Me dan más información?`
    : "Hola Casa Lum 👋 Vi su catálogo digital y me gustaría recibir más información.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function CatalogClient() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todo");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  // Datos en vivo desde Supabase; si no hay conexión, se usan los datos locales.
  const [items, setItems] = useState<Product[]>(products);

  useEffect(() => {
    let alive = true;
    fetchCatalog("casa-lum").then((rows) => {
      if (alive && rows && rows.length > 0) {
        setItems(rows.map(rowToProduct));
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((p) => {
      const byCat = active === "Todo" || p.category === active;
      const byQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.materials.toLowerCase().includes(q);
      return byCat && byQuery;
    });
  }, [active, query, items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-paper">
      {/* barra superior */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-xl">
        <div className="container-site flex items-center justify-between gap-4 py-3.5">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink-soft hover:text-ink transition-colors"
          >
            <LogoMark size={32} />
            <span className="hidden sm:inline">Volver a Vitrina</span>
            <span className="sm:hidden">Vitrina</span>
          </a>
          <div className="flex items-center gap-2.5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="btn-primary !py-2.5 !px-4 !text-[12.5px]"
            >
              <IconWhatsApp className="w-4 h-4" />
              <span className="hidden sm:inline">Escribir por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* cabecera del catálogo */}
        <section className="relative overflow-hidden">
          <div className="container-site pt-12 pb-10 sm:pt-16">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                  <IconSparkle className="w-3.5 h-3.5" />
                  Catálogo demo · Creado con Vitrina
                </div>
                <h1 className="mt-6 font-display text-[clamp(2.4rem,5.4vw,3.9rem)] leading-[1.03] text-ink">
                  Casa Lum
                </h1>
                <p className="mt-2 font-displayItal italic text-[clamp(1.15rem,2.4vw,1.55rem)] text-terra">
                  Muebles y objetos de autor
                </p>
                <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-soft">
                  Colección Otoño/Invierno 2026: piezas honestas, materiales
                  nobles y siluetas que envejecen bien. Todo lo que ves está
                  disponible para envío a todo el país.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-ink-mute">
                  <span className="inline-flex items-center gap-2">
                    <IconTruck className="w-4 h-4 text-olive" /> Envíos en 5–8
                    días
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <IconLeaf className="w-4 h-4 text-olive" /> Materiales
                    sostenibles
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <IconStar className="w-4 h-4 text-brass" /> Garantía de 2
                    años
                  </span>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/art/catalog-banner.svg"
                  alt="Colección Otoño Invierno 2026 de Casa Lum"
                  className="w-full h-auto rounded-4xl border border-line shadow-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* barra de filtros */}
        <section className="sticky top-[57px] z-30 border-y border-line/70 bg-cream/80 backdrop-blur-md">
          <div className="container-site flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 ${
                    active === c
                      ? "bg-ink text-paper shadow-soft"
                      : "border border-line bg-white/70 text-ink-soft hover:border-ink/25 hover:bg-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label className="relative flex-1 lg:w-72">
                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-mute" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar producto, material…"
                  className="w-full rounded-full border border-line bg-white/80 py-2.5 pl-11 pr-4 text-[13px] text-ink placeholder:text-ink-mute focus:border-terra/50 focus:outline-none"
                />
              </label>
              <span className="whitespace-nowrap text-[12px] text-ink-mute">
                {filtered.length}{" "}
                {filtered.length === 1 ? "producto" : "productos"}
              </span>
            </div>
          </div>
        </section>

        {/* grid de productos */}
        <section className="container-site py-12 sm:py-16">
          {filtered.length === 0 ? (
            <div className="mx-auto max-w-md py-20 text-center">
              <svg
                viewBox="0 0 120 120"
                className="mx-auto w-28 h-28"
                fill="none"
                aria-hidden
              >
                <circle cx="60" cy="60" r="54" fill="#F4EDE4" />
                <path
                  d="M38 52c0-12 9-20 22-20s22 8 22 20c0 18-10 22-10 30H48c0-8-10-12-10-30Z"
                  fill="#E9B7A4"
                />
                <circle cx="49" cy="52" r="3" fill="#1A1410" />
                <circle cx="71" cy="52" r="3" fill="#1A1410" />
                <path
                  d="M52 64c4 3 12 3 16 0"
                  stroke="#1A1410"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-6 font-display text-2xl text-ink">
                Sin resultados
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-soft">
                No encontramos productos con esa búsqueda. Prueba con otra
                categoría o palabra.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActive("Todo");
                }}
                className="btn-ghost mt-6"
              >
                Ver todo el catálogo
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <article
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <button
                    onClick={() => setSelected(p)}
                    className="relative block overflow-hidden"
                    aria-label={`Ver detalle de ${p.name}`}
                  >
                    <div
                      className="aspect-[4/3.4] w-full"
                      style={{ backgroundColor: p.tint }}
                    >
                      <img
                        src={p.art}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                    {p.badge && (
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white ${
                          p.badge === "Nuevo"
                            ? "bg-terra"
                            : p.badge === "Top ventas"
                              ? "bg-ink"
                              : "bg-brass"
                        }`}
                      >
                        {p.badge}
                      </span>
                    )}
                    <span className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-[12.5px] font-semibold text-ink opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Ver detalle
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                          {p.category}
                        </p>
                        <h3 className="mt-1 font-display text-[19px] leading-tight text-ink">
                          {p.name}
                        </h3>
                      </div>
                      <p className="font-display text-[19px] font-semibold text-terra">
                        {formatPrice(p.price)}
                      </p>
                    </div>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft">
                      {p.blurb}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        onClick={() => setSelected(p)}
                        className="btn-ghost flex-1 !py-2.5 !text-[12.5px]"
                      >
                        Detalles
                      </button>
                      <a
                        href={waLink(p)}
                        target="_blank"
                        rel="noopener"
                        className="btn-primary flex-1 !py-2.5 !text-[12.5px]"
                      >
                        <IconWhatsApp className="w-3.5 h-3.5" />
                        Consultar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA hacia la landing */}
        <section className="container-site pb-20">
          <div className="grain relative overflow-hidden rounded-[32px] border border-line bg-cream px-8 py-14 text-center sm:px-14">
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 -top-24 w-[520px] h-[240px] rounded-full bg-terra-wash blur-2xl"
            />
            <div className="relative">
              <p className="eyebrow">
                <IconSparkle className="w-3.5 h-3.5" /> Esto fue un catálogo Vitrina
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-ink">
                ¿Te gustaría un catálogo así{" "}
                <span className="font-displayItal italic text-terra">
                  para tu negocio
                </span>
                ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
                Muebles, vinos, ferretería, moda o lo que vendas: lo convertimos
                en una experiencia digital que enamora y vende.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="/#cta-final" className="btn-primary group">
                  Quiero mi catálogo
                  <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="/#producto" className="btn-ink">
                  Conocer Vitrina
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* pie mini */}
      <footer className="border-t border-line bg-cream/60">
        <div className="container-site flex flex-col items-center gap-3 py-8 text-center">
          <div className="flex items-center gap-2.5">
            <LogoMark size={30} />
            <span className="font-display text-[15px] tracking-[0.26em] text-ink">
              VITRINA
            </span>
          </div>
          <p className="text-[12px] text-ink-mute">
            Catálogo demo «Casa Lum» · Colección Otoño/Invierno 2026 · Un
            ejemplo de lo que tu negocio puede tener.
          </p>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-110"
      >
        <IconWhatsApp className="w-7 h-7" />
      </a>

      {/* modal de detalle */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle de ${selected.name}`}
        >
          <button
            aria-label="Cerrar"
            className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-t-4xl sm:rounded-4xl bg-paper shadow-lift max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar detalle"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/90 text-ink hover:bg-white transition-colors"
            >
              <IconClose className="w-5 h-5" />
            </button>

            <div className="grid sm:grid-cols-2">
              <div
                className="relative min-h-[260px] sm:min-h-full"
                style={{ backgroundColor: selected.tint }}
              >
                <img
                  src={selected.art}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                {selected.badge && (
                  <span className="absolute left-5 top-5 rounded-full bg-ink px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white">
                    {selected.badge}
                  </span>
                )}
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
                  {selected.category}
                </p>
                <h3 className="mt-2 font-display text-[28px] leading-tight text-ink">
                  {selected.name}
                </h3>
                <p className="mt-2 font-display text-[24px] font-semibold text-terra">
                  {formatPrice(selected.price)}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                  {selected.description}
                </p>

                <dl className="mt-6 space-y-3 text-[13px]">
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-semibold text-ink">
                      Materiales
                    </dt>
                    <dd className="text-ink-soft">{selected.materials}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-semibold text-ink">
                      Medidas
                    </dt>
                    <dd className="text-ink-soft">{selected.dimensions}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 font-semibold text-ink">
                      Acabados
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {selected.finishes.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] text-ink-soft"
                        >
                          <IconCheck className="w-3 h-3 text-olive" />
                          {f}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 flex flex-col gap-2.5">
                  <a
                    href={waLink(selected)}
                    target="_blank"
                    rel="noopener"
                    className="btn-primary w-full"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    Consultar por WhatsApp
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-ghost w-full"
                  >
                    Seguir explorando
                  </button>
                </div>

                <p className="mt-4 flex items-center gap-2 text-[11.5px] text-ink-mute">
                  <IconChat className="w-3.5 h-3.5 text-olive" />
                  Respuesta promedio en menos de 2 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
