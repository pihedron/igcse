<script lang="ts">
  import { onMount } from 'svelte'
  import { fly, scale } from 'svelte/transition'
  import { listFiles, type SearchResult } from '$lib/linker'
  import { page } from '$app/state'
  import Icon from '$lib/components/Icon.svelte'

  let files: SearchResult[]

  let ready = false

  onMount(() => {
    ready = true
    files = listFiles(import.meta.glob('./**/+page.svelte', { as: 'raw', eager: true }))
  })
</script>

{#if ready}
  <div class="auto">
    <h1 class="center" transition:fly={{ y: -32, duration: 750 }}>IGCSE Mathematics</h1>
    <hr transition:scale={{ delay: 250, duration: 750 }} />
    <div class="auto" transition:fly={{ y: 32, duration: 750 }}>
      <h2>Topics</h2>
      <ul>
        {#each files as file}
          <li>
            <a href={page.url.pathname + '/' + file.link}>{file.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

<style>
</style>
