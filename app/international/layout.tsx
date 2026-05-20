import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Structuration internationale | IDN Global Advisory',
  description: 'Organiser une présence internationale cohérente entre juridictions, intervenants et calendrier. Holding, filiales, structures cross-border depuis Luxembourg.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
