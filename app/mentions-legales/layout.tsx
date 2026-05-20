import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Mentions légales | IDN Global Advisory',
  description: 'Mentions légales et informations légales de CMB Conseil SA, exploitée sous la marque IDN Global Advisory.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
