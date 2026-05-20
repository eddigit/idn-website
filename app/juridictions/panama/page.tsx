'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Amériques · Corridor international",
    h1: "Panama et corridor international.",
    intro: "Panama est un corridor commercial à l'intersection de l'Atlantique et du Pacifique, avec une tradition solide d'accueil des structures internationales. Pour les projets avec une logique opérationnelle clairement établie, c'est un environnement qui mérite une analyse sérieuse.",
    posEyebrow: "Positionnement",
    posTitle: "Un corridor stratégique entre Atlantique et Pacifique.",
    posBody: "Le Panama offre une position géographique unique, un système de change dollar, et une tradition de structuration internationale. Pour les projets commerciaux légitimes avec une activité réelle dans les Amériques ou en transit entre les deux océans, c'est une base opérationnelle cohérente. Cette juridiction est à aborder avec une logique économique clairement documentée, dans un contexte de conformité internationale renforcée.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Société opérationnelle pour commerce international Amériques",
      "Coordination d'opérations entre Amérique latine et marchés mondiaux",
      "Holding pour investissements en Amérique centrale ou du Sud",
      "Activité maritime ou logistique via le Canal",
      "Fondation privée panaméenne pour gouvernance patrimoniale",
      "Présence régionale pour groupe avec activités LATAM",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["SA panaméenne", "Société anonyme. Structure très flexible. Peut être constituée rapidement."],
      ["Fondation privée d'intérêt privé", "Outil de gouvernance patrimoniale non commerciale. Bien reconnu en droit panaméen."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "L'image internationale du Panama a été fragilisée par les Panama Papers (2016). Toute structure doit reposer sur une logique économique solide et documentée.",
      "Le CRS (échange automatique) et FATCA s'appliquent. La transparence est la norme.",
      "L'ouverture bancaire est sélective et peut prendre plusieurs mois.",
      "La substance et la conformité AML sont vérifiées avec rigueur croissante.",
      "Les fournisseurs de services (agentes residentes) sont sous surveillance de la SUPERSEPyME.",
      "Cette juridiction ne convient pas à tous les profils. Une analyse préalable est indispensable.",
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
    ctaEyebrow: "Panama",
    ctaTitle: "Votre projet implique une structuration dans les Amériques ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Americas · International Corridor",
    h1: "Panama and the international corridor.",
    intro: "Panama is a commercial corridor at the intersection of the Atlantic and Pacific, with a solid tradition of hosting international structures. For projects with a clearly established operational rationale, it is an environment that warrants serious analysis.",
    posEyebrow: "Positioning",
    posTitle: "A strategic corridor between the Atlantic and Pacific.",
    posBody: "Panama offers a unique geographic position, a dollar-based exchange system and a tradition of international structuring. For legitimate commercial projects with genuine activity in the Americas or in transit between the two oceans, it is a coherent operational base. This jurisdiction must be approached with a clearly documented economic rationale, within a context of strengthened international compliance.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Operational company for international trade in the Americas",
      "Coordination of operations between Latin America and global markets",
      "Holding for investments in Central or South America",
      "Maritime or logistics activity via the Canal",
      "Panamanian private foundation for patrimonial governance",
      "Regional presence for a group with LATAM activities",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Panamanian SA", "Société anonyme. Very flexible structure. Can be incorporated quickly."],
      ["Private Foundation (Fundación de Interés Privado)", "Non-commercial patrimonial governance tool. Well recognised under Panamanian law."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Panama's international image was damaged by the Panama Papers (2016). Any structure must rest on a solid and documented economic rationale.",
      "CRS (automatic exchange) and FATCA apply. Transparency is the standard.",
      "Banking onboarding is selective and can take several months.",
      "Substance and AML compliance are scrutinised with increasing rigour.",
      "Service providers (agentes residentes) are under the supervision of the SUPERSEPyME.",
      "This jurisdiction does not suit all profiles. A preliminary analysis is essential.",
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
    ctaEyebrow: "Panama",
    ctaTitle: "Does your project involve a structure in the Americas?",
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
        <img src="/images/juridictions/panama.png" alt="" />
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
