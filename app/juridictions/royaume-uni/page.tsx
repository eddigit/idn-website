'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Profondeur juridique",
    h1: "Royaume-Uni et profondeur juridique.",
    intro: "Le Royaume-Uni dispose de l'un des systèmes de droit des affaires les plus sophistiqués au monde. Post-Brexit, les règles d'accès et de reporting ont évolué. C'est un environnement qui exige une expertise locale précise et actualisée.",
    posEyebrow: "Positionnement",
    posTitle: "Un droit des affaires parmi les plus sophistiqués au monde.",
    posBody: "Le droit anglais est une référence internationale pour les contrats, les trusts, les structures de financement et la résolution des différends. La Common Law offre une souplesse contractuelle rare et un écosystème professionnel exceptionnel à Londres. Post-Brexit, l'accès au marché européen s'est complexifié pour les structures britanniques, mais le Royaume-Uni reste une juridiction de référence pour les opérations cross-border complexes.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Création d'une Ltd pour activité opérationnelle internationale",
      "Structure LLP pour projets de services professionnels",
      "Trust de droit anglais pour gouvernance patrimoniale internationale",
      "Acquisition immobilière à Londres ou dans les grandes villes",
      "Structuration d'un contrat ou d'un accord en droit anglais",
      "Financement ou co-investissement avec contreparties britanniques",
      "Holding pour activités en dehors de l'UE",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Limited Company (Ltd)", "Structure standard. Création rapide. La plus utilisée pour activité opérationnelle."],
      ["LLP", "Limited Liability Partnership. Adapté aux structures de services professionnels."],
      ["PLC", "Public Limited Company. Pour sociétés cotées ou à grande capitalisation."],
      ["Trust (droit anglais)", "Outil de gouvernance patrimoniale reconnu internationalement."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "Post-Brexit, les structures britanniques n'ont plus automatiquement accès au marché unique européen. Une implantation UE séparée peut s'avérer nécessaire.",
      "HMRC et Companies House ont renforcé leurs obligations de reporting et de transparence.",
      "La substance est vérifiée de façon croissante. Une Ltd sans dirigeants locaux et sans activité réelle est exposée.",
      "L'ouverture d'un compte bancaire au Royaume-Uni pour non-résidents peut prendre plusieurs mois.",
      "Les trusts sont soumis au Beneficial Ownership Register depuis 2022.",
      "Les règles de résidence fiscale britannique sont complexes et doivent être analysées au cas par cas (Statutory Residence Test).",
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
    ctaEyebrow: "Royaume-Uni",
    ctaTitle: "Votre projet implique une structure ou acquisition au Royaume-Uni ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Legal Depth",
    h1: "United Kingdom and legal depth.",
    intro: "The United Kingdom has one of the most sophisticated commercial legal systems in the world. Post-Brexit, access and reporting rules have evolved. It is an environment that demands precise and up-to-date local expertise.",
    posEyebrow: "Positioning",
    posTitle: "One of the most sophisticated commercial legal systems in the world.",
    posBody: "English law is an international reference for contracts, trusts, financing structures and dispute resolution. The Common Law offers rare contractual flexibility and an exceptional professional ecosystem in London. Post-Brexit, access to the European market has become more complex for British structures, but the United Kingdom remains a reference jurisdiction for complex cross-border transactions.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Formation of a Ltd for international operational activity",
      "LLP structure for professional services projects",
      "English law trust for international patrimonial governance",
      "Real estate acquisition in London or major cities",
      "Structuring a contract or agreement under English law",
      "Financing or co-investment with British counterparties",
      "Holding structure for activities outside the EU",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Limited Company (Ltd)", "Standard structure. Quick to set up. The most widely used for operational activity."],
      ["LLP", "Limited Liability Partnership. Suited to professional services structures."],
      ["PLC", "Public Limited Company. For listed companies or large capitalisation."],
      ["Trust (English law)", "Internationally recognised tool for patrimonial governance."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Post-Brexit, British structures no longer automatically have access to the European single market. A separate EU establishment may be necessary.",
      "HMRC and Companies House have strengthened their reporting and transparency obligations.",
      "Substance is increasingly scrutinised. A Ltd without local directors and without genuine activity is exposed.",
      "Opening a UK bank account as a non-resident can take several months.",
      "Trusts have been subject to the Beneficial Ownership Register since 2022.",
      "British tax residency rules are complex and must be analysed on a case-by-case basis (Statutory Residence Test).",
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
    ctaEyebrow: "United Kingdom",
    ctaTitle: "Does your project involve a structure or acquisition in the United Kingdom?",
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
        <img src="/images/juridictions/royaume-uni.png" alt="" />
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
