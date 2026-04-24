import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CTABlock from "@/components/CTABlock";

const METRICS = [
  { value: "+R$ 1M", label: "Em tributos recuperados" },
  { value: "200+", label: "Empresas atendidas" },
  { value: "98%", label: "NPS de clientes" },
  { value: "30%", label: "Média de redução tributária" },
];

const CASES = [
  {
    company: "Studio Arquitetura",
    challenge: "Falta de visibilidade financeira e regime tributário inadequado.",
    solution: "Migração de regime, BPO financeiro e dashboards mensais.",
    result: "Redução de 28% na carga tributária e fluxo de caixa controlado.",
  },
  {
    company: "Tavares & Cia",
    challenge: "Pagamento excessivo de impostos por anos consecutivos.",
    solution: "Diagnóstico tributário e processo de recuperação de créditos.",
    result: "R$ 420 mil recuperados em 9 meses.",
  },
  {
    company: "Nova Saúde",
    challenge: "Crescimento rápido sem estrutura financeira de suporte.",
    solution: "Implantação de BPO financeiro e folha integrada.",
    result: "Operação financeira escalável com 0 erros nos últimos 12 meses.",
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana Alves",
    role: "CEO — Studio Arquitetura",
    initials: "MA",
    text: "Em poucos meses tínhamos clareza total do negócio. A Bumax assumiu o que para nós era dor de cabeça e devolveu como informação útil para decidir.",
  },
  {
    name: "Rafael Tavares",
    role: "Sócio — Tavares & Cia",
    initials: "RT",
    text: "Recuperamos um valor significativo em impostos. O processo foi conduzido com extrema seriedade e transparência do início ao fim.",
  },
];

const Resultados = () => {
  useEffect(() => {
    document.title = "Resultados e Cases — Bumax Contabilidade";
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Resultados"
        title="Cases reais de empresas que cresceram com a Bumax."
        subtitle="Histórias de transformação contábil, tributária e financeira."
      />

      {/* Métricas */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-white border-l-2 border-gold p-8 reveal">
                <div className="text-3xl md:text-4xl font-extrabold text-ink">{m.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Desafio. Solução. Resultado.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <article key={c.company} className="bg-ink text-white p-8 border-t-2 border-gold reveal">
                <p className="text-xs tracking-[0.3em] text-gold mb-3">Cliente</p>
                <h3 className="text-xl font-bold mb-6">{c.company}</h3>
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-gold font-semibold mb-1">Desafio</p>
                    <p className="text-white/80 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-gold font-semibold mb-1">Solução</p>
                    <p className="text-white/80 leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <p className="text-gold font-semibold mb-1">Resultado</p>
                    <p className="text-white/80 leading-relaxed">{c.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos expandidos */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              O que dizem nossos clientes.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Quer ser o próximo case Bumax?"
        buttonLabel="Quero conversar"
        buttonHref="https://wa.me/5500000000000"
      />
    </Layout>
  );
};

export default Resultados;
