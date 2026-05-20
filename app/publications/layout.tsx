import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Publications | IDN Global Advisory",
  description: "Analyses et lectures opérationnelles sur la structuration internationale, l'immobilier, la gouvernance et la conformité. Textes écrits pour des praticiens.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
