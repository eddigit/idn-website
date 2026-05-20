'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const articles = {
  fr: [
    {
      slug: "emirats-arabes-unis",
      category: "Structuration internationale",
      date: "Mai 2026",
      readTime: "8 min",
      title: "Pourquoi les Émirats arabes unis continuent d'attirer les entrepreneurs internationaux.",
      excerpt: "Les tensions géopolitiques récentes ont conduit certains entrepreneurs à réévaluer leur présence dans la région. Dans la pratique, Dubai continue d'attirer. Les stratégies évoluent progressivement. Elles ne se retirent pas.",
      image: "/images/publications/emirats-arabes-unis.png",
    },
  ],
  en: [
    {
      slug: "emirats-arabes-unis",
      category: "International structuring",
      date: "May 2026",
      readTime: "8 min",
      title: "Why the UAE continues to attract international entrepreneurs.",
      excerpt: "Recent geopolitical developments have led some entrepreneurs to reassess their presence in the region. In practice, Dubai continues to attract. Strategies are gradually evolving. They are not withdrawing.",
      image: "/images/publications/emirats-arabes-unis.png",
    },
  ],
};

const text = {
  fr: {
    eyebrow: "Publications",
    h1: "Lectures et analyses.",
    sub: "Analyses de situation et éclairages opérationnels sur la structuration internationale, la résidence, l'immobilier patrimonial et la gouvernance transfrontalière.",
    readMore: "Lire →",
    ctaEyebrow: "Publications",
    ctaTitle: "Un sujet vous intéresse ?",
    ctaBtn: "Présenter une situation →",
  },
  en: {
    eyebrow: "Publications",
    h1: "Readings and analyses.",
    sub: "Situational analyses and operational insights on international structuring, residency, real estate and cross-border governance.",
    readMore: "Read →",
    ctaEyebrow: "Publications",
    ctaTitle: "A topic interests you?",
    ctaBtn: "Present a situation →",
  },
};

export default function Page() {
  const { lang } = useLang();
  const c = text[lang];
  const list = articles[lang];

  return (
    <main>
      <section className="pub-header container-ref">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.h1}</h1>
        <div className="about-manifesto-line" />
        <p className="pub-sub">{c.sub}</p>
      </section>

      <section className="pub-list container-ref">
        {list.map(({ slug, category, date, readTime, title, excerpt, image }) => (
          <Link href={`/publications/${slug}`} className="pub-card" key={slug}>
            <div className="pub-card-image">
              <img src={image} alt="" />
            </div>
            <div>
              <div className="pub-card-meta">
                <span className="pub-card-cat">{category}</span>
                <span className="pub-card-sep">·</span>
                <span className="pub-card-date">{date}</span>
                <span className="pub-card-sep">·</span>
                <span className="pub-card-date">{readTime}</span>
              </div>
              <h2>{title}</h2>
              <p className="pub-card-excerpt">{excerpt}</p>
              <span className="pub-card-read">{c.readMore}</span>
            </div>
          </Link>
        ))}
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
