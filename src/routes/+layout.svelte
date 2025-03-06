<script lang="ts">
  import { onMount } from 'svelte'
  import Button from '$lib/components/Button.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import '../app.css'
  import '$lib/scroll.css'
  import { store } from '$lib/firebase'
  import Icon from '$lib/components/Icon.svelte'
  import Themer from '$lib/components/Themer.svelte'
  import { ScrollWrapper } from '@shentohendriks/svelte-smoothscroll'

  let verified = false
  $: links = [
    {
      name: 'Exams',
      href: '/exams'
    },
    verified
      ? {
          name: 'Account',
          href: '/account'
        }
      : {
          name: 'Join',
          href: '/join'
        }
  ]

  store.subscribe((data) => {
    verified = data.verified
  })

  let open = false
</script>

<svelte:head>
  <meta name="og:title" content="IGCSE Pages" />
  <meta name="og:description" content="Be an academic weapon!" />
  <meta name="og:url" content="https://igcse.pages.dev" />
  <title>IGCSE Pages</title>
</svelte:head>

<header class:open>
  <div class="auto">
    <div class="links">
      <div class="box">
        <a id="logo" class="center" href="/">
          <svg height="48px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M96 160H160H224H288H352H416V224H352V352H288V224H224V416H160V224H96V160Z"
            />
          </svg>
          <span>IGCSE Pages</span>
        </a>
        <div class="menu" on:click={(e) => (open = !open)}>
          <Icon fontSize={32}>menu</Icon>
        </div>
      </div>
      <Nav {links}></Nav>
    </div>
    <Themer></Themer>
  </div>
</header>
<ScrollWrapper settings={{ smoothWheel: true }}>
  <main class="top">
    <slot></slot>
  </main>
</ScrollWrapper>
<footer>
  <svg height="128px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M96 160H160H224H288H352H416V224H352V352H288V224H224V416H160V224H96V160Z"
    />
  </svg>
</footer>

<style>
  #logo {
    padding-right: 32px;
    height: 100%;
    transition: all 250ms;
  }

  #logo path {
    fill: var(--color);
    stroke: var(--color);
    stroke-width: 4px;
    stroke-dasharray: 290%;
    stroke-dashoffset: 290%;
    shape-rendering: crispEdges;
    transition:
      fill 250ms,
      stroke-dashoffset 500ms 250ms;
  }

  #logo:hover,
  #logo:focus {
    color: var(--accent);
  }

  #logo:hover path,
  #logo:focus path {
    fill: transparent;
    stroke-dashoffset: 0;
  }

  #logo span {
    margin-left: 16px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer path {
    fill: transparent;
    stroke: var(--bg);
    stroke-width: 16px;
    shape-rendering: crispEdges;
    stroke-dasharray: 290%;
    stroke-dashoffset: 290%;
    animation: stroke 2000ms linear infinite;
  }

  @media screen and (max-width: 640px) {
    .open {
      height: 100vh;
      background-color: color-mix(in oklab, var(--bg), transparent 15%);
      backdrop-filter: blur(2px);
    }

    .box {
      width: 100%;
      height: var(--nav);
    }

    .links {
      width: 100%;
      flex-direction: column;
    }

    #logo {
      padding-left: 32px;
    }
  }

  @keyframes stroke {
    0% {
      stroke-dashoffset: 290%;
    }

    100% {
      stroke-dashoffset: -290%;
    }
  }
</style>
