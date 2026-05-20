'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const t = {
  fr: {
    label: "Accès confidentiel",
    title: "Votre projet commence ici.",
    text: "Quelques éléments suffisent pour qualifier la situation et définir la première étape.",
    items: [
      ["▥", "Créer une structure", "/international"],
      ["⌂", "Acquisition immobilière", "/immobilier"],
      ["⌁", "Structurer un dossier", "/entreprises"],
      ["◷", "Ouvrir un échange", "/contact"],
    ],
    foot: "Cadre privé et suivi documenté",
    cities: "Luxembourg · Europe · International",
  },
  en: {
    label: "Confidential access",
    title: "Your project starts here.",
    text: "A few elements are enough to qualify the situation and define the first step.",
    items: [
      ["▥", "Establish a structure", "/international"],
      ["⌂", "Real estate acquisition", "/immobilier"],
      ["⌁", "Structure a file", "/entreprises"],
      ["◷", "Open a conversation", "/contact"],
    ],
    foot: "Private framework and documented follow-up",
    cities: "Luxembourg · Europe · International",
  },
};

export default function ConfidentialAccess() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <aside className="conf-panel conf-panel-v6">
      <div className="lock">▢</div>
      <p className="conf-label">{c.label}</p>
      <h2>{c.title}</h2>
      <p className="conf-text">{c.text}</p>
      <div className="conf-list">
        {c.items.map(([icon, label, href]) => (
          <Link href={href} className="conf-item" key={label}>
            <span>{icon}</span>
            <strong>{label}</strong>
            <em>›</em>
          </Link>
        ))}
      </div>
      <p className="conf-foot">{c.foot}</p>
      <p className="conf-cities">{c.cities}</p>
    </aside>
  );
}
