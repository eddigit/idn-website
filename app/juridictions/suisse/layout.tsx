import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Suisse et stabilité patrimoniale | IDN Global Advisory',
  description: 'SA, Sàrl, fondations en Suisse. Cadre juridique solide pour structuration patrimoniale et opérationnelle internationale.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
