'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Présence opérationnelle",
    h1: "France et présence opérationnelle.",
    intro: "La France est le premier marché immobilier d'Europe et l'un des écosystèmes professionnels les plus denses du continent. Pour une acquisition, une implantation ou une coordination locale, c'est un marché qui demande une lecture précise de ses particularités.",
    posEyebrow: "Positionnement",
    posTitle: "Le premier marché immobilier européen.",
    posBody: "La France est à la fois un marché profond et un environnement réglementaire dense. Pour les non-résidents, les acquéreurs internationaux ou les structures étrangères, l'accès à ce marché requiert une coordination soigneuse entre notaire, avocat, conseiller fiscal et banquier. La qualité de la lecture préalable détermine directement la qualité de l'exécution.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Acquisition immobilière résidentielle ou patrimoniale",
      "Création d'une SCI pour détention immobilière",
      "Implantation d'une société opérationnelle",
      "Résidence fiscale pour dirigeant ou entrepreneur",
      "Coordination acquisition pour non-résident",
      "Investissement immobilier locatif structuré",
      "Cession ou transmission de patrimoine immobilier",
      "Ouverture d'un bureau de représentation ou filiale",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["SCI", "Société civile immobilière. Structure classique pour détention et transmission immobilière."],
      ["SAS / SASU", "Société par actions simplifiée. Très flexible pour activité opérationnelle."],
      ["SARL / EURL", "Structure classique PME."],
      ["SA", "Pour les projets de plus grande envergure nécessitant une structure actionnaire ouverte."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "Les droits de mutation à titre onéreux (DMTO) représentent un coût significatif à l'acquisition.",
      "Le financement pour non-résidents est plus complexe et soumis à des critères stricts selon les banques.",
      "La fiscalité des plus-values immobilières pour non-résidents a ses propres règles.",
      "Les délais notariaux sont encadrés mais peuvent s'étirer selon la complexité du dossier.",
      "Une SCI à associés étrangers suppose une déclaration fiscale française annuelle.",
      "La création d'une société opérationnelle nécessite une adresse réelle et un compte bancaire professionnel.",
    ],
    methEyebrow: "Notre méthode",
    methTitle: "Lecture, coordination, exécution.",
    methSteps: [
      ["Lecture initiale", "Analyse du contexte, des objectifs et des contraintes réelles du dossier."],
      ["Qualification", "Identification des intervenants, des structures adaptées et du séquençage."],
      ["Coordination", "Mobilisation des partenaires locaux selon la logique précise du dossier."],
      ["Exécution", "Suivi des étapes contractuelles, administratives et documentaires."],
      ["Continuité", "Présence structurée jusqu'à clôture et au-delà si nécessaire."],
    ],
    ctaEyebrow: "France",
    ctaTitle: "Votre projet implique une acquisition ou implantation en France ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Operational Presence",
    h1: "France and operational presence.",
    intro: "France is Europe's largest real estate market and one of the densest professional ecosystems on the continent. For an acquisition, an establishment or local coordination, it is a market that demands a precise reading of its specificities.",
    posEyebrow: "Positioning",
    posTitle: "Europe's largest real estate market.",
    posBody: "France is both a deep market and a dense regulatory environment. For non-residents, international buyers or foreign structures, accessing this market requires careful coordination between notary, lawyer, tax adviser and banker. The quality of the preliminary analysis directly determines the quality of execution.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Residential or patrimonial real estate acquisition",
      "Formation of an SCI for property holding",
      "Establishment of an operational company",
      "Tax residency for an executive or entrepreneur",
      "Acquisition coordination for non-residents",
      "Structured rental property investment",
      "Disposal or transfer of real estate assets",
      "Opening of a representative office or subsidiary",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["SCI", "Société civile immobilière. Classic structure for property holding and transfer."],
      ["SAS / SASU", "Société par actions simplifiée. Very flexible for operational activity."],
      ["SARL / EURL", "Standard SME structure."],
      ["SA", "For larger projects requiring an open shareholder structure."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Transfer taxes (DMTO) represent a significant cost at acquisition.",
      "Financing for non-residents is more complex and subject to strict criteria depending on the bank.",
      "Capital gains tax on real estate for non-residents follows its own set of rules.",
      "Notarial timelines are regulated but can extend depending on file complexity.",
      "An SCI with foreign shareholders requires an annual French tax declaration.",
      "Setting up an operational company requires a genuine address and a professional bank account.",
    ],
    methEyebrow: "Our method",
    methTitle: "Analysis, coordination, execution.",
    methSteps: [
      ["Initial analysis", "Review of the context, objectives and real constraints of the file."],
      ["Qualification", "Identification of parties, suitable structures and sequencing."],
      ["Coordination", "Mobilisation of local partners according to the precise logic of the file."],
      ["Execution", "Oversight of contractual, administrative and documentary steps."],
      ["Continuity", "Structured presence through to completion and beyond if necessary."],
    ],
    ctaEyebrow: "France",
    ctaTitle: "Does your project involve an acquisition or establishment in France?",
    ctaBtn: "Present a situation →",
    backLink: "← All jurisdictions",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="jur-page-hero container-ref">
        <Link href="/juridictions" className="jur-back">{c.backLink}</Link>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.h1}</h1>
        <p className="jur-page-region">{c.region}</p>
        <p className="jur-page-intro">{c.intro}</p>
      </section>

      <div className="jur-hero-image">
        <img src="/images/juridictions/france.png" alt="" />
      </div>

      <section className="jur-page-pos container-ref">
        <div className="jur-page-section">
          <p className="eyebrow">{c.posEyebrow}</p>
          <h2>{c.posTitle}</h2>
          <p className="jur-page-body">{c.posBody}</p>
        </div>
      </section>

      <section className="jur-page-two-col container-ref">
        <div className="jur-page-section">
          <p className="eyebrow">{c.situEyebrow}</p>
          <h2>{c.situTitle}</h2>
          <ul className="jur-page-list">
            {c.situs.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        <div className="jur-page-section">
          <p className="eyebrow">{c.structEyebrow}</p>
          <h2>{c.structTitle}</h2>
          <div className="jur-struct-list">
            {c.structs.map(([n, d]) => (
              <div className="jur-struct-item" key={n}>
                <strong>{n}</strong>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jur-page-vigil container-ref">
        <div className="jur-page-section">
          <p className="eyebrow">{c.vigilEyebrow}</p>
          <h2>{c.vigilTitle}</h2>
          <ul className="jur-page-list">
            {c.vigils.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        </div>
      </section>

      <section className="jur-page-method container-ref">
        <p className="eyebrow">{c.methEyebrow}</p>
        <h2>{c.methTitle}</h2>
        <div className="jur-method-steps">
          {c.methSteps.map(([t, d]) => (
            <div className="jur-method-step" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container-ref final-inner">
          <div>
            <p className="eyebrow">{c.ctaEyebrow}</p>
            <h2>{c.ctaTitle}</h2>
          </div>
          <div className="final-actions">
            <Link className="btn-ref primary light" href="/contact">{c.ctaBtn}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
