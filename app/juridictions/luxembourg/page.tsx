'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Structuration européenne",
    h1: "Luxembourg et structuration européenne.",
    intro: "Le Luxembourg est l'une des places les mieux structurées d'Europe pour les projets de coordination internationale. Un cadre réglementaire rigoureux, une substance exigée, et un écosystème professionnel mature.",
    posEyebrow: "Positionnement",
    posTitle: "Une place financière européenne de premier rang.",
    posBody: "Le Luxembourg offre un cadre juridique stable et prévisible, reconnu à l'échelle internationale. Il est particulièrement adapté aux structures de détention, aux holdings internationaux et aux coordinations multi-pays au sein de l'Union européenne. Sa position centrale dans l'UE, ses conventions fiscales étendues et la qualité de son écosystème professionnel en font un environnement sérieux pour des projets qui demandent rigueur et substance. Ce n'est pas une juridiction que l'on choisit pour la facilité. On la choisit pour la solidité.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Holding européen avec filiales multi-pays",
      "SOPARFI pour détention de participations",
      "SPF pour la gestion patrimoniale familiale",
      "Structuration d'un groupe avant expansion internationale",
      "Coordination de flux intra-groupe en UE",
      "Implantation opérationnelle à accès au marché européen",
      "Gouvernance centralisée d'une structure multi-entités",
      "Préparation d'une cession ou transmission patrimoniale",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["SOPARFI", "Société de participations financières. Structure la plus utilisée pour la détention de participations."],
      ["SPF", "Société de gestion de patrimoine familial. Réservée aux personnes physiques et structures patrimoniales."],
      ["SA / Sàrl", "Structures opérationnelles classiques pour une implantation réelle au Luxembourg."],
      ["Fonds structurés", "SIF, RAIF, SICAR selon le profil de l'investissement et le cercle d'investisseurs."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La substance est une exigence réelle, pas formelle. Dirigeants locaux, infrastructure et activité effective sont vérifiés.",
      "Les obligations de reporting international (CbCR, DAC6, FATCA/CRS) impliquent une conformité structurée.",
      "L'ouverture bancaire demande du temps et une documentation solide.",
      "Les coûts de fonctionnement (fiduciaire, domiciliation, comptabilité, audit) sont réels et récurrents.",
      "Une structure luxembourgeoise sans logique économique claire sera fragilisée lors d'un contrôle ou d'une transmission.",
      "Les délais de mise en place peuvent varier selon la complexité et les intervenants.",
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
    ctaEyebrow: "Luxembourg",
    ctaTitle: "Votre projet implique une structuration luxembourgeoise ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · European Structuring",
    h1: "Luxembourg and European structuring.",
    intro: "Luxembourg is one of Europe's best-structured jurisdictions for international coordination projects. A rigorous regulatory framework, genuine substance requirements, and a mature professional ecosystem.",
    posEyebrow: "Positioning",
    posTitle: "A leading European financial centre.",
    posBody: "Luxembourg offers a stable and predictable legal framework, recognised internationally. It is particularly suited to holding structures, international holdings and multi-country coordination within the European Union. Its central position in the EU, its extensive tax treaty network and the quality of its professional ecosystem make it a serious environment for projects that demand rigour and substance. This is not a jurisdiction chosen for convenience. It is chosen for solidity.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "European holding with multi-country subsidiaries",
      "SOPARFI for shareholding structures",
      "SPF for family wealth management",
      "Group structuring ahead of international expansion",
      "Intra-group flow coordination within the EU",
      "Operational establishment with access to the European market",
      "Centralised governance of a multi-entity structure",
      "Preparation for a disposal or estate transfer",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["SOPARFI", "Société de participations financières. The most widely used structure for holding participations."],
      ["SPF", "Family wealth management company. Reserved for individuals and patrimonial structures."],
      ["SA / Sàrl", "Standard operational structures for a genuine establishment in Luxembourg."],
      ["Structured funds", "SIF, RAIF, SICAR depending on the investment profile and investor base."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Substance is a genuine requirement, not a formality. Local directors, infrastructure and effective activity are scrutinised.",
      "International reporting obligations (CbCR, DAC6, FATCA/CRS) require structured compliance.",
      "Opening a bank account takes time and demands solid documentation.",
      "Operational costs (fiduciary, domiciliation, accounting, audit) are real and recurring.",
      "A Luxembourg structure without clear economic rationale will be challenged during a review or transfer.",
      "Setup timelines can vary depending on complexity and the parties involved.",
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
    ctaEyebrow: "Luxembourg",
    ctaTitle: "Does your project involve a Luxembourg structure?",
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
        <img src="/images/juridictions/luxembourg.png" alt="" />
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
