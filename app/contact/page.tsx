'use client';
import { useState, FormEvent } from 'react';
import { useLang } from '@/contexts/LanguageContext';

const content = {
  fr: {
    eyebrow: "Échange confidentiel",
    h1: "Une première lecture, tenue avec discrétion.",
    intro: "Certaines situations nécessitent une lecture préalable avant toute décision. Les demandes transmises ici sont qualifiées, traitées avec méthode et examinées dans un cadre confidentiel.",
    leftTitle: "Ce que nous attendons",
    leftP1: "Quelques lignes suffisent pour décrire le contexte, la nature du sujet et la géographie concernée. La précision du dossier vient lors d'une première conversation.",
    leftP2: "Toutes les demandes ne peuvent pas être acceptées. Une qualification préalable est systématique.",
    confTitle: "Confidentialité",
    confText: "Les informations transmises sont traitées dans un cadre confidentiel et utilisées exclusivement pour qualifier la situation. Aucune transmission à des tiers sans accord explicite.",
    directTitle: "Contact direct",
    directText: "+352 621 761 838\nLuxembourg · Europe · International",
    fName: "Nom",
    fNamePh: "Votre nom",
    fSociete: "Société (optionnel)",
    fSocietePh: "Nom de la société si applicable",
    fEmail: "Email",
    fEmailPh: "votre@email.com",
    fPhone: "Téléphone (optionnel)",
    fPhonePh: "+352 / +33 / +41...",
    fType: "Nature de la situation",
    fTypePh: "Structuration internationale, immobilier, gouvernance, implantation...",
    fJur: "Juridictions concernées",
    fJurPh: "Luxembourg, France, UAE, Portugal...",
    fUrgence: "Calendrier",
    fUrgencePh: "Urgent / Dans les 3 mois / En cours de réflexion",
    fMessage: "Description",
    fMessagePh: "Quelques lignes sur le contexte et la situation.",
    fContact: "Mode de contact préféré",
    fContactPh: "Email / Téléphone / Appel vidéo",
    submit: "Soumettre le dossier",
    submitting: "Envoi en cours...",
    privacy: "",
    confirmTitle: "Votre demande a été transmise.",
    confirmText: "Elle sera examinée avant toute prise de contact.",
    errGeneric: "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.",
    errName: "Le nom est requis.",
    errEmail: "Une adresse email valide est requise.",
    errMessage: "Une description est requise.",
  },
  en: {
    eyebrow: "Confidential conversation",
    h1: "A prior reading, held with discretion.",
    intro: "Certain situations require a preliminary reading before any decision. Requests submitted here are qualified, handled with method and examined within a confidential framework.",
    leftTitle: "What we need",
    leftP1: "A few lines are sufficient to describe the context, the nature of the matter and the geography involved. File precision comes during a first conversation.",
    leftP2: "Not all requests can be accepted. A preliminary qualification is systematic.",
    confTitle: "Confidentiality",
    confText: "Information submitted is treated confidentially and used exclusively to qualify the situation. No transmission to third parties without explicit agreement.",
    directTitle: "Direct contact",
    directText: "+352 621 761 838\nLuxembourg · Europe · International",
    fName: "Name",
    fNamePh: "Your name",
    fSociete: "Company (optional)",
    fSocietePh: "Company name if applicable",
    fEmail: "Email",
    fEmailPh: "your@email.com",
    fPhone: "Phone (optional)",
    fPhonePh: "+352 / +33 / +41...",
    fType: "Nature of the matter",
    fTypePh: "International structuring, real estate, governance, establishment...",
    fJur: "Jurisdictions involved",
    fJurPh: "Luxembourg, France, UAE, Portugal...",
    fUrgence: "Timeline",
    fUrgencePh: "Urgent / Within 3 months / Under consideration",
    fMessage: "Description",
    fMessagePh: "A few lines on the context and situation.",
    fContact: "Preferred contact method",
    fContactPh: "Email / Phone / Video call",
    submit: "Submit the file",
    submitting: "Sending...",
    privacy: "",
    confirmTitle: "Your request has been submitted.",
    confirmText: "It will be reviewed before any contact is made.",
    errGeneric: "An error occurred. Please retry or call us directly.",
    errName: "Name is required.",
    errEmail: "A valid email address is required.",
    errMessage: "A description is required.",
  },
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { lang } = useLang();
  const c = content[lang];

  const [form, setForm] = useState({
    name: '',
    societe: '',
    email: '',
    phone: '',
    type: '',
    jur: '',
    urgence: '',
    message: '',
    contact: '',
    company_url: '', // honeypot
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState<string>('');

  const onChange = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrMsg('');

    if (!form.name.trim()) { setStatus('error'); setErrMsg(c.errName); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) { setStatus('error'); setErrMsg(c.errEmail); return; }
    if (!form.message.trim()) { setStatus('error'); setErrMsg(c.errMessage); return; }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        setStatus('error');
        setErrMsg(c.errGeneric);
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrMsg(c.errGeneric);
    }
  };

  return (
    <main>
      <section className="contact-v2 container-ref">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.h1}</h1>
        <p className="contact-v2-intro">{c.intro}</p>

        <div className="contact-v2-grid">
          <div className="contact-info-card">
            <h2>{c.leftTitle}</h2>
            <p>{c.leftP1}</p>
            <p>{c.leftP2}</p>
            <div className="contact-info-note">
              <strong>{c.confTitle}</strong>
              <p>{c.confText}</p>
            </div>
            <div className="contact-info-note" style={{ marginTop: 14 }}>
              <strong>{c.directTitle}</strong>
              <p style={{ whiteSpace: 'pre-line' }}>{c.directText}</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="contact-form-v2" aria-live="polite">
              <div className="contact-info-note" style={{ padding: '24px' }}>
                <strong style={{ fontSize: '1.15rem', display: 'block', marginBottom: '10px' }}>
                  {c.confirmTitle}
                </strong>
                <p>{c.confirmText}</p>
              </div>
            </div>
          ) : (
            <form className="contact-form-v2" onSubmit={onSubmit} noValidate>
              <div className="contact-form-row">
                <div className="field">
                  <label>{c.fName}</label>
                  <input type="text" placeholder={c.fNamePh} autoComplete="name"
                    value={form.name} onChange={onChange('name')} required />
                </div>
                <div className="field">
                  <label>{c.fSociete}</label>
                  <input type="text" placeholder={c.fSocietePh} autoComplete="organization"
                    value={form.societe} onChange={onChange('societe')} />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="field">
                  <label>{c.fEmail}</label>
                  <input type="email" placeholder={c.fEmailPh} autoComplete="email"
                    value={form.email} onChange={onChange('email')} required />
                </div>
                <div className="field">
                  <label>{c.fPhone}</label>
                  <input type="tel" placeholder={c.fPhonePh} autoComplete="tel"
                    value={form.phone} onChange={onChange('phone')} />
                </div>
              </div>
              <div className="field">
                <label>{c.fType}</label>
                <input type="text" placeholder={c.fTypePh}
                  value={form.type} onChange={onChange('type')} />
              </div>
              <div className="contact-form-row">
                <div className="field">
                  <label>{c.fJur}</label>
                  <input type="text" placeholder={c.fJurPh}
                    value={form.jur} onChange={onChange('jur')} />
                </div>
                <div className="field">
                  <label>{c.fUrgence}</label>
                  <input type="text" placeholder={c.fUrgencePh}
                    value={form.urgence} onChange={onChange('urgence')} />
                </div>
              </div>
              <div className="field">
                <label>{c.fMessage}</label>
                <textarea placeholder={c.fMessagePh}
                  value={form.message} onChange={onChange('message')} required />
              </div>
              <div className="field">
                <label>{c.fContact}</label>
                <input type="text" placeholder={c.fContactPh}
                  value={form.contact} onChange={onChange('contact')} />
              </div>

              {/* Honeypot anti-spam — invisible, hors flux */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <label>Company URL (leave empty)</label>
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_url}
                  onChange={onChange('company_url')}
                />
              </div>

              <div className="contact-submit">
                <button
                  type="submit"
                  className="btn-ref primary"
                  disabled={status === 'submitting'}
                  style={{ cursor: status === 'submitting' ? 'wait' : 'pointer' }}
                >
                  {status === 'submitting' ? c.submitting : `${c.submit} →`}
                </button>
                {status === 'error' && errMsg && (
                  <p className="contact-privacy" role="alert" style={{ color: '#a02020', marginTop: 10 }}>
                    {errMsg}
                  </p>
                )}
                {c.privacy && <p className="contact-privacy">{c.privacy}</p>}
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
