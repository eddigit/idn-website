import type { MetadataRoute } from 'next';

const jurisdictions = [
  'luxembourg','suisse','france','portugal','espagne','italie',
  'royaume-uni','dubai-uae','singapour','ile-maurice','panama','bulgarie',
  'monaco','hong-kong','etats-unis','roumanie','bali',
];

const mainRoutes = [
  '','/international','/immobilier','/entreprises',
  '/juridictions','/a-propos','/contact','/publications',
  '/mentions-legales','/politique-de-confidentialite','/conditions-utilisation',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const main = mainRoutes.map(r => ({
    url: `https://idn-global-advisory.com${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.8,
  }));
  const jur = jurisdictions.map(s => ({
    url: `https://idn-global-advisory.com/juridictions/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  return [...main, ...jur];
}
