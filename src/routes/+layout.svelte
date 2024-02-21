<script lang="ts">
  import { ParaglideJS } from "@inlang/paraglide-js-adapter-sveltekit";
  import { availableLanguageTags } from "$paraglide/runtime";
  import { page } from "$app/stores";

  import { i18n } from "$lib/i18n";
</script>

<ParaglideJS {i18n}>
  <div>
    {#each availableLanguageTags as lang}
      <a
        class="capitalize btn variant-filled-primary"
        href={i18n.route($page.url.pathname)}
        hreflang={lang}
        data-sveltekit-preload-data="off"
      >
        {lang}
      </a>
    {/each}
  </div>

  <slot />
</ParaglideJS>
