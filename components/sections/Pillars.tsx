import Reveal from "@/components/Reveal";
import { IconPalette, IconSync, IconChart, IconArrowRight } from "@/components/icons";

const pillars = [
  {
    icon: IconPalette,
    tag: "Imagen",
    title: "Se ve caro. Muy caro.",
    body: "Diseño editorial a medida con tu marca, tus colores y tus productos presentados como en una revista de interiorismo. La primera impresión cierra la venta.",
    tone: "bg-terra-wash text-terra",
  },
  {
    icon: IconSync,
    tag: "Operación",
    title: "Siempre actualizado, sin PDF eternos.",
    body: "Cambias un precio o agregas una colección y tu catálogo se actualiza al instante en todos lados. Un solo link que nunca caduca ni pesa 40 MB.",
    tone: "bg-olive/15 text-olive",
  },
  {
    icon: IconChart,
    tag: "Datos",
    title: "Cada visita deja huella.",
    body: "Qué productos miran, desde dónde, cuánto tiempo y cuándo escriben. Convierte tu catálogo en tu mejor vendedor —y en tu mejor analista—.",
    tone: "bg-brass/15 text-brass",
  },
];

export default function Pillars() {
  return (
    <section id="producto" className="section-pad scroll-mt-24">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Por qué Cataloga</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08] text-ink">
              Tu catálogo actual te está{" "}
              <span className="font-displayItal italic text-terra">costando ventas</span>.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              Los PDF pesados, las fotos de celular y las listas de precios en
              WhatsApp se quedaron en 2018. Cataloga convierte tu inventario en
              una experiencia que enamora y se puede medir.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
                <article className="card group h-full p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.tone}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-mute">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 font-display text-[22px] leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a href="/catalogo" className="btn-ink group">
              Mira un catálogo real en acción
              <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
