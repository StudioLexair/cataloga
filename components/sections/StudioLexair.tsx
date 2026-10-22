import Reveal from "@/components/Reveal";
import {
  IconArrowRight,
  IconChat,
  IconCheck,
  IconSparkle,
} from "@/components/icons";

const valores = [
  "Todo por escrito",
  "Precio según alcance",
  "El sistema es tuyo",
  "Respondo el mismo día",
];

const proyectos = [
  {
    name: "Stock Desk 2",
    desc: "Sistema de inventario y punto de venta",
    href: "https://stockdesk-lexair.vercel.app/",
  },
  {
    name: "CarimarShow",
    desc: "Catálogo de películas y series",
    href: "https://carimarshow.vercel.app/",
  },
  {
    name: "LexiAI",
    desc: "Asistente de IA local para Android",
    href: "https://lexiai-web-studio.vercel.app/",
  },
  {
    name: "ForgeAPK",
    desc: "De Flutter, web o React a APK desde Windows",
    href: "https://forgeapk.vercel.app/",
  },
];

export default function StudioLexair() {
  return (
    <section className="border-t border-line/70 bg-cream/60 py-20 sm:py-24">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">
                <IconSparkle className="w-3.5 h-3.5" /> Quién está detrás
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.95rem,3.8vw,2.85rem)] leading-[1.1] text-ink">
                Cataloga es un producto de{" "}
                <span className="font-displayItal italic text-terra">
                  Studio Lexair
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
                Studio Lexair es un estudio de desarrollo digital a tu medida:
                sitios web, aplicaciones y sistemas completos para negocios.
                Alcance y precio quedan por escrito antes de empezar, el sistema
                queda a tu nombre y hay soporte real durante todo el proyecto.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {valores.map((v) => (
                  <li
                    key={v}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/80 px-3.5 py-2 text-[12px] font-semibold text-ink-soft"
                  >
                    <IconCheck className="w-3.5 h-3.5 text-olive" />
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://studiolexair-web.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  className="btn-ink group"
                >
                  Visitar Studio Lexair
                  <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/5352678747?text=Hola%2C%20quiero%20cotizar%20un%20cat%C3%A1logo%20con%20Studio%20Lexair."
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  <IconChat className="w-4 h-4 text-terra" />
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="card p-8 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-mute">
                Proyectos de referencia del estudio
              </p>
              <ul className="mt-5 space-y-4">
                {proyectos.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-white/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <div>
                        <p className="font-display text-[17px] leading-tight text-ink">
                          {p.name}
                        </p>
                        <p className="mt-0.5 text-[12.5px] text-ink-mute">
                          {p.desc}
                        </p>
                      </div>
                      <IconArrowRight className="mt-1 w-4 h-4 shrink-0 text-ink-mute transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://studiolexair-web.vercel.app/"
                target="_blank"
                rel="noopener"
                className="link-underline mt-6 inline-block text-[13px] font-semibold text-terra"
              >
                Ver portafolio completo →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
