import Reveal from "@/components/Reveal";
import {
  IconPalette,
  IconSearch,
  IconChat,
  IconChart,
  IconSync,
  IconQr,
  IconGlobe,
} from "@/components/icons";

const features = [
  {
    icon: IconPalette,
    title: "Diseño editorial a medida",
    body: "Tipografías, paletas y composiciones diseñadas para tu marca. Nada de plantillas genéricas.",
  },
  {
    icon: IconSearch,
    title: "Búsqueda y filtros inteligentes",
    body: "Tus clientes encuentran cualquier producto en segundos: por categoría, precio, material u oferta.",
  },
  {
    icon: IconChat,
    title: "Pedidos por WhatsApp en 1 clic",
    body: "El botón correcto, en el momento correcto. La consulta llega lista con el producto y la cantidad.",
  },
  {
    icon: IconChart,
    title: "Analítica en tiempo real",
    body: "Vistas, productos más vistos, horarios pico y procedencia. Decisiones con datos, no con corazonadas.",
  },
  {
    icon: IconSync,
    title: "Actualización instantánea",
    body: "Precios, stock y colecciones nuevos en segundos. Tu link nunca cambia ni se desactualiza.",
  },
  {
    icon: IconQr,
    title: "QR y links compartibles",
    body: "Un QR para tu local, empaques, ferias o revistas. Escanea y catálogo abierto.",
  },
];

export default function Features() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream/60">
      <img loading="lazy" decoding="async"
        src="/art/divider-arcs.svg"
        alt=""
        aria-hidden
        className="absolute top-0 inset-x-0 w-full h-20 opacity-70"
      />
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Todo incluido</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08] text-ink">
              Un sistema completo,{" "}
              <span className="font-displayItal italic text-terra">
                no solo una web bonita
              </span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              Cataloga reúne las piezas que tu negocio necesita para publicar,
              compartir y vender con un catálogo digital profesional.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="group relative h-full rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="absolute right-6 top-6 text-[11px] font-semibold text-sand">
                    0{i + 1}
                  </div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brass-light transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 font-display text-[19px] leading-snug text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                    {f.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-mute">
            <span className="inline-flex items-center gap-2">
              <IconGlobe className="w-4 h-4 text-olive" /> Multi-idioma y multi-moneda
            </span>
            <span className="inline-flex items-center gap-2">
              <IconSync className="w-4 h-4 text-olive" /> Importación desde Excel, CSV o tu tienda
            </span>
            <span className="inline-flex items-center gap-2">
              <IconChart className="w-4 h-4 text-olive" /> Compatible con Google Analytics
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
