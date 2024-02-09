<script lang="ts">
  import { t, locales, locale } from '$lib/translations';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  let count = $state(2);
  let route = $derived($page.data.route);

  const switchLocale = (event: Event & { currentTarget: HTMLSelectElement }) => {
    goto(event.currentTarget.value);
  }
</script>

<a href="/{$locale}">{$t('menu.home')}</a>
<a href="/{$locale}/about">{$t('menu.about')}</a>
<br/>
<br/>
{$t('menu.notification', { count })}<br />
<button on:click="{() => {if (count) count -= 1;}}">–</button>
<button on:click="{() => {count += 1;}}">+</button>
<hr />
<slot />
<br />
<br />
<br />
<br />
{route}
<select on:change={switchLocale}>
  {#each $locales as lc}
    <option value="/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
  {/each}
</select>