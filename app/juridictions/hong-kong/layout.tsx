import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hong Kong et infrastructure financière | IDN Global Advisory",
  description: "Structures opérationnelles et holdings régionaux à Hong Kong. Accès Asie-Pacifique et marché chinois continental. Analyse actualisée du contexte réglementaire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
