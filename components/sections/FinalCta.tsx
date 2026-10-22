import Reveal from "@/components/Reveal";
import {
  IconArrowRight,
  IconSparkle,
  IconShield,
  IconStar,
} from "@/components/icons";

export default function FinalCta() {
  return (
    <section id="cta-final" className="relative overflow-hidden scroll-mt-24">
      <div className="container-site py-24 sm:py-28">
        <div className="grain relative overflow-hidden rounded-[36px] bg-gradient-to-br from-terra to-terra-dark px-8 py-16 sm:px-16 sm:py-20 text-white">
          <img loading="lazy" decoding="async"
            src="/art/divider-arcs.svg"
            alt=""
            aria-hidden
            className="absolute inset-x-0 top-6 w-full h-20 opacity-25"
          />
          <div
            aria-hidden
            className="absolute -right-16 -bottom-20 w-80 h-80 rounded-full border border-white/25"
          />
          <div
            aria-hidden
            className="absolute right-24 -top-24 w-64 h-64 rounded-full border border-white/20"
          />
          <div
            aria-hidden
            className="absolute right-[-40px] bottom-[-40px] w-56 h-56 rounded-full bg-white/10"
          />

          <div className="relative max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                <IconSparkle className="w-3.5 h-3.5" /> Agenda de esta semana abierta
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mt-7 font-display text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.05]">
                Tu próximo catálogo puede estar{" "}
                <span className="font-displayItal italic">listo esta semana</span>.
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/85">
                Agenda 15 minutos y te mostramos cómo quedaría tu negocio en
                Cataloga — con tus productos, tu marca y tu link funcionando
                desde el primer día.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:studio.lexair@gmail.com?subject=Quiero%20mi%20catálogo%20Cataloga"
                  className="btn inline-flex bg-white text-terra-dark hover:-translate-y-0.5 hover:bg-white/95 shadow-lift"
                >
                  Solicitar mi demo gratuita
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/catalogo"
                  className="btn inline-flex border border-white/35 text-white hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explorar el catálogo demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-white/80">
                <span className="inline-flex items-center gap-2">
                  <IconShield className="w-4 h-4" /> 30 días de garantía
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconStar className="w-4 h-4" /> Sin permanencia
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconSparkle className="w-4 h-4" /> Configuración incluida
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
