import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 200, prefix: "+", label: "Clientes Atendidos" },
  { value: 1, prefix: "R$ ", suffix: "M+", label: "em Impostos Recuperados" },
  { value: 98, suffix: "%", label: "de Satisfação (NPS)" },
  { value: 10, prefix: "+", label: "Anos de Experiência" },
];

const Counter = ({ stat }: { stat: Stat }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(stat.value * (0.2 + 0.8 * p)));
            if (p < 1) requestAnimationFrame(tick);
            else setN(stat.value);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold tracking-tight">
        {stat.prefix}{n}{stat.suffix}
      </div>
      <p className="mt-3 text-sm md:text-base text-white/75">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.05] pointer-events-none" />
      <div className="container-wide relative py-20 md:py-24">
        <div className="max-w-2xl mb-14 reveal">
          <p className="text-xs tracking-[0.3em] text-gold mb-3">Resultados que falam</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Números construídos com consistência.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s) => (
            <Counter key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
