export interface SystemItem {
  id: string;
  name: string;
  description: string;
  url?: string;
  icon: 'package' | 'map-pin' | 'clock' | 'truck' | 'file-text' | 'barcode' | 'bar-chart' | 'users';
  status: 'active' | 'coming-soon';
  badge?: string;
}

export const systems: SystemItem[] = [
  {
    id: 'patrimonio',
    name: 'Patrimônio',
    description: 'Controle e gerenciamento de patrimônio da MP CARGAS.',
    url: 'https://mpcargas.vercel.app/',
    icon: 'package',
    status: 'active',
    badge: 'Operacional'
  },
  {
    id: 'cidades-atendidas',
    name: 'Cidades Atendidas',
    description: 'Consulta de cidades atendidas e prazos de entrega.',
    url: 'https://cidadesatendidasmpcargas.vercel.app/',
    icon: 'map-pin',
    status: 'active',
    badge: 'Operacional'
  },
  {
    id: 'controle-ponto',
    name: 'Controle de Ponto',
    description: 'Registro de jornada e frequência dos colaboradores.',
    icon: 'clock',
    status: 'coming-soon',
    badge: 'Em breve'
  },
  {
    id: 'conferencia-cargas',
    name: 'Conferência de Cargas',
    description: 'Auditoria de romaneios, manifesto e fluxo de triagem.',
    icon: 'truck',
    status: 'coming-soon',
    badge: 'Em breve'
  },
  {
    id: 'consulta-notas',
    name: 'Consulta de Notas',
    description: 'Acompanhamento e consulta fiscal de CT-e e NF-e.',
    icon: 'file-text',
    status: 'coming-soon',
    badge: 'Em breve'
  },
  {
    id: 'gerador-etiquetas',
    name: 'Gerador de Etiquetas',
    description: 'Emissão e padronização de identificadores de volumes.',
    icon: 'barcode',
    status: 'coming-soon',
    badge: 'Em breve'
  },
  {
    id: 'relatorios',
    name: 'Relatórios',
    description: 'Indicadores de performance, relatórios e métricas de transporte.',
    icon: 'bar-chart',
    status: 'coming-soon',
    badge: 'Em breve'
  },
  {
    id: 'controle-funcionarios',
    name: 'Controle de Funcionários',
    description: 'Gestão de equipes, cadastros internos e escalas.',
    icon: 'users',
    status: 'coming-soon',
    badge: 'Em breve'
  }
];
