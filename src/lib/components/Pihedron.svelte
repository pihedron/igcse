<script lang="ts">
  //
</script>

<div class="container">
  <div class="avatar">
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M96 160H160H224H288H352H416V224H352V352H288V224H224V416H160V224H96V160Z"
      />
    </svg>
  </div>
  <div class="speech">
    <slot></slot>
  </div>
</div>


<style>
  .container {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
  }

  .avatar {
    width: 48px;
  }

  .avatar svg {
    width: 100%;
    fill: var(--color);
  }

  .speech {
    padding: 12px 16px;
    background-color: color-mix(in oklab, var(--color), transparent 90%);
    border-radius: 8px;
  }
</style>