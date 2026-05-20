import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Royaume-Uni et profondeur juridique | IDN Global Advisory',
  description: 'Limited company, LLP, trusts post-Brexit. Dossiers impliquant des structures ou contreparties britanniques.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
