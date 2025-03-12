<script lang="ts">
  import { onMount } from 'svelte'
  import { fly, scale } from 'svelte/transition'
  import { cie } from '$lib'
  import { page } from '$app/state'
  import Icon from '$lib/components/Icon.svelte'

  let ready = false

  onMount(() => (ready = true))
</script>

{#if ready}
  <div class="auto" transition:fly={{ y: -32, duration: 750 }}>
    <h1 class="center">CIE</h1>
    <hr transition:scale={{ delay: 250, duration: 750 }} />
    <div class="grid">
      {#each cie as course}
        <a href={page.url.pathname + '/' + course.code} class="card">
          <div class="thumb">
            <div class="icon center">
              <Icon fontSize={64}>{course.icon}</Icon>
            </div>
          </div>
          <div class="text">
            <div class="title">
              <span>{course.title}</span>
            </div>
            <div class="info">{course.info}</div>
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    margin: 32px 0;
  }

  .card {
    display: flex;
    align-items: center;
    border: 2px solid var(--color);
    border-radius: 8px;
    cursor: pointer;
    transition: all 250ms;
  }

  .thumb {
    position: relative;
    width: 128px;
    height: 128px;
    padding: 16px;
  }

  .text {
    width: 0;
    flex-grow: 1;
    padding: 16px 16px 16px 0;
    text-overflow: ellipsis;
  }

  .title {
    margin-bottom: 16px;
  }

  .info {
    font-size: 16px;
    opacity: 0.75;
  }

  .icon {
    height: 100%;
    transition: all 250ms;
  }

  .card:hover {
    border-color: var(--accent);
  }

  .card:hover .thumb .icon {
    transform: scale(1.1);
  }

  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
