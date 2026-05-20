import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Conditions d'utilisation | IDN Global Advisory",
  description: "Conditions d'utilisation et cadre des échanges de CMB Conseil SA, exploitée sous la marque IDN Global Advisory.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
