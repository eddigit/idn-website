import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilotage stratégique | IDN Global Advisory',
  description: 'Structuration, gouvernance et coordination stratégique pour entrepreneurs et structures internationales. Implantation, développement multi-pays, pilotage de dossiers complexes.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
