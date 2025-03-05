<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import { auth } from '$lib/firebase'
  import { onMount } from 'svelte'
  import { fade, fly, scale } from 'svelte/transition'

  let ready = false

  function start() {
    ready = true

    function update() {
      requestAnimationFrame(update)
      const els = document.querySelectorAll('.highlight') as NodeListOf<HTMLElement>
      for (const el of els) {
        const top = el.getBoundingClientRect().top
        const y = window.scrollY
        el.style.backgroundPosition = `${Math.min(Math.max(0, 1 - (1.5 * (y - top)) / window.innerHeight), 1) * 100}% 0%`
      }
    }

    update()
  }

  onMount(start)
</script>

{#if ready}
  <div class="hero auto">
    <h1 transition:fly={{ y: -32, duration: 750 }} data-scroll data-scroll-speed="0.2">
      Be an academic weapon!
    </h1>
    <p transition:fly={{ y: 32, duration: 750 }}>
      <span data-scroll data-scroll-speed="0.2">No cost.</span>
      <span data-scroll data-scroll-speed="0.1">No ads.</span>
      <span data-scroll data-scroll-speed="0.3">No tricks.</span>
      <span data-scroll data-scroll-speed="0.2">Just high quality study material.</span>
    </p>
    <div transition:fly={{ y: 32, duration: 750, delay: 250 }} class="buttons">
      {#if auth.currentUser}
        <Button click={(e) => window.open('/exam', '_self')}>Take the test</Button>
      {:else}
        <Button click={(e) => window.open('/join', '_self')}>Sign up</Button>
        <Button click={(e) => window.open('#about', '_self')}>
          Learn more <Icon fontSize={20}>arrow_downward</Icon>
        </Button>
      {/if}
    </div>
  </div>
  <div class="auto">
    <div class="preview" transition:scale={{ start: 0.5, duration: 750, delay: 500 }}>
      <iframe
        src="https://www.youtube.com/embed/6ZyTqfFCnjg"
        title="The solution feels like HACKING!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div class="auto parallax center">
    <h1 data-scroll data-scroll-speed="-0.25">LET'S GO</h1>
  </div>
  <div id="about" class="auto">
    <h2 class="highlight">Take your learning to the next level!</h2>
    <section>
      <div>
        <p>
          IGCSE Pages is an <a href="https://github.com/pihedron/igcse">open-source</a> project that
          aims to bridge the gap between learners and cutting-edge resourcses. Our team consists of
          volunteers from diverse backgrounds who sacrifice their time to make revision notes, topic
          questions, and interactive pages for <strong>YOU</strong>.
        </p>
      </div>
      <div class="center">
        <Icon fontSize={48}>sentiment_satisfied</Icon>
      </div>
    </section>
  </div>
{/if}

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 196px 32px 32px;
    overflow: auto;
  }

  .hero > * {
    text-align: center;
  }

  .hero h1 {
    margin: 0;
    color: transparent;
    background: linear-gradient(to right, var(--color), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    font-size: clamp(48px, 10vw, 96px);
  }

  .hero p {
    font-size: clamp(16px, 2.5vw, 24px);
  }

  .hero p span {
    display: inline-block;
  }

  .buttons {
    display: flex;
    gap: 8px;
  }

  .preview {
    margin: 64px 0;
    aspect-ratio: 16 / 9;
    font-size: 0;
  }

  .preview * {
    width: 100%;
    height: 100%;
    border: 2px solid var(--accent);
    border-radius: 16px;
    box-shadow: 0 0 16px 0 var(--accent);
  }

  .parallax {
    height: 25vh;
    overflow: hidden;
  }

  .parallax h1 {
    margin: 0;
    padding: 64px;
    text-align: center;
    font-size: 128px;
  }

  .highlight {
    --dim: color-mix(in oklab, var(--color), transparent 90%);
    width: fit-content;
    color: transparent;
    background: linear-gradient(
        to right,
        var(--color) 0%,
        var(--color) 50%,
        var(--dim) 50%,
        var(--dim) 100%
      )
      100% 0 / 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
  }
</style>
