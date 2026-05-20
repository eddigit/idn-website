import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'France et présence opérationnelle | IDN Global Advisory',
  description: 'Acquisition immobilière, SCI, structuration pour non-résidents en France. Coordination notaire, avocat, fiscalité.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
