import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import { Phone, Search, ClipboardList, Settings, LineChart } from "lucide-react";

const STEPS = [
  { icon: Phone, title: "Contato Inicial", text: "Conversa breve para entender seu momento e seus objetivos." },
  { icon: Search, title: "Diagnóstico Gratuito", text: "Análise da sua operação contábil, tributária e financeira." },
  { icon: ClipboardList, title: "Planejamento Personalizado", text: "Plano sob medida com prioridades, prazos e responsáveis." },
  { icon: Settings, title: "Execução e Implementação", text: "Implantação com tecnologia, processos e equipe próxima." },
  { icon: LineChart, title: "Acompanhamento Contínuo", text: "Reuniões periódicas, indicadores e melhoria contínua." },
];

const Jornada = () => {
  useEffect(() => { document.title = "Jornada do Cliente — Bumax Contabilidade"; }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Jornada"
        title="Como trabalhamos com você."
        subtitle="Um processo claro, do primeiro contato à evolução contínua dos resultados."
      />

      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          {/* Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-10 left-10 right-10 h-px bg-gold/30" aria-hidden />
              <div className="grid grid-cols-5 gap-6">
                {STEPS.map((s, i) => (
                  <div key={s.title} className="relative reveal">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 h-20 w-20 bg-white border border-gold flex items-center justify-center">
                        <s.icon size={26} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div className="mt-4 text-2xl font-extrabold text-gold">0{i + 1}</div>
                      <h3 className="mt-2 text-base font-bold text-ink">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical */}
          <ol className="lg:hidden space-y-6 border-l border-gold/40 pl-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative reveal">
                <span className="absolute -left-[31px] top-1 h-3 w-3 bg-gold" />
                <div className="flex items-center gap-3">
                  <span className="text-xl font-extrabold text-gold">0{i + 1}</span>
                  <s.icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-mist">
        <div className="container-wide py-20 md:py-24 max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-gold mb-3 reveal">Princípios da jornada</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6 reveal">
            Clareza, proximidade e melhoria contínua.
          </h2>
          <p className="text-muted-foreground leading-relaxed reveal">
            Cada etapa é desenhada para gerar valor concreto. Você sempre saberá
            o que estamos fazendo, por que e qual o próximo passo. Nada de caixa preta.
          </p>
        </div>
      </section>

      <CTABlock
        title="Pronto para começar sua jornada?"
        buttonLabel="Iniciar diagnóstico"
        buttonHref="https://wa.me/5500000000000"
      />
    </Layout>
  );
};

export default Jornada;
