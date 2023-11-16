<script lang="ts">
  export let color: string = "orange";
</script>

<button class="button" on:click style="--color: {color};">
  <slot />
</button>

<style>
  .button {
    width: 8rem;
    border: 0.125rem var(--color, #fd8e8e) solid;
    border-radius: 1.875rem;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    font-weight: 500;
    padding: 0 1.875rem;
    margin: 0;
    background-color: transparent;
    background-image: none;
    color: var(--color, #fd8e8e);
    outline: 0;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
  }

  .button:hover {
    background-color: var(--color, #fd8e8e);
    color: #2e304b;
  }
</style>
