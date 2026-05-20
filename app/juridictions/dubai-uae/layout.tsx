import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dubaï et UAE | IDN Global Advisory',
  description: 'Free zones, LLC, structures MENA à Dubaï et aux Émirats. Hub international pour structuration régionale et coordination Afrique.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
