'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Asie · Infrastructure financière",
    h1: "Hong Kong et infrastructure financière asiatique.",
    intro: "Hong Kong reste l'une des infrastructures financières et professionnelles les plus denses d'Asie. Pour les projets impliquant des flux entre l'Europe et la région Asie-Pacifique, son positionnement est pertinent dans des configurations bien définies. L'environnement réglementaire a évolué ces dernières années et demande une lecture précise avant tout engagement.",
    posEyebrow: "Positionnement",
    posTitle: "Une place financière asiatique de profondeur.",
    posBody: "Hong Kong dispose d'un système juridique d'inspiration britannique, d'une infrastructure bancaire mature et d'un accès privilégié au marché chinois continental. Pour les structures de commerce international, les holdings régionaux ou les projets impliquant la Chine, c'est une plateforme qui conserve une pertinence réelle. Depuis 2020, l'environnement réglementaire et politique a évolué. La pertinence de Hong Kong est aujourd'hui évaluée au cas par cas selon les objectifs spécifiques, le profil des intervenants et le contexte de conformité internationale.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Holding régional pour activités Asie-Pacifique",
      "Accès au marché chinois continental via une structure locale",
      "Commerce international avec flux entre Europe et Asie",
      "Joint-venture avec un partenaire basé en Chine ou Asie",
      "Structure de distribution pour produits ou services exportés vers l'Asie",
      "Coordination financière régionale pour un groupe international",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Private Limited Company", "Structure opérationnelle standard, constitution rapide, gouvernance souple."],
      ["Branch office", "Bureau de représentation d'une société étrangère, adapté à certaines configurations commerciales."],
      ["Representative office", "Présence sans activité commerciale directe, pour coordination et prospection."],
      ["Trust structures", "Fiducies d'inspiration britannique pour certains projets patrimoniaux ou successoraux."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "L'environnement réglementaire a évolué depuis 2020. Une analyse actualisée de la pertinence est indispensable avant toute décision.",
      "La conformité internationale (FATCA, CRS, substance) s'applique pleinement. Les structures sans activité réelle sont fragilisées.",
      "L'ouverture de comptes bancaires est devenue plus exigeante. Délais et documentation renforcés.",
      "La relation avec la Chine continentale offre des opportunités mais implique une lecture spécifique des risques réglementaires.",
      "Les coûts opérationnels (loyers, salaires, compliance) à Hong Kong sont parmi les plus élevés d'Asie.",
      "Une structure Hong Kong doit reposer sur une logique économique réelle et documentée.",
    ],
    methEyebrow: "Notre méthode",
    methTitle: "Lecture, coordination, exécution.",
    methSteps: [
      ["Lecture initiale", "Analyse du contexte, des objectifs et de la pertinence réelle de Hong Kong pour le dossier."],
      ["Qualification", "Identification des structures adaptées, des partenaires locaux et du séquençage."],
      ["Coordination", "Mobilisation des avocats, fiduciaires et banquiers locaux selon la logique du dossier."],
      ["Exécution", "Accompagnement dans la constitution, l'ouverture bancaire et les démarches administratives."],
      ["Continuité", "Suivi opérationnel et accompagnement dans les obligations de conformité récurrentes."],
    ],
    ctaEyebrow: "Hong Kong",
    ctaTitle: "Votre projet implique une structure à Hong Kong ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Asia · Financial infrastructure",
    h1: "Hong Kong and Asian financial infrastructure.",
    intro: "Hong Kong remains one of Asia's densest financial and professional infrastructures. For projects involving flows between Europe and the Asia-Pacific region, its positioning is relevant in well-defined configurations. The regulatory environment has evolved in recent years and requires a precise reading before any commitment.",
    posEyebrow: "Positioning",
    posTitle: "A deep Asian financial centre.",
    posBody: "Hong Kong has a British-inspired legal system, a mature banking infrastructure and privileged access to the mainland Chinese market. For international trade structures, regional holdings or projects involving China, it remains a genuinely relevant platform. Since 2020, the regulatory and political environment has evolved. The relevance of Hong Kong is now assessed case by case according to specific objectives, the profile of the parties involved and the international compliance context.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Regional holding for Asia-Pacific activities",
      "Access to the mainland Chinese market via a local structure",
      "International trade with flows between Europe and Asia",
      "Joint venture with a partner based in China or Asia",
      "Distribution structure for products or services exported to Asia",
      "Regional financial coordination for an international group",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Private Limited Company", "Standard operational structure, rapid incorporation, flexible governance."],
      ["Branch office", "Representative office of a foreign company, suited to certain commercial configurations."],
      ["Representative office", "Presence without direct commercial activity, for coordination and prospecting."],
      ["Trust structures", "British-inspired trusts for certain patrimonial or succession projects."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "The regulatory environment has evolved since 2020. An up-to-date analysis of relevance is essential before any decision.",
      "International compliance (FATCA, CRS, substance) applies in full. Structures without real activity are vulnerable.",
      "Opening bank accounts has become more demanding. Extended timelines and enhanced documentation required.",
      "The relationship with mainland China offers opportunities but requires a specific reading of regulatory risks.",
      "Operational costs (rent, salaries, compliance) in Hong Kong are among the highest in Asia.",
      "A Hong Kong structure must rest on a genuine and documented economic rationale.",
    ],
    methEyebrow: "Our method",
    methTitle: "Analysis, coordination, execution.",
    methSteps: [
      ["Initial analysis", "Review of the context, objectives and genuine relevance of Hong Kong for the file."],
      ["Qualification", "Identification of suitable structures, local partners and sequencing."],
      ["Coordination", "Mobilisation of local lawyers, fiduciaries and bankers according to the file logic."],
      ["Execution", "Support in incorporation, bank account opening and administrative procedures."],
      ["Continuity", "Operational follow-up and support with recurring compliance obligations."],
    ],
    ctaEyebrow: "Hong Kong",
    ctaTitle: "Does your project involve a structure in Hong Kong?",
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
        <img src="/images/juridictions/hong-kong.png" alt="" />
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
