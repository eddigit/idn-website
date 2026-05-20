'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Immobilier Privé & Acquisition",
    h1: "Acquisitions immobilières privées et pilotage de dossier.",
    manifesto: "Lire le bien, les professionnels engagés, le calendrier et les étapes sensibles avant de s'engager. Une acquisition immobilière sérieuse commence par cette lecture.",
    sections: [
      {
        n: "01",
        t: "Acquisition privée",
        body: "Préparer et accompagner une acquisition résidentielle ou patrimoniale. Lecture du dossier, analyse des conditions et qualification des professionnels, pilotage notaire, avocat, expert. Chaque engagement repose sur une analyse claire et documentée. Nous assurons la continuité du dossier jusqu'à la signature définitive.",
        items: ["Résidence principale ou secondaire", "Acquisition patrimoniale long terme", "Non-résidents et acquéreurs internationaux", "Pilotage multi-professionnels local"],
        cta: "Présenter un projet d'acquisition",
        ctaHref: "/contact",
      },
      {
        n: "02",
        t: "VEFA et immobilier neuf",
        body: "Suivre les moments clés d'un programme neuf depuis la réservation jusqu'à la livraison. Réservation, contrat de vente, appels de fonds, suivi du chantier, levée des réserves à la livraison, exécution des garanties. La VEFA exige une présence continue à chaque étape contractuelle.",
        items: ["Réservation et analyse du contrat préliminaire", "Suivi des appels de fonds", "Suivi du chantier et des délais", "Assistance à la livraison et levée des réserves"],
        cta: "Présenter un dossier VEFA",
        ctaHref: "/contact",
      },
      {
        n: "03",
        t: "Investissement immobilier",
        body: "Accompagner les acquéreurs dont la situation patrimoniale ou internationale demande une lecture structurée. Architecture de la détention, aspects fiscaux locaux, professionnels spécialisés et suivi de gestion dans un cadre cohérent. Pour les acquéreurs à patrimoine dispersé ou en situation internationale, un cadre d'exécution documenté est essentiel.",
        items: ["Structuration de la détention", "Aspects fiscaux et transmission", "Pilotage avec fiscaliste et notaire", "Immobilier patrimonial long terme"],
        cta: "Présenter une situation patrimoniale",
        ctaHref: "/contact",
      },
      {
        n: "04",
        t: "Immobilier international",
        body: "Piloter une acquisition dans un pays étranger pour un acquéreur non-résident ou depuis l'étranger. La complexité de l'immobilier cross-border tient à la multiplication des professionnels locaux, des obligations documentaires et des délais. Nous pilotons ce dossier depuis une position externe, avec une architecture claire.",
        items: ["Non-résidents sur marchés européens", "Acquisition cross-border structurée", "Documentation multi-pays", "Pilotage notaire, avocat, banque locaux"],
        cta: "Voir les juridictions",
        ctaHref: "/juridictions",
        ctaSecondary: "Présenter une situation",
        ctaSecondaryHref: "/contact",
      },
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qui fragilise souvent les acquisitions.",
    vigils: [
      "Un mandat ou un compromis signé sans lecture préalable des clauses engage irrémédiablement.",
      "L'état du titre de propriété, les servitudes et l'urbanisme doivent être vérifiés avant l'acte.",
      "Le financement pour non-résidents est plus contraignant et doit être qualifié avant toute offre.",
      "Les délais réels d'une acquisition sont souvent plus longs que prévu. Le calendrier doit être intégré dès le départ.",
      "En VEFA, les appels de fonds non conformes au contrat peuvent indiquer des difficultés du promoteur.",
    ],
    methodEyebrow: "Notre approche",
    methodTitle: "Ce que nous faisons, concrètement.",
    process: [
      ["Lecture du dossier", "Analyse des documents disponibles, identification des points sensibles."],
      ["Pilotage", "Lien entre les parties. Notaire, avocat, expert, agent, banque."],
      ["Calendrier", "Suivi des étapes contractuelles et des engagements."],
      ["Documentation", "Organisation des éléments transmis et reçus."],
      ["Décision", "Aide à la formulation des conditions d'engagement."],
      ["Suivi post-acte", "Continuité après signature jusqu'à la remise des clés."],
    ],
    ctaEyebrow: "Immobilier Privé",
    ctaTitle: "Votre acquisition mérite une lecture préalable.",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "Private Real Estate & Acquisition",
    h1: "Private real estate acquisitions and file governance.",
    manifesto: "Reading the property, the professionals involved, the timeline and the sensitive milestones before committing. A serious real estate acquisition begins with this reading.",
    sections: [
      {
        n: "01",
        t: "Private acquisition",
        body: "Preparing and supporting a residential or patrimonial acquisition. File reading, analysis of conditions and qualification of professionals, governance of notary, lawyer, expert. Every commitment rests on a clear and documented analysis. We maintain continuity of the file through to final signature.",
        items: ["Primary or secondary residence", "Long-term patrimonial acquisition", "Non-residents and international buyers", "Local multi-professional governance"],
        cta: "Present an acquisition project",
        ctaHref: "/contact",
      },
      {
        n: "02",
        t: "Off-plan (VEFA) and new developments",
        body: "Following key milestones of a new development from reservation through to delivery. Reservation, sale contract, payment calls, site monitoring, snagging at delivery, warranty enforcement. Off-plan acquisitions require continuous oversight at each contractual stage.",
        items: ["Reservation and preliminary contract analysis", "Monitoring of payment calls", "Site monitoring and timeline tracking", "Delivery assistance and snagging"],
        cta: "Present an off-plan matter",
        ctaHref: "/contact",
      },
      {
        n: "03",
        t: "Real estate investment",
        body: "Supporting buyers whose patrimonial or international situation requires a structured reading. Ownership architecture, local tax aspects, specialised professionals and management oversight within a coherent framework. For multi-jurisdiction or internationally dispersed buyers, a documented execution framework is essential.",
        items: ["Ownership structure", "Tax and transmission aspects", "Working with tax adviser and notary", "Long-term patrimonial real estate"],
        cta: "Present a patrimonial situation",
        ctaHref: "/contact",
      },
      {
        n: "04",
        t: "International real estate",
        body: "Piloting an acquisition in a foreign country for a non-resident or international buyer. The complexity of cross-border real estate lies in the multiplication of local professionals, documentary obligations and timelines. We pilot this file from an external position, with a clear architecture.",
        items: ["Non-residents on European markets", "Structured cross-border acquisition", "Multi-country documentation", "Local notary, lawyer, bank governance"],
        cta: "See jurisdictions",
        ctaHref: "/juridictions",
        ctaSecondary: "Present a situation",
        ctaSecondaryHref: "/contact",
      },
    ],
    vigilEyebrow: "Key considerations",
    vigilTitle: "What often weakens acquisitions.",
    vigils: [
      "A mandate or preliminary agreement signed without prior clause review is an irrevocable commitment.",
      "The title deed, easements and planning status must be verified before the deed of sale.",
      "Financing for non-residents is more restrictive and must be qualified before any offer.",
      "Real timelines for an acquisition are often longer than expected. The calendar must be integrated from the outset.",
      "In off-plan, payment calls not conforming to the contract may indicate developer difficulties.",
    ],
    methodEyebrow: "Our approach",
    methodTitle: "What we do, concretely.",
    process: [
      ["File reading", "Analysis of available documents, identification of sensitive points."],
      ["Governance", "Liaison between parties. Notary, lawyer, expert, agent, bank."],
      ["Timeline", "Monitoring of contractual milestones and commitments."],
      ["Documentation", "Organisation of transmitted and received elements."],
      ["Decision", "Support in formulating engagement conditions."],
      ["Post-signing follow-up", "Continuity after signature through to key handover."],
    ],
    ctaEyebrow: "Private Real Estate",
    ctaTitle: "Your acquisition deserves a prior reading.",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="immo-hero-band">
        <div className="immo-hero-image">
          <Image src="/images/card-immobilier-v6.png" alt="Immobilier privé" fill priority />
        </div>
        <div className="immo-hero-overlay">
          <div className="container-ref">
            <p className="eyebrow" style={{ color: 'rgba(245,239,228,.65)' }}>{c.eyebrow}</p>
            <h1 className="immo-hero-title">{c.h1}</h1>
          </div>
        </div>
      </section>

      <section className="immo-manifesto container-ref">
        <p>{c.manifesto}</p>
      </section>

      <section className="immo-sections container-ref">
        {c.sections.map(({ n, t, body, items, cta, ctaHref, ctaSecondary, ctaSecondaryHref }: any) => (
          <div className="immo-section" key={n}>
            <span className="immo-num">{n}</span>
            <div className="immo-section-body">
              <h2>{t}</h2>
              <p>{body}</p>
              <ul className="immo-items">
                {items.map((item: string, i: number) => <li key={i}>{item}</li>)}
              </ul>
              <div className="immo-section-actions">
                <Link href={ctaHref} className="immo-section-cta">{cta} →</Link>
                {ctaSecondary && (
                  <Link href={ctaSecondaryHref} className="immo-section-cta secondary">{ctaSecondary} →</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="immo-vigil container-ref">
        <p className="eyebrow">{c.vigilEyebrow}</p>
        <h2>{c.vigilTitle}</h2>
        <ul className="immo-vigil-list">
          {c.vigils.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </section>

      <section className="immo-editorial">
        <div className="container-ref immo-editorial-inner">
          <div className="immo-editorial-image">
            <Image src="/images/card-immobilier-v6.png" alt="" fill />
          </div>
          <div className="immo-editorial-text">
            <blockquote>&ldquo;{c.manifesto}&rdquo;</blockquote>
            <Link className="btn-ref secondary" href="/contact">Organiser un échange →</Link>
          </div>
        </div>
      </section>

      <section className="immo-process container-ref">
        <p className="eyebrow">{c.methodEyebrow}</p>
        <h2>{c.methodTitle}</h2>
        <div className="immo-process-grid">
          {c.process.map(([t, d]) => (
            <div className="immo-step" key={t}>
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
