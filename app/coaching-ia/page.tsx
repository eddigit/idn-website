'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Coaching IA",
    h1: "Concevoir un collaborateur IA adapté à un métier précis.",
    sub: "Nous aidons les dirigeants à transformer un besoin opérationnel en MVP utilisable, relié aux documents, aux indicateurs et aux décisions récurrentes de leur activité.",
    intro: "L'intelligence artificielle devient utile lorsqu'elle est cadrée par un métier, des données réelles et une méthode d'exécution. Le coaching IA vise à qualifier ce qui doit être automatisé, ce qui doit rester supervisé, et ce qu'un premier MVP doit démontrer.",
    casesEyebrow: "Exemples de MVP",
    casesTitle: "Trois situations dans lesquelles le collaborateur IA devient un outil de pilotage.",
    cases: [
      {
        n: "01",
        title: "Fiduciaire",
        kicker: "Pilotage cabinet et données clients",
        image: "coaching-ia-fiduciaire.png",
        alt: "Tableau de bord IA pour une fiduciaire",
        body: "Un collaborateur IA dédié au cabinet consolide les échéances, les documents clients, les KPI internes et les points de vigilance. Il aide à suivre la charge, les dossiers sensibles, les obligations récurrentes et la lecture globale du cabinet.",
        items: [
          "Vision des dossiers et priorités",
          "Suivi KPI par client ou portefeuille",
          "Préparation de synthèses internes",
          "Repérage des échéances à traiter",
        ],
      },
      {
        n: "02",
        title: "Cabinet d'avocats",
        kicker: "Dossiers, pièces et échéances",
        image: "coaching-ia-avocats.png",
        alt: "MVP IA pour un cabinet d'avocats",
        body: "Le MVP organise les pièces, les chronologies, les notes de dossier et les prochaines étapes. Il sert d'assistant de lecture et de préparation, sans remplacer l'analyse juridique ni la validation de l'avocat.",
        items: [
          "Chronologie structurée des dossiers",
          "Synthèse de pièces et correspondances",
          "Suivi des audiences et échéances",
          "Préparation de notes de travail",
        ],
      },
      {
        n: "03",
        title: "Entreprise du bâtiment",
        kicker: "Achats, chantiers et marges",
        image: "coaching-ia-batiment.png",
        alt: "MVP IA pour une entreprise du bâtiment",
        body: "Le collaborateur IA suit les achats, fournisseurs, devis, chantiers et marges. Il permet au dirigeant d'avoir une lecture plus rapide des écarts, des commandes à confirmer et des points bloquants sur chaque chantier.",
        items: [
          "Suivi achats et fournisseurs",
          "Lecture chantier par chantier",
          "Alertes sur écarts et marges",
          "Préparation des arbitrages dirigeants",
        ],
      },
    ],
    methodEyebrow: "Méthode",
    methodTitle: "Passer d'une intuition IA à un MVP utile.",
    methodCta: "Organiser un échange →",
    method: [
      ["Lecture métier", "Identifier les flux, les décisions récurrentes, les documents et les contraintes de supervision."],
      ["Cadrage des données", "Déterminer les sources disponibles, leur qualité et les limites d'accès à respecter."],
      ["Prototype MVP", "Construire un premier outil centré sur un usage prioritaire, sans disperser le périmètre."],
      ["Test opérationnel", "Observer l'usage réel avec l'équipe et corriger les points de friction."],
      ["Déploiement progressif", "Stabiliser le collaborateur IA avant d'élargir les usages ou les connexions."],
    ],
    vigilanceEyebrow: "Cadre de décision",
    vigilanceTitle: "L'objectif n'est pas d'ajouter de la technologie. Il est de clarifier ce qui doit être mieux piloté.",
    vigilance: [
      "Les données sensibles doivent rester cadrées par des accès précis.",
      "Le collaborateur IA doit assister la décision, pas masquer la responsabilité humaine.",
      "Le MVP doit prouver un usage concret avant toute extension.",
      "La valeur se mesure dans le temps gagné, la qualité de lecture et la continuité opérationnelle.",
    ],
    ctaEyebrow: "Coaching IA",
    ctaTitle: "Une situation métier peut être lue avant de choisir un outil.",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "AI Coaching",
    h1: "Designing an AI collaborator for a precise business context.",
    sub: "We help executives turn an operational need into a usable MVP connected to documents, indicators and recurring decisions.",
    intro: "Artificial intelligence becomes useful when it is framed by a profession, real data and an execution method. AI coaching qualifies what should be automated, what should remain supervised, and what a first MVP must demonstrate.",
    casesEyebrow: "MVP examples",
    casesTitle: "Three situations where the AI collaborator becomes a governance tool.",
    cases: [
      {
        n: "01",
        title: "Fiduciary firm",
        kicker: "Practice governance and client data",
        image: "coaching-ia-fiduciaire.png",
        alt: "AI dashboard for a fiduciary firm",
        body: "A dedicated AI collaborator consolidates deadlines, client documents, internal KPIs and points requiring attention. It supports workload tracking, sensitive files, recurring obligations and the overall reading of the practice.",
        items: [
          "Matter and priority overview",
          "KPI tracking by client or portfolio",
          "Internal synthesis preparation",
          "Recurring deadline identification",
        ],
      },
      {
        n: "02",
        title: "Law firm",
        kicker: "Cases, documents and deadlines",
        image: "coaching-ia-avocats.png",
        alt: "AI MVP for a law firm",
        body: "The MVP organises documents, timelines, case notes and next steps. It acts as a reading and preparation assistant without replacing legal analysis or lawyer validation.",
        items: [
          "Structured case timeline",
          "Document and correspondence synthesis",
          "Hearing and deadline tracking",
          "Working note preparation",
        ],
      },
      {
        n: "03",
        title: "Construction business",
        kicker: "Purchasing, job sites and margins",
        image: "coaching-ia-batiment.png",
        alt: "AI MVP for a construction business",
        body: "The AI collaborator tracks purchasing, suppliers, quotes, job sites and margins. It gives the executive a faster reading of discrepancies, orders to confirm and blocking points on each site.",
        items: [
          "Purchasing and supplier follow-up",
          "Site-by-site operational reading",
          "Margin and discrepancy alerts",
          "Preparation of executive arbitrations",
        ],
      },
    ],
    methodEyebrow: "Method",
    methodTitle: "Moving from an AI intuition to a useful MVP.",
    methodCta: "Schedule a conversation →",
    method: [
      ["Business reading", "Identify flows, recurring decisions, documents and supervision constraints."],
      ["Data framing", "Determine available sources, their quality and the access limits to respect."],
      ["MVP prototype", "Build a first tool focused on one priority use, without dispersing the scope."],
      ["Operational test", "Observe real use with the team and correct friction points."],
      ["Progressive deployment", "Stabilise the AI collaborator before extending uses or connections."],
    ],
    vigilanceEyebrow: "Decision framework",
    vigilanceTitle: "The objective is not to add technology. It is to clarify what must be governed better.",
    vigilance: [
      "Sensitive data must remain framed by precise access rules.",
      "The AI collaborator must assist decisions, not hide human responsibility.",
      "The MVP must prove concrete use before any extension.",
      "Value is measured through time saved, reading quality and operational continuity.",
    ],
    ctaEyebrow: "AI Coaching",
    ctaTitle: "A business situation can be read before choosing a tool.",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="ai-hero">
        <div className="container-ref ai-hero-inner">
          <div className="ai-hero-copy">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1>{c.h1}</h1>
            <p className="ai-hero-sub">{c.sub}</p>
            <div className="gold-line" />
            <p className="ai-hero-intro">{c.intro}</p>
            <Link className="btn-ref primary" href="/contact">{c.ctaBtn}</Link>
          </div>
          <div className="ai-hero-image">
            <Image src="/images/coaching-ia-fiduciaire.png" alt="" fill priority />
          </div>
        </div>
      </section>

      <section className="ai-cases container-ref">
        <p className="eyebrow">{c.casesEyebrow}</p>
        <h2>{c.casesTitle}</h2>
        <div className="ai-case-list">
          {c.cases.map((item) => (
            <article className="ai-case" key={item.n}>
              <div className="ai-case-image">
                <Image src={`/images/${item.image}`} alt={item.alt} width={820} height={461} priority />
              </div>
              <div className="ai-case-body">
                <span className="ai-case-num">{item.n}</span>
                <p className="ai-case-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.items.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-method container-ref">
        <div className="ai-method-head">
          <div>
            <p className="eyebrow">{c.methodEyebrow}</p>
            <h2>{c.methodTitle}</h2>
          </div>
          <Link className="btn-ref secondary" href="/contact">{c.methodCta}</Link>
        </div>
        <div className="ai-method-grid">
          {c.method.map(([title, body]) => (
            <div className="ai-method-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-vigil">
        <div className="container-ref ai-vigil-inner">
          <div>
            <p className="eyebrow">{c.vigilanceEyebrow}</p>
            <h2>{c.vigilanceTitle}</h2>
          </div>
          <ul>
            {c.vigilance.map((point) => <li key={point}>{point}</li>)}
          </ul>
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
