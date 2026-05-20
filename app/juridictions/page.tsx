'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const jur = {
  fr: [
    { country: "Luxembourg", slug: "luxembourg", region: "Europe · Structuration européenne", desc: "Place financière européenne de premier rang. Cadre réglementaire rigoureux, écosystème professionnel mature et position centrale au sein de l'Union européenne." },
    { country: "Suisse", slug: "suisse", region: "Europe · Stabilité patrimoniale", desc: "Stabilité juridique et institutionnelle sans équivalent en Europe. Reconnu mondialement pour la solidité de son cadre contractuel et la qualité de ses professionnels." },
    { country: "France", slug: "france", region: "Europe · Présence opérationnelle", desc: "Premier marché immobilier d'Europe. Écosystème professionnel dense, intervenants qualifiés sur l'ensemble du territoire et expertise particulière sur les dossiers non-résidents." },
    { country: "Portugal", slug: "portugal", region: "Europe · Résidence et mobilité", desc: "Destination de résidence internationale établie. Marché immobilier actif, cadre européen stable et conditions de résidence qui continuent d'attirer des profils internationaux variés." },
    { country: "Espagne", slug: "espagne", region: "Europe · Marché ibérique", desc: "Marché profond aux logiques régionales distinctes. Opportunités réelles en immobilier, structuration entrepreneuriale et implantation régionale sur les axes Madrid, Barcelone et les côtes méditerranéennes." },
    { country: "Italie", slug: "italie", region: "Europe · Patrimoine immobilier", desc: "Patrimoine immobilier unique en Europe. Marchés de Toscane, Milan, Rome et Florence. Procédures qui demandent une coordination locale expérimentée et une préparation rigoureuse." },
    { country: "Monaco", slug: "monaco", region: "Europe · Environnement privé", desc: "Environnement européen privé de premier rang pour les projets de résidence. Règles d'accès spécifiques qui demandent une préparation rigoureuse et des partenaires expérimentés sur la Principauté." },
    { country: "Royaume-Uni", slug: "royaume-uni", region: "Europe · Profondeur juridique", desc: "Droit des affaires parmi les plus sophistiqués au monde. Post-Brexit, les règles ont évolué. Écosystème de services professionnels de premier rang à Londres." },
    { country: "Bulgarie", slug: "bulgarie", region: "Europe orientale · Structuration", desc: "État membre de l'Union européenne avec des conditions d'implantation compétitives pour les configurations bien définies. Pertinent uniquement lorsque la logique opérationnelle est clairement établie." },
    { country: "Roumanie", slug: "roumanie", region: "Europe orientale · Implantation entrepreneuriale", desc: "État membre de l'Union européenne avec des coûts d'exploitation compétitifs et un tissu entrepreneurial en développement. Bucarest et Cluj-Napoca constituent les principales bases d'implantation opérationnelle." },
    { country: "Dubaï / UAE", slug: "dubai-uae", region: "Moyen-Orient · Carrefour international", desc: "Hub d'affaires international avec procédures d'implantation structurées et environnement entrepreneurial mature. Présence régionale MENA et coordination Afrique depuis une base établie." },
    { country: "Île Maurice", slug: "ile-maurice", region: "Océan Indien · Coordination régionale", desc: "Environnement international structuré entre l'Afrique et l'Asie. Cadre juridique d'inspiration britannique reconnu. Pertinent pour les projets à dimension africaine ou intercontinentale." },
    { country: "Bali / Indonésie", slug: "bali", region: "Asie du Sud-Est · Résidence internationale", desc: "Destination de résidence internationale active en Asie du Sud-Est. PT PMA pour l'activité commerciale, leasehold pour l'immobilier, dispositifs de résidence spécifiques. Un cadre avec ses propres règles." },
    { country: "Singapour", slug: "singapour", region: "Asie-Pacifique · Référence régionale", desc: "Référence asiatique pour les projets de structuration régionale. Cadre réglementaire rigoureux, procédures efficaces et accès aux marchés d'Asie-Pacifique." },
    { country: "Hong Kong", slug: "hong-kong", region: "Asie · Infrastructure financière", desc: "Infrastructure financière et professionnelle parmi les plus denses d'Asie. Pertinence évaluée au cas par cas selon les objectifs spécifiques et le contexte réglementaire actuel." },
    { country: "Panama", slug: "panama", region: "Amériques · Corridor international", desc: "Corridor commercial à l'intersection de l'Atlantique et du Pacifique. Tradition solide d'accueil des structures internationales avec une logique opérationnelle clairement établie." },
    { country: "États-Unis", slug: "etats-unis", region: "Amériques · Premier marché mondial", desc: "Marché le plus profond et le plus diversifié du monde. Du Delaware à New York, Miami ou Los Angeles. Expertise sur les dossiers impliquant des structures ou contreparties américaines." },
  ],
  en: [
    { country: "Luxembourg", slug: "luxembourg", region: "Europe · European structuring", desc: "One of Europe's most structured financial centres. Rigorous regulatory framework, mature professional ecosystem and central position within the European Union." },
    { country: "Switzerland", slug: "suisse", region: "Europe · Patrimonial stability", desc: "Unparalleled legal and institutional stability in Europe. Recognised worldwide for the solidity of its contractual framework and the quality of its professionals." },
    { country: "France", slug: "france", region: "Europe · Operational presence", desc: "Europe's largest real estate market. Dense professional ecosystem, qualified stakeholders across the entire territory and particular expertise on non-resident files." },
    { country: "Portugal", slug: "portugal", region: "Europe · Residency and mobility", desc: "An established international residency destination. Active real estate market, stable European framework and residency conditions that continue to attract varied international profiles." },
    { country: "Spain", slug: "espagne", region: "Europe · Iberian market", desc: "A deep market with distinct regional dynamics. Real opportunities in real estate, entrepreneurial structuring and regional establishment across Madrid, Barcelona and the Mediterranean coasts." },
    { country: "Italy", slug: "italie", region: "Europe · Patrimonial real estate", desc: "A unique real estate heritage in Europe. Markets of Tuscany, Milan, Rome and Florence. Procedures that require experienced local coordination and rigorous preparation." },
    { country: "Monaco", slug: "monaco", region: "Europe · Private environment", desc: "The leading European private environment for top-tier residency projects. Specific access rules that require rigorous preparation and experienced partners on the Principality." },
    { country: "United Kingdom", slug: "royaume-uni", region: "Europe · Legal depth", desc: "One of the world's most sophisticated systems of commercial law. Post-Brexit rules have evolved. First-class professional services ecosystem in London." },
    { country: "Bulgaria", slug: "bulgarie", region: "Eastern Europe · Structuring", desc: "A European Union member state with competitive establishment conditions for well-defined project configurations. Relevant only when the operational logic is clearly established." },
    { country: "Romania", slug: "roumanie", region: "Eastern Europe · Entrepreneurial establishment", desc: "A European Union member state with competitive operating costs and a developing entrepreneurial fabric. Bucharest and Cluj-Napoca are the main operational establishment hubs." },
    { country: "Dubai / UAE", slug: "dubai-uae", region: "Middle East · International crossroads", desc: "An international business hub with structured establishment procedures and a mature entrepreneurial environment. Regional MENA presence and Africa coordination from an established base." },
    { country: "Mauritius", slug: "ile-maurice", region: "Indian Ocean · Regional coordination", desc: "A structured international environment between Africa and Asia. Recognised British-inspired legal framework. Relevant for projects with an African or intercontinental dimension." },
    { country: "Bali / Indonesia", slug: "bali", region: "Southeast Asia · International residency", desc: "An active international residency destination in Southeast Asia. PT PMA for commercial activity, leasehold for real estate, specific residency arrangements. A framework with its own rules." },
    { country: "Singapore", slug: "singapour", region: "Asia-Pacific · Regional reference", desc: "Asia's reference for regional structuring projects. Rigorous regulatory framework, efficient procedures and access to Asia-Pacific markets." },
    { country: "Hong Kong", slug: "hong-kong", region: "Asia · Financial infrastructure", desc: "One of Asia's densest financial and professional infrastructures. Relevance assessed case by case according to specific objectives and the current regulatory context." },
    { country: "Panama", slug: "panama", region: "Americas · International corridor", desc: "A commercial corridor at the junction of the Atlantic and the Pacific. Solid tradition of welcoming international structures with a clearly established operational logic." },
    { country: "United States", slug: "etats-unis", region: "Americas · World's largest market", desc: "The world's deepest and most diversified market. From Delaware to New York, Miami or Los Angeles. Expertise on files involving US structures or counterparties." },
  ],
};

const text = {
  fr: {
    eyebrow: "Juridictions",
    h1: "Des environnements choisis pour leur solidité, leur lisibilité et leur pertinence internationale.",
    sub: "Chaque juridiction a ses propres logiques, ses délais et ses acteurs. Nous n'intervenons que sur les géographies que nous connaissons et uniquement lorsque la logique du dossier le justifie.",
    statement: "Un pays n'est pas un produit. C'est un environnement d'exécution, avec ses contraintes, ses rythmes et ses acteurs. Notre rôle est d'en faire une lecture honnête avant tout engagement.",
    readMore: "Voir la page →",
    ctaEyebrow: "Juridictions",
    ctaTitle: "Votre projet implique une juridiction spécifique ?",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "Jurisdictions",
    h1: "Selected environments for their solidity, clarity and international relevance.",
    sub: "Each jurisdiction has its own logics, timelines and actors. We only intervene in geographies we know, and only when the logic of the file justifies it.",
    statement: "A country is not a product. It is an execution environment, with its own constraints, rhythms and actors. Our role is to read it honestly before any commitment.",
    readMore: "View page →",
    ctaEyebrow: "Jurisdictions",
    ctaTitle: "Your project involves a specific jurisdiction?",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = text[lang];
  const jurisdictions = jur[lang];

  return (
    <main>
      <section className="jur-header container-ref">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.h1}</h1>
        <div className="about-manifesto-line" />
        <p className="jur-header-sub">{c.sub}</p>
      </section>

      <section className="jur-grid container-ref">
        {jurisdictions.map(({ country, slug, region, desc }) => (
          slug ? (
            <Link href={`/juridictions/${slug}`} className="jur-item jur-item-link" key={country}>
              <div className="jur-item-head">
                <div className="jur-item-title-row">
                  <h2>{country}</h2>
                  <span className="jur-item-arrow">→</span>
                </div>
                <p className="jur-region">{region}</p>
              </div>
              <p className="jur-desc">{desc}</p>
              <span className="jur-read-more">{c.readMore}</span>
            </Link>
          ) : (
            <div className="jur-item" key={country}>
              <div className="jur-item-head">
                <h2>{country}</h2>
                <p className="jur-region">{region}</p>
              </div>
              <p className="jur-desc">{desc}</p>
            </div>
          )
        ))}
      </section>

      <section className="jur-statement container-ref">
        <p>&ldquo;{c.statement}&rdquo;</p>
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
