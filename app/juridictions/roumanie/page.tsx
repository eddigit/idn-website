'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe orientale · Implantation entrepreneuriale",
    h1: "Roumanie et implantation entrepreneuriale.",
    intro: "État membre de l'Union européenne, la Roumanie offre des conditions d'implantation compétitives pour les structures opérationnelles et entrepreneuriales bien définies. Un marché en développement réel, des coûts maîtrisés et un accès direct au marché européen.",
    posEyebrow: "Positionnement",
    posTitle: "Un marché européen à logique compétitive.",
    posBody: "La Roumanie est un État membre de l'Union européenne depuis 2007. Elle offre un cadre juridique d'inspiration romano-germanique, des coûts d'exploitation significativement inférieurs à l'Europe occidentale, et un tissu entrepreneurial en développement rapide, notamment à Bucarest et Cluj-Napoca. Sa pertinence pour les projets internationaux repose sur une logique claire : implantation opérationnelle réelle, accès au marché européen à des conditions compétitives, ou structuration d'activités dont la base naturelle se trouve en Europe de l'Est. Ce n'est pas une juridiction de pure optimisation. C'est un marché avec sa propre dynamique.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Implantation d'une société opérationnelle en Europe de l'Est",
      "Structure de services ou de production à coûts maîtrisés",
      "Holding intermédiaire avec accès au marché UE",
      "Développement commercial sur les marchés roumain et balkaniques",
      "Recrutement et gestion d'équipes en Europe orientale",
      "Acquisition immobilière à titre personnel ou professionnel",
      "Structuration d'activités digitales ou technologiques",
      "Résidence fiscale couplée à une présence entrepreneuriale réelle",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["SRL", "Societate cu Răspundere Limitată. Équivalent de la SARL. Structure la plus courante pour les PME et les implantations opérationnelles."],
      ["SA", "Societate pe Acțiuni. Équivalent de la SA. Adaptée aux structures plus importantes ou aux projets impliquant plusieurs actionnaires."],
      ["Sucursală", "Succursale d'une société étrangère. Permet une présence opérationnelle sans création d'une entité juridique distincte."],
      ["SRL-D", "SRL pour jeunes entrepreneurs. Conditions allégées pour les fondateurs de moins de 35 ans avec un premier projet entrepreneurial."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La substance est une condition réelle. Une société sans activité effective ni direction locale sera fragilisée.",
      "L'administration fiscale roumaine applique des contrôles de plus en plus structurés sur les prix de transfert et les montages intra-groupe.",
      "L'ouverture bancaire nécessite une documentation solide et un interlocuteur local fiable.",
      "La barrière linguistique est réelle. La plupart des démarches administratives se font en roumain.",
      "Les délais d'enregistrement et les procédures administratives peuvent varier selon les juridictions locales et les intervenants.",
      "Les coûts de comptabilité, d'audit et de conformité sont réels même si inférieurs à l'Europe occidentale.",
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
    ctaEyebrow: "Roumanie",
    ctaTitle: "Votre projet implique une implantation en Roumanie ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Eastern Europe · Entrepreneurial establishment",
    h1: "Romania and entrepreneurial establishment.",
    intro: "A European Union member state, Romania offers competitive establishment conditions for well-defined operational and entrepreneurial structures. A genuinely developing market, controlled costs and direct access to the European market.",
    posEyebrow: "Positioning",
    posTitle: "A European market with competitive logic.",
    posBody: "Romania has been a European Union member state since 2007. It offers a Romano-Germanic inspired legal framework, operating costs significantly lower than Western Europe, and a rapidly developing entrepreneurial fabric, particularly in Bucharest and Cluj-Napoca. Its relevance for international projects rests on clear logic: genuine operational establishment, access to the European market at competitive conditions, or structuring of activities whose natural base lies in Eastern Europe. This is not a pure optimisation jurisdiction. It is a market with its own dynamics.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Establishing an operational company in Eastern Europe",
      "Service or production structure with controlled costs",
      "Intermediate holding with EU market access",
      "Commercial development in the Romanian and Balkan markets",
      "Recruitment and management of teams in Eastern Europe",
      "Real estate acquisition for personal or professional purposes",
      "Structuring of digital or technology activities",
      "Tax residency combined with a genuine entrepreneurial presence",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["SRL", "Societate cu Răspundere Limitată. Equivalent of a limited liability company. The most common structure for SMEs and operational establishments."],
      ["SA", "Societate pe Acțiuni. Equivalent of a joint-stock company. Suited to larger structures or projects involving multiple shareholders."],
      ["Sucursală", "Branch of a foreign company. Enables operational presence without creating a separate legal entity."],
      ["SRL-D", "SRL for young entrepreneurs. Reduced conditions for founders under 35 with a first entrepreneurial project."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Substance is a genuine condition. A company without effective activity or local management will be challenged.",
      "The Romanian tax authority applies increasingly structured controls on transfer pricing and intra-group arrangements.",
      "Opening a bank account requires solid documentation and a reliable local contact.",
      "The language barrier is real. Most administrative procedures are conducted in Romanian.",
      "Registration timelines and administrative procedures may vary depending on local jurisdictions and the parties involved.",
      "Accounting, audit and compliance costs are real even if lower than in Western Europe.",
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
    ctaEyebrow: "Romania",
    ctaTitle: "Does your project involve an establishment in Romania?",
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
        <img src="/images/juridictions/roumanie.png" alt="" />
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
