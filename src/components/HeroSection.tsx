import heroVisual from "@/assets/hero-visual.jpg";

const WHATS = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Bumax";

const HeroSection = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.08] pointer-events-none" />
      <div className="container-wide relative grid lg:grid-cols-12 gap-10 items-center py-20 md:py-28">
        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.3em] text-gold mb-5 reveal">
            Bumax Contabilidade
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.02] reveal">
            A Contabilidade que <span className="text-gold">Maximiza</span> seu Futuro
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed reveal">
            Transformamos sua gestão em alta performance com tecnologia,
            estratégia e atendimento próximo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 reveal">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold text-white px-7 py-3.5 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Fale com um Especialista
            </a>
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              Diagnóstico Gratuito
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/30" aria-hidden="true" />
            <img
              src={heroVisual}
              alt="Ilustração geométrica representando crescimento e resultados financeiros"
              width={1024}
              height={1024}
              className="relative w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
