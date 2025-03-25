<script lang="ts">
  export let code: string
  export let year: number
  export let season: string
  export let paper: number
  export let variant: number

  export let title: string
</script>

<div class="example">
  <span>{title}</span>
  <div class="problem">
    <slot></slot>
  </div>
  <div class="source">{code} {season} {year} Paper {paper} Variant {variant}</div>
</div>

<style>
  .example {
    width: 100%;
    padding: 32px;
    border: 2px solid var(--accent);
    border-radius: 8px;
  }

  span {
    font-size: var(--subheading);
  }

  .source {
    font-size: 14px;
    opacity: 0.5;
  }
</style>