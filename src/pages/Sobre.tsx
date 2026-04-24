import { useEffect } from "react";
import { Target, Eye, Gem, Award } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";

const TIMELINE = [
  { year: "2014", text: "Fundação da Bumax com foco em pequenos negócios." },
  { year: "2017", text: "Expansão para consultoria tributária e BPO financeiro." },
  { year: "2020", text: "Implantação completa de tecnologia e dashboards." },
  { year: "2023", text: "+200 clientes ativos e prêmio de excelência em atendimento." },
];

const VALUES = [
  { icon: Target, title: "Missão", text: "Maximizar resultados de empresas com contabilidade estratégica e tecnologia." },
  { icon: Eye, title: "Visão", text: "Ser referência nacional em contabilidade consultiva e atendimento próximo." },
  { icon: Gem, title: "Valores", text: "Ética, excelência, transparência, inovação e relacionamento humano." },
];

const TEAM = [
  { name: "Bruno Maciel", role: "Sócio-Fundador", initials: "BM" },
  { name: "Marina Costa", role: "Diretora Tributária", initials: "MC" },
  { name: "André Lopes", role: "Head de Tecnologia", initials: "AL" },
  { name: "Júlia Reis", role: "Coord. Atendimento", initials: "JR" },
];

const Sobre = () => {
  useEffect(() => {
    document.title = "Sobre — Bumax Contabilidade";
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Sobre nós"
        title="Construímos resultados com técnica, tecnologia e proximidade."
        subtitle="Há mais de 10 anos transformando a contabilidade em vantagem competitiva para empresas que pensam grande."
      />

      {/* História */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24 grid lg:grid-cols-2 gap-14">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Nossa história</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6">
              De um escritório enxuto a um time de especialistas.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Bumax nasceu da convicção de que contabilidade é estratégia.
              Ao longo dos anos, integramos tecnologia, processos e gente para
              entregar muito além do balanço: clareza para decidir.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoje atendemos empresas em todo o Brasil, em diversos segmentos,
              com a mesma filosofia de proximidade e excelência.
            </p>
          </div>
          <div className="reveal">
            <ul className="space-y-6 border-l border-gold/40 pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 bg-gold" />
                  <p className="text-sm font-bold text-gold">{t.year}</p>
                  <p className="text-ink mt-1">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Quem somos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Missão, visão e valores.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <article key={v.title} className="bg-white border border-border p-8 reveal">
                <v.icon size={28} className="text-gold mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Pilares estratégicos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              O que sustenta cada projeto.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Estratégia", "Tecnologia", "Pessoas", "Excelência"].map((p) => (
              <div key={p} className="border border-border p-8 text-center hover:border-gold transition-colors reveal">
                <Award size={26} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-ink">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Equipe</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Especialistas dedicados ao seu negócio.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <article key={m.name} className="bg-white border border-border p-6 text-center reveal">
                <div className="mx-auto h-20 w-20 rounded-full bg-mist text-ink flex items-center justify-center text-xl font-bold mb-4">
                  {m.initials}
                </div>
                <h3 className="text-base font-bold text-ink">{m.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Vamos construir resultados juntos?"
        subtitle="Conheça de perto como nosso time pode acelerar a sua empresa."
        buttonLabel="Falar com a Bumax"
        buttonHref="https://wa.me/5500000000000"
      />
    </Layout>
  );
};

export default Sobre;
