'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const c = {
  fr: {
    eyebrow: "Conditions générales",
    h1: "Conditions d'utilisation.",
    update: "Dernière mise à jour : à compléter",
    intro: "Les présentes Conditions d'utilisation et cadre des échanges définissent les conditions dans lesquelles le site exploité sous la marque IDN Global Advisory peut être consulté et utilisé, ainsi que le cadre général applicable aux premiers échanges initiés avec CMB CONSEIL SA.",
    sections: [
      {
        title: "1. Présentation du site",
        content: "Le site est exploité par CMB CONSEIL SA, société luxembourgeoise immatriculée au RCS Luxembourg sous le numéro B261378, exerçant des activités de conseil pour les affaires et autres conseils de gestion (NACE 70.22) sous la marque IDN Global Advisory. Le site présente certaines activités de structuration, d'accompagnement, de coordination et de suivi de dossiers internationaux, immobiliers, patrimoniaux ou entrepreneuriaux.",
      },
      {
        title: "2. Nature des informations publiées",
        content: "Les contenus présents sur le site sont fournis à titre général et informatif. Ils ne constituent pas une consultation juridique individualisée, un conseil fiscal individualisé, une consultation réglementaire, une offre contractuelle, un engagement d'exécution, ni une garantie de résultat. Chaque situation dépend notamment des juridictions concernées, des professionnels impliqués, du calendrier, des contraintes réglementaires, des éléments transmis et de l'évolution des circonstances applicables.",
      },
      {
        title: "3. Première lecture des situations",
        content: "Les échanges initiés via le site, les formulaires ou les communications électroniques permettent une première lecture des situations présentées. Cette première analyse ne constitue pas l'acceptation automatique d'un dossier, la création d'une relation contractuelle, un mandat, ni un engagement d'intervention. Toute intervention éventuelle fait l'objet d'échanges complémentaires et, lorsque nécessaire, d'une documentation contractuelle distincte.",
      },
      {
        title: "4. Intervention de professionnels externes",
        content: "Selon la nature des dossiers et les juridictions concernées, certaines opérations peuvent nécessiter l'intervention de professionnels externes qualifiés, notamment avocats, notaires, fiscalistes, experts techniques, établissements bancaires, fiduciaires ou intervenants réglementés. L'intervention de ces professionnels peut être requise afin d'assurer la cohérence juridique, réglementaire, administrative ou opérationnelle des dossiers concernés.",
      },
      {
        title: "5. Dossiers internationaux et multi-juridictionnels",
        content: "Les situations internationales impliquent fréquemment plusieurs juridictions, professionnels, calendriers et contraintes réglementaires distinctes. Les délais, procédures, conditions d'exécution et exigences documentaires peuvent varier selon les pays concernés, les administrations, les établissements impliqués et les obligations applicables localement. Certaines opérations peuvent nécessiter des vérifications complémentaires, des validations externes ou des formalités spécifiques avant toute mise en oeuvre.",
      },
      {
        title: "6. Conformité réglementaire et vérifications",
        content: "Dans le cadre de certaines opérations, notamment internationales, patrimoniales ou immobilières, des vérifications complémentaires peuvent être demandées afin de satisfaire aux obligations applicables en matière d'identification, de conformité, de vigilance, de lutte contre le blanchiment et le financement du terrorisme, de cohérence documentaire et de vérification des informations transmises.",
      },
      {
        title: "7. Utilisation du site",
        content: "L'utilisateur s'engage à utiliser le site dans des conditions conformes aux lois applicables et à ne pas porter atteinte au fonctionnement du site, tenter un accès non autorisé, transmettre des contenus illicites ou frauduleux, ou utiliser le site à des fins contraires aux réglementations applicables.",
      },
      {
        title: "8. Propriété intellectuelle",
        content: "L'ensemble des contenus présents sur le site, incluant notamment les textes, éléments rédactionnels, identité visuelle, logos, graphismes, photographies, illustrations et architecture du site, est protégé par les dispositions applicables en matière de propriété intellectuelle. Toute reproduction, diffusion, adaptation ou utilisation sans autorisation écrite préalable est interdite.",
      },
      {
        title: "9. Limitation de responsabilité",
        content: "CMB CONSEIL SA veille à fournir des informations cohérentes et régulièrement mises à jour. Toutefois, aucune garantie n'est donnée quant à l'exhaustivité des contenus, l'absence d'erreur, l'actualité permanente des informations, ni l'adéquation des contenus à une situation particulière. L'utilisateur demeure seul responsable de l'utilisation qu'il fait des informations disponibles sur le site.",
      },
      {
        title: "10. Droit applicable et juridiction compétente",
        content: "Les présentes conditions sont soumises au droit luxembourgeois. Tout litige relatif à l'utilisation du site ou aux présentes conditions relève, sauf disposition impérative contraire, de la compétence exclusive des tribunaux de Luxembourg-Ville.",
      },
    ],
  },
  en: {
    eyebrow: "Terms of use",
    h1: "Terms of use.",
    update: "Last updated: to be completed",
    intro: "These Terms of Use and Framework of Exchanges define the conditions under which the website operated under the brand IDN Global Advisory may be accessed and used, as well as the general framework applicable to initial communications initiated with CMB CONSEIL SA.",
    sections: [
      {
        title: "1. Website presentation",
        content: "The website is operated by CMB CONSEIL SA, a Luxembourg company registered with the Luxembourg Trade and Companies Register under number B261378, carrying out business and management consultancy activities (NACE 70.22) under the brand IDN Global Advisory. The website presents certain structuring, coordination, support and follow-up activities relating to international, real estate, patrimonial or entrepreneurial matters.",
      },
      {
        title: "2. Nature of published information",
        content: "The information available on the website is provided for general informational purposes only. It does not constitute individual legal advice, individual tax advice, regulatory advice, a contractual offer, an undertaking to perform services, or a guarantee of results. Each matter notably depends on the relevant jurisdictions, the professionals involved, applicable timelines, regulatory constraints, transmitted information and the evolution of applicable circumstances.",
      },
      {
        title: "3. Initial review of situations",
        content: "Communications initiated through the website, forms or electronic exchanges allow a preliminary review of the situations presented. Such preliminary review does not constitute automatic acceptance of a matter, creation of a contractual relationship, a mandate, or a commitment to intervene. Any potential engagement is subject to further exchanges and, where necessary, separate contractual documentation.",
      },
      {
        title: "4. Involvement of external professionals",
        content: "Depending on the nature of the matters and the jurisdictions involved, certain operations may require the involvement of qualified external professionals, including lawyers, notaries, tax advisers, technical experts, banking institutions, fiduciaries or regulated professionals. The involvement of such professionals may be necessary to ensure the legal, regulatory, administrative or operational consistency of the relevant matters.",
      },
      {
        title: "5. International and multi-jurisdictional matters",
        content: "International situations frequently involve multiple jurisdictions, professionals, timelines and regulatory constraints. Timelines, procedures, execution conditions and documentary requirements may vary depending on the relevant countries, administrations, involved institutions and locally applicable obligations. Certain operations may require additional verifications, external approvals or specific formalities before implementation.",
      },
      {
        title: "6. Regulatory compliance and verifications",
        content: "In connection with certain international, patrimonial or real estate matters, additional verifications may be requested in order to comply with obligations relating to identification, compliance, due diligence, anti-money laundering and counter-terrorist financing obligations, documentary consistency and verification of transmitted information.",
      },
      {
        title: "7. Website use",
        content: "Users undertake to use the website in compliance with applicable laws and shall refrain from interfering with the operation of the website, attempting unauthorised access, transmitting unlawful or fraudulent content, or using the website for purposes contrary to applicable regulations.",
      },
      {
        title: "8. Intellectual property",
        content: "All content available on the website, including texts, editorial content, visual identity, logos, graphics, photographs, illustrations and website architecture, is protected under applicable intellectual property laws. Any reproduction, distribution, adaptation or use without prior written authorisation is prohibited.",
      },
      {
        title: "9. Limitation of liability",
        content: "CMB CONSEIL SA endeavours to provide coherent and regularly updated information. However, no guarantee is given regarding completeness of the content, absence of errors, permanent updating of information, or suitability of the content for a specific situation. Users remain solely responsible for the use they make of the information available on the website.",
      },
      {
        title: "10. Applicable law and jurisdiction",
        content: "These terms are governed by Luxembourg law. Any dispute relating to the use of the website or these terms shall, unless otherwise required by mandatory law, fall under the exclusive jurisdiction of the courts of Luxembourg City.",
      },
    ],
  },
};

export default function Page() {
  const { lang } = useLang();
  const t = c[lang];

  return (
    <main>
      <section className="legal-header container-ref">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.h1}</h1>
        <div className="about-manifesto-line" />
        <p className="legal-update">{t.update}</p>
        <p className="legal-intro">{t.intro}</p>
      </section>

      <section className="legal-body container-ref">
        {t.sections.map((s, i) => (
          <div className="legal-section" key={i}>
            <h2>{s.title}</h2>
            <p>{s.content}</p>
          </div>
        ))}
      </section>

      <section className="legal-footer container-ref">
        <Link href="/contact" className="btn-ref secondary" style={{ display: 'inline-flex' }}>
          {lang === 'fr' ? 'Présenter une situation →' : 'Present a situation →'}
        </Link>
      </section>
    </main>
  );
}
