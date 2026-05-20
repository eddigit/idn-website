import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portugal et résidence internationale | IDN Global Advisory',
  description: 'NHR, acquisition immobilière, structuration pour non-résidents. Résidence européenne, marché immobilier actif.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
