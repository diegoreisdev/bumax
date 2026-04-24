import { Lightbulb, Cpu, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABlock from "@/components/CTABlock";
import LeadForm from "@/components/LeadForm";
import { SERVICES, SEGMENTS } from "@/data/services";
import { useEffect } from "react";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Contabilidade Consultiva",
    text: "Não entregamos só números: traduzimos dados em decisões para o seu crescimento.",
  },
  {
    icon: Cpu,
    title: "Tecnologia e Inovação",
    text: "Plataformas integradas, automação e dashboards em tempo real para sua gestão.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    text: "Time próximo, comunicação ágil e relacionamento real com sócios e gestores.",
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana Alves",
    role: "CEO — Studio Arquitetura",
    initials: "MA",
    text: "A Bumax mudou nossa forma de enxergar o negócio. Saímos do operacional e ganhamos visão estratégica do financeiro.",
  },
  {
    name: "Rafael Tavares",
    role: "Sócio — Tavares & Cia",
    initials: "RT",
    text: "Recuperamos impostos que pagávamos a mais por anos. O time é técnico, próximo e extremamente confiável.",
  },
  {
    name: "Camila Souza",
    role: "Diretora — Nova Saúde",
    initials: "CS",
    text: "Atendimento humano, rápido e estratégico. Hoje confio na Bumax como parceira do crescimento da clínica.",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Home — Bumax Contabilidade";
  }, []);

  return (
    <Layout>
      <HeroSection />

      {/* Proposta de valor */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Por que Bumax</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Três pilares que sustentam cada entrega.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <article key={p.title} className="bg-white border-l-2 border-gold p-8 reveal">
                <p.icon size={28} strokeWidth={1.5} className="text-gold mb-5" />
                <h3 className="text-xl font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Serviços */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl reveal">
              <p className="text-xs tracking-[0.3em] text-gold mb-3">Serviços</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
                Soluções completas para o seu negócio.
              </h2>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold transition-colors reveal"
            >
              Ver todos os serviços
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.description}
                href={`/servicos/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Segmentos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Atendemos quem move a economia real.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {SEGMENTS.map((seg) => (
              <div
                key={seg.label}
                className="bg-white border border-border p-6 flex flex-col items-center text-center gap-3 hover:border-gold transition-colors reveal"
              >
                <seg.icon size={26} strokeWidth={1.5} className="text-gold" />
                <span className="text-sm font-semibold text-ink">{seg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="diagnostico" className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-isotype opacity-[0.06] pointer-events-none" />
        <div className="container-wide relative py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Material gratuito</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Baixe Grátis: Guia Completo para Economia Tributária
            </h2>
            <p className="mt-5 text-base text-white/75 max-w-lg">
              Estratégias práticas para reduzir tributos com segurança e organizar
              o financeiro da sua empresa.
            </p>
          </div>
          <div className="reveal">
            <LeadForm variant="dark" buttonLabel="Quero o Guia Gratuito" />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Quem confia na Bumax.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Pronto para levar sua empresa ao próximo nível?"
        subtitle="Agende agora uma conversa com nossos especialistas. Sem compromisso."
        buttonLabel="Agendar Diagnóstico Gratuito"
        buttonHref="https://wa.me/5500000000000?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito"
      />
    </Layout>
  );
};

export default Index;
