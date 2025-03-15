<script lang="ts">
  import { intersect } from '$lib/sets'

  export let a: number
  export let b: number

  function factor(n: number) {
    let div = 2
    let primes = []

    while (n != 1) {
      if (n % div) div++
      else {
        n /= div
        primes.push(div)
      }
    }

    return primes
  }

  let aFactors = factor(a)
  let bFactors = factor(b)
  let common = intersect(aFactors, bFactors)
</script>

<div class="container">
  <div class="data">
    <div class="number">{a}</div>
    <div class="primes">{aFactors.join(', ')}</div>
  </div>
  <div class="data common">
    <div class="number">{common.reduce((p, c) => p * c, 1)}</div>
    <div class="primes">{common.join(', ')}</div>
    <div class="hcf">HCF</div>
  </div>
  <div class="data">
    <div class="number">{b}</div>
    <div class="primes">{bFactors.join(', ')}</div>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 100%;
  }

  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }

  .number {
    font-size: var(--heading);
  }

  .hcf {
    margin-top: 8px;
    color: var(--accent);
  }
</style>
