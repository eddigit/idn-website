import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Politique de confidentialité | IDN Global Advisory',
  description: 'Politique de confidentialité et de conformité réglementaire de CMB Conseil SA, exploitée sous la marque IDN Global Advisory.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
