import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching IA | IDN Global Advisory',
  description: "Coaching IA pour dirigeants, fiduciaires, cabinets d'avocats et entreprises du bâtiment. Conception de MVP métier avec collaborateur IA dédié.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
