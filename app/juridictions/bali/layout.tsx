import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bali / Indonésie et résidence internationale | IDN Global Advisory',
  description: 'PT PMA, visa de résidence, immobilier en leasehold. Bali comme base de résidence internationale avec une logique opérationnelle structurée.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
