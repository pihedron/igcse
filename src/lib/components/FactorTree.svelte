<script lang="ts">
  import Icon from './Icon.svelte'

  export let num: number
  export let primes: number[]
  export let count: number

  let tree: [number, number][]
  let div = 2
  let n = num

  function countFactors() {
    let last = primes[0]
    let x = 1
    for (let i = 0; i < primes.length; i++) {
      if (primes[i] === last) x++
      else {
        last = primes[i]
        count *= x
        x = 2
      }
    }

    count *= x
  }

  tree = [[n, 0]]
  primes = []
  count = 1

  while (n != 1) {
    if (n % div) div++
    else {
      n /= div
      primes.push(div)
      tree.push([n, div])
    }
  }

  countFactors()
</script>

<div class="tree">
  {#each tree as row}
    <div class="row">
      <div class="cell center">{row[0]}</div>
      <div class="cell center">
        {#if row[1]}
          {row[1]}
        {:else}
          <Icon fontSize={32}>sentiment_satisfied</Icon>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  .tree {
    display: block;
    margin: auto;
    padding: 32px;
    width: fit-content;
    user-select: none;
    transition: all 250ms;
  }

  .row {
    display: flex;
    gap: 8px;
    margin-block: 8px;
  }

  .cell {
    width: 64px;
    height: 64px;
    color: var(--bg);
    background-color: var(--color);
    border-radius: 8px;
  }
</style>
