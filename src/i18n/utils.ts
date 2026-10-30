import { translations, defaultLang, type Language, type TranslationKeys } from './translations';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as Language;
  }
  return defaultLang;
}

export function useTranslations(lang: Language): TranslationKeys {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // For default language (fr), don't add prefix
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }

  // For other languages, add prefix
  return `/${lang}/${cleanPath}`;
}

export function getAlternateLanguage(lang: Language): Language {
  return lang === 'fr' ? 'en' : 'fr';
}

export function getCurrentPath(url: URL, lang: Language): string {
  const pathname = url.pathname;

  // Remove language prefix if present
  if (lang !== defaultLang && pathname.startsWith(`/${lang}`)) {
    return pathname.slice(lang.length + 1) || '/';
  }

  return pathname;
}
