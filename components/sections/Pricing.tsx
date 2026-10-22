import Reveal from "@/components/Reveal";
import { IconCheck, IconSparkle, IconArrowRight } from "@/components/icons";

const plans = [
  {
    name: "Esencial",
    price: 39,
    tagline: "Para un catálogo que arranca fuerte.",
    featured: false,
    features: [
      "1 catálogo activo",
      "Hasta 60 productos",
      "Link propio + QR imprimible",
      "Pedidos por WhatsApp",
      "Actualizaciones ilimitadas",
      "Soporte por email",
    ],
    cta: "Empezar con Esencial",
  },
  {
    name: "Profesional",
    price: 89,
    tagline: "El favorito de los negocios en crecimiento.",
    featured: true,
    features: [
      "5 catálogos activos",
      "Hasta 600 productos",
      "Analítica completa en tiempo real",
      "Dominio propio (tumarca.com)",
      "Colecciones, ofertas y destacados",
      "Importación desde Excel/CSV",
      "Soporte prioritario",
    ],
    cta: "Quiero Profesional",
  },
  {
    name: "Empresarial",
    price: 199,
    tagline: "Para equipos y múltiples sedes.",
    featured: false,
    features: [
      "Catálogos y productos ilimitados",
      "API + integraciones (tienda, ERP)",
      "Multi-usuario con roles",
      "Multi-idioma y multi-moneda",
      "Onboarding dedicado 1 a 1",
      "SLA 99.9% y soporte 24/7",
    ],
    cta: "Hablar con ventas",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="section-pad scroll-mt-24">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Precios simples</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08] text-ink">
              Invierte menos que un anuncio.{" "}
              <span className="font-displayItal italic text-terra">
                Vende más que un folleto.
              </span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              Precios en USD, sin comisiones por venta y sin ataduras. Plan
              anual: 2 meses gratis.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className={`relative flex h-full flex-col rounded-[28px] border p-8 sm:p-9 transition-all duration-500 hover:-translate-y-1.5 ${
                  p.featured
                    ? "border-terra bg-ink text-paper shadow-lift lg:scale-[1.03]"
                    : "border-line bg-white shadow-soft hover:shadow-lift"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-terra px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-btn">
                      <IconSparkle className="w-3 h-3" /> Más popular
                    </span>
                  </div>
                )}

                <h3
                  className={`font-display text-[22px] ${
                    p.featured ? "text-paper" : "text-ink"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-1.5 text-[13px] ${
                    p.featured ? "text-paper/65" : "text-ink-mute"
                  }`}
                >
                  {p.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-display text-[52px] leading-none font-semibold ${
                      p.featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    ${p.price}
                  </span>
                  <span
                    className={`text-[14px] ${
                      p.featured ? "text-paper/60" : "text-ink-mute"
                    }`}
                  >
                    /mes
                  </span>
                </div>

                <div
                  className={`mt-6 h-px ${
                    p.featured ? "bg-white/15" : "bg-line"
                  }`}
                />

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-[14px] ${
                        p.featured ? "text-paper/85" : "text-ink-soft"
                      }`}
                    >
                      <IconCheck
                        className={`mt-0.5 w-4 h-4 shrink-0 ${
                          p.featured ? "text-terra-light" : "text-olive"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta-final"
                  className={
                    p.featured
                      ? "btn-primary mt-8 w-full"
                      : "btn-ghost mt-8 w-full"
                  }
                >
                  {p.cta}
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-[13px] text-ink-mute">
            ¿Necesitas algo a medida — ferias, distribuidores, catálogos
            impresos con QR?{" "}
            <a href="#cta-final" className="link-underline font-semibold text-terra">
              Diseñamos un plan contigo
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
