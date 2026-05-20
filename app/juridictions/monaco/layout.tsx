import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Monaco et résidence privée | IDN Global Advisory",
  description: "Résidence principale à Monaco pour profils internationaux. Conditions d'accès, préparation du dossier, coordination avec les autorités monégasques.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
