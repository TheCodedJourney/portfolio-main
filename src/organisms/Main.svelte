<script lang="ts">
  import About from "../molecules/About.svelte";
  import Experience from "../molecules/Experience.svelte";
  import Headshot from "../molecules/Headshot.svelte";
  import Contact from "../molecules/Contact.svelte";
  import Projects from "../molecules/Projects.svelte";
  import References from "../molecules/References.svelte";

  // export let form;
  export let color: string;
  // export let placeholder;
  export let sevenHundred: any;
  let innerHeight: number;

  $: innerHeight > 700 ? (sevenHundred = true) : (sevenHundred = false);
</script>

<svelte:window bind:innerHeight />
<article>
  <!-- <section class="section-slice is-sticky headshot" style="--color: {color};">
        <Headshot/>
    </section>
    <div id="about"></div>
    <section class="section-slice about" class:is-sticky={sevenHundred} class:static={!sevenHundred}>
        <About />            
    </section> -->
  <div id="experience" />
  <section
    class="section-slice is-sticky experience"
    class:is-sticky={sevenHundred}
    class:static={!sevenHundred}
  >
    <Experience {sevenHundred} />
  </section>
  <!-- <div id="references"></div>
    <section class="section-slice is-sticky references" style="--color: {color};" class:is-sticky={sevenHundred} class:static={!sevenHundred}>
        <References />
    </section>
    <div id="projects"></div>
    <section class="section-slice projects" class:is-sticky={sevenHundred}>
        <Projects />
    </section>
    <div id="contact"></div>
    <section class="section-slice is-sticky contact">
        <Contact {form} {placeholder} {color}/>
    </section> -->
</article>

<style>
  .headshot {
    margin: 0;
    background-color: var(--color, #fd8e8e);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .about {
    margin: 0;
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
    width: auto;
    background-color: white;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .static {
    min-height: 800px;
    height: 100%;
  }
  .experience {
    background-color: white;
    padding: 0;
  }
  .references {
    margin: 0;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 0;
    width: auto;
    box-sizing: border-box;
    overflow-y: hidden;
    background-color: var(--color, #fd8e8e);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .projects {
    margin: 0;
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 0;
    width: auto;
    background-color: white;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media only screen and (max-width: 768px) {
    .references {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    p {
      font-size: 18px;
    }
    h2 {
      font-size: 18px;
      line-height: 1.4;
    }
    h3 {
      font-size: 14px;
      line-height: 1.4;
    }
  }
  .contact {
    margin: 0;
    padding: 3rem;
    padding-bottom: 0;
    padding-top: 0;
    width: auto;
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #f1f1f1;
  }
</style>
