'use client';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

const c = {
  fr: {
    eyebrow: "Protection des données",
    h1: "Politique de confidentialité.",
    update: "Dernière mise à jour : à compléter",
    intro: "La présente Politique de confidentialité et de conformité réglementaire décrit les conditions dans lesquelles CMB CONSEIL SA, exploitée sous la marque IDN Global Advisory, collecte, utilise, conserve et traite certaines données dans le cadre de ses activités, de l'utilisation du site internet et des échanges initiés avec les utilisateurs.",
    sections: [
      {
        title: "1. Responsable du traitement",
        content: "CMB CONSEIL SA — 4 Rue d'Arlon, L-8399 Windhof, Luxembourg. RCS Luxembourg : B261378. TVA intracommunautaire : LU34010738. Activité : Conseil pour les affaires et autres conseils de gestion (NACE 70.22). Contact : idngbadvisory@gmail.com — +352 621 761 838.",
      },
      {
        title: "2. Nature des données collectées",
        content: "Selon la nature des échanges, des dossiers et des opérations concernées, les données suivantes peuvent être collectées et traitées : données d'identification ; coordonnées personnelles et professionnelles ; informations patrimoniales, immobilières ou entrepreneuriales ; documents transmis volontairement ; informations relatives aux structures, contreparties ou bénéficiaires effectifs ; informations nécessaires à certaines vérifications réglementaires ; données techniques liées à l'utilisation du site et aux communications électroniques.",
      },
      {
        title: "3. Finalités du traitement",
        content: "Les données sont traitées uniquement dans le cadre de la première lecture des situations présentées ; des échanges avec les utilisateurs ; de l'analyse préliminaire des dossiers ; de l'organisation et du suivi des échanges ; de la préparation ou de l'exécution éventuelle de prestations ; des obligations administratives et réglementaires applicables ; des obligations de conformité, de vigilance, d'identification et de vérification ; de la prévention du blanchiment et du financement du terrorisme ; de la conservation documentaire nécessaire au suivi des dossiers.",
      },
      {
        title: "4. Bases juridiques du traitement",
        content: "Les traitements effectués reposent notamment sur l'exécution de mesures précontractuelles ; l'intérêt légitime lié à l'analyse et au suivi des dossiers ; le respect des obligations légales et réglementaires applicables ; le consentement lorsque celui-ci est requis.",
      },
      {
        title: "5. Conformité réglementaire, KYC et obligations de vigilance",
        content: "Dans le cadre de certaines opérations, notamment internationales, immobilières, patrimoniales ou impliquant plusieurs juridictions, des vérifications complémentaires peuvent être nécessaires afin de satisfaire aux obligations applicables en matière d'identification, de conformité, de vigilance, de lutte contre le blanchiment et le financement du terrorisme, de vérification documentaire et de cohérence des informations transmises. Des documents complémentaires peuvent notamment être demandés concernant l'identité des personnes concernées, les structures impliquées, les bénéficiaires effectifs, l'origine des fonds, les contreparties et les opérations concernées.",
      },
      {
        title: "6. Transmission des données",
        content: "Les données restent strictement limitées aux besoins du traitement des dossiers concernés. Selon la nature des opérations et lorsque cela est nécessaire, certaines informations peuvent être transmises à des avocats, notaires, fiscalistes, experts techniques, fiduciaires, établissements bancaires, partenaires spécialisés, intervenants réglementés, autorités ou administrations compétentes lorsque la loi ou une obligation réglementaire l'exige.",
      },
      {
        title: "7. Formulaires, communications et échanges documentaires",
        content: "Les informations transmises via le site peuvent être reçues par courrier électronique et intégrées dans les dossiers internes liés aux échanges ou projets concernés. Selon la nature des dossiers, certains documents peuvent être conservés dans des espaces documentaires internes sécurisés destinés au suivi administratif, immobilier, patrimonial ou opérationnel des situations traitées.",
      },
      {
        title: "8. Conservation des données",
        content: "Les données sont conservées pendant une durée cohérente avec la nature des échanges, le suivi des dossiers, les obligations administratives et les obligations réglementaires applicables en matière de conformité et de conservation documentaire.",
      },
      {
        title: "9. Cookies et données techniques",
        content: "Le site peut utiliser certains outils techniques ou analytiques destinés à améliorer la stabilité du site, les performances, la sécurité et l'expérience utilisateur. Aucune exploitation commerciale agressive des données personnelles n'est réalisée.",
      },
      {
        title: "10. Droits des personnes concernées",
        content: "Conformément au Règlement Général sur la Protection des Données (RGPD), toute personne concernée dispose notamment des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et à la portabilité lorsque applicable. Les demandes relatives au traitement des données peuvent être adressées à : idngbadvisory@gmail.com.",
      },
      {
        title: "11. Droit applicable et juridiction compétente",
        content: "La présente politique est soumise au droit luxembourgeois. Tout litige relatif à la présente politique, à la protection des données ou à l'utilisation du site relève, sauf disposition impérative contraire, de la compétence exclusive des tribunaux de Luxembourg-Ville.",
      },
    ],
  },
  en: {
    eyebrow: "Data protection",
    h1: "Privacy policy.",
    update: "Last updated: to be completed",
    intro: "This Privacy and Regulatory Compliance Policy describes how CMB CONSEIL SA, operating under the brand IDN Global Advisory, collects, uses, stores and processes certain data in connection with its activities, the use of the website and communications initiated with users.",
    sections: [
      {
        title: "1. Data Controller",
        content: "CMB CONSEIL SA — 4 Rue d'Arlon, L-8399 Windhof, Luxembourg. Luxembourg Trade Register: B261378. VAT number: LU34010738. Business activity: Business and management consultancy activities (NACE 70.22). Contact: idngbadvisory@gmail.com — +352 621 761 838.",
      },
      {
        title: "2. Categories of Data Collected",
        content: "Depending on the nature of the communications, matters and operations concerned, the following categories of data may be collected and processed: identification data; personal and professional contact information; patrimonial, real estate or business-related information; documents voluntarily transmitted; information relating to structures, counterparties or beneficial owners; information required for certain regulatory verifications; technical data relating to website usage and electronic communications.",
      },
      {
        title: "3. Purposes of Processing",
        content: "Data is processed exclusively for the purposes of preliminary review of submitted situations; communications with users; preliminary assessment of matters; organisation and follow-up of exchanges; preparation or possible execution of services; compliance with applicable administrative and regulatory obligations; compliance, due diligence, identification and verification obligations; prevention of money laundering and terrorist financing; document retention necessary for the follow-up of matters.",
      },
      {
        title: "4. Legal Basis for Processing",
        content: "The processing activities carried out are notably based on the implementation of pre-contractual measures; legitimate interests relating to the analysis and follow-up of matters; compliance with applicable legal and regulatory obligations; consent where required.",
      },
      {
        title: "5. Regulatory Compliance, KYC and Due Diligence",
        content: "In connection with certain international, real estate, patrimonial or multi-jurisdictional matters, additional verifications may be required to comply with applicable obligations relating to identification, regulatory compliance, due diligence, anti-money laundering and counter-terrorist financing obligations, documentary verification and consistency of transmitted information. Additional documents may be requested regarding the identity of the persons concerned, involved structures, beneficial owners, source of funds, counterparties and relevant operations.",
      },
      {
        title: "6. Disclosure of Data",
        content: "Data remains strictly limited to what is necessary for the handling of the relevant matters. Depending on the nature of the operations and where necessary, certain information may be disclosed to lawyers, notaries, tax advisers, technical experts, fiduciaries, banking institutions, specialised partners, regulated professionals, competent authorities or administrations where required by law or regulatory obligations.",
      },
      {
        title: "7. Forms, Communications and Document Exchanges",
        content: "Information transmitted through the website may be received by email and integrated into internal files relating to the relevant exchanges or projects. Depending on the nature of the matters, certain documents may be stored in secured internal documentation environments for administrative, real estate, patrimonial or operational follow-up purposes.",
      },
      {
        title: "8. Data Retention",
        content: "Data is retained for a period consistent with the nature of the exchanges, the follow-up of matters, administrative obligations and regulatory compliance and document retention requirements.",
      },
      {
        title: "9. Cookies and Technical Data",
        content: "The website may use certain technical or analytical tools intended to improve website stability, performance, security and user experience. No aggressive commercial exploitation of personal data is carried out.",
      },
      {
        title: "10. Rights of Data Subjects",
        content: "In accordance with the General Data Protection Regulation (GDPR), data subjects notably benefit from the rights of access, rectification, erasure, restriction of processing, objection and data portability where applicable. Requests relating to personal data processing may be addressed to: idngbadvisory@gmail.com.",
      },
      {
        title: "11. Applicable Law and Jurisdiction",
        content: "This policy is governed by Luxembourg law. Any dispute relating to this policy, data protection or the use of the website shall, unless otherwise required by mandatory law, fall under the exclusive jurisdiction of the courts of Luxembourg City.",
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
