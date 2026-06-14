export type PublicChatRole = "user" | "assistant";

export interface PublicChatMessage {
  role: PublicChatRole;
  content: string;
}

export interface PublicLead {
  email: string;
  phone: string;
  name: string;
  company: string;
  topic: string;
}

export interface PublicRaphaelInput {
  lang?: "fr" | "en";
  messages: PublicChatMessage[];
}

export interface PublicRaphaelReply {
  reply: string;
  lead: PublicLead;
  confidentialRequest: boolean;
}

const EMPTY_LEAD: PublicLead = {
  email: "",
  phone: "",
  name: "",
  company: "",
  topic: "",
};

const CONFIDENTIAL_PATTERNS = [
  /cmb[\s_-]*lux/i,
  /gmail/i,
  /mcp__/i,
  /mémoire confidentielle/i,
  /memoire confidentielle/i,
  /dossiers?\s+internes?/i,
  /emails?\s+internes?/i,
  /secret/i,
  /mot de passe/i,
  /password/i,
];

const TOPICS = [
  { id: "structuration internationale", patterns: [/structure/i, /holding/i, /implantation/i, /international/i, /cross-border/i] },
  { id: "immobilier prive", patterns: [/immobilier/i, /acquisition/i, /resident/i, /non-résident/i, /real estate/i] },
  { id: "gouvernance entreprise", patterns: [/gouvernance/i, /entreprise/i, /société/i, /societe/i, /company/i, /advisory/i] },
  { id: "coaching IA", patterns: [/ia/i, /ai/i, /automatisation/i, /coaching/i] },
];

function lastUserText(messages: PublicChatMessage[]): string {
  return [...messages].reverse().find((m) => m.role === "user")?.content.trim() ?? "";
}

function extractEmail(text: string): string {
  return text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? "";
}

function extractPhone(text: string): string {
  return text.match(/(?:\+|00)?[0-9][0-9\s().-]{7,}[0-9]/)?.[0].replace(/\s+/g, " ").trim() ?? "";
}

function inferTopic(text: string): string {
  const found = TOPICS.find((topic) => topic.patterns.some((pattern) => pattern.test(text)));
  return found?.id ?? "";
}

function hasConfidentialRequest(text: string): boolean {
  return CONFIDENTIAL_PATTERNS.some((pattern) => pattern.test(text));
}

function buildLead(messages: PublicChatMessage[]): PublicLead {
  const userText = messages.filter((m) => m.role === "user").map((m) => m.content).join("\n");
  return {
    ...EMPTY_LEAD,
    email: extractEmail(userText),
    phone: extractPhone(userText),
    topic: inferTopic(userText),
  };
}

function publicScopeReply(lang: "fr" | "en"): string {
  if (lang === "en") {
    return "I can help with IDN Global Advisory's public services only: international structuring, private real estate, strategic governance and AI coaching. I cannot access or disclose confidential client files, internal email, private memory or operational tools. If you describe your situation, I can qualify it and prepare the next contact step.";
  }

  return "Je peux aider uniquement sur le périmètre public d'IDN Global Advisory : structuration internationale, immobilier privé, gouvernance stratégique et coaching IA. Je ne peux pas accéder ni divulguer les dossiers confidentiels, emails internes, mémoires privées ou outils opérationnels. Décrivez votre situation et je peux la qualifier pour préparer le bon échange.";
}

function qualificationReply(text: string, lead: PublicLead, lang: "fr" | "en"): string {
  const hasLuxembourg = /luxembourg/i.test(text);
  const hasDubai = /duba[iï]|uae|emirats|émirats/i.test(text);
  const jurisdictions = [
    hasLuxembourg ? "Luxembourg" : "",
    hasDubai ? (lang === "en" ? "Dubai / UAE" : "Dubaï / UAE") : "",
  ].filter(Boolean);

  if (lang === "en") {
    return [
      "I am Raphael, IDN's public advisory assistant. I can help qualify your situation before a first exchange.",
      lead.topic
        ? `Your request appears to concern ${lead.topic}.`
        : "IDN supports international structuring, private real estate acquisitions, strategic governance and AI coaching.",
      jurisdictions.length ? `The jurisdictions mentioned are ${jurisdictions.join(" and ")}.` : "",
      "To prepare the next step, please share your name, company if relevant, preferred contact method, email, phone number, target jurisdictions, timing and a short description of the situation.",
      lead.email || lead.phone
        ? "I have already detected part of your contact details and can use them for the qualification summary."
        : "You can also leave an email or phone number so IDN can follow up.",
    ].filter(Boolean).join(" ");
  }

  return [
    "Je suis Raphaël, l'assistant public d'IDN Global Advisory. Mon rôle est de qualifier votre situation avant un premier échange.",
    lead.topic
      ? `Votre demande semble concerner ${lead.topic}.`
      : "IDN intervient en structuration internationale, immobilier privé, gouvernance stratégique et coaching IA.",
    jurisdictions.length ? `Les juridictions mentionnées sont ${jurisdictions.join(" et ")}.` : "",
    "Pour préparer la suite, indiquez votre nom, la société si utile, le mode de contact préféré, email, téléphone, juridictions concernées, calendrier et une courte description du contexte.",
    lead.email || lead.phone
      ? "J'ai déjà repéré une partie de vos coordonnées et je peux les intégrer au résumé de qualification."
      : "Vous pouvez aussi laisser un email ou un téléphone pour être recontacté.",
  ].filter(Boolean).join(" ");
}

export function replyAsRaphaelPublic(input: PublicRaphaelInput): PublicRaphaelReply {
  const lang = input.lang === "en" ? "en" : "fr";
  const messages = Array.isArray(input.messages) ? input.messages : [];
  const text = lastUserText(messages).slice(0, 3000);
  const lead = buildLead(messages);
  const confidentialRequest = hasConfidentialRequest(text);

  return {
    lead,
    confidentialRequest,
    reply: confidentialRequest ? publicScopeReply(lang) : qualificationReply(text, lead, lang),
  };
}
