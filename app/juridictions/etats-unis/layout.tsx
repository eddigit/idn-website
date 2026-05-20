import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "États-Unis et profondeur de marché | IDN Global Advisory",
  description: "Delaware LLC, C-Corp, structures immobilières aux États-Unis. Implantation commerciale, coordination avec des contreparties américaines, structuration cross-border.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
