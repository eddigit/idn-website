import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Italie et immobilier patrimonial | IDN Global Advisory',
  description: 'Acquisitions en Toscane, Milan, Rome, Florence. Coordination locale pour immobilier patrimonial en Italie.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
