'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Structuration Internationale",
    h1: "Architecture d'une présence internationale.",
    sub: "Qualifier les sujets transfrontaliers, poser le cadre d'exécution et piloter les décisions dans un environnement sobre et documenté.",
    principles: [
      { t: "Lecture et qualification", d: "Avant toute recommandation, nous lisons le dossier dans sa globalité. Chaque situation internationale a ses paramètres propres, juridiques, opérationnels et temporels. Ce travail de lecture préalable détermine la qualité de l'exécution." },
      { t: "Correspondants locaux qualifiés", d: "Nous travaillons avec des avocats, fiduciaires et conseillers sélectionnés pour leur expertise locale et leur alignement avec notre méthode. Ce sont des professionnels avec lesquels nous avons établi une relation de travail structurée, dans des juridictions précises, pour des types de dossiers précis." },
      { t: "Cadre d'exécution documenté", d: "Nous posons un cadre précis, un calendrier réaliste et un séquençage fondé sur les contraintes réelles du dossier. L'architecture précède l'action. Elle est ce qui permet à plusieurs spécialistes de travailler dans la même direction." },
    ],
    situEyebrow: "Situations traitées",
    situTitle: "Des projets internationaux concrets.",
    situs: [
      "Implantation d'une filiale ou d'une structure dans un nouveau pays",
      "Architecture d'un holding international avant expansion",
      "Développement multi-pays pour une PME ou un groupe",
      "Pilotage d'une acquisition immobilière internationale",
      "Résidence internationale pour dirigeant ou entrepreneur",
      "Mobilité d'un dirigeant entre juridictions",
      "Structuration patrimoniale trans-frontière",
      "Investissement cross-border avec contreparties multi-pays",
      "Mise en cohérence d'une structure internationale existante",
    ],
    coordEyebrow: "Pilotage",
    coordTitle: "Architecture du dossier et cohérence d'exécution.",
    coordBody: "Un dossier international fait intervenir plusieurs professionnels à la fois : avocats locaux, fiduciaires, banques, notaires, fiscalistes. Chacun travaille à son rythme, dans sa juridiction. La valeur d'un pilotage externe est de maintenir l'architecture du dossier, le calendrier et les priorités. Nous assurons ce rôle de cohérence.",
    jurEyebrow: "Juridictions suivies",
    jurTitle: "Une présence choisie, pas universelle.",
    jurSub: "Nous intervenons sur les géographies que nous connaissons. Chaque juridiction a ses propres logiques, ses délais et ses exigences. Notre présence géographique est sélective. Elle est construite sur des relations de travail réelles, pas sur une liste.",
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
      { name: "Panama", tag: "Corridor international", slug: "panama" },
      { name: "Bulgarie", tag: "Structuration UE", slug: "bulgarie" },
    ],
    vigilEyebrow: "Points de vigilance",
    vigilTitle: "Ce qui fragilise les projets internationaux.",
    vigils: [
      "Une juridiction choisie avant la lecture du dossier génère des contraintes qu'elle n'était pas censée résoudre.",
      "L'absence de pilotage entre spécialistes locaux est la première cause de retard ou d'incohérence.",
      "Les délais administratifs et bancaires dans certains pays déstabilisent un calendrier global mal anticipé.",
      "La substance est une exigence réelle dans la quasi-totalité des juridictions sérieuses. Elle s'anticipe, elle ne se rattrape pas.",
      "La conformité internationale (CRS, FATCA, DAC6) s'intègre dans l'architecture du dossier. Elle ne s'ajoute pas après.",
    ],
    entryLabel: "Votre situation",
    entries: [
      { label: "Créer ou structurer", desc: "Holding, entité, architecture de groupe", href: "/entreprises" },
      { label: "Implantation internationale", desc: "Résidence, présence locale, nouvelle juridiction", href: "/juridictions" },
      { label: "Immobilier international", desc: "Acquisition privée cross-border", href: "/immobilier" },
      { label: "Lire une situation", desc: "Première lecture confidentielle", href: "/contact" },
    ],
    statement: "Une structuration internationale sérieuse ne commence pas par le choix d'une juridiction. Elle commence par une lecture honnête du dossier et de ses contraintes réelles.",
    ctaEyebrow: "International",
    ctaTitle: "Votre sujet transfrontalier mérite une lecture préalable.",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "International Structuring",
    h1: "Architecture of an international presence.",
    sub: "Qualifying cross-border matters, establishing the execution framework and governing decisions in a measured and documented environment.",
    principles: [
      { t: "Reading and qualification", d: "Before any recommendation, we read the file in its entirety. Every international situation has its own parameters, legal, operational and temporal. This preliminary reading determines the quality of execution." },
      { t: "Qualified local correspondents", d: "We work with lawyers, fiduciaries and advisers selected for their local expertise and their alignment with our method. They are professionals with whom we have established a structured working relationship, in specific jurisdictions, for specific types of files." },
      { t: "Documented execution framework", d: "We establish a precise framework, a realistic timeline and a sequencing grounded in the real constraints of the file. Architecture precedes action. It is what allows several specialists to work in the same direction." },
    ],
    situEyebrow: "Situations handled",
    situTitle: "Concrete international projects.",
    situs: [
      "Establishing a subsidiary or structure in a new country",
      "Architecting an international holding ahead of expansion",
      "Multi-country development for an SME or group",
      "Piloting an international real estate acquisition",
      "International residency for an executive or entrepreneur",
      "Executive mobility between jurisdictions",
      "Cross-border patrimonial structuring",
      "Cross-border investment with multi-jurisdiction counterparties",
      "Bringing coherence to an existing international structure",
    ],
    coordEyebrow: "Governance",
    coordTitle: "File architecture and execution coherence.",
    coordBody: "A cross-border file involves multiple professionals at once: local lawyers, fiduciaries, banks, notaries and tax advisers. Each works at their own rhythm, within their own jurisdiction. The value of external governance is maintaining the file architecture, timeline and priorities. We fulfil this coherence role.",
    jurEyebrow: "Covered jurisdictions",
    jurTitle: "A selected presence, not a universal one.",
    jurSub: "We work in the geographies we know. Each jurisdiction has its own logics, timelines and requirements. Our geographic presence is selective. It is built on real working relationships, not a list.",
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
      { name: "Panama", tag: "International corridor", slug: "panama" },
      { name: "Bulgaria", tag: "EU structuring", slug: "bulgarie" },
    ],
    vigilEyebrow: "Key considerations",
    vigilTitle: "What weakens international projects.",
    vigils: [
      "A jurisdiction chosen before reading the file generates constraints it was never meant to solve.",
      "Absence of governance between local specialists is the primary cause of delay or incoherence.",
      "Administrative and banking timelines in certain countries destabilise a globally ill-anticipated schedule.",
      "Substance is a genuine requirement in virtually all serious jurisdictions. It is anticipated, not corrected after the fact.",
      "International compliance (CRS, FATCA, DAC6) is integrated into the file architecture. It is not added afterwards.",
    ],
    entryLabel: "Your situation",
    entries: [
      { label: "Create or structure", desc: "Holding, entity, group architecture", href: "/entreprises" },
      { label: "International establishment", desc: "Residency, local presence, new jurisdiction", href: "/juridictions" },
      { label: "International real estate", desc: "Private cross-border acquisition", href: "/immobilier" },
      { label: "Read a situation", desc: "Confidential first reading", href: "/contact" },
    ],
    statement: "Serious international structuring does not begin with the choice of a jurisdiction. It begins with an honest reading of the file and its real constraints.",
    ctaEyebrow: "International",
    ctaTitle: "Your cross-border matter deserves a prior reading.",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="intl-header">
        <div className="container-ref intl-header-inner">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h1>{c.h1}</h1>
            <p>{c.sub}</p>
          </div>
          <div className="intl-header-image">
            <Image src="/images/card-international-v6.png" alt="Structuration internationale" fill priority />
          </div>
        </div>
      </section>

      <section className="intl-entry container-ref">
        <p className="eyebrow">{c.entryLabel}</p>
        <div className="intl-entry-grid">
          {c.entries.map(({ label, desc, href }) => (
            <Link href={href} className="intl-entry-card" key={label}>
              <strong>{label}</strong>
              <span>{desc}</span>
              <em>→</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="intl-principles container-ref">
        {c.principles.map(({ t, d }) => (
          <div className="intl-principle" key={t}>
            <h2>{t}</h2>
            <p>{d}</p>
          </div>
        ))}
      </section>

      <section className="intl-situ container-ref">
        <p className="eyebrow">{c.situEyebrow}</p>
        <h2>{c.situTitle}</h2>
        <ul className="intl-situ-list">
          {c.situs.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section className="intl-coord container-ref">
        <p className="eyebrow">{c.coordEyebrow}</p>
        <h2>{c.coordTitle}</h2>
        <p className="intl-coord-body">{c.coordBody}</p>
      </section>

      <section className="intl-juridictions container-ref">
        <div className="intl-jur-head">
          <p className="eyebrow">{c.jurEyebrow}</p>
          <h2>{c.jurTitle}</h2>
          <p>{c.jurSub}</p>
        </div>
        <div className="intl-jur-grid-v2">
          {c.jurisdictions.map(({ name, tag, slug }) => (
            <Link href={`/juridictions/${slug}`} className="intl-jur-card" key={slug}>
              <strong>{name}</strong>
              <span>{tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="intl-vigil container-ref">
        <p className="eyebrow">{c.vigilEyebrow}</p>
        <h2>{c.vigilTitle}</h2>
        <ul className="intl-vigil-list">
          {c.vigils.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </section>

      <section className="intl-statement container-ref">
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
