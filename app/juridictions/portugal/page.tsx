'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Résidence et mobilité",
    h1: "Portugal et mobilité internationale.",
    intro: "Le Portugal est devenu une destination de résidence internationale établie. Le marché immobilier reste actif et les conditions de résidence européenne continuent d'attirer des profils internationaux variés. Ce marché demande une lecture précise de ses évolutions récentes.",
    posEyebrow: "Positionnement",
    posTitle: "Une destination de résidence européenne mature.",
    posBody: "Le Portugal a considérablement évolué ces dernières années. Le régime des résidents non habituels (RNH), modifié en 2024, a changé les paramètres pour de nombreux profils. L'immobilier résidentiel reste actif dans les grandes villes et dans certaines régions côtières. Pour y acquérir un bien ou établir une résidence, une lecture actualisée du cadre réglementaire est indispensable avant toute décision.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Résidence pour entrepreneur ou professionnel à mobilité internationale",
      "Acquisition immobilière résidentielle ou patrimoniale",
      "Résidence NHR (régime modifié 2024) pour profils éligibles",
      "Retraite internationale dans un cadre européen stable",
      "Implantation d'une société opérationnelle dans l'UE",
      "Coordination acquisition pour non-résident",
      "Structuration d'un investissement immobilier locatif",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Lda (SARL portugaise)", "Structure standard pour société opérationnelle ou holding."],
      ["SA portugaise", "Pour les projets de plus grande envergure."],
      ["Résidence NHR", "Régime fiscal spécifique pour résidents non habituels. Conditions révisées depuis 2024."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "Le régime NHR a été modifié en 2024. Les conditions d'éligibilité et avantages ne sont plus les mêmes qu'avant. Une vérification actualisée est indispensable.",
      "Le marché immobilier a fortement progressé dans les grandes villes. Les délais et prix sont à recalibrer.",
      "Les délais notariaux et administratifs peuvent surprendre les acquéreurs habituels d'autres marchés européens.",
      "L'ouverture de compte bancaire pour non-résidents nécessite une documentation complète.",
      "La documentation fiscale préalable (NIF, NIE) doit être anticipée avant toute signature.",
      "Les charges de copropriété et taxes locales varient sensiblement selon les zones.",
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
    ctaEyebrow: "Portugal",
    ctaTitle: "Votre projet implique une résidence ou acquisition au Portugal ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Residency and Mobility",
    h1: "Portugal and international mobility.",
    intro: "Portugal has become an established international residency destination. The real estate market remains active and European residency conditions continue to attract a range of international profiles. This market requires a precise reading of its recent developments.",
    posEyebrow: "Positioning",
    posTitle: "A mature European residency destination.",
    posBody: "Portugal has evolved considerably in recent years. The non-habitual resident (NHR) scheme, amended in 2024, has changed the parameters for many profiles. Residential real estate remains active in major cities and certain coastal regions. Acquiring a property or establishing residency there requires an up-to-date reading of the regulatory framework before any decision is made.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Residency for an entrepreneur or internationally mobile professional",
      "Residential or patrimonial real estate acquisition",
      "NHR residency (amended 2024 scheme) for eligible profiles",
      "International retirement in a stable European framework",
      "Establishment of an operational company within the EU",
      "Acquisition coordination for non-residents",
      "Structuring a rental property investment",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Lda (Portuguese SARL)", "Standard structure for an operational company or holding."],
      ["Portuguese SA", "For larger-scale projects."],
      ["NHR residency", "Specific tax regime for non-habitual residents. Conditions revised since 2024."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "The NHR scheme was amended in 2024. Eligibility conditions and benefits are no longer the same as before. An updated review is essential.",
      "The real estate market has risen sharply in major cities. Timelines and prices need to be recalibrated.",
      "Notarial and administrative timelines can surprise buyers accustomed to other European markets.",
      "Opening a bank account as a non-resident requires complete documentation.",
      "Prior tax documentation (NIF, NIE) must be arranged before any signing.",
      "Co-ownership charges and local taxes vary considerably by area.",
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
    ctaEyebrow: "Portugal",
    ctaTitle: "Does your project involve residency or an acquisition in Portugal?",
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
        <img src="/images/juridictions/portugal.png" alt="" />
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
