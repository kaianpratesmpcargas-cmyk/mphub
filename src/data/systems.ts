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
  }
];
