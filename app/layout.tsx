import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LangProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://idn-global-advisory.com'),
  title: { default: 'IDN Global Advisory | Conseil stratégique international', template: '%s | IDN Global Advisory' },
  description: 'Cabinet indépendant de conseil stratégique international. Structuration internationale, immobilier privé et gouvernance d\'entreprise depuis Luxembourg.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'IDN Global Advisory',
    description: 'Cabinet indépendant de conseil stratégique international basé au Luxembourg.',
    url: 'https://idn-global-advisory.com',
    siteName: 'IDN Global Advisory',
    locale: 'fr_FR',
    type: 'website',
    images: ['/logo/idn-logo-nobg.svg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="paper">
        <LangProvider>
          <Header />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
