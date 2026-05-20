import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxembourg et structuration européenne | IDN Global Advisory',
  description: 'SOPARFI, SPF, SA, fonds structurés. Luxembourg comme plateforme de structuration européenne pour holdings et structures patrimoniales.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
