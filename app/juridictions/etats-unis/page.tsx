'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Juridictions",
    region: "Amériques · Premier marché mondial",
    h1: "États-Unis et profondeur de marché.",
    intro: "Les États-Unis constituent le marché le plus profond et le plus diversifié au monde. De la côte Est à la côte Ouest, du Delaware à la Floride, les configurations sont multiples. Pour les dossiers impliquant des structures, des contreparties ou des investisseurs américains, une lecture précise du cadre juridique et fiscal est indispensable.",
    posEyebrow: "Positionnement",
    posTitle: "Un marché de profondeur sans équivalent.",
    posBody: "Les États-Unis offrent une diversité de structures juridiques, une liquidité de marché exceptionnelle et un accès à un réseau d'investisseurs institutionnels et privés sans équivalent. Pour les entrepreneurs et structures internationales qui souhaitent accéder au marché américain, s'y implanter ou coordonner des flux avec des contreparties américaines, le cadre est exigeant mais prévisible. La fiscalité américaine est complexe et extraterritoriale pour les citoyens et résidents. Une lecture précise des implications pour les non-résidents et les structures étrangères est incontournable avant toute décision.",
    situEyebrow: "Situations concernées",
    situTitle: "Situations où cette juridiction est pertinente.",
    situs: [
      "Implantation commerciale aux États-Unis pour une entreprise européenne",
      "Holding Delaware pour structuration d'un groupe international",
      "Investissement immobilier dans les grandes métropoles américaines",
      "Levée de fonds auprès d'investisseurs américains",
      "Joint-venture avec un partenaire américain",
      "Coordination de flux entre une structure européenne et une entité américaine",
      "Structuration patrimoniale impliquant des actifs ou bénéficiaires américains",
      "Développement commercial sur le marché nord-américain",
    ],
    structEyebrow: "Structures possibles",
    structTitle: "Principales structures disponibles.",
    structs: [
      ["Delaware LLC / Corp", "Structures les plus utilisées pour l'entrée sur le marché américain. Flexibilité, protection et reconnaissance internationale."],
      ["C-Corporation", "Structure adaptée pour les levées de fonds, les investisseurs institutionnels et les introductions en bourse."],
      ["LP / LLP", "Limited Partnership ou Limited Liability Partnership pour certaines configurations d'investissement."],
      ["Structures immobilières", "LLC dédiées pour la détention d'actifs immobiliers aux États-Unis, avec une fiscalité spécifique."],
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qu'il faut anticiper sérieusement.",
    vigils: [
      "La fiscalité américaine est extraterritoriale pour les citoyens et résidents américains. Toute structure impliquant un US person demande une analyse FATCA et FBAR.",
      "Les obligations de reporting américaines (Form 5471, 8865, PFIC) s'appliquent aux structures étrangères avec des intérêts américains.",
      "L'immatriculation dans différents États entraîne des obligations locales différentes. Le Delaware n'est pas toujours le bon choix opérationnel.",
      "La réglementation sectorielle (finance, immobilier, technologie) varie selon les États et les activités. Une analyse préalable est indispensable.",
      "Les délais et coûts d'entrée sur le marché américain sont réels. Une préparation rigoureuse réduit les risques de démarrage.",
      "La coordination entre un conseil américain et un conseil européen est indispensable sur les dossiers transfrontaliers.",
    ],
    methEyebrow: "Notre méthode",
    methTitle: "Lecture, coordination, exécution.",
    methSteps: [
      ["Lecture initiale", "Analyse du projet, des objectifs et des implications spécifiques du marché américain."],
      ["Qualification", "Identification des structures adaptées, des États concernés et des intervenants clés."],
      ["Coordination", "Mise en relation avec les avocats, experts fiscaux et partenaires américains compétents."],
      ["Exécution", "Accompagnement dans la constitution des structures et les démarches d'implantation."],
      ["Continuité", "Coordination entre les intervenants européens et américains sur la durée du projet."],
    ],
    ctaEyebrow: "États-Unis",
    ctaTitle: "Votre projet implique une structure ou contrepartie américaine ?",
    ctaBtn: "Présenter une situation →",
    backLink: "← Toutes les juridictions",
  },
  en: {
    eyebrow: "Jurisdictions",
    region: "Americas · World's largest market",
    h1: "United States and market depth.",
    intro: "The United States is the deepest and most diversified market in the world. From the East Coast to the West Coast, from Delaware to Florida, configurations are multiple. For files involving US structures, counterparties or investors, a precise reading of the legal and tax framework is essential.",
    posEyebrow: "Positioning",
    posTitle: "A market of unmatched depth.",
    posBody: "The United States offers a diversity of legal structures, exceptional market liquidity and access to an unparalleled network of institutional and private investors. For international entrepreneurs and structures wishing to access the American market, establish themselves there or coordinate flows with US counterparties, the framework is demanding but predictable. US taxation is complex and extraterritorial for citizens and residents. A precise reading of the implications for non-residents and foreign structures is essential before any decision.",
    situEyebrow: "Relevant situations",
    situTitle: "Situations where this jurisdiction is relevant.",
    situs: [
      "Commercial establishment in the US for a European company",
      "Delaware holding for international group structuring",
      "Real estate investment in major US cities",
      "Fundraising from US investors",
      "Joint venture with a US partner",
      "Coordinating flows between a European structure and a US entity",
      "Patrimonial structuring involving US assets or beneficiaries",
      "Commercial development on the North American market",
    ],
    structEyebrow: "Available structures",
    structTitle: "Main available structures.",
    structs: [
      ["Delaware LLC / Corp", "The most widely used structures for entering the US market. Flexibility, protection and international recognition."],
      ["C-Corporation", "Structure suited for fundraising, institutional investors and stock market listings."],
      ["LP / LLP", "Limited Partnership or Limited Liability Partnership for certain investment configurations."],
      ["Real estate structures", "Dedicated LLCs for holding US real estate assets, with specific tax treatment."],
    ],
    vigilEyebrow: "Points of vigilance",
    vigilTitle: "What must be anticipated seriously.",
    vigils: [
      "US taxation is extraterritorial for US citizens and residents. Any structure involving a US person requires FATCA and FBAR analysis.",
      "US reporting obligations (Form 5471, 8865, PFIC) apply to foreign structures with US interests.",
      "Incorporation in different states entails different local obligations. Delaware is not always the right operational choice.",
      "Sector-specific regulations (finance, real estate, technology) vary by state and activity. Prior analysis is essential.",
      "The timelines and costs of entering the US market are real. Rigorous preparation reduces start-up risks.",
      "Coordination between US and European counsel is essential for cross-border files.",
    ],
    methEyebrow: "Our method",
    methTitle: "Analysis, coordination, execution.",
    methSteps: [
      ["Initial analysis", "Review of the project, objectives and specific implications of the US market."],
      ["Qualification", "Identification of suitable structures, relevant states and key stakeholders."],
      ["Coordination", "Introduction to competent US lawyers, tax specialists and partners."],
      ["Execution", "Support in incorporating structures and establishment procedures."],
      ["Continuity", "Coordination between European and US stakeholders throughout the project."],
    ],
    ctaEyebrow: "United States",
    ctaTitle: "Does your project involve a US structure or counterparty?",
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
        <img src="/images/juridictions/etats-unis.png" alt="" />
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
