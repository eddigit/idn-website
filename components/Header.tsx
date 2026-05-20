'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';

const navFr = [
  ['International', '/international'],
  ['Immobilier', '/immobilier'],
  ['Entreprises', '/entreprises'],
  ['Juridictions', '/juridictions'],
  ['Publications', '/publications'],
  ['À propos', '/a-propos'],
  ['Contact', '/contact'],
];

const navEn = [
  ['International', '/international'],
  ['Real Estate', '/immobilier'],
  ['Advisory', '/entreprises'],
  ['Jurisdictions', '/juridictions'],
  ['Publications', '/publications'],
  ['About', '/a-propos'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const nav = lang === 'fr' ? navFr : navEn;
  const cta = lang === 'fr' ? 'Planifier un échange →' : 'Schedule a conversation →';
  const mobileCta = lang === 'fr' ? 'Présenter un projet' : 'Present a project';

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap">
          <img src="/logo/idn-logo-nobg.svg" alt="IDN Global Advisory" height="62" style={{ display: 'block' }} />
        </Link>
        <nav>
          {nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
        </nav>
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="lang-toggle"
          aria-label="Switch language"
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
        <Link href="/contact" className="header-cta">{cta}</Link>
        <button onClick={() => setOpen(true)} className="menu-btn">Menu</button>
      </div>

      {open && (
        <div className="mobile-menu">
          <button onClick={() => setOpen(false)} className="close-btn">Fermer</button>
          <Link href="/" className="mobile-logo">
            <img src="/logo/idn-logo-nobg.svg" alt="IDN Global Advisory" height="52" style={{ display: 'block' }} />
          </Link>
          <nav>
            {nav.map(([l, h]) => (
              <Link onClick={() => setOpen(false)} key={h} href={h}>{l}</Link>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 24 }}>
            <Link onClick={() => setOpen(false)} href="/contact" className="btn-ref primary">{mobileCta}</Link>
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="lang-toggle"
              style={{ fontSize: 14 }}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
