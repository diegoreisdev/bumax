import {
  Briefcase,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Building2,
  ShoppingCart,
  Stethoscope,
  Cpu,
  HardHat,
  Factory,
  Store,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  audience: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "contabilidade-empresarial",
    title: "Contabilidade Empresarial",
    description:
      "Escrituração, demonstrações e relatórios estratégicos com olhar consultivo para apoiar suas decisões.",
    icon: Calculator,
    benefits: [
      "Escrituração contábil completa e em conformidade",
      "Relatórios gerenciais mensais",
      "Análise de indicadores e DRE consultiva",
      "Suporte em obrigações acessórias",
    ],
    audience:
      "Empresas que buscam mais do que cumprir obrigações: querem clareza para decidir.",
  },
  {
    slug: "planejamento-tributario",
    title: "Planejamento Tributário",
    description:
      "Análise de regime, elisão fiscal e oportunidades para reduzir a carga tributária com segurança.",
    icon: TrendingUp,
    benefits: [
      "Diagnóstico de regime tributário",
      "Identificação de créditos fiscais",
      "Recuperação de tributos pagos a maior",
      "Modelagem de cenários e simulações",
    ],
    audience:
      "Empresas que pagam impostos sem certeza se estão pagando o valor correto.",
  },
  {
    slug: "abertura-de-empresas",
    title: "Abertura de Empresas",
    description:
      "Constituição rápida e estratégica, com escolha do regime ideal e orientação societária.",
    icon: FileText,
    benefits: [
      "Definição do melhor enquadramento",
      "Registros, alvarás e licenças",
      "Inscrições municipais e estaduais",
      "Orientação societária",
    ],
    audience: "Empreendedores iniciando uma nova operação ou abrindo nova filial.",
  },
  {
    slug: "folha-de-pagamento",
    title: "Folha de Pagamento",
    description:
      "Gestão completa de folha, encargos, eSocial e benefícios com precisão e prazo.",
    icon: Users,
    benefits: [
      "Cálculo de folha e encargos",
      "Admissões, rescisões e férias",
      "eSocial e DCTFWeb",
      "Atendimento humanizado ao RH",
    ],
    audience: "Empresas com colaboradores que querem segurança e previsibilidade.",
  },
  {
    slug: "consultoria-financeira",
    title: "Consultoria Financeira",
    description:
      "Acompanhamento financeiro, indicadores e planejamento para crescer com saúde.",
    icon: Briefcase,
    benefits: [
      "Análise de fluxo de caixa",
      "KPIs financeiros e dashboards",
      "Plano de ação para margem e custos",
      "Reuniões periódicas de acompanhamento",
    ],
    audience: "Sócios e gestores que querem visibilidade e controle do negócio.",
  },
  {
    slug: "bpo-financeiro",
    title: "BPO Financeiro",
    description:
      "Terceirização de contas a pagar, receber, conciliação e tesouraria com tecnologia.",
    icon: Building2,
    benefits: [
      "Contas a pagar e a receber",
      "Conciliação bancária diária",
      "Emissão de notas e cobranças",
      "Relatórios de tesouraria",
    ],
    audience:
      "Empresas que querem foco no core e operação financeira impecável nos bastidores.",
  },
];

export interface SegmentItem {
  label: string;
  icon: LucideIcon;
}

export const SEGMENTS: SegmentItem[] = [
  { label: "Comércio", icon: Store },
  { label: "Serviços", icon: Briefcase },
  { label: "Saúde", icon: Stethoscope },
  { label: "Tecnologia", icon: Cpu },
  { label: "Construção Civil", icon: HardHat },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Indústria", icon: Factory },
];
