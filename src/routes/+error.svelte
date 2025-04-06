<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  let ready = false
  onMount(() => (ready = true))
</script>

<section>
  {#if ready}
    <div class="content">
      <span id="pill" transition:fly={{ y: -32, duration: 500 }}>{$page.status}</span>
      <h1 transition:fly={{ y: -32, duration: 500, delay: 250 }}>Bruh</h1>
      <p transition:fly={{ y: 32, duration: 500, delay: 500 }}>
        It looks like we've walked into an error. Sometimes navigating back to this page using links
        can fix the <em>500</em> internal error. A <em>404</em> error usually means I didn't have time to make notes
        for this subject or chapter.
      </p>
      <p transition:fly={{ y: 32, duration: 500, delay: 750 }}>
        If you think this is a mistake, please
        <a href="https://github.com/pihedron/igcse/issues" target="_blank">open an issue</a>
        so I can fix it.
      </p>
      <h2>Hacker Stuff</h2>
      <p>This is for debugging.</p>
      <code>{$page.error?.message}</code>
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: auto;
  }

  .content {
    display: block;
    margin-top: 128px;
    width: 640px;
    text-align: center;
  }

  :is(h1, h2) {
    display: flex;
    justify-content: center;
    margin: 0;
  }

  #pill {
    margin: 0 0 8px;
    padding: 4px 16px;
    border: 2px solid var(--color);
    border-radius: 100vmax;
    text-transform: uppercase;
    font-size: 16px;
    display: inline-flex;
    width: fit-content;
  }
</style>
