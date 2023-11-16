<script lang="ts">
  export let showModal: Boolean;
  let dialog: any;
  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <header>
      <slot name="header" />
      <!-- svelte-ignore a11y-autofocus -->
      <button class="button-reset" autofocus on:click={() => dialog.close()}>
        <div style="height: 1rem; width: 1rem;">
          <svg version="1.1" viewBox="0 0 12 12"
            ><path
              d="M1.22.15l.085.074L6 4.914l4.695-4.69a.765.765 0 011.155.994l-.074.086L7.076 6l4.7 4.696a.763.763 0 01.074.995l-.074.085a.765.765 0 01-.995.074l-.086-.074L6 7.084l-4.694 4.691a.765.765 0 01-1.155-.994l.074-.086L4.924 6l-4.7-4.695A.763.763 0 01.15.309L.224.224A.765.765 0 011.219.15z"
            /></svg
          >
        </div>
      </button>
    </header>
    <slot />
  </div>
</dialog>

<style>
  header {
    display: flex;
    position: sticky;
    top: 0;
    width: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.875rem;
    background: white;
  }
  dialog {
    max-width: 37.5rem;
    width: calc(100vw - 30px);
    border-radius: 10px;
    border: none;
    padding: 0;
    overscroll-behavior: none;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    /* overflow-y: auto; */
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
