'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Asie du Sud-Est · Résidence internationale",
    h1: "Bali et résidence internationale.",
    intro: "Bali, dans l'archipel indonésien, est devenu l'une des destinations de résidence internationale les plus actives d'Asie du Sud-Est. Cadre réglementaire spécifique, marché immobilier en leasehold, et dispositifs de résidence qui demandent une préparation rigoureuse.",
    posEyebrow: "Positionnement",
    posTitle: "Une destination de résidence avec ses propres règles.",
    posBody: "Bali n'est pas une juridiction de structuration classique. C'est une destination de résidence internationale qui attire des profils variés : entrepreneurs, indépendants, investisseurs et familles à la recherche d'un cadre de vie combiné à une présence professionnelle active. L'Indonésie a développé des dispositifs spécifiques pour accueillir ces profils : visa de nomade digital, KITAS de résidence, et cadre PT PMA pour les investisseurs étrangers souhaitant exercer une activité. La complexité réglementaire est réelle et la préparation documentaire est une condition d'accès sérieuse. Ce n'est pas une destination que l'on choisit pour la fiscalité. On la choisit pour un mode de vie et une base opérationnelle en Asie.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette destination est pertinente.",
    situs: [
      "Résidence internationale couplée à une activité entrepreneuriale",
      "Base opérationnelle en Asie du Sud-Est pour un indépendant ou une PME",
      "Création d'une PT PMA pour exercer une activité commerciale",
      "Acquisition ou location longue durée d'un bien immobilier",
      "Visa de nomade digital pour séjour de longue durée",
      "Transition géographique depuis l'Europe ou le Moyen-Orient",
      "Développement d'activités orientées vers les marchés ASEAN",
      "Résidence familiale avec infrastructure scolaire internationale",
    ],
    structEyebrow: "Structures et statuts possibles",
    structTitle: "Principaux dispositifs disponibles.",
    structs: [
      ["PT PMA", "Penanaman Modal Asing. Société à investissement étranger. Seule structure permettant aux étrangers d'exercer légalement une activité commerciale en Indonésie."],
      ["KITAS", "Titre de séjour temporaire. Plusieurs types selon le motif : investisseur, salarié, conjoint, retraité. Durée variable selon les catégories."],
      ["E-Visa / Nomad Visa", "Visa de nomade digital permettant un séjour de 6 à 12 mois renouvelable pour les travailleurs à distance avec revenus étrangers."],
      ["Leasehold immobilier", "Les étrangers ne peuvent pas posséder de foncier en pleine propriété. L'accès se fait par bail long terme (Hak Pakai, HGB) ou structures contractuelles encadrées."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "Les étrangers ne peuvent pas détenir de bien immobilier en pleine propriété (freehold). Les structures de contournement via nominee sont légalement risquées.",
      "La PT PMA est obligatoire pour exercer une activité commerciale. La création prend du temps et demande un capital minimum selon l'activité.",
      "Les règles de visa évoluent régulièrement. La situation réglementaire doit être vérifiée au moment du projet, pas à partir d'informations générales.",
      "L'ouverture d'un compte bancaire professionnel nécessite une PT PMA active et une documentation complète.",
      "La réalité administrative locale diffère souvent de la théorie. Un partenaire local expérimenté est une condition d'exécution.",
      "Le contexte fiscal reste celui de l'Indonésie, avec obligations déclaratives, TVA locale et conventions fiscales à vérifier selon la situation personnelle.",
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
    ctaEyebrow: "Bali / Indonésie",
    ctaTitle: "Votre projet implique une résidence ou une implantation à Bali ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Southeast Asia · International residency",
    h1: "Bali and international residency.",
    intro: "Bali, in the Indonesian archipelago, has become one of Southeast Asia's most active international residency destinations. A specific regulatory framework, leasehold real estate market, and residency arrangements that require rigorous preparation.",
    posEyebrow: "Positioning",
    posTitle: "A residency destination with its own rules.",
    posBody: "Bali is not a classic structuring jurisdiction. It is an international residency destination that attracts varied profiles: entrepreneurs, freelancers, investors and families seeking a lifestyle environment combined with an active professional presence. Indonesia has developed specific arrangements to welcome these profiles: digital nomad visa, residency KITAS, and the PT PMA framework for foreign investors wishing to conduct business. The regulatory complexity is real and documentary preparation is a serious access condition. This is not a destination chosen for tax reasons. It is chosen for a lifestyle and an operational base in Asia.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this destination is relevant.",
    situs: [
      "International residency combined with entrepreneurial activity",
      "Operational base in Southeast Asia for a freelancer or SME",
      "Setting up a PT PMA to conduct commercial activity",
      "Acquisition or long-term rental of real estate",
      "Digital nomad visa for extended stay",
      "Geographic transition from Europe or the Middle East",
      "Developing activities oriented towards ASEAN markets",
      "Family residence with international school infrastructure",
    ],
    structEyebrow: "Available structures and statuses",
    structTitle: "Main available arrangements.",
    structs: [
      ["PT PMA", "Penanaman Modal Asing. Foreign investment company. The only structure allowing foreigners to legally conduct commercial activity in Indonesia."],
      ["KITAS", "Temporary residence permit. Several types depending on the purpose: investor, employee, spouse, retiree. Duration varies by category."],
      ["E-Visa / Nomad Visa", "Digital nomad visa allowing a 6 to 12-month renewable stay for remote workers with foreign-source income."],
      ["Leasehold real estate", "Foreigners cannot own freehold land. Access is through long-term leases (Hak Pakai, HGB) or structured contractual arrangements."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Foreigners cannot hold freehold real estate. Nominee workaround structures are legally risky.",
      "A PT PMA is mandatory to conduct commercial activity. Setup takes time and requires a minimum capital depending on the activity.",
      "Visa rules evolve regularly. The regulatory situation must be verified at the time of the project, not based on general information.",
      "Opening a professional bank account requires an active PT PMA and complete documentation.",
      "Local administrative reality often differs from theory. An experienced local partner is a condition of execution.",
      "The tax context remains that of Indonesia, with filing obligations, local VAT and tax treaties to be verified based on the individual situation.",
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
    ctaEyebrow: "Bali / Indonesia",
    ctaTitle: "Does your project involve residency or establishment in Bali?",
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
        <img src="/images/juridictions/bali.png" alt="" />
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
