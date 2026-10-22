import { LogoMark } from "@/components/Logo";
import {
  IconArrowRight,
  IconMail,
  IconWhatsApp,
  IconSparkle,
} from "@/components/icons";

const columns = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "#producto" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Precios", href: "#precios" },
      { label: "Catálogo demo", href: "/catalogo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Guía de inicio", href: "#faq" },
      { label: "Casos de éxito", href: "#testimonios" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Estado del servicio", href: "#faq" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Vitrina", href: "#producto" },
      { label: "Contacto", href: "#cta-final" },
      { label: "Privacidad", href: "#cta-final" },
      { label: "Términos", href: "#cta-final" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-terra/25 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-24 w-[380px] h-[380px] rounded-full bg-brass/15 blur-2xl"
      />

      <div className="container-site relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={42} />
              <span className="font-display text-xl tracking-[0.28em]">
                VITRINA
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/70">
              El sistema de catálogos digitales para negocios que quieren verse
              —y vender— como grandes marcas.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="mailto:studio.lexair@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[13px] text-paper/85 hover:border-white/35 hover:bg-white/5 transition-colors"
              >
                <IconMail className="w-4 h-4" /> studio.lexair@gmail.com
              </a>
              <a
                href="https://wa.me/5352678747"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[13px] text-paper/85 hover:border-white/35 hover:bg-white/5 transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" /> +53 5267 8747
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-light">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="link-underline text-[14px] text-paper/70 hover:text-paper transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1">
            <div className="eyebrow !text-brass-light">
              <IconSparkle className="w-3.5 h-3.5" /> Newsletter
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl leading-tight">
              Ideas de venta, diseño y catálogos.
              <br />
              <span className="text-paper/60">Una vez al mes. Sin ruido.</span>
            </h3>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            action="#"
            onSubmit={undefined}
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 text-[14px] text-paper placeholder:text-paper/40 focus:border-brass-light/60 focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0">
              Suscribirme
              <IconArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12.5px] text-paper/50">
            © {new Date().getFullYear()} Vitrina · Un producto de Studio Lexair.
            Todos los derechos reservados.
          </p>
          <p className="text-[12.5px] text-paper/50 flex items-center gap-2">
            <IconSparkle className="w-3.5 h-3.5 text-brass-light" />
            Hecho con obsesión por el detalle
          </p>
        </div>
      </div>
    </footer>
  );
}
