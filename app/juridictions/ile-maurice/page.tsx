'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Océan Indien · Coordination régionale",
    h1: "Île Maurice et coordination régionale.",
    intro: "L'Île Maurice est un environnement structuré positionné entre l'Afrique et l'Asie, avec un cadre juridique d'inspiration britannique reconnu. Pour les projets à dimension africaine ou intercontinentale, c'est une base de coordination pertinente.",
    posEyebrow: "Positionnement",
    posTitle: "Un environnement de coordination pour les projets africains et intercontinentaux.",
    posBody: "L'Île Maurice offre un cadre juridique stable, des conventions fiscales avec de nombreux pays africains et un écosystème de services financiers internationaux établi. Pour les investisseurs ou groupes souhaitant structurer des opérations en Afrique subsaharienne ou en Océan Indien, c'est une juridiction qui mérite une analyse sérieuse. Elle ne convient pas à tous les profils, mais pour les configurations bien définies, elle apporte une valeur réelle.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Holding pour investissements en Afrique subsaharienne",
      "Structure de coordination régionale pour groupe international",
      "GBC (Global Business Company) pour activité internationale",
      "Accès aux conventions fiscales avec pays africains ciblés",
      "Structuration d'un family office à dimension africaine",
      "Présence régionale entre Afrique, Moyen-Orient et Asie",
      "Fonds d'investissement régionaux",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["GBC (Global Business Company)", "Structure principale pour activité internationale. Réglementée par la FSC."],
      ["Domestic Company", "Pour activité locale ou présence opérationnelle sur le marché mauricien."],
      ["Trust mauricien", "Pour gouvernance patrimoniale internationale. Reconnu et réglementé."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "Les exigences de substance (BEPS) ont été renforcées. La FSC contrôle activement l'activité réelle des GBC.",
      "Le réseau de conventions fiscales avec l'Inde a été modifié en 2016. Les avantages historiques ne s'appliquent plus de la même façon.",
      "L'ouverture bancaire nécessite une documentation complète et une démonstration du modèle d'affaires.",
      "Les coûts de conformité et de secrétariat corporate sont récurrents et non négligeables.",
      "L'image de la juridiction dans certains dossiers africains peut nécessiter une justification de la logique économique.",
      "La coordination avec les avocats et partenaires locaux africains est souvent le point critique d'exécution.",
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
    ctaEyebrow: "Île Maurice",
    ctaTitle: "Votre projet implique une coordination africaine ou intercontinentale ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Indian Ocean · Regional Coordination",
    h1: "Mauritius and regional coordination.",
    intro: "Mauritius is a structured environment positioned between Africa and Asia, with a recognised British-inspired legal framework. For projects with an African or intercontinental dimension, it is a relevant coordination base.",
    posEyebrow: "Positioning",
    posTitle: "A coordination environment for African and intercontinental projects.",
    posBody: "Mauritius offers a stable legal framework, tax treaties with many African countries and an established international financial services ecosystem. For investors or groups seeking to structure operations in sub-Saharan Africa or the Indian Ocean region, it is a jurisdiction that warrants serious analysis. It does not suit all profiles, but for well-defined configurations, it provides genuine value.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Holding for investments in sub-Saharan Africa",
      "Regional coordination structure for an international group",
      "GBC (Global Business Company) for international activity",
      "Access to tax treaties with targeted African countries",
      "Structuring a family office with an African dimension",
      "Regional presence between Africa, the Middle East and Asia",
      "Regional investment funds",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["GBC (Global Business Company)", "Main structure for international activity. Regulated by the FSC."],
      ["Domestic Company", "For local activity or operational presence on the Mauritian market."],
      ["Mauritian Trust", "For international patrimonial governance. Recognised and regulated."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Substance requirements (BEPS) have been strengthened. The FSC actively monitors the genuine activity of GBCs.",
      "The tax treaty network with India was revised in 2016. Historical benefits no longer apply in the same way.",
      "Banking onboarding requires complete documentation and a demonstration of the business model.",
      "Compliance and corporate secretarial costs are recurring and not negligible.",
      "The jurisdiction's profile in certain African files may require justification of the economic rationale.",
      "Coordination with African local lawyers and partners is often the critical execution point.",
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
    ctaEyebrow: "Mauritius",
    ctaTitle: "Does your project involve African or intercontinental coordination?",
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
        <img src="/images/juridictions/ile-maurice.png" alt="" />
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
