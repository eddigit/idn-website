import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panama et corridor international | IDN Global Advisory',
  description: "SA panaméenne, Fondation d'intérêt privé. Corridor Atlantique-Pacifique pour projets intercontinentaux.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
