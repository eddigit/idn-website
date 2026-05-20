'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe orientale · Structuration",
    h1: "Bulgarie et structuration en Europe de l'Est.",
    intro: "La Bulgarie est un État membre de l'Union européenne offrant des conditions d'implantation compétitives pour certaines configurations bien définies. Nous y intervenons de façon sélective, sur des dossiers dont la logique est clairement établie.",
    posEyebrow: "Positionnement",
    posTitle: "Un État UE avec des conditions compétitives pour les configurations ciblées.",
    posBody: "La Bulgarie est l'un des États membres de l'UE les moins coûteux en termes de pression fiscale directe, avec un taux d'IS de 10% et un cadre UE complet. Pour certaines structures opérationnelles, commerciales ou de services, c'est une option sérieuse à évaluer. Elle ne convient pas à tous les projets, mais pour les configurations bien définies avec substance réelle, elle mérite une analyse.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Société opérationnelle pour services en Europe de l'Est",
      "Implantation pour activité digitale ou e-commerce en UE",
      "Structure de services intra-groupe dans un groupe multi-pays",
      "Présence UE pour groupe basé hors de l'Union",
      "Centre de services ou back-office en Europe centrale",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["EOOD", "Société à responsabilité limitée à associé unique. Équivalent de la SASU/EURL française."],
      ["OOD", "Société à responsabilité limitée à associés multiples. Équivalent de la SARL."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La substance est une exigence réelle. Une structure sans activité locale démontrable sera exposée lors de contrôles.",
      "La gestion à distance demande une coordination locale solide avec un partenaire de confiance.",
      "L'ouverture de compte bancaire peut être complexe selon le profil et l'activité déclarée.",
      "Le cadre de conformité UE s'applique intégralement. Les avantages fiscaux ne dispensent pas des obligations de reporting.",
      "La qualité des intervenants locaux (comptables, avocats) est très variable. La sélection du partenaire est critique.",
      "Cette juridiction est pertinente uniquement si la logique opérationnelle est clairement établie et documentée.",
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
    ctaEyebrow: "Bulgarie",
    ctaTitle: "Votre projet implique une implantation en Europe orientale ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Eastern Europe · Structuring",
    h1: "Bulgaria and structuring in Eastern Europe.",
    intro: "Bulgaria is a European Union member state offering competitive establishment conditions for certain well-defined configurations. The firm intervenes there selectively, on files whose rationale is clearly established.",
    posEyebrow: "Positioning",
    posTitle: "An EU member state with competitive conditions for targeted configurations.",
    posBody: "Bulgaria is one of the least costly EU member states in terms of direct tax burden, with a corporate tax rate of 10% and a complete EU framework. For certain operational, commercial or service structures, it is a serious option to evaluate. It does not suit all projects, but for well-defined configurations with genuine substance, it warrants analysis.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Operational company for services in Eastern Europe",
      "Establishment for digital activity or e-commerce within the EU",
      "Intra-group service structure within a multi-country group",
      "EU presence for a group based outside the Union",
      "Service centre or back-office in Central Europe",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["EOOD", "Single-shareholder limited liability company. Equivalent of the French SASU/EURL."],
      ["OOD", "Multi-shareholder limited liability company. Equivalent of the French SARL."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Substance is a genuine requirement. A structure without demonstrable local activity will be exposed during reviews.",
      "Remote management requires solid local coordination with a trusted partner.",
      "Opening a bank account can be complex depending on the profile and declared activity.",
      "The EU compliance framework applies in full. Tax advantages do not exempt from reporting obligations.",
      "The quality of local professionals (accountants, lawyers) is highly variable. Partner selection is critical.",
      "This jurisdiction is relevant only when the operational rationale is clearly established and documented.",
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
    ctaEyebrow: "Bulgaria",
    ctaTitle: "Does your project involve an establishment in Eastern Europe?",
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
        <img src="/images/juridictions/bulgarie.png" alt="" />
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
