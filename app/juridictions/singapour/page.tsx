'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Asie-Pacifique · Référence régionale",
    h1: "Singapour et coordination Asie-Pacifique.",
    intro: "Singapour est la référence régionale pour les projets de structuration et de présence en Asie-Pacifique. Cadre réglementaire rigoureux, procédures efficaces et position centrale dans la région APAC en font un environnement sérieux pour les opérations régionales.",
    posEyebrow: "Positionnement",
    posTitle: "La référence asiatique pour la coordination régionale.",
    posBody: "Singapour allie stabilité institutionnelle, transparence réglementaire et accessibilité aux marchés APAC. Pour les groupes internationaux souhaitant une présence régionale asiatique, c'est un point d'entrée cohérent. La MAS (Monetary Authority of Singapore) est l'un des régulateurs les plus rigoureux d'Asie, ce qui renforce la crédibilité des structures singapouriennes auprès des partenaires et institutions bancaires.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Holding régional pour filiales APAC",
      "Coordination opérationnelle pour groupe multi-pays en Asie",
      "Présence régionale pour entreprise européenne ou américaine",
      "Structure pour gestion de family office Asie",
      "Accès aux marchés ASEAN depuis une base stable",
      "Structuration d'investissements en Asie du Sud-Est",
      "Partenariats ou joint-ventures avec contreparties asiatiques",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Private Limited Company (Pte Ltd)", "Structure standard. Très flexible. Peut être détenue à 100% par des étrangers."],
      ["Variable Capital Company (VCC)", "Structure adaptée aux fonds d'investissement."],
      ["Branch / Representative Office", "Pour présence préliminaire sans structure juridique indépendante."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "L'Employment Pass (EP) est nécessaire pour tout dirigeant étranger basé à Singapour. Les critères ont été relevés.",
      "La substance est vérifiée par ACRA (registre des sociétés). Directeur résident obligatoire.",
      "Les obligations comptables et d'audit sont réelles, même pour les petites structures.",
      "L'ouverture de compte bancaire demande une présence physique et une documentation solide. DBS, OCBC ou UOB ont leurs propres critères.",
      "Singapour applique le CRS. L'échange automatique d'informations est en vigueur.",
      "Les coûts opérationnels (loyer, salaires, EP) sont élevés par rapport à d'autres pays APAC.",
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
    ctaEyebrow: "Singapour",
    ctaTitle: "Votre projet implique une présence ou coordination en Asie-Pacifique ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Asia-Pacific · Regional Reference",
    h1: "Singapore and Asia-Pacific coordination.",
    intro: "Singapore is the regional reference for structuring and presence projects in Asia-Pacific. A rigorous regulatory framework, efficient procedures and a central position in the APAC region make it a serious environment for regional operations.",
    posEyebrow: "Positioning",
    posTitle: "The Asian reference for regional coordination.",
    posBody: "Singapore combines institutional stability, regulatory transparency and accessibility to APAC markets. For international groups seeking an Asian regional presence, it is a coherent entry point. The MAS (Monetary Authority of Singapore) is one of Asia's most rigorous regulators, which strengthens the credibility of Singaporean structures with partners and banking institutions.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Regional holding for APAC subsidiaries",
      "Operational coordination for a multi-country group in Asia",
      "Regional presence for a European or American company",
      "Structure for Asian family office management",
      "Access to ASEAN markets from a stable base",
      "Structuring investments in South-East Asia",
      "Partnerships or joint ventures with Asian counterparties",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Private Limited Company (Pte Ltd)", "Standard structure. Very flexible. Can be 100% foreign-owned."],
      ["Variable Capital Company (VCC)", "Structure suited to investment funds."],
      ["Branch / Representative Office", "For a preliminary presence without an independent legal structure."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "An Employment Pass (EP) is required for any foreign director based in Singapore. Criteria have been raised.",
      "Substance is verified by ACRA (company registry). A resident director is mandatory.",
      "Accounting and audit obligations are real, even for small structures.",
      "Opening a bank account requires physical presence and solid documentation. DBS, OCBC and UOB each have their own criteria.",
      "Singapore applies the CRS. Automatic exchange of information is in force.",
      "Operational costs (rent, salaries, EP) are high compared with other APAC countries.",
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
    ctaEyebrow: "Singapore",
    ctaTitle: "Does your project involve a presence or coordination in Asia-Pacific?",
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
        <img src="/images/juridictions/singapour.png" alt="" />
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
