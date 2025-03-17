<script lang="ts">
  import FactorTree from '$lib/components/FactorTree.svelte'
  import HighestCommonFactor from '$lib/components/HighestCommonFactor.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import Pihedron from '$lib/components/Pihedron.svelte'
  import { math } from '$lib/katex'

  let num = 60
  let primes: number[] = []
  let count: number
  let value = '60'

  let a = 36

  $: value,
    (num =
      /[0-9]+/g.test(value) && parseInt(value) >= 1 && parseInt(value) <= 1e6
        ? parseInt(value)
        : num)
</script>

<div class="cover center">
  <Icon fontSize={128}>pin</Icon>
</div>
<div class="auto doc">
  <h1>Number</h1>
  <h2>Types of Numbers</h2>
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
  <p>Factors that are shared by multiple numbers are called common factors.</p>
  <ul>
    <li>{@html math(`42`)} and {@html math(`69`)} share {@html math(`3`)} as a factor</li>
    <li>
      {@html math(`18`)} and {@html math(`30`)} have {@html math(`2, 3, 6`)} as common factors
    </li>
  </ul>
  <p>
    The best way to find common factors is to use Pihedron's Prime Factor Table. By breaking down a
    number into a tree, we can not only solve for its prime factors but also multiply different
    combinations of these prime factors to obtain the full set of factors.
  </p>
  <p>Try changing the number in the textbox!</p>
  <input bind:value />
  <p>
    The right column contains all the prime factors. {@html math(`${num}`)} has a total of
    {@html math(`${count}`)} factors which can be obtained by multiplying every combination of prime
    factors.
  </p>
  {#key num}
    <FactorTree bind:num bind:primes bind:count></FactorTree>
  {/key}
  <p>
    The highest common factor (HCF) or greatest common denominator (GCD) of multiple numbers can be
    found by multiplying all their common prime factors together.
  </p>
  {#key num}
    <HighestCommonFactor {a} b={num}></HighestCommonFactor>
  {/key}
  <h3>Common Multiples</h3>
  <p>
    Natural numbers have an infinite number of multiples. A multiple of {@html math('N')} is a natural
    number in the form {@html math('M @times N')} where {@html math('M')} is another natural number.
    We often see multiples in the form of times tables.
  </p>
  <p>
    Most of the time, we are only concerned with the lowest common multiple (LCM) of multiple
    numbers. THe LCM of:
  </p>
  <ul>
    <li>{@html math('2')} and {@html math('3')} is {@html math('6')}</li>
    <li>{@html math('6')} and {@html math('15')} is {@html math('30')}</li>
  </ul>
  <p>
    Note that the LCM of 2 numbers {@html math('A')} and {@html math('B')} is not always
    {@html math('A @times B')}. This is because the LCM of {@html math('A')} and {@html math('B')}
    is actually {@html math('A @times B @div C')} where {@html math('C')} is the HCF of
    {@html math('A')} and {@html math('B')}. The LCM can be thought of as the union of the prime
    factors of {@html math('A')} and {@html math('B')}.
  </p>
  <h2>Sets</h2>
  <p>
    Set theory has a lot of overlap with probability and
    <a href="https://igcsekit.vercel.app/igcse/computer_science/boolean_logic" target="_blank">
      boolean logic
    </a>. You are expected to learn set notation to describe operations on sets.
  </p>
  <Pihedron>
    But what even <i>is</i> a set?
  </Pihedron>
  <p>
    A set is a collection of distinct items of the same type. The <em>distinct</em> trait means that
    sets do not contain any duplicates.
  </p>
  <p>
    Before we dive into the fun stuff, it's important to know how we represent different set
    operations.
  </p>
  <ul>
    <li>{@html math('@text{n}(A)')} represents the number of elements in set {@html math('A')}</li>
    <li>{@html math('x @in A')} means {@html math('x')} is an element of set {@html math('A')}</li>
    <li>
      {@html math('x @notin A')} means {@html math('x')} is not an element of set {@html math('A')}
    </li>
    <li>{@html math("A'")} is the <em>complement</em> of set {@html math('A')}</li>
    <li>{@html math('@varnothing')} is the empty set</li>
    <li>{@html math('@mathscr{E}')} is the universal set</li>
    <li>{@html math('A @subseteq B')} means {@html math('A')} is a subset of {@html math('B')}</li>
    <li>
      {@html math('A @nsubseteq B')} means {@html math('A')} is not a subset of {@html math('B')}
    </li>
    <li>
      {@html math('A @cup B')} is the <em>union</em> of sets {@html math('A')} and {@html math('B')}
    </li>
    <li>
      {@html math('A @cap B')} is the <em>intersection</em> of sets {@html math('A')} and
      {@html math('B')}
    </li>
  </ul>
  <h3>Set Operations</h3>
  <p>There are 3 fundamental set operations.</p>
  <ul>
    <li>
      {@html math("A'")} is the set that contains all the elements in {@html math('@mathscr{E}')} except
      those in set {@html math('A')}
      <ul>
        <li>acts like its opposite</li>
        <li>does not share any common elements with the original set</li>
        <li>{@html math("A @cap A' = @varnothing")}</li>
      </ul>
    </li>
    <li>
      {@html math('A @cup B')} is the set that includes all the elements present in sets
      {@html math('A')} and {@html math('B')}
      <ul>
        <li>same as joining sets together to form a new set</li>
        <li>always the same size if not bigger than the individual sets</li>
        <li>
          {@html math('@text{n}(A @cup B) @ge @text{n}(A)')} and {@html math(
            '@text{n}(A @cup B) @ge @text{n}(B)'
          )}
        </li>
        <li>always the same size if not smaller than the sum of the sizes of each set</li>
        <li>{@html math('@text{n}(A @cup B) @le @text{n}(A) + @text{n}(B)')}</li>
      </ul>
    </li>
    <li>
      {@html math('A @cap B')} is the set that only contains the elements present in <em>both</em>
      sets {@html math('A')} and {@html math('B')}
      <ul>
        <li>always the same size if not smaller than the individual sets</li>
        <li>
          {@html math('@text{n}(A @cup B) @le @text{n}(A)')} and
          {@html math('@text{n}(A @cup B) @le @text{n}(B)')}
        </li>
      </ul>
    </li>
  </ul>
  <h3>Set Formulas</h3>
  <p>
    Pihedron's identity tells us that the sum of the sizes of each set equals the size of their
    union plus their intersection. This is because when you add the sizes of both sets, you are
    adding the size of their intersection twice.
  </p>
  <div class="katex-display">
    {@html math('@text{n}(A) + @text{n}(B) = @text{n}(A @cup B) + @text{n}(A @cap B)')}
  </div>
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
