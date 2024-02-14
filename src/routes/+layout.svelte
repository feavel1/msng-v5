<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit'
  import { availableLanguageTags } from "$paraglide/runtime";
  import { page } from "$app/stores";
	import { i18n } from '$lib/i18n'
</script>

<ParaglideJS {i18n}>
	<slot />

	{#each availableLanguageTags as lang}
		<a href={i18n.route($page.url.pathname)} hreflang={lang}>{lang}</a> &nbsp;
	{/each}
</ParaglideJS>