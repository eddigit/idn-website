'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Europe · Environnement privé",
    h1: "Monaco et environnement privé de résidence.",
    intro: "Monaco offre un cadre de résidence parmi les plus protégés d'Europe. Pour les profils internationaux qui souhaitent établir leur résidence principale dans un environnement stable, discret et juridiquement solide, la Principauté demande une préparation rigoureuse et des partenaires expérimentés.",
    posEyebrow: "Positionnement",
    posTitle: "Un cadre de résidence d'exception.",
    posBody: "Monaco n'est pas une juridiction de structuration de sociétés. C'est avant tout un environnement de résidence de premier rang, avec un régime fiscal adapté aux personnes physiques, une sécurité institutionnelle reconnue et une qualité de vie sans équivalent en Europe. L'accès à la résidence est encadré : conditions de ressources, logement, casier judiciaire, entretien avec les autorités. Le processus est sélectif et demande une préparation sérieuse. Les dossiers mal préparés sont refusés ou repoussés.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Résidence principale pour dirigeant ou entrepreneur international",
      "Transfert de résidence fiscale depuis un autre pays européen",
      "Résidence secondaire avec intention de transfert du domicile principal",
      "Retraite internationale dans un environnement privé et sécurisé",
      "Résidence de confort avec accès aux marchés européens",
      "Dossier familial impliquant plusieurs membres du foyer",
    ],
    structEyebrow: "Cadres disponibles",
    structTitle: "Principales situations d'accès.",
    structs: [
      ["Résidence ordinaire", "Statut principal pour les ressortissants étrangers. Conditions de logement, ressources et moralité vérifiées."],
      ["Carte de résident", "Titre de séjour renouvelable, avec plusieurs catégories selon la durée de résidence."],
      ["Résidence longue durée", "Après dix ans de résidence continue, conditions allégées et statut renforcé."],
      ["Sociétés monégasques", "SAM, SCS ou SARL pour une activité opérationnelle locale, soumises à conditions d'autorisation."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La résidence effective est exigée. Monaco vérifie la présence réelle sur le territoire. Une résidence de façade sera refusée ou retirée.",
      "Le logement doit être signé ou réservé avant le dépôt du dossier. L'offre immobilière est limitée et les prix élevés.",
      "Les ressources justifiées doivent être suffisantes pour assurer l'autonomie financière sans activité sur le territoire.",
      "Le casier judiciaire international est contrôlé. Tout antécédent peut bloquer le dossier.",
      "L'entretien avec les autorités monégasques est une étape sérieuse qui demande une préparation documentaire complète.",
      "Les délais de traitement varient. Compter plusieurs mois entre le dépôt du dossier et l'obtention du titre.",
    ],
    methEyebrow: "Notre méthode",
    methTitle: "Lecture, coordination, exécution.",
    methSteps: [
      ["Lecture initiale", "Analyse du profil, des ressources, de la situation familiale et des contraintes spécifiques."],
      ["Qualification", "Évaluation de la faisabilité, identification des intervenants et des étapes clés."],
      ["Coordination", "Mobilisation des partenaires locaux : agents immobiliers, avocats, fiduciaires monégasques."],
      ["Exécution", "Accompagnement dans la constitution du dossier et la préparation de l'entretien."],
      ["Continuité", "Suivi après obtention du titre et accompagnement dans les renouvellements."],
    ],
    ctaEyebrow: "Monaco",
    ctaTitle: "Votre projet implique une résidence à Monaco ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Europe · Private environment",
    h1: "Monaco and private residency.",
    intro: "Monaco offers one of the most protected residency frameworks in Europe. For international profiles wishing to establish their primary residence in a stable, discreet and legally sound environment, the Principality requires rigorous preparation and experienced partners.",
    posEyebrow: "Positioning",
    posTitle: "An exceptional residency framework.",
    posBody: "Monaco is not a corporate structuring jurisdiction. It is primarily a leading residency environment, with a tax regime suited to individuals, recognised institutional security and an unmatched quality of life in Europe. Access to residency is regulated: financial means, housing, criminal record, interview with the authorities. The process is selective and demands serious preparation. Poorly prepared files are rejected or delayed.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Primary residence for an international executive or entrepreneur",
      "Tax residency transfer from another European country",
      "Secondary residence with intention to transfer primary domicile",
      "International retirement in a private and secure environment",
      "Comfort residency with access to European markets",
      "Family file involving several household members",
    ],
    structEyebrow: "Available frameworks",
    structTitle: "Main access situations.",
    structs: [
      ["Ordinary residency", "Principal status for foreign nationals. Housing, financial means and good character conditions verified."],
      ["Resident card", "Renewable residency permit, with several categories depending on the length of residence."],
      ["Long-term residency", "After ten years of continuous residence, reduced conditions and enhanced status."],
      ["Monegasque companies", "SAM, SCS or SARL for local operational activity, subject to authorisation conditions."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "Effective residency is required. Monaco verifies genuine presence on its territory. A nominal residency will be refused or revoked.",
      "Housing must be signed or reserved before the file is submitted. The property market is limited and prices are high.",
      "Justified financial means must be sufficient to ensure financial autonomy without activity on the territory.",
      "The international criminal record is checked. Any prior record can block the file.",
      "The interview with the Monegasque authorities is a serious step requiring thorough documentary preparation.",
      "Processing times vary. Allow several months between file submission and obtaining the permit.",
    ],
    methEyebrow: "Our method",
    methTitle: "Analysis, coordination, execution.",
    methSteps: [
      ["Initial analysis", "Review of the profile, financial means, family situation and specific constraints."],
      ["Qualification", "Feasibility assessment, identification of stakeholders and key steps."],
      ["Coordination", "Mobilisation of local partners: estate agents, lawyers, Monegasque fiduciaries."],
      ["Execution", "Support in preparing the file and the interview."],
      ["Continuity", "Follow-up after obtaining the permit and support with renewals."],
    ],
    ctaEyebrow: "Monaco",
    ctaTitle: "Does your project involve residency in Monaco?",
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
        <img src="/images/juridictions/monaco.png" alt="" />
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
