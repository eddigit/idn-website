'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Stabilité patrimoniale",
    h1: "Suisse et stabilité patrimoniale.",
    intro: "La Suisse offre une stabilité juridique et institutionnelle sans équivalent en Europe. Pour les projets de résidence, de gouvernance patrimoniale ou de coordination internationale, c'est un environnement d'une rigueur reconnue à l'international.",
    posEyebrow: "Positionnement",
    posTitle: "Une stabilité institutionnelle sans équivalent.",
    posBody: "La Suisse n'est pas simplement une juridiction fiscale avantageuse. C'est un système juridique, bancaire et institutionnel d'une cohérence rare. Sa neutralité politique, la qualité de ses professionnels et la solidité de son cadre contractuel en font un environnement adapté aux projets patrimoniaux de long terme. Les familles, entrepreneurs et structures internationales qui s'y implantent le font pour la durabilité, pas pour l'optimisation rapide.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Résidence pour entrepreneur ou dirigeant international",
      "Holding patrimonial familial de long terme",
      "Fondation de famille pour gouvernance structurée",
      "Coordination d'un patrimoine dispersé entre plusieurs pays",
      "Restructuration familiale avant transmission",
      "Bureau de coordination internationale pour groupe multi-pays",
      "Implantation d'une direction générale ou siège opérationnel",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["SA suisse", "Société anonyme. Structure solide pour holding ou opérationnel."],
      ["Sàrl / GmbH", "Structure simplifiée pour activité opérationnelle."],
      ["Fondation de famille", "Gouvernance patrimoniale sur plusieurs générations."],
      ["Trust (droit étranger)", "Reconnu mais non créé en droit suisse. Nécessite une coordination internationale."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La résidence fiscale suisse suppose un déménagement effectif et une présence physique réelle.",
      "L'échange automatique d'informations (AEOI/OCDE) s'applique pleinement. La discrétion n'est pas une solution de non-conformité.",
      "Les coûts de résidence et de fonctionnement sont élevés.",
      "Les banques suisses ont durci leurs critères d'entrée en relation. Une documentation solide est indispensable.",
      "La substance est vérifiée. Une domiciliation sans contenu sera contestée.",
      "Les délais administratifs cantonaux varient sensiblement selon les projets.",
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
    ctaEyebrow: "Suisse",
    ctaTitle: "Votre projet implique une résidence ou structuration suisse ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Patrimonial Stability",
    h1: "Switzerland and patrimonial stability.",
    intro: "Switzerland offers legal and institutional stability unmatched in Europe. For residency projects, wealth governance or international coordination, it is an environment of internationally recognised rigour.",
    posEyebrow: "Positioning",
    posTitle: "Institutional stability without equal.",
    posBody: "Switzerland is not simply an advantageous tax jurisdiction. It is a legal, banking and institutional system of rare coherence. Its political neutrality, the quality of its professionals and the solidity of its contractual framework make it a suitable environment for long-term patrimonial projects. The families, entrepreneurs and international structures that establish themselves there do so for durability, not for rapid gains.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Residency for an international entrepreneur or executive",
      "Long-term family patrimonial holding",
      "Family foundation for structured governance",
      "Coordination of wealth spread across multiple countries",
      "Family restructuring ahead of succession",
      "International coordination office for a multi-country group",
      "Establishment of a general management or operational headquarters",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Swiss SA", "Société anonyme. Solid structure for holding or operational use."],
      ["Sàrl / GmbH", "Simplified structure for operational activity."],
      ["Family foundation", "Patrimonial governance across multiple generations."],
      ["Trust (foreign law)", "Recognised but not created under Swiss law. Requires international coordination."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Swiss tax residency requires an effective relocation and genuine physical presence.",
      "The automatic exchange of information (AEOI/OECD) applies in full. Discretion is not a compliance substitute.",
      "Residency and operational costs are high.",
      "Swiss banks have tightened their onboarding criteria. Solid documentation is essential.",
      "Substance is scrutinised. A domiciliation without genuine content will be challenged.",
      "Cantonal administrative timelines vary considerably depending on the project.",
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
    ctaEyebrow: "Switzerland",
    ctaTitle: "Does your project involve Swiss residency or structuring?",
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
        <img src="/images/juridictions/suisse.png" alt="" />
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
