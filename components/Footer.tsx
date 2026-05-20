'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const t = {
  fr: {
    tagline: "Nous accompagnons entrepreneurs, investisseurs et structures internationales dans leurs projets de structuration, d'acquisition et de développement cross-border.",
    solutions: "Services",
    sol1: "Structuration internationale",
    sol2: "Immobilier & acquisition",
    sol3: "Pilotage stratégique",
    jur: "Juridictions",
    j1: "Luxembourg", j1s: "luxembourg",
    j2: "Suisse", j2s: "suisse",
    j3: "France", j3s: "france",
    j4: "Portugal", j4s: "portugal",
    j5: "Dubaï / UAE", j5s: "dubai-uae",
    j6: "Singapour", j6s: "singapour",
    jurAll: "Toutes les juridictions →",
    company: "Cabinet",
    about: "À propos",
    approach: "Notre méthode",
    publications: "Publications",
    contact: "Contact",
    info: "Informations",
    privacy: "Confidentialité",
    privacyLink: "/politique-de-confidentialite",
    legal: "Mentions légales",
    legalLink: "/mentions-legales",
    terms: "Conditions d'utilisation",
    termsLink: "/conditions-utilisation",
    copy: "© 2026 IDN Global Advisory. Tous droits réservés.",
    note: "Cabinet indépendant de conseil international.",
    address: "Luxembourg · Europe · International",
    email: "+352 621 761 838",
  },
  en: {
    tagline: "We advise entrepreneurs, investors and international structures on structuring, acquisition and cross-border development projects.",
    solutions: "Services",
    sol1: "International structuring",
    sol2: "Real estate & acquisition",
    sol3: "Strategic advisory",
    jur: "Jurisdictions",
    j1: "Luxembourg", j1s: "luxembourg",
    j2: "Switzerland", j2s: "suisse",
    j3: "France", j3s: "france",
    j4: "Portugal", j4s: "portugal",
    j5: "Dubai / UAE", j5s: "dubai-uae",
    j6: "Singapore", j6s: "singapour",
    jurAll: "All jurisdictions →",
    company: "Firm",
    about: "About",
    approach: "Our method",
    publications: "Publications",
    contact: "Contact",
    info: "Information",
    privacy: "Privacy policy",
    privacyLink: "/politique-de-confidentialite",
    legal: "Legal notice",
    legalLink: "/mentions-legales",
    terms: "Terms of use",
    termsLink: "/conditions-utilisation",
    copy: "© 2026 IDN Global Advisory. All rights reserved.",
    note: "An independent international advisory firm.",
    address: "Luxembourg · Europe · International",
    email: "+352 621 761 838",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <footer className="footer-ref">
      <div className="container-ref footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo/idn-logo-nobg.svg" alt="IDN Global Advisory" height="52" style={{ display: 'block' }} />
          </div>
          <p>{c.tagline}</p>
          <small>{c.address}</small>
          <small>{c.email}</small>
        </div>
        <div>
          <h3>{c.solutions}</h3>
          <Link href="/international">{c.sol1}</Link>
          <Link href="/immobilier">{c.sol2}</Link>
          <Link href="/entreprises">{c.sol3}</Link>
        </div>
        <div>
          <h3>{c.jur}</h3>
          <Link href={`/juridictions/${c.j1s}`}>{c.j1}</Link>
          <Link href={`/juridictions/${c.j2s}`}>{c.j2}</Link>
          <Link href={`/juridictions/${c.j3s}`}>{c.j3}</Link>
          <Link href={`/juridictions/${c.j4s}`}>{c.j4}</Link>
          <Link href={`/juridictions/${c.j5s}`}>{c.j5}</Link>
          <Link href={`/juridictions/${c.j6s}`}>{c.j6}</Link>
          <Link href="/juridictions" className="footer-link-main" style={{ marginTop: 8 }}>{c.jurAll}</Link>
        </div>
        <div>
          <h3>{c.company}</h3>
          <Link href="/a-propos">{c.about}</Link>
          <Link href="/a-propos">{c.approach}</Link>
          <Link href="/publications">{c.publications}</Link>
          <Link href="/contact">{c.contact}</Link>
          <Link href={c.privacyLink}>{c.privacy}</Link>
          <Link href={c.legalLink}>{c.legal}</Link>
          <Link href={c.termsLink}>{c.terms}</Link>
        </div>
      </div>
      <div className="container-ref footer-bottom">
        <span>{c.copy}</span>
        <span>{c.note}</span>
      </div>
    </footer>
  );
}
