'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const c = {
  fr: {
    eyebrow: "Informations légales",
    h1: "Mentions légales.",
    sections: [
      {
        title: "Éditeur du site",
        content: "Le présent site est édité par CMB CONSEIL SA, société de droit luxembourgeois exploitée sous la marque IDN Global Advisory.",
      },
      {
        title: "Identification",
        rows: [
          ["Dénomination sociale", "CMB CONSEIL SA"],
          ["Marque exploitée", "IDN Global Advisory"],
          ["Forme juridique", "Société Anonyme (SA)"],
          ["Siège social", "4 Rue d'Arlon, L-8399 Windhof, Luxembourg"],
          ["RCS Luxembourg", "B261378"],
          ["TVA intracommunautaire", "LU34010738"],
          ["Activité", "Conseil pour les affaires et autres conseils de gestion (NACE 70.22)"],
          ["Contact", "strategy@idnadvisory.com — +352 621 761 838"],
          ["Direction de publication", "CMB CONSEIL SA"],
          ["Hébergeur", "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com"],
        ],
      },
      {
        title: "Propriété intellectuelle",
        content: "L'ensemble des contenus présents sur le site, incluant notamment les textes, éléments rédactionnels, structure, identité visuelle, graphismes, logos, icônes, photographies, illustrations et éléments de design, est protégé par les dispositions applicables en matière de propriété intellectuelle. Toute reproduction, représentation, diffusion, adaptation, extraction ou utilisation, totale ou partielle, sans autorisation écrite préalable, est interdite.",
      },
      {
        title: "Limitation de responsabilité",
        content: "Les informations présentes sur le site sont fournies à titre général et informatif. Elles ne constituent ni une consultation juridique, fiscale, comptable, réglementaire ou financière individualisée, ni une offre contractuelle. IDN Global Advisory intervient dans une logique de conseil, de structuration, de coordination et d'accompagnement selon la nature des dossiers. Certaines prestations peuvent nécessiter l'intervention de professionnels externes qualifiés, notamment avocats, notaires, fiscalistes, fiduciaires, experts techniques ou partenaires réglementés, selon les juridictions concernées et les exigences du dossier. Malgré le soin apporté au contenu du site, aucune garantie n'est donnée quant à l'exhaustivité, l'actualité ou l'absence d'erreur des informations publiées.",
      },
      {
        title: "Droit applicable",
        content: "Le site et son contenu sont soumis au droit luxembourgeois. Tout litige relatif à l'utilisation du site relève, sauf disposition impérative contraire, de la compétence exclusive des tribunaux de Luxembourg-Ville.",
      },
    ],
  },
  en: {
    eyebrow: "Legal information",
    h1: "Legal notice.",
    sections: [
      {
        title: "Website publisher",
        content: "This website is published by CMB CONSEIL SA, a Luxembourg company operating under the brand IDN Global Advisory.",
      },
      {
        title: "Identification",
        rows: [
          ["Corporate name", "CMB CONSEIL SA"],
          ["Operating brand", "IDN Global Advisory"],
          ["Legal form", "Public Limited Company (SA)"],
          ["Registered office", "4 Rue d'Arlon, L-8399 Windhof, Luxembourg"],
          ["Luxembourg Trade Register", "B261378"],
          ["VAT number", "LU34010738"],
          ["Business activity", "Business and management consultancy activities (NACE 70.22)"],
          ["Contact", "strategy@idnadvisory.com — +352 621 761 838"],
          ["Publication director", "CMB CONSEIL SA"],
          ["Hosting provider", "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, United States — vercel.com"],
        ],
      },
      {
        title: "Intellectual property",
        content: "All content available on this website, including texts, editorial content, structure, visual identity, graphics, logos, icons, photographs, illustrations and design elements, is protected under applicable intellectual property laws. Any reproduction, representation, distribution, adaptation, extraction or use, in whole or in part, without prior written authorisation, is prohibited.",
      },
      {
        title: "Limitation of liability",
        content: "The information available on this website is provided for general informational purposes only. It does not constitute legal, tax, accounting, regulatory or financial advice, nor any contractual offer. IDN Global Advisory operates in the fields of advisory, structuring, coordination and execution support depending on the nature of each matter. Certain assignments may require the involvement of qualified external professionals, including lawyers, notaries, tax advisers, fiduciaries, technical experts or regulated partners depending on the jurisdictions involved and the requirements of the matter. Although reasonable care is taken regarding the content of this website, no guarantee is given as to the completeness, accuracy or ongoing validity of the information published.",
      },
      {
        title: "Applicable law",
        content: "This website and its content are governed by Luxembourg law. Any dispute relating to the use of the website shall, unless otherwise required by mandatory law, fall under the exclusive jurisdiction of the courts of Luxembourg City.",
      },
    ],
  },
};

export default function Page() {
  const { lang } = useLang();
  const t = c[lang];

  return (
    <main>
      <section className="legal-header container-ref">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.h1}</h1>
        <div className="about-manifesto-line" />
      </section>

      <section className="legal-body container-ref">
        {t.sections.map((s, i) => (
          <div className="legal-section" key={i}>
            <h2>{s.title}</h2>
            {s.rows ? (
              <table className="legal-table">
                <tbody>
                  {s.rows.map(([k, v], j) => (
                    <tr key={j}>
                      <td className="legal-key">{k}</td>
                      <td className="legal-val">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>{s.content}</p>
            )}
          </div>
        ))}
      </section>

      <section className="legal-footer container-ref">
        <Link href="/contact" className="btn-ref secondary" style={{ display: 'inline-flex' }}>
          {lang === 'fr' ? 'Présenter une situation →' : 'Present a situation →'}
        </Link>
      </section>
    </main>
  );
}
