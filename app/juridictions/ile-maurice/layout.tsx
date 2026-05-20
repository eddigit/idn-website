import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Île Maurice et coordination régionale | IDN Global Advisory",
  description: "GBL, structures GBC à l'Île Maurice. Cadre d'inspiration britannique pour projets africains ou intercontinentaux.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
