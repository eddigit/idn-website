'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Patrimoine immobilier",
    h1: "Italie et patrimoine immobilier.",
    intro: "L'Italie possède un patrimoine immobilier unique en Europe. Des centres historiques aux campagnes toscanes, des lacs du nord aux côtes du sud. Pour les acquéreurs sérieux, c'est un marché qui demande une préparation rigoureuse et une coordination locale expérimentée.",
    posEyebrow: "Positionnement",
    posTitle: "Un patrimoine immobilier sans équivalent en Europe.",
    posBody: "L'Italie attire des acquéreurs internationaux pour la qualité de son patrimoine bâti, ses paysages et son art de vivre. Mais le marché immobilier italien est complexe. Cadastre, conformité urbanistique, état des titres et délais notariaux nécessitent une expertise locale réelle. Les dossiers mal préparés s'enlisent. Les dossiers bien préparés avancent avec méthode.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Acquisition résidentielle patrimoniale dans les zones recherchées",
      "Résidence fiscale avec régime forfaitaire 100.000 euros annuels pour revenus étrangers",
      "Acquisition et rénovation d'un bien dans un borgo ou centre historique",
      "Investissement immobilier locatif saisonnier structuré",
      "Implantation d'une société opérationnelle ou filiale",
      "Résidence pour entrepreneur ou dirigeant international",
      "Acquisition agricole ou viticole en zone rurale",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Srl (Soc. a responsabilità limitata)", "Équivalent de la SARL. Structure standard pour opérationnel ou holding."],
      ["SpA (Soc. per azioni)", "Pour projets plus importants."],
      ["Régime forfaitaire résidents", "Impôt forfaitaire de 100.000 euros sur revenus étrangers pour nouveaux résidents éligibles. Conditions précises."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La conformité urbanistique des biens anciens est souvent incomplète. Un expert technique local est indispensable avant toute signature.",
      "Les délais notariaux sont réels et peuvent s'étaler entre 2 et 6 mois selon les dossiers.",
      "L'état cadastral doit être vérifié méticuleusement. Des écarts entre réalité et cadastre sont fréquents.",
      "Le financement pour non-résidents est complexe et peu développé. L'acquisition au comptant reste la voie principale.",
      "Le régime forfaitaire résidents est sous surveillance accrue. Les conditions d'éligibilité doivent être vérifiées récemment.",
      "Les frais de notaire et taxes d'acquisition varient significativement selon le statut du vendeur et la nature du bien.",
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
    ctaEyebrow: "Italie",
    ctaTitle: "Votre projet immobilier en Italie mérite une lecture préalable ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Real Estate Heritage",
    h1: "Italy and real estate heritage.",
    intro: "Italy holds a real estate heritage unmatched in Europe. From historic centres to the Tuscan countryside, from the northern lakes to the southern coasts. For serious buyers, it is a market that demands rigorous preparation and experienced local coordination.",
    posEyebrow: "Positioning",
    posTitle: "A real estate heritage without equal in Europe.",
    posBody: "Italy attracts international buyers for the quality of its built heritage, landscapes and way of life. But the Italian real estate market is complex. Cadastre, urban planning compliance, title status and notarial timelines all require genuine local expertise. Poorly prepared files stall. Well-prepared files advance methodically.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Patrimonial residential acquisition in sought-after areas",
      "Tax residency under the flat-rate 100,000 euro annual regime on foreign income",
      "Acquisition and renovation of a property in a borgo or historic centre",
      "Structured seasonal rental property investment",
      "Establishment of an operational company or subsidiary",
      "Residency for an international entrepreneur or executive",
      "Agricultural or viticultural acquisition in rural areas",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Srl (Soc. a responsabilità limitata)", "Equivalent of the SARL. Standard structure for operational use or holding."],
      ["SpA (Soc. per azioni)", "For larger-scale projects."],
      ["Flat-rate resident regime", "Flat-rate tax of 100,000 euros on foreign income for eligible new residents. Precise conditions apply."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Urban planning compliance on older properties is often incomplete. A local technical expert is essential before any signing.",
      "Notarial timelines are real and can extend between 2 and 6 months depending on the file.",
      "Cadastral records must be scrutinised meticulously. Discrepancies between reality and the cadastre are common.",
      "Financing for non-residents is complex and underdeveloped. Cash purchase remains the primary route.",
      "The flat-rate resident regime is under increased scrutiny. Eligibility conditions should be verified against current rules.",
      "Notarial fees and acquisition taxes vary significantly depending on the seller's status and the nature of the property.",
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
    ctaEyebrow: "Italy",
    ctaTitle: "Does your real estate project in Italy warrant a preliminary review?",
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
        <img src="/images/juridictions/italie.png" alt="" />
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
