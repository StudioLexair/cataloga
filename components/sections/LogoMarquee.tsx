const brands = [
  {
    name: "Casa Lum",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="13" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M6 27c2-6 6-9 10-9s8 3 10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Ferretería El Clavo",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 4v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="26" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Bodega Sur",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M12 4h8l-2 10a4 4 0 1 1-4 0L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 22v6M11 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Nova Cerámica",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M8 12c0-4 3.5-7 8-7s8 3 8 7c0 8-4 9-4 14H12c0-5-4-6-4-14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Atelier Norte",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 5l10 22H6L16 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M11 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Verde Market",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M7 25c0-9 5-15 17-16-1 11-7 16-15 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 22c3-4 6-7 11-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Óptica Bruma",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="10" cy="17" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="17" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M15 17c1-1.4 1-1.4 2 0M5 13l2-4M27 13l-2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Muebles Peldaño",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M5 24h6v-6h6v-6h6V7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function LogoMarquee() {
  const row = [...brands, ...brands];

  return (
    <section className="py-14 border-y border-line/70 bg-cream/50 overflow-hidden">
      <div className="container-site">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-mute">
          Equipos que ya venden con Vitrina
        </p>
      </div>
      <div className="mt-9 mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-14 px-8">
          {row.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex items-center gap-3 text-ink/55 hover:text-ink transition-colors duration-300 whitespace-nowrap"
            >
              {b.icon}
              <span className="font-display text-lg font-medium tracking-tight">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
