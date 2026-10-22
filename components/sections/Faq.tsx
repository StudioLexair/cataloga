import Reveal from "@/components/Reveal";
import { IconChevronDown } from "@/components/icons";

const faqs = [
  {
    q: "¿Los planes son de pago único?",
    a: "Sí. Pagas una sola vez por el plan que elijas, en pesos cubanos (CUP), y el catálogo es tuyo. Sin cuotas mensuales obligatorios; si quieres soporte extendido o mantenimiento, se cotiza aparte.",
  },
  {
    q: "¿Cuánto tarda tener mi catálogo listo?",
    a: "Entre 48 horas y 5 días hábiles, dependiendo de la cantidad de productos y del nivel de personalización. Si vienes de un PDF o catálogo impreso, nosotros lo digitalizamos y tú solo apruebas.",
  },
  {
    q: "¿Puedo migrar mi catálogo en PDF, Excel o papel?",
    a: "Sí. Importamos tus productos desde Excel, CSV o imágenes, y si tienes un catálogo impreso lo escaneamos y estructuramos. El resultado es un catálogo navegable, no un PDF colgado en una web.",
  },
  {
    q: "¿Vitrina cobra comisión por venta?",
    a: "Nunca. Pagas una única vez por el plan que elijas (en CUP) y todas las ventas tuyas son 100% tuyas. Sin comisiones, sin intermediarios.",
  },
  {
    q: "¿Puedo usar mi marca, mis colores y mi dominio?",
    a: "Claro. Todos los planes incluyen tu identidad visual; los planes Premium y Empresarial además incluyen tu dominio propio (por ejemplo catalogo.tumarca.com).",
  },
  {
    q: "¿Funciona bien en el celular?",
    a: "Está diseñado primero para móvil: la mayoría de tus clientes abrirán el catálogo desde WhatsApp o Instagram. Es rápido, táctil y se siente como una app.",
  },
  {
    q: "¿Y si necesito cambios o soporte?",
    a: "Editas precios, fotos y colecciones en minutos desde tu panel. Y si prefieres que lo hagamos nosotros, el soporte prioritario del plan Profesional responde en menos de 4 horas hábiles.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section-pad scroll-mt-24 bg-cream/50">
      <div className="container-site">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,2.9rem)] leading-[1.1] text-ink">
                Lo que todos preguntan{" "}
                <span className="font-displayItal italic text-terra">
                  antes de empezar
                </span>
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                ¿No encuentras tu pregunta? Escríbenos y te respondemos en el
                día —{" "}
                <a
                  href="mailto:studio.lexair@gmail.com"
                  className="link-underline font-semibold text-terra"
                >
                  studio.lexair@gmail.com
                </a>
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <details className="group rounded-2xl border border-line bg-white px-6 py-5 transition-shadow hover:shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-[17.5px] leading-snug text-ink">
                      {f.q}
                    </span>
                    <IconChevronDown className="w-5 h-5 shrink-0 text-ink-mute transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
