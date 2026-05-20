import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | IDN Global Advisory',
  description: 'Présenter une situation, organiser un premier échange ou soumettre un dossier. Échanges confidentiels, réponse qualifiée.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
