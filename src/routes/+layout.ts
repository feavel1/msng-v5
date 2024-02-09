import type { LoadEvent } from "@sveltejs/kit";
import { addTranslations, setLocale, setRoute } from '$lib/translations';

export const load = async ({ data }: LoadEvent) => {
  if (!data) return;
  
  const { i18n, translations } = data;
  const { lang, route } = i18n;

  addTranslations(translations);

  await setRoute(route);
  await setLocale(lang);

  return i18n;
};