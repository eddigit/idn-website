'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Moyen-Orient · Carrefour international",
    h1: "Dubaï / UAE et présence régionale.",
    intro: "Dubaï est devenu un hub d'affaires international établi avec des procédures d'implantation rapides et un environnement entrepreneurial mature. Pour une présence régionale au Moyen-Orient et en Afrique, c'est une base de coordination reconnue.",
    posEyebrow: "Positionnement",
    posTitle: "Un hub international pour la présence régionale MENA.",
    posBody: "Les Émirats Arabes Unis offrent un environnement compétitif pour les structures internationales souhaitant une présence régionale au Moyen-Orient. Les freezones permettent une détention à 100% par des actionnaires étrangers et une création rapide. Le mainland offre l'accès au marché local. Mais les exigences de substance, de conformité et d'ouverture bancaire se sont significativement renforcées depuis 2022.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Société freezone pour activité internationale ou digitale",
      "Présence régionale MENA pour groupe international",
      "Résidence fiscale aux UAE pour dirigeant ou entrepreneur",
      "Coordination d'opérations Afrique ou Asie du Sud depuis Dubaï",
      "Bureau de représentation pour entrée sur le marché émirati",
      "Structure mainland pour accès au marché local",
      "Holding pour investissements régionaux Moyen-Orient",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Freezone Company", "Structure à 100% étranger dans l'une des 40+ freezones. DIFC, ADGM, DMCC, etc. selon le secteur."],
      ["Mainland LLC", "Accès au marché local. Associé émirati non requis depuis 2021 dans la plupart des secteurs."],
      ["Représentation (Branch)", "Succursale d'une société étrangère. Limitée à certaines activités."],
      ["Résidence UAE", "Visa de résidence lié à la création d'une structure ou à un investissement immobilier."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "L'ouverture bancaire aux UAE est devenue difficile. De nombreuses banques refusent des profils sans substance locale démontrable. C'est le principal point de blocage.",
      "La substance est exigée. Une freezone company sans activité réelle est exposée lors d'audits ou de vérifications bancaires.",
      "Les UAE appliquent le CRS (échange automatique d'informations) depuis 2018. La confidentialité fiscale n'est plus un argument.",
      "L'IS à 9% est en vigueur depuis 2023 pour les bénéfices supérieurs à AED 375.000.",
      "Les coûts annuels de fonctionnement (renouvellement licence, espace, visa) sont réels et variables selon la freezone.",
      "La résidence fiscale aux UAE nécessite une présence physique réelle et documentée pour être opposable.",
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
    ctaEyebrow: "Dubaï / UAE",
    ctaTitle: "Votre projet implique une structuration ou présence aux UAE ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Middle East · International Hub",
    h1: "Dubai / UAE and regional presence.",
    intro: "Dubai has become an established international business hub with rapid setup procedures and a mature entrepreneurial environment. For a regional presence in the Middle East and Africa, it is a recognised coordination base.",
    posEyebrow: "Positioning",
    posTitle: "An international hub for MENA regional presence.",
    posBody: "The United Arab Emirates offer a competitive environment for international structures seeking a regional presence in the Middle East. Freezones allow 100% foreign ownership and rapid incorporation. The mainland provides access to the local market. However, substance, compliance and banking onboarding requirements have tightened significantly since 2022.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Freezone company for international or digital activity",
      "MENA regional presence for an international group",
      "UAE tax residency for an executive or entrepreneur",
      "Coordination of Africa or South Asia operations from Dubai",
      "Representative office for entry into the Emirati market",
      "Mainland structure for access to the local market",
      "Holding for Middle East regional investments",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Freezone Company", "100% foreign-owned structure in one of 40+ freezones. DIFC, ADGM, DMCC, etc. depending on sector."],
      ["Mainland LLC", "Access to the local market. Emirati partner no longer required since 2021 in most sectors."],
      ["Branch (Representation)", "Branch of a foreign company. Limited to certain activities."],
      ["UAE Residency", "Residency visa linked to the creation of a structure or a real estate investment."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Banking onboarding in the UAE has become difficult. Many banks refuse profiles without demonstrable local substance. This is the primary sticking point.",
      "Substance is required. A freezone company without genuine activity is exposed during audits or banking reviews.",
      "The UAE has applied CRS (automatic exchange of information) since 2018. Tax confidentiality is no longer a valid argument.",
      "Corporate tax at 9% has been in force since 2023 for profits above AED 375,000.",
      "Annual operating costs (licence renewal, premises, visa) are real and vary by freezone.",
      "UAE tax residency requires genuine and documented physical presence to be enforceable.",
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
    ctaEyebrow: "Dubai / UAE",
    ctaTitle: "Does your project involve a structure or presence in the UAE?",
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
        <img src="/images/juridictions/dubai-uae.png" alt="" />
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
