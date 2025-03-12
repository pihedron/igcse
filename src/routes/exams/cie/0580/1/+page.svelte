<script>
  import Icon from '$lib/components/Icon.svelte'
  import { math } from '$lib/katex'
</script>

<div class="cover center">
  <Icon fontSize={128}>pin</Icon>
</div>
<div class="auto doc">
  <h1>Number</h1>
  <h2>Types of number</h2>
  <p>
    Numbers can be grouped into different categories based on their properties. This helps us create
    definitions and rules for how different types of numbers behave. For example, we can define the <em
      >factors</em
    >
    of {@html math('N')} as pairs of <em>integers</em> that produce {@html math('N')} when multiplied
    together.
  </p>
  <h3>Categories</h3>
  <ul>
    <li>
      real
      <ul>
        <li>numbers that can be used to measure a 1 dimensional quantity</li>
        <li>{@html math(`-1, 0, 1, e, @pi, 6.9`)}</li>
      </ul>
    </li>
    <li>
      rational
      <ul>
        <li>real numbers that can be expressed as a division of 2 integers</li>
        <li>have a finite number of non-repeating digits</li>
        <li>{@html math(`-1, 0, @frac{1}{2}, 0.@dot{3}, 6.9`)}</li>
      </ul>
    </li>
    <li>
      irrational
      <ul>
        <li>real numbers that are not rational</li>
        <li>remain irrational even after being multiplied by an integer</li>
        <li>infinite number of non-repeating digits</li>
        <li>{@html math(`-@sqrt{2}, e, @pi`)}</li>
      </ul>
    </li>
    <li>
      integers
      <ul>
        <li>real numbers without a fractional component</li>
        <li>
          <em>discrete</em> which means there are a finite number of them in a bounded interval
        </li>
        <li>{@html math(`@ldots -2, -1, 0, 1, 2 @ldots`)}</li>
      </ul>
    </li>
    <li>
      whole
      <ul>
        <li>non-negative integers</li>
        <li>{@html math(`0, 1, 2 @ldots`)}</li>
      </ul>
    </li>
    <li>
      natural
      <ul>
        <li>positive integers or whole numbers excluding {@html math(`0`)}</li>
        <li>{@html math(`1, 2, 3 @ldots`)}</li>
      </ul>
    </li>
    <li>
      prime
      <ul>
        <li>natural numbers that have exactly 2 natural factors</li>
        <li>excludes {@html math(`1`)} because it only has itself as a natural factor</li>
        <li>{@html math(`2, 3, 5, 7`)}</li>
      </ul>
    </li>
  </ul>
  <p>
    Square numbers are integers raised to the power of {@html math(`2`)}. The integer {@html math(
      `1`
    )} is a square number because {@html math(`1^2=1`)}. So is {@html math(`9`)} because {@html math(
      `3^2=9`
    )}. Likewise, cube numbers are integers raised to the power of {@html math(`3`)}.
  </p>
  <h3>Common Factors</h3>
  <p>
    Factors that are shared by multiple numbers are called common factors.
  </p>
  <ul>
    <li>{@html math(`42`)} and {@html math(`69`)} share {@html math(`3`)} as a factor</li>
    <li>{@html math(`18`)} and {@html math(`30`)} have the common factors {@html math(`2, 3, 6`)}</li>
  </ul>
</div>

<style>
  .cover {
    margin: var(--nav) 32px 0 32px;
    height: 25vh;
    color: var(--bg);
    background-color: var(--color);
    border-radius: 8px;
  }
</style>
