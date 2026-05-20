'use client';
import Image from 'next/image';
import Link from 'next/link';
import ConfidentialAccess from '@/components/ConfidentialAccess';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    h1: "Structuration d'activités, implantation internationale et immobilier privé.",
    sub: "Nous intervenons auprès de dirigeants, investisseurs et structures internationales dans des situations qui exigent lecture, architecture et exécution.",
    cta1: "Présenter une situation →",
    cta2: "Organiser un échange",
    micro: "Luxembourg  ·  Europe  ·  International",
    pillars: [
      ["◇", "Qualification du dossier", "Identifier les paramètres déterminants avant toute recommandation."],
      ["○", "Lecture de situation", "Distinguer les priorités, qualifier les contraintes, séquencer les décisions."],
      ["□", "Cadre confidentiel", "Des échanges documentés, sobres et maîtrisés à chaque étape."],
      ["◌", "Continuité opérationnelle", "Une présence structurée jusqu'aux étapes décisives, pas seulement au démarrage."],
    ],
    editorial: "Un cabinet de conseil pour les situations qui exigent méthode, substance et continuité.",
    services: [
      ["01", "Structuration Internationale", "Cross-border structuring", "Architecturer une présence cohérente entre juridictions, entités et calendrier d'exécution.", "/international", "card-international-v6.png"],
      ["02", "Immobilier Privé & Acquisition", "Private real estate", "Lire le bien, les parties prenantes et les étapes sensibles avant tout engagement.", "/immobilier", "card-immobilier-v6.png"],
      ["03", "Pilotage Stratégique", "Strategic governance", "Structurer les décisions, les responsabilités et le séquençage pour les projets complexes.", "/entreprises", "card-entreprises-v6.png"],
    ],
    situEyebrow: "Situations traitées",
    situTitle: "Des situations concrètes, pas des catégories.",
    situs: [
      "Implantation d'une filiale dans un nouveau pays",
      "Holding international avant expansion",
      "Acquisition immobilière pour non-résident",
      "Résidence internationale pour dirigeant",
      "Gouvernance d'un groupe multi-pays",
      "Pilotage banque, notaire, avocat, fiduciaire",
      "Structuration patrimoniale cross-border",
      "Développement international d'une PME",
    ],
    jurEyebrow: "Présence géographique",
    jurTitle: "Des juridictions choisies pour leur cohérence avec chaque dossier.",
    jurisdictions: [
      { name: "Luxembourg", tag: "Structuration européenne", slug: "luxembourg" },
      { name: "Suisse", tag: "Stabilité patrimoniale", slug: "suisse" },
      { name: "France", tag: "Présence opérationnelle", slug: "france" },
      { name: "Portugal", tag: "Résidence et mobilité", slug: "portugal" },
      { name: "Espagne", tag: "Marché ibérique", slug: "espagne" },
      { name: "Italie", tag: "Immobilier patrimonial", slug: "italie" },
      { name: "Royaume-Uni", tag: "Profondeur juridique", slug: "royaume-uni" },
      { name: "Dubaï / UAE", tag: "Carrefour international", slug: "dubai-uae" },
      { name: "Singapour", tag: "Référence Asie-Pacifique", slug: "singapour" },
      { name: "Île Maurice", tag: "Coordination régionale", slug: "ile-maurice" },
    ],
    jurLink: "Toutes les juridictions →",
    methodEyebrow: "Méthode",
    methodTitle: "Lecture, qualification, architecture.",
    methodNote: "Décisions à prendre, spécialistes à engager, documents à réunir, séquence à respecter.",
    steps: [
      ["01", "Lecture initiale", "Clarifier le contexte, les priorités et les points de fragilité."],
      ["02", "Qualification", "Évaluer la maturité du dossier, ses contraintes réelles et son séquençage logique."],
      ["03", "Architecture", "Poser un cadre d'exécution lisible, documenté et réaliste."],
      ["04", "Pilotage", "Engager les spécialistes compétents et maintenir la cohérence d'ensemble."],
      ["05", "Exécution", "Accompagner les étapes contractuelles, administratives et opérationnelles."],
      ["06", "Continuité", "Maintenir la présence jusqu'à clôture ou étape suivante."],
    ],
    ctaEyebrow: "Premier échange",
    ctaTitle: "Certaines situations exigent une lecture préalable avant toute décision.",
    ctaBtn: "Présenter une situation →",
    readMore: "Lire la suite →",
  },
  en: {
    h1: "Business structuring, international establishment and private real estate.",
    sub: "We work with executives, investors and international structures on situations that require reading, architecture and execution.",
    cta1: "Present a situation →",
    cta2: "Organise a conversation",
    micro: "Luxembourg  ·  Europe  ·  International",
    pillars: [
      ["◇", "File qualification", "Identifying the determining parameters before any recommendation."],
      ["○", "Situational reading", "Distinguishing priorities, qualifying constraints, sequencing decisions."],
      ["□", "Confidential framework", "Documented, measured and controlled exchanges at every stage."],
      ["◌", "Operational continuity", "Structured presence through every decisive milestone, not only at launch."],
    ],
    editorial: "An advisory firm for situations that demand method, substance and continuity.",
    services: [
      ["01", "International Structuring", "Cross-border structuring", "Architecting a coherent presence across jurisdictions, entities and execution timelines.", "/international", "card-international-v6.png"],
      ["02", "Private Real Estate & Acquisition", "Private real estate", "Reading the property, the counterparties and the sensitive milestones before any commitment.", "/immobilier", "card-immobilier-v6.png"],
      ["03", "Strategic Advisory", "Strategic governance", "Structuring decisions, responsibilities and sequencing for complex projects.", "/entreprises", "card-entreprises-v6.png"],
    ],
    situEyebrow: "Situations handled",
    situTitle: "Concrete situations, not abstract categories.",
    situs: [
      "Establishing a subsidiary in a new country",
      "International holding ahead of expansion",
      "Real estate acquisition for non-resident",
      "International residency for an executive",
      "Governance of a multi-country group",
      "Piloting bank, notary, lawyer, fiduciary",
      "Cross-border patrimonial structuring",
      "International development for an SME",
    ],
    jurEyebrow: "Geographic presence",
    jurTitle: "Jurisdictions selected for their coherence with each file.",
    jurisdictions: [
      { name: "Luxembourg", tag: "European structuring", slug: "luxembourg" },
      { name: "Switzerland", tag: "Patrimonial stability", slug: "suisse" },
      { name: "France", tag: "Operational presence", slug: "france" },
      { name: "Portugal", tag: "Residency and mobility", slug: "portugal" },
      { name: "Spain", tag: "Iberian market", slug: "espagne" },
      { name: "Italy", tag: "Patrimonial real estate", slug: "italie" },
      { name: "United Kingdom", tag: "Legal depth", slug: "royaume-uni" },
      { name: "Dubai / UAE", tag: "International crossroads", slug: "dubai-uae" },
      { name: "Singapore", tag: "Asia-Pacific reference", slug: "singapour" },
      { name: "Mauritius", tag: "Regional coordination", slug: "ile-maurice" },
    ],
    jurLink: "All jurisdictions →",
    methodEyebrow: "Method",
    methodTitle: "Reading, qualification, architecture.",
    methodNote: "Decisions to make, specialists to engage, documents to gather, sequences to respect.",
    steps: [
      ["01", "Initial reading", "Clarify context, priorities and points of vulnerability."],
      ["02", "Qualification", "Assess file maturity, real constraints and logical sequencing."],
      ["03", "Architecture", "Establish a clear, documented and realistic execution framework."],
      ["04", "Governance", "Engage the right specialists and maintain overall coherence."],
      ["05", "Execution", "Support contractual, administrative and operational milestones."],
      ["06", "Continuity", "Maintain presence through to closing or the next milestone."],
    ],
    ctaEyebrow: "First conversation",
    ctaTitle: "Certain situations require a prior reading before any decision.",
    ctaBtn: "Present a situation →",
    readMore: "Read more →",
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="hero-ref hero-v6">
        <div className="container-ref hero-grid-v6">
          <div className="hero-image-v6" aria-hidden="true">
            <Image src="/images/hero-institutional-v6.png" alt="Cabinet IDN Global Advisory" fill priority />
          </div>
          <div className="hero-copy-v6">
            <h1>{c.h1}</h1>
            <div className="gold-line" />
            <p>{c.sub}</p>
            <div className="hero-actions">
              <Link className="btn-ref primary" href="/contact">{c.cta1}</Link>
              <Link className="btn-ref secondary" href="/international">{c.cta2}</Link>
            </div>
            <p className="micro">{c.micro}</p>
          </div>
          <ConfidentialAccess />
        </div>
      </section>

      <section className="pillars container-ref">
        {c.pillars.map(([i, t, d]) => (
          <div className="pillar" key={t}>
            <div className="pillar-icon">{i}</div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </section>

      <section className="editorial-silence container-ref">
        <p>{c.editorial}</p>
      </section>

      <section className="services container-ref services-v6">
        {c.services.map(([n, title, k, d, h, img]) => (
          <Link href={h} key={title} className="service-card service-card-v6">
            <div className="service-image service-image-v6">
              <Image src={`/images/${img}`} alt="" fill />
            </div>
            <span className="service-number">{n}</span>
            <div className="service-body">
              <h2>{title}</h2>
              <p className="kicker">{k}</p>
              <p className="desc">{d}</p>
              <span className="read-more">{c.readMore}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="home-situ container-ref">
        <p className="eyebrow">{c.situEyebrow}</p>
        <h2>{c.situTitle}</h2>
        <ul className="home-situ-list">
          {c.situs.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section className="home-jur container-ref">
        <div className="home-jur-head">
          <div>
            <p className="eyebrow">{c.jurEyebrow}</p>
            <h2>{c.jurTitle}</h2>
          </div>
          <Link href="/juridictions" className="btn-ref secondary">{c.jurLink}</Link>
        </div>
        <div className="home-jur-grid">
          {c.jurisdictions.map(({ name, tag, slug }) => (
            <Link href={`/juridictions/${slug}`} className="home-jur-card" key={slug}>
              <strong>{name}</strong>
              <span>{tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach container-ref">
        <div className="approach-head">
          <div>
            <p className="eyebrow">{c.methodEyebrow}</p>
            <h2>{c.methodTitle}</h2>
          </div>
          <p className="approach-note">{c.methodNote}</p>
        </div>
        <div className="steps-ref">
          {c.steps.map(([n, title, d]) => (
            <div className="step-ref" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
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
