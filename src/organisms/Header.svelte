<script lang="ts">
  import Button from "$lib/Button.svelte";
  export let color: string = "#fd8e8e";
</script>

<div class="header" style="--color: {color};">
  <div style="height: 50px; width: 20px; background-color: transparent;" />
  <div class="intro-content">
    <h1>Hello. I'm a full stack software developer.</h1>
    <p>
      My name's Tom Legg. I am commited to engineering web apps and user
      interfaces using a wide range of technologies.
    </p>
  </div>
  <a href="#contact">
    <Button {color}>Lets connect...!</Button>
  </a>
  <div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p>Find me at Twitter, Github and LinkedIn</p>
    <p>Request my resume</p>
  </div>
</div>

<style>
  @media only screen and (min-width: 1440px) {
    :root {
      --spacing-unit: 5rem;
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 6rem);
    height: 100%;
    color: var(--color, #fd8e8e);
  }
  h1 {
    color: var(--color, #fd8e8e);
    margin: 0;
    font-size: 3em;
  }
  p {
    font-size: 1em;
  }

  a {
    pointer-events: all;
  }
</style>
