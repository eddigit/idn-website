import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos | IDN Global Advisory',
  description: 'Cabinet indépendant de conseil stratégique international basé au Luxembourg. Méthode, discrétion et continuité opérationnelle pour des dossiers de structuration et d\'acquisition complexes.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
