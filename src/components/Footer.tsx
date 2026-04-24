import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Logo from "./Logo";


const Footer = () => {
  return (
    <footer className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.04] pointer-events-none" />
      <div className="container-wide relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-sm text-white/70 max-w-xs leading-relaxed">
              A contabilidade que maximiza seu futuro. Tecnologia, estratégia e
              atendimento próximo.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
              <li><Link to="/resultados" className="hover:text-gold transition-colors">Resultados</Link></li>
              <li><Link to="/jornada" className="hover:text-gold transition-colors">Jornada do Cliente</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/servicos/contabilidade-empresarial" className="hover:text-gold transition-colors">Contabilidade Empresarial</Link></li>
              <li><Link to="/servicos/planejamento-tributario" className="hover:text-gold transition-colors">Planejamento Tributário</Link></li>
              <li><Link to="/servicos/abertura-de-empresas" className="hover:text-gold transition-colors">Abertura de Empresas</Link></li>
              <li><Link to="/servicos/folha-de-pagamento" className="hover:text-gold transition-colors">Folha de Pagamento</Link></li>
              <li><Link to="/servicos/bpo-financeiro" className="hover:text-gold transition-colors">BPO Financeiro</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>contato@bumax.com.br</li>
              <li>(75) 0000-0000</li>
              <li>Paulo Afonso — BA</li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition-colors text-white/80">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition-colors text-white/80">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 border border-white/15 hover:border-gold hover:text-gold transition-colors text-white/80">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Bumax Contabilidade. Todos os direitos reservados.</p>
          <Link to="/politica-privacidade" className="hover:text-gold transition-colors">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
