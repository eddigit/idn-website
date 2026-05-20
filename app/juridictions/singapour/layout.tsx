import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Singapour et Asie-Pacifique | IDN Global Advisory',
  description: 'Pte Ltd, family offices, structures régionales à Singapour. Référence pour la structuration Asie-Pacifique.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
