<script lang="ts">
  import { onMount } from 'svelte'
  import { fly, scale } from 'svelte/transition'
  import { exams } from '$lib'
  import { page } from '$app/state'
    import Icon from '$lib/components/Icon.svelte'

  let ready = false

  onMount(() => (ready = true))
</script>

{#if ready}
  <div class="auto" transition:fly={{ y: -32, duration: 750 }}>
    <h1 class="center">Exams</h1>
    <hr transition:scale={{ delay: 250, duration: 750 }}/>
    <div class="grid">
      {#each exams as exam}
        <a href={page.url.pathname + '/' + exam.path} class="card">
          <div class="thumb">
            <img src={exam.img} alt="Thumbnail">
            <div class="icon">
              <Icon fontSize={64}>school</Icon>
            </div>
          </div>
          <div class="text">
            <div class="title">
              <span>{exam.title}</span>
            </div>
            <div class="info">{exam.info}</div>
          </div>
        </a>
      {/each}
    </div>
  </div>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 32px;
    margin: 32px 0;
  }

  .card {
    height: 400px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0 color-mix(in oklab, var(--bg), black 50%);
    overflow: hidden;
    cursor: pointer;
  }

  .thumb {
    position: relative;
    width: 100%;
    height: 256px;
    overflow: hidden;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 250ms;
  }

  .text {
    padding: 16px;
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
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 250ms;
  }

  .card:hover .thumb img {
    filter: brightness(50%);
    transform: scale(1.1);
  }

  .card:hover .thumb .icon {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 640px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>