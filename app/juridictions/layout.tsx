import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juridictions | IDN Global Advisory',
  description: 'Luxembourg, Suisse, France, Portugal, Dubaï, Singapour et autres juridictions. Présence internationale sélective pour des projets de structuration et d\'acquisition.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
