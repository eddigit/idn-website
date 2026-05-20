'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Marché ibérique",
    h1: "Espagne et marché ibérique.",
    intro: "L'Espagne est un marché profond avec des réalités très différentes selon les régions. Madrid, Barcelone, les côtes méditerranéennes et les îles ont chacune leur logique propre. Une lecture locale précise est nécessaire avant tout engagement.",
    posEyebrow: "Positionnement",
    posTitle: "Un marché profond aux logiques régionales distinctes.",
    posBody: "L'Espagne offre des opportunités réelles en immobilier résidentiel et d'investissement, ainsi qu'un marché entrepreneurial dynamique. Mais la dispersion géographique, les compétences régionales et les particularités administratives locales en font un marché qui demande une connaissance précise des acteurs locaux. Les projets menés sans préparation suffisante s'exposent à des délais et des complications évitables.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Acquisition immobilière résidentielle sur les marchés majeurs",
      "Résidence fiscale avec régime spécial Beckham (Régimen de impatriados)",
      "Implantation d'une société opérationnelle ou filiale",
      "Investissement immobilier locatif ou patrimonial",
      "Implantation régionale dans un marché ibérique ou LATAM",
      "Résidence pour dirigeant ou entrepreneur international",
      "Coordination acquisition pour non-résident européen",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["SL (Sociedad Limitada)", "Structure standard équivalente à la SARL. La plus utilisée."],
      ["SA (Sociedad Anónima)", "Pour projets plus importants ou cotation."],
      ["Sucursal", "Succursale d'une société étrangère, sans personnalité juridique autonome."],
      ["Régime Beckham", "Régime fiscal optionnel pour impatriés. Conditions et durée limitées."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "Le Modelo 720 (déclaration des biens étrangers) est une obligation stricte pour les résidents fiscaux en Espagne. Les pénalités sont importantes.",
      "Les délais notariaux et d'enregistrement peuvent être longs selon les régions.",
      "Le marché immobilier présente des disparités importantes entre les zones.",
      "Le régime Beckham a des conditions d'éligibilité précises et une durée limitée. Il ne s'applique pas à tous les profils.",
      "L'ouverture de compte bancaire pour non-résidents nécessite un NIE et une documentation complète.",
      "Les taxes locales (IBI, plusvalía municipal) doivent être anticipées dans le calcul des coûts.",
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
    ctaEyebrow: "Espagne",
    ctaTitle: "Votre projet implique une acquisition ou résidence en Espagne ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Iberian Market",
    h1: "Spain and the Iberian market.",
    intro: "Spain is a deep market with very different realities depending on the region. Madrid, Barcelona, the Mediterranean coasts and the islands each follow their own logic. A precise local reading is necessary before any commitment.",
    posEyebrow: "Positioning",
    posTitle: "A deep market with distinct regional dynamics.",
    posBody: "Spain offers genuine opportunities in residential and investment real estate, as well as a dynamic entrepreneurial market. However, geographic dispersion, regional competences and local administrative specificities make it a market that demands precise knowledge of local actors. Projects undertaken without sufficient preparation are exposed to avoidable delays and complications.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Residential real estate acquisition in major markets",
      "Tax residency under the Beckham special regime (Régimen de impatriados)",
      "Establishment of an operational company or subsidiary",
      "Rental or patrimonial real estate investment",
      "Regional establishment in an Iberian or LATAM market",
      "Residency for an international executive or entrepreneur",
      "Acquisition coordination for European non-residents",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["SL (Sociedad Limitada)", "Standard structure equivalent to the SARL. The most widely used."],
      ["SA (Sociedad Anónima)", "For larger projects or listed companies."],
      ["Sucursal", "Branch of a foreign company, without independent legal personality."],
      ["Beckham regime", "Optional tax regime for inbound assignees. Limited conditions and duration."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "The Modelo 720 (declaration of foreign assets) is a strict obligation for Spanish tax residents. Penalties are significant.",
      "Notarial and registration timelines can be lengthy depending on the region.",
      "The real estate market shows significant disparities between zones.",
      "The Beckham regime has precise eligibility conditions and a limited duration. It does not apply to all profiles.",
      "Opening a bank account for non-residents requires an NIE and complete documentation.",
      "Local taxes (IBI, plusvalía municipal) must be factored into cost calculations.",
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
    ctaEyebrow: "Spain",
    ctaTitle: "Does your project involve an acquisition or residency in Spain?",
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
        <img src="/images/juridictions/espagne.png" alt="" />
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
