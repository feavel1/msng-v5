import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';
import lang from './lang.json';

const config: Config<Record<string, string | number>> = {
  translations: {
    en: { lang },
    de: { lang },
    cs: { lang },
    ru: { lang },
  },
  loaders: ['en', 'cs', 'de', 'ru'].map(lang => ([
    {
      locale: lang,
      key: 'menu',
      loader: async () => (await import(`./${lang}/menu.json`)).default,
    },
    {
      locale: lang,
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import(`./${lang}/home.json`)).default,
    },
    {
      locale: lang,
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import(`./${lang}/about.json`)).default,
    },
    {
      locale: lang,
      key: 'error',
      routes: ['error'],
      loader: async () => (await import(`./${lang}/error.json`)).default,
    },
  ])).flat()
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n(config);

// Translations logs
loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log('Loading translations...');

    await loading.toPromise();
    console.log('Updated translations', translations.get());
  }
});