import Reveal from "@/components/Reveal";
import { IconCheck, IconClose, IconSparkle, IconArrowRight } from "@/components/icons";

const plans = [
  {
    name: "Básico",
    price: "16,000",
    tagline: "Un catálogo esencial para empezar a vender.",
    featured: false,
    db: false,
    badge: null as string | null,
    features: [
      "1 catálogo básico",
      "Hasta 25 productos",
      "Diseño con estilo Cataloga",
      "Link propio + QR imprimible",
      "Pedidos por WhatsApp",
      "Funciones esenciales",
      "Soporte por email",
    ],
    cta: "Comprar plan Básico",
  },
  {
    name: "Premium",
    price: "36,000",
    tagline: "Catálogo completo y extenso, con todas las funciones.",
    featured: true,
    db: false,
    badge: "Más popular",
    features: [
      "1 catálogo completo (hasta 300 productos)",
      "Diseño personalizado con tu marca",
      "Búsqueda, filtros y colecciones",
      "Ofertas y productos destacados",
      "Dominio propio + QR",
      "Analítica de visitas",
      "Actualizaciones por nuestro equipo",
      "Soporte prioritario",
    ],
    cta: "Comprar plan Premium",
  },
  {
    name: "Empresarial",
    price: "56,000",
    tagline: "Sistema completo con base de datos en la nube.",
    featured: false,
    db: true,
    badge: "Con base de datos",
    features: [
      "Todo lo del plan Premium",
      "Base de datos en la nube",
      "Panel de administración propio",
      "Productos y catálogos ilimitados",
      "Actualizaciones en tiempo real",
      "Usuarios con roles",
      "API e integraciones",
      "Analítica de eventos",
      "Soporte dedicado",
    ],
    cta: "Comprar plan Empresarial",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="section-pad scroll-mt-24">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Planes y precios</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08] text-ink">
              Elige tu plan.{" "}
              <span className="font-displayItal italic text-terra">
                Paga una sola vez.
              </span>
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              Precios en CUP y pago único: compras tu plan una sola vez, sin
              cuotas mensuales y sin comisiones por venta.
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
                {p.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-btn ${
                        p.featured ? "bg-terra" : "bg-brass"
                      }`}
                    >
                      {p.featured && <IconSparkle className="w-3 h-3" />}
                      {p.badge}
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

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`font-display text-[46px] leading-none font-semibold ${
                      p.featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`text-[15px] font-semibold ${
                      p.featured ? "text-brass-light" : "text-brass"
                    }`}
                  >
                    CUP
                  </span>
                </div>
                <p
                  className={`mt-2 text-[12.5px] font-medium ${
                    p.featured ? "text-paper/60" : "text-ink-mute"
                  }`}
                >
                  Pago único · sin cuotas mensuales
                </p>

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

                {/* el diferenciador clave entre planes */}
                <div
                  className={`mt-6 flex items-center gap-2 rounded-2xl px-4 py-3 text-[12.5px] font-semibold ${
                    p.db
                      ? p.featured
                        ? "bg-terra/25 text-paper"
                        : "bg-olive/15 text-olive"
                      : p.featured
                        ? "bg-white/[0.06] text-paper/70"
                        : "bg-cream text-ink-mute"
                  }`}
                >
                  {p.db ? (
                    <>
                      <IconCheck className="w-4 h-4 shrink-0" />
                      Base de datos incluida
                    </>
                  ) : (
                    <>
                      <IconClose className="w-4 h-4 shrink-0" />
                      Sin base de datos
                    </>
                  )}
                </div>

                <a
                  href="#cta-final"
                  className={
                    p.featured
                      ? "btn-primary mt-6 w-full"
                      : "btn-ghost mt-6 w-full"
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
