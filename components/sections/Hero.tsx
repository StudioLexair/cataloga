import Reveal from "@/components/Reveal";
import {
  IconArrowRight,
  IconSparkle,
  IconStar,
  IconPlay,
  IconQr,
} from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
      {/* decoración de fondo */}
      <div
        aria-hidden
        className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-terra-wash/70 via-paper to-paper"
      />
      <div
        aria-hidden
        className="absolute right-[-120px] top-24 w-72 h-72 rounded-full border border-brass/25"
      />
      <div
        aria-hidden
        className="absolute left-[-90px] bottom-0 w-80 h-80 rounded-full border border-terra/15"
      />

      <div className="container-site relative grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
        {/* copy */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-terra/25 bg-white/70 px-4 py-2 text-[12px] font-semibold text-terra shadow-soft">
              <IconSparkle className="w-3.5 h-3.5" />
              Nuevo · Catálogos interactivos 2026
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] tracking-[-0.01em] text-ink">
              Catálogos digitales{" "}
              <span className="relative inline-block">
                <span className="font-displayItal italic text-terra">que venden</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M3 10c40-7 90-8 214-4"
                    stroke="#B08D55"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              por ti.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-[17px] sm:text-[18.5px] leading-relaxed text-ink-soft">
              Convierte tus productos en una experiencia de compra premium. Un
              solo link para mostrar tu marca, recibir pedidos y medir cada
              visita — las 24 horas, los 7 días.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="/catalogo" className="btn-primary group">
                Ver catálogo en vivo
                <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#cta-final" className="btn-ghost group">
                <IconArrowRight className="w-5 h-5 text-terra" />
                Solicitar cotización
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-ink-mute">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </span>
                <strong className="text-ink font-semibold">4.9/5</strong>
                <span className="text-ink-mute">(127 reseñas)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconSparkle className="w-3.5 h-3.5 text-terra" />
                +320 catálogos publicados
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconQr className="w-3.5 h-3.5 text-olive" />
                Listo en 48 horas
              </span>
            </div>
          </Reveal>
        </div>

        {/* visual */}
        <Reveal delay={2} className="relative">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="grain overflow-hidden rounded-5xl border border-line bg-cream shadow-lift">
              <img
                src="/hero-interior.jpg"
                alt="Interior premium con muebles de diseño — muestra del estilo Cataloga"
                className="w-full h-auto"
                width={720}
                height={640}
              />
            </div>

            {/* tarjeta flotante: conversión */}
            <div className="animate-float absolute -left-4 sm:-left-10 top-10 rounded-2xl border border-line bg-white/95 shadow-lift px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Conversión media
              </p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-ink">
                  +38%
                </span>
                <svg width="56" height="18" viewBox="0 0 56 18" fill="none" aria-hidden>
                  <path
                    d="M2 15L14 10l8 3 10-8 8 3 12-7"
                    stroke="#C75D3B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>

            {/* tarjeta flotante: producto */}
            <div className="animate-floatSlow absolute -right-2 sm:-right-8 bottom-14 rounded-2xl border border-line bg-white/95 shadow-lift p-2.5 w-[178px]">
              <div className="rounded-xl overflow-hidden bg-terra-wash">
                <img loading="lazy" decoding="async"
                  src="/products/lampara-arco.jpg"
                  alt="Lámpara Arco"
                  className="w-full h-auto"
                />
              </div>
              <div className="px-1.5 pt-2 pb-1">
                <p className="text-[11px] font-semibold text-ink">Lámpara Arco</p>
                <p className="text-[11px] text-ink-mute flex items-center justify-between">
                  Latón mate <span className="font-semibold text-terra">$289</span>
                </p>
              </div>
            </div>

            {/* chip QR */}
            <div className="animate-float absolute right-8 sm:right-16 top-4 inline-flex items-center gap-2 rounded-full border border-line bg-ink text-paper px-3.5 py-2 shadow-lift">
              <IconQr className="w-3.5 h-3.5 text-brass-light" />
              <span className="text-[11px] font-semibold tracking-wide">
                QR listo para imprimir
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
