import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roumanie et implantation entrepreneuriale | IDN Global Advisory',
  description: 'SRL, SA, holding en Roumanie. État membre de l\'Union européenne avec des conditions d\'implantation compétitives pour les structures bien définies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
