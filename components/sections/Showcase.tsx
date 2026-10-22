import Reveal from "@/components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconStar,
  IconSparkle,
} from "@/components/icons";

export default function Showcase() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute top-[-160px] left-[12%] w-[420px] h-[420px] rounded-full bg-terra/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[-180px] right-[8%] w-[460px] h-[460px] rounded-full bg-brass/15 blur-3xl"
      />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[600px]">
              <img loading="lazy" decoding="async"
                src="/art/device-mockup.svg"
                alt="Mockup de un catálogo Cataloga en laptop y teléfono"
                className="w-full h-auto drop-shadow-2xl"
                width={640}
                height={480}
              />

              {/* sello */}
              <img loading="lazy" decoding="async"
                src="/art/stamp-seal.svg"
                alt="Garantía Cataloga: 30 días sin riesgo"
                className="animate-floatSlow absolute -left-2 bottom-2 w-24 sm:w-28"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow !text-brass-light">
                <IconSparkle className="w-3.5 h-3.5" /> El demo
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08]">
                Así se ve un catálogo{" "}
                <span className="font-displayItal italic text-terra-light">
                  Cataloga en acción
                </span>
              </h2>
              <p className="mt-5 text-[16.5px] leading-relaxed text-paper/75 max-w-lg">
                Navegación fluida, fichas de producto ricas en detalles y un
                botón de pedido siempre a la vista. Entra al catálogo
                representativo de <strong className="text-paper">Casa Lum</strong> y
                compruébalo tú mismo.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ul className="mt-8 space-y-3">
                {[
                  "Filtros por categoría y búsqueda instantánea",
                  "Fichas con materiales, medidas y acabados",
                  "100% responsive — se ve increíble en móvil",
                  "Consulta de pedido directa por WhatsApp",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[15px] text-paper/85"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terra text-white">
                      <IconCheck className="w-3 h-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/catalogo" className="btn-primary group">
                  Explorar el catálogo demo
                  <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-paper/60">
                  <IconStar className="w-3.5 h-3.5 text-brass-light" />
                  Sin registro · 2 minutos de exploración
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
