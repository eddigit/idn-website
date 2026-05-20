'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "À Propos",
    h1: "Un cabinet indépendant de conseil international.",
    sub: "Nous intervenons auprès d'entrepreneurs, d'investisseurs et de structures internationales sur des situations de structuration, d'acquisition et de développement cross-border.",
    values: [
      {
        t: "Positionnement",
        sub: "Architecture des dossiers complexes, lecture de situation, pilotage d'exécution.",
        body: "La valeur d'un conseil repose sur la capacité à lire un dossier dans sa globalité, qualifier ses contraintes réelles et proposer un cadre d'exécution fondé sur l'expérience. Les aspects réglementés sont traités par les professionnels habilités. Notre rôle est de qualifier le dossier, poser l'architecture et maintenir la cohérence d'ensemble jusqu'à clôture.",
      },
      {
        t: "Méthode",
        sub: "La lecture avant l'architecture. L'architecture avant l'exécution.",
        body: "Pour chaque dossier, nous commençons par une lecture complète du contexte, des enjeux et des points de fragilité. Nous posons un cadre d'intervention précis avant d'engager les correspondants spécialisés. Avocats, notaires, experts, banquiers, chacun intervient selon un séquençage structuré. Ce qui détermine l'issue d'un dossier complexe se joue souvent dans cette phase préparatoire.",
      },
      {
        t: "Culture",
        sub: "La discrétion est une méthode, pas un argument.",
        body: "Nous ne publions pas de témoignages et n'affichons pas de références nominatives. Ce site existe pour permettre un premier contact qualifié. Nos clients nous choisissent pour l'expérience qu'ils ont avec nous, pas pour ce qu'ils lisent en ligne. Cette sobriété est délibérée et constitutive de notre façon de travailler.",
      },
    ],
    philoEyebrow: "Philosophie de travail",
    philoTitle: "La cohérence avant les juridictions.",
    philoItems: [
      ["La substance avant la forme", "Une structure internationale sans logique économique réelle est une fragilité, pas un avantage. La substance s'anticipe, elle ne se corrige pas après coup."],
      ["La lecture avant l'architecture", "Comprendre la situation dans sa globalité, ses contraintes, sa temporalité et ses risques précède nécessairement toute recommandation."],
      ["La continuité avant les solutions rapides", "Un dossier international sérieux s'étend sur plusieurs mois, parfois plusieurs années. La continuité n'est pas un accessoire. C'est une condition de réussite."],
    ],
    closing: "Ce que nous faisons n'est pas rare. Ce qui est rare, c'est de le faire avec méthode et tenue.",
    ctaEyebrow: "Premier échange",
    ctaTitle: "Une conversation suffit pour évaluer si le dossier relève de notre périmètre.",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "About",
    h1: "An independent international advisory firm.",
    sub: "We work with entrepreneurs, investors and international structures on structuring, acquisition and cross-border development situations.",
    values: [
      {
        t: "Positioning",
        sub: "Architecture of complex files, situational reading, execution governance.",
        body: "The value of advisory rests on the ability to read a file in its entirety, qualify its real constraints and propose an execution framework grounded in experience. Regulated matters are handled by the appropriate licensed professionals. Our role is to qualify the file, establish the architecture and maintain overall coherence through to completion.",
      },
      {
        t: "Method",
        sub: "Reading before architecture. Architecture before execution.",
        body: "For every file, we begin with a complete reading of the context, the stakes and the points of vulnerability. We set a precise framework before engaging the appropriate specialists. Lawyers, notaries, experts and bankers each intervene according to a structured sequence. What determines the outcome of a complex file is often decided in this preparatory phase.",
      },
      {
        t: "Culture",
        sub: "Discretion is a method, not a selling point.",
        body: "We do not publish testimonials or display named references. This site exists to allow a qualified first contact. Our clients choose us for the experience they have working with us, not for what they read online. This restraint is deliberate and constitutive of how we work.",
      },
    ],
    philoEyebrow: "Working philosophy",
    philoTitle: "Coherence before jurisdictions.",
    philoItems: [
      ["Substance before form", "An international structure without genuine economic rationale is a liability, not an advantage. Substance is anticipated, not corrected after the fact."],
      ["Reading before architecture", "Understanding the situation in its entirety, its constraints, its timeline and its risks, necessarily precedes any recommendation."],
      ["Continuity before quick solutions", "A serious international file extends over several months, sometimes years. Continuity is not an accessory. It is a condition of success."],
    ],
    closing: "What we do is not rare. What is rare is doing it with method and composure.",
    ctaEyebrow: "First conversation",
    ctaTitle: "A conversation is enough to assess whether the file falls within our scope.",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main>
      <section className="about-manifesto container-ref">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.h1}</h1>
        <div className="about-manifesto-line" />
        <p className="about-manifesto-sub">{c.sub}</p>
      </section>

      <section className="about-image-band container-ref">
        <div className="about-image-wrap">
          <Image src="/images/card-international-v6.png" alt="" fill />
        </div>
      </section>

      <section className="about-values container-ref">
        {c.values.map(({ t, sub, body }) => (
          <div className="about-value" key={t}>
            <div className="about-value-head">
              <h2>{t}</h2>
              <p className="about-value-sub">{sub}</p>
            </div>
            <p className="about-value-body">{body}</p>
          </div>
        ))}
      </section>

      <section className="about-philo container-ref">
        <p className="eyebrow">{c.philoEyebrow}</p>
        <h2>{c.philoTitle}</h2>
        <div className="about-philo-grid">
          {c.philoItems.map(([t, d]) => (
            <div className="about-philo-item" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-closing">
        <div className="container-ref">
          <p>&ldquo;{c.closing}&rdquo;</p>
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
