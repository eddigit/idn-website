import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immobilier privé & acquisition | IDN Global Advisory',
  description: 'Acquisition immobilière pour non-résidents, VEFA, investissement patrimonial. Coordination notaire, avocat, banque sur les marchés européens et internationaux.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
