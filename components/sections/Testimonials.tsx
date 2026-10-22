import Reveal from "@/components/Reveal";
import { IconStar, IconSparkle } from "@/components/icons";

const testimonials = [
  {
    quote:
      "Pasamos de mandar un PDF de 30 MB por WhatsApp a compartir un link que enamora. Las consultas se duplicaron en el primer mes y las recibimos con el producto ya elegido.",
    name: "Valentina Ríos",
    role: "Fundadora · Casa Lum",
    avatar: "/avatars/avatar-1.svg",
    metric: "2× consultas",
  },
  {
    quote:
      "Mis clientes en el mostrador escanean el QR y ven todo el inventario con precios al día. Dejamos de imprimir folletos que cada mes se desactualizaban.",
    name: "Diego Martín",
    role: "Gerente comercial · El Clavo",
    avatar: "/avatars/avatar-2.svg",
    metric: "−100% folletos",
  },
  {
    quote:
      "Lo que más me sorprendió fue el panel: sé qué vinos miran, a qué hora y desde qué ciudad. Vitrina nos dice dónde está la demanda antes de comprar inventario.",
    name: "Ana Paredes",
    role: "Directora · Bodega Sur",
    avatar: "/avatars/avatar-3.svg",
    metric: "+38% conversión",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad scroll-mt-24 bg-cream/50">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">
              <IconSparkle className="w-3.5 h-3.5" /> Historias reales
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.08] text-ink">
              Negocios que ya venden{" "}
              <span className="font-displayItal italic text-terra">
                con Vitrina
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i + 1) as 1 | 2 | 3}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div
                  aria-hidden
                  className="absolute right-7 top-5 font-display text-6xl leading-none text-terra-wash select-none"
                >
                  &rdquo;
                </div>
                <div className="flex text-brass">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IconStar key={s} className="w-4 h-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center justify-between">
                  <figcaption className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={`Retrato de ${t.name}`}
                      className="h-11 w-11 rounded-full border border-line"
                    />
                    <div>
                      <p className="text-[13.5px] font-semibold text-ink">
                        {t.name}
                      </p>
                      <p className="text-[12px] text-ink-mute">{t.role}</p>
                    </div>
                  </figcaption>
                  <span className="rounded-full bg-olive/15 px-3 py-1.5 text-[11px] font-semibold text-olive">
                    {t.metric}
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
