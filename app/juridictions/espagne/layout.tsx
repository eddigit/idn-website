import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espagne et marché ibérique | IDN Global Advisory',
  description: 'SL, SA, acquisitions immobilières Madrid, Barcelone, Méditerranée. Structuration et implantation en Espagne.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
