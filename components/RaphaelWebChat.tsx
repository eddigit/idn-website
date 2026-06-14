'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';

type ChatRole = 'user' | 'assistant';

interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface LeadState {
  email: string;
  phone: string;
  topic: string;
}

const introFr =
  "Bonjour, je suis Raphaël, assistant public d'IDN. Je peux qualifier votre situation, expliquer l'activité du cabinet et préparer un premier échange confidentiel.";

const introEn =
  "Hello, I am Raphael, IDN's public assistant. I can qualify your situation, explain the firm's activity and prepare a confidential first exchange.";

const quickFr = [
  'Je veux structurer une activité internationale',
  'Je prépare une acquisition immobilière',
  'Je souhaite être recontacté',
];

const quickEn = [
  'I need international structuring',
  'I am preparing a real estate acquisition',
  'I would like to be contacted',
];

export default function RaphaelWebChat() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [lead, setLead] = useState<LeadState>({ email: '', phone: '', topic: '' });
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: lang === 'en' ? introEn : introFr },
  ]);

  const labels = useMemo(
    () =>
      lang === 'en'
        ? {
            title: 'Raphael',
            subtitle: 'IDN public assistant',
            cta: 'Open chat',
            close: 'Close',
            placeholder: 'Describe your situation, jurisdiction, timing, email or phone...',
            send: 'Send',
            typing: 'Raphael is qualifying...',
            summary: 'Detected contact',
            scope: 'Public advisory only. No confidential internal data.',
            error: 'The chat is temporarily unavailable. Please use the contact page.',
            quick: quickEn,
          }
        : {
            title: 'Raphaël',
            subtitle: 'Assistant public IDN',
            cta: 'Ouvrir le chat',
            close: 'Fermer',
            placeholder: 'Décrivez la situation, juridiction, calendrier, email ou téléphone...',
            send: 'Envoyer',
            typing: 'Raphaël qualifie...',
            summary: 'Contact détecté',
            scope: 'Conseil public uniquement. Aucune donnée interne confidentielle.',
            error: 'Le chat est temporairement indisponible. Utilisez la page contact.',
            quick: quickFr,
          },
    [lang],
  );

  async function sendMessage(content: string) {
    const clean = content.trim();
    if (!clean || busy) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: clean }];
    setMessages(nextMessages);
    setInput('');
    setBusy(true);

    try {
      const res = await fetch('/api/raphael-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, messages: nextMessages }),
      });

      if (!res.ok) throw new Error(`chat_${res.status}`);
      const data = await res.json();
      setMessages([...nextMessages, { role: 'assistant', content: String(data.reply || labels.error) }]);
      setLead({
        email: data.lead?.email || lead.email,
        phone: data.lead?.phone || lead.phone,
        topic: data.lead?.topic || lead.topic,
      });
    } catch {
      setMessages([...nextMessages, { role: 'assistant', content: labels.error }]);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="raphael-chat" data-open={open ? 'true' : 'false'}>
      {open && (
        <section className="raphael-panel" aria-label="Raphaël webchat IDN">
          <div className="raphael-head">
            <div>
              <p>{labels.subtitle}</p>
              <h2>{labels.title}</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={labels.close}>
              ×
            </button>
          </div>

          <div className="raphael-messages">
            {messages.map((message, index) => (
              <div className={`raphael-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </div>
            ))}
            {busy && <div className="raphael-message assistant">{labels.typing}</div>}
          </div>

          <div className="raphael-quick">
            {labels.quick.map((item) => (
              <button type="button" key={item} onClick={() => void sendMessage(item)}>
                {item}
              </button>
            ))}
          </div>

          {(lead.email || lead.phone || lead.topic) && (
            <div className="raphael-lead">
              <strong>{labels.summary}</strong>
              {lead.topic && <span>{lead.topic}</span>}
              {lead.email && <span>{lead.email}</span>}
              {lead.phone && <span>{lead.phone}</span>}
            </div>
          )}

          <form className="raphael-form" onSubmit={onSubmit}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={labels.placeholder}
              rows={3}
            />
            <button type="submit" disabled={busy || !input.trim()}>
              {labels.send}
            </button>
          </form>
          <p className="raphael-scope">{labels.scope}</p>
        </section>
      )}

      <button className="raphael-launcher" type="button" onClick={() => setOpen(true)} aria-label={labels.cta}>
        <span>R</span>
        <small>{labels.title}</small>
      </button>
    </div>
  );
}
