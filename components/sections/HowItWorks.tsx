import Reveal from "@/components/Reveal";
import {
  IconLayers,
  IconPalette,
  IconQr,
  IconRocket,
} from "@/components/icons";

const steps = [
  {
    icon: IconLayers,
    n: "01",
    title: "Conecta tus productos",
    body: "Sube tu Excel, tu CSV o conecta tu tienda. Si vienes de un PDF o un catálogo impreso, lo digitalizamos nosotros.",
  },
  {
    icon: IconPalette,
    n: "02",
    title: "Personalizamos tu marca",
    body: "Elegimos juntos la paleta, la tipografía y el estilo visual. Antes de publicar, lo ves exactamente como quedará.",
  },
  {
    icon: IconQr,
    n: "03",
    title: "Comparte tu link o QR",
    body: "Un enlace para WhatsApp, Instagram, tu web y tus empaques. Un QR para tu local, tu stand o tus catálogos impresos.",
  },
  {
    icon: IconRocket,
    n: "04",
    title: "Recibe pedidos y métricas",
    body: "Consultas directas por WhatsApp, listas de favoritos y un panel con todo lo que pasa dentro de tu catálogo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad scroll-mt-24">
      <div className="container-site">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Cómo funciona</p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08] text-ink">
                De cero a catálogo en{" "}
                <span className="font-displayItal italic text-terra">
                  cuatro pasos
                </span>
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
                Nosotros ponemos el diseño, la tecnología y el soporte. Tú
                pones tus productos. El resto lo hace Cataloga.
              </p>
              <a href="#cta-final" className="btn-primary mt-8">
                Empezar mi catálogo
              </a>
            </Reveal>
          </div>

          <ol className="relative space-y-5">
            <div
              aria-hidden
              className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-terra/40 via-line to-transparent"
            />
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3 | 4}>
                  <li className="relative flex gap-6 rounded-3xl border border-line bg-white/70 p-6 sm:p-7 shadow-soft transition-all duration-500 hover:shadow-lift">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-paper">
                      <Icon className="w-6 h-6 text-brass-light" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold tracking-[0.18em] text-terra">
                          PASO {s.n}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-display text-[21px] leading-snug text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
