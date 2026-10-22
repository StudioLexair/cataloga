import Reveal from "@/components/Reveal";

const stats = [
  { value: "+320", label: "catálogos publicados", note: "en 4 países" },
  { value: "2.4M", label: "vistas de catálogo", note: "últimos 12 meses" },
  { value: "+38%", label: "conversión media", note: "vs. catálogo en PDF" },
  { value: "48h", label: "puesta en marcha", note: "de punta a punta" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #C75D3B 0, transparent 42%), radial-gradient(circle at 85% 70%, #B08D55 0, transparent 45%)",
        }}
      />
      <div className="container-site relative py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="border-l border-white/15 pl-6">
                <p className="font-display text-[clamp(2.2rem,4vw,3.1rem)] leading-none font-semibold">
                  {s.value}
                </p>
                <p className="mt-3 text-[14px] font-medium text-paper/85">
                  {s.label}
                </p>
                <p className="mt-1 text-[12px] text-paper/50">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
