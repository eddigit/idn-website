'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Pilotage Stratégique",
    h1: "Structuration, gouvernance et développement international.",
    sub: "Qualifier les priorités, poser l'architecture du dossier et maintenir une continuité opérationnelle dans des environnements complexes.",
    domains: [
      {
        n: "01",
        t: "Structuration",
        body: "Architecturer une entreprise ou un groupe avant une étape importante. Création d'une holding, répartition des entités, cohérence juridique entre juridictions, séquençage de la mise en place. La structuration commence par la lecture du contexte, pas par le choix d'une juridiction.",
      },
      {
        n: "02",
        t: "Gouvernance",
        body: "Installer un cadre stable de responsabilités, de processus décisionnels et d'arbitrages. Pour les dirigeants, fondateurs et actionnaires dont les situations impliquent plusieurs juridictions, plusieurs entités ou plusieurs parties prenantes.",
      },
      {
        n: "03",
        t: "Développement international",
        body: "Piloter l'expansion d'une entreprise vers de nouveaux marchés. Identification des juridictions pertinentes, qualification des correspondants locaux, mise en place d'une présence opérationnelle et suivi de la première phase d'implantation.",
      },
      {
        n: "04",
        t: "Implantation",
        body: "Créer une présence locale dans un nouveau pays. Architecture de la structure, ouverture bancaire, démarches administratives, correspondants opérationnels. L'implantation est un séquençage précis, pas un acte unique.",
      },
      {
        n: "05",
        t: "Pilotage de dossier",
        body: "Lorsqu'un dossier implique plusieurs spécialistes (avocats, banques, comptables, fiscalistes), la valeur d'un pilotage externe est de maintenir l'architecture du dossier, le calendrier et les priorités. Nous assurons cette cohérence.",
      },
      {
        n: "06",
        t: "Pilotage multi-pays",
        body: "Gérer la complexité d'un groupe ou d'une situation qui s'étend sur plusieurs juridictions. Suivi des obligations locales, maintien d'une vision globale cohérente, continuité opérationnelle entre les entités et les équipes.",
      },
    ],
    situEyebrow: "Situations rencontrées",
    situTitle: "Des situations concrètes, pas des catégories abstraites.",
    situs: [
      "Entrepreneur développant son activité vers plusieurs marchés européens",
      "Groupe familial souhaitant architecturer une holding internationale",
      "PME cherchant à implanter une filiale dans un pays inconnu",
      "Dirigeant souhaitant poser un cadre de gouvernance pour ses associés",
      "Fondateur préparant une cession ou une transmission structurée",
      "Structure multi-pays nécessitant un pilotage de sa cohérence globale",
    ],
    quote: "Les sujets les plus complexes ne demandent pas plus d'action. Ils demandent une lecture plus nette.",
    methodEyebrow: "Méthode",
    methodTitle: "Lecture, qualification, architecture.",
    method: [
      ["Lecture initiale", "Comprendre le contexte, les priorités et les contraintes réelles du dossier."],
      ["Qualification", "Identifier les structures adaptées, les spécialistes à engager et le séquençage logique."],
      ["Architecture", "Poser le cadre d'exécution, les responsabilités et la logique d'ensemble."],
      ["Séquençage", "Organiser les étapes dans un calendrier réaliste, documenté et partagé."],
      ["Exécution", "Accompagner les étapes contractuelles, administratives et opérationnelles."],
      ["Continuité", "Maintenir la présence structurée jusqu'à clôture ou étape suivante."],
    ],
    ctaEyebrow: "Pilotage Stratégique",
    ctaTitle: "Votre situation mérite une lecture préalable.",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "Strategic Advisory",
    h1: "Structuring, governance and international development.",
    sub: "Qualifying priorities, establishing the file architecture and maintaining operational continuity in complex environments.",
    domains: [
      {
        n: "01",
        t: "Structuring",
        body: "Architecting a company or group before a significant milestone. Setting up a holding structure, allocating entities, legal coherence across jurisdictions, sequencing implementation. Structuring begins with reading the context, not choosing a jurisdiction.",
      },
      {
        n: "02",
        t: "Governance",
        body: "Establishing a stable framework of responsibilities, decision-making processes and arbitrations. For executives, founders and shareholders whose situations involve several jurisdictions, several entities or several counterparties.",
      },
      {
        n: "03",
        t: "International development",
        body: "Piloting a company's expansion into new markets. Identifying relevant jurisdictions, qualifying local correspondents, establishing an operational presence and overseeing the initial implementation phase.",
      },
      {
        n: "04",
        t: "Establishment",
        body: "Creating a local presence in a new country. Structure architecture, banking setup, administrative procedures, operational correspondents. Establishment is a precise sequencing, not a single act.",
      },
      {
        n: "05",
        t: "File governance",
        body: "When a file involves several specialists (lawyers, banks, accountants, tax advisers), the value of external governance is maintaining the file architecture, timeline and priorities. We fulfil this coherence role.",
      },
      {
        n: "06",
        t: "Multi-country governance",
        body: "Managing the complexity of a group or situation spanning multiple jurisdictions. Monitoring local obligations, maintaining a coherent global overview, operational continuity between entities and teams.",
      },
    ],
    situEyebrow: "Situations encountered",
    situTitle: "Concrete situations, not abstract categories.",
    situs: [
      "Entrepreneur expanding their business into several European markets",
      "Family group wishing to architect an international holding",
      "SME looking to establish a subsidiary in an unfamiliar country",
      "Executive wishing to establish a governance framework for their partners",
      "Founder preparing a structured sale or transmission",
      "Multi-country structure requiring governance of its global coherence",
    ],
    quote: "The most complex matters do not require more action. They require a clearer reading.",
    methodEyebrow: "Method",
    methodTitle: "Reading, qualification, architecture.",
    method: [
      ["Initial reading", "Understanding the context, priorities and real constraints of the file."],
      ["Qualification", "Identifying appropriate structures, specialists to engage and logical sequencing."],
      ["Architecture", "Establishing the execution framework, responsibilities and overall logic."],
      ["Sequencing", "Organising steps within a realistic, documented and shared timeline."],
      ["Execution", "Supporting contractual, administrative and operational milestones."],
      ["Continuity", "Maintaining structured presence through to closing or the next milestone."],
    ],
    ctaEyebrow: "Strategic Advisory",
    ctaTitle: "Your situation deserves a prior reading.",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="ent-header">
        <div className="container-ref ent-header-inner">
          <div className="ent-header-left">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1>{c.h1}</h1>
          </div>
          <div className="ent-header-right">
            <p>{c.sub}</p>
            <div className="ent-header-image">
              <Image src="/images/card-entreprises-v6.png" alt="Pilotage stratégique" fill />
            </div>
          </div>
        </div>
      </section>

      <section className="ent-domains container-ref">
        {c.domains.map(({ n, t, body }) => (
          <div className="ent-domain" key={n}>
            <span className="ent-domain-num">{n}</span>
            <div className="ent-domain-body">
              <h2>{t}</h2>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="ent-situ container-ref">
        <p className="eyebrow">{c.situEyebrow}</p>
        <h2>{c.situTitle}</h2>
        <ul className="ent-situ-list">
          {c.situs.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section className="ent-editorial">
        <div className="ent-editorial-image">
          <Image src="/images/card-entreprises-v6.png" alt="" fill />
        </div>
        <div className="ent-editorial-overlay">
          <div className="container-ref">
            <blockquote>&ldquo;{c.quote}&rdquo;</blockquote>
          </div>
        </div>
      </section>

      <section className="ent-method container-ref">
        <div className="ent-method-inner">
          <div className="ent-method-left">
            <p className="eyebrow">{c.methodEyebrow}</p>
            <h2>{c.methodTitle}</h2>
            <Link className="btn-ref secondary" href="/contact" style={{ marginTop: 28, display: 'inline-flex' }}>Organiser un échange →</Link>
          </div>
          <div className="ent-method-grid">
            {c.method.map(([t, d]) => (
              <div className="ent-method-item" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
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
