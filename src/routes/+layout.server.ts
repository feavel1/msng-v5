import { loadTranslations, translations } from '$lib/translations';

export async function load({ url, locals }: Record<string, Record<string, string>>) {
  const { pathname } = url;
  const { lang } = locals;

  const route = pathname.replace(new RegExp(`^/${lang}`), '');

  await loadTranslations(lang, route);

  return { i18n: { route, lang }, translations: translations.get() };
}