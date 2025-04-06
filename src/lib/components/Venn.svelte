<script lang="ts">
  import { math } from '$lib/katex'
  import Icon from './Icon.svelte'
  import { scale } from 'svelte/transition'

  let open = false

  let latex = `(A' @cup B')'`

  $: latex

  let forward: Record<string, string> = {
    '(': ')'
  }

  let backward: Record<string, string> = {
    ')': '('
  }

  let mapping: Record<string, string> = {
    pac: '&&',
    puc: '||'
  }

  function isLetter(c: string) {
    return c.toLowerCase() != c.toUpperCase()
  }

  function convert(latex: string) {
    let expression = ''
    let word = ''
    for (let i = latex.length - 1; i >= 0; i--) {
      if (latex[i] == ' ') {
        if (word in mapping) word = mapping[word]
        expression += word
        word = ''
        continue
      }

      if (latex[i] == `'`) {
        word += '!'
        continue
      }

      if (latex[i] in forward) {
        word += forward[latex[i]]
      }

      if (latex[i] in backward) {
        word += backward[latex[i]]
      }

      if (isLetter(latex[i])) {
        word += latex[i]
      }
    }

    expression += word

    try {
      return new Function('A', 'B', `return ${expression}`)
    } catch(error) {
      console.log('error')
    }

    return (A: boolean, B: boolean) => false
  }

  let f = (a: boolean, b: boolean) => {
    let circuit = convert(latex)
    try {
      return circuit(a, b)
    } catch (error) {
      return false
    }
  }
</script>

<div class="venn">
  <div class="center universal" class:true={f(false, false)}>
    <div class="center set a" class:true={f(true, false)}>
      <span class="tf">{@html math(`A @cap B'`)}</span>
    </div>
    <div class="center set b" class:true={f(false, true)}>
      <span class="ft">{@html math(`A' @cap B`)}</span>
    </div>
    <div class="border a"></div>
    <div class="border b"></div>
    <div class="center lens" class:true={f(true, true)}>
      <span class="tt">{@html math(`A @cap B`)}</span>
    </div>
    <span class="ff">{@html math(`A' @cap B'`)}</span>
  </div>
</div>
<div class="builder">
  <div class="katex-display">
    {@html math(latex)}
  </div>
  <div class="center keyboard">
    <input bind:value={latex} />
    <div class="help" on:click={() => (open = !open)}>
      <Icon fontSize={32}>help</Icon>
      {#if open}
        <div class="hint" transition:scale={{ duration: 250 }}>
          Use <code>@cap</code> for intersection and <code>@cup</code> for union.
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .venn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 1em;
    width: 100%;
  }

  :is(.set, .lens, .universal).true {
    color: var(--bg);
    background-color: var(--color);
  }

  .universal {
    position: relative;
    width: 480px;
    height: 360px;
    border: 2px solid var(--color);
  }

  .set {
    width: 200px;
    height: 200px;
    color: var(--color);
    background-color: var(--bg);
    border-radius: 50%;
    z-index: 1;
  }

  .a {
    transform: translateX(40px);
  }

  .b {
    transform: translateX(-40px);
  }

  .border {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid var(--accent);
    border-radius: 50%;
    z-index: 3;
  }

  .border.a {
    transform: translateX(-60px);
  }

  .border.b {
    transform: translateX(60px);
  }

  span {
    position: absolute;
    z-index: 2;
  }

  .ff {
    transform: translateY(-120px);
  }

  .tf {
    transform: translateX(-40px);
  }

  .ft {
    transform: translateX(40px);
  }

  .lens {
    position: absolute;
    width: 120px;
    height: 200px;
    color: var(--color);
    background-color: var(--bg);
    --s: 100px at;
    --g: #000 98%, #0000;
    mask: radial-gradient(var(--s) 0 50%, var(--g)), radial-gradient(var(--s) 100% 50%, var(--g));
    -webkit-mask-composite: xor;
    mask-composite: intersect;
    z-index: 2;
  }

  .keyboard {
    gap: 16px;
    margin-block-end: 1em;
  }

  .help {
    position: relative;
  }

  .hint {
    position: absolute;
    left: calc(100%);
    bottom: calc(100%);
    padding: 16px;
    width: 200px;
    color: var(--bg);
    background-color: var(--color);
    border-radius: 16px 16px 16px 0;
    transform-origin: 0 100%;
  }

  input {
    width: 128px;
  }
</style>
