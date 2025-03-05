<script lang="ts">
  import { onMount } from 'svelte'
  import Icon from './Icon.svelte'

  type Theme = null | 'light' | 'dark'
  let themes: Theme[] = [null, 'light', 'dark']
  let index = 0

  onMount(() => {
    const stored = window.localStorage.getItem('theme')
    if (stored) index = parseInt(stored)
    select(index)
    document.documentElement.style.setProperty('--index', `${index * 44}px`)
  })

  function select(i: number) {
    index = i
    document.documentElement.style.setProperty('color-scheme', themes[index])
    document.documentElement.style.setProperty('--index', `${index * 44}px`)
    if (index)
      window.localStorage.setItem('theme', index.toString())
    else window.localStorage.removeItem('theme')
  }

  function keypress(e: KeyboardEvent, i: number) {
    if (e.key === ' ') select(i)
  }
</script>

<div class="toggle">
  <div class="indicator"></div>
  <div
    class="state"
    on:click={(e) => select(0)}
    tabindex="0"
    on:keypress={(e) => keypress(e, 0)}
  >
    <Icon fontSize="inherit">devices</Icon>
  </div>
  <div
    class="state"
    on:click={(e) => select(1)}
    tabindex="0"
    on:keypress={(e) => keypress(e, 1)}
  >
    <Icon fontSize="inherit">light_mode</Icon>
  </div>
  <div
    class="state"
    on:click={(e) => select(2)}
    tabindex="0"
    on:keypress={(e) => keypress(e, 2)}
  >
    <Icon fontSize="inherit">dark_mode</Icon>
  </div>
</div>

<style>
  .toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    width: 128px;
    background-color: color-mix(in oklab, var(--color), transparent 90%);
    border-radius: 24px;
  }

  .state {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 24px;
    color: var(--color);
    z-index: 1;
    cursor: pointer;
    transition: all 250ms;
  }

  .state:hover {
    background-color: color-mix(in oklab, var(--color), transparent 90%);
  }

  .indicator {
    position: absolute;
    transform: translateX(var(--index));
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--accent);
    transition: all 250ms;
  }
</style>
