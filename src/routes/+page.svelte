<script lang="ts">
  import ContactForm from "../atoms/ContactForm.svelte";
  import Modal from "../atoms/Modal.svelte";
  import Button from "$lib/Button.svelte";
  let color: string = "#fd8e8e";

  import Header from "../organisms/Header.svelte";
  import Main from "../organisms/Main.svelte";
  import Navigation from "../organisms/Navigation.svelte";

  export let form: {
    data: {
      token: string;
      fname: string;
      lname: string;
      email: string;
      message: string;
    };
    errors: {
      token: string;
      fname: string;
      lname: string;
      email: string;
      message: string;
    };
    fname: string;
  } = {
    data: {
      token: "",
      fname: "",
      lname: "",
      email: "",
      message: "",
    },
    errors: {
      token: "",
      fname: "",
      lname: "",
      email: "",
      message: "",
    },
    fname: "",
  };

  export let placeholder = {
    message: null,
    classes: null,
  };

  export let sevenHundred: boolean;

  let t: string[], title: string, e: string;

  t = [
    "display: inline-block",
    "font-size: 12px;",
    "font-weight: bold",
    "padding: 8px 10px",
    "line-height: 30px",
  ];
  title = t
    .concat(t, [
      "background: #2e304b",
      "color: #fd8e8e",
      "border-radius: 5px 0 0 5px",
    ])
    .join(";");
  e = t
    .concat(t, [
      "background: #fd8e8e",
      "color: #2e304b",
      "border-radius: 0 5px 5px 0",
    ])
    .join(";");
  console.log("%cFramework%cSvelte.js (Sveltekit)", title, e);
  console.log("%cContent Management%cPrismic (Rest API)", title, e);
  console.log("%cHosting%cSelf-hosted Linux Server NGINX", title, e);
  console.log("%cEmail%cSendGrid (API)", title, e);

  // function handleMessage(event) {
  //   color = event.detail.color;
  // }
</script>

<Button />
{form}
{placeholder}
{sevenHundred}

<div class="page" id="page">
  <!-- <Navigation on:colorChange={handleMessage} /> -->
  <header class="introduction">
    <Header />
  </header>
  <main class="main-page">
    <Main {sevenHundred} {color} />
  </main>
</div>

<style>
  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  :root {
    --spacing-unit: 5rem;
  }
  :global(.page) {
    border-color: var(--color);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #2e304b;
  }

  :global(.button-reset) {
    background: none;
    border: none;
    padding: 0;
  }

  .introduction {
    position: fixed;
    top: 0;
    height: 100%;
    padding: var(--spacing-unit, 30px);
    background-color: #2e304b;
    box-sizing: border-box;
    pointer-events: none;
  }

  :global(.app-navigation) {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 30;
    background-color: transparent;
    pointer-events: none;
    opacity: 1;
    pointer-events: auto;
  }
  :global(.positioning) {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
  }
  :global(header) {
    /* position: fixed;  */
    left: 0;
    /* background-color: white; */
    z-index: 1;
    height: 100%;
    /* width: 50%; */
    transition: width 1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s;
  }
  :global(.section-slice) {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
  }
  :global(.is-sticky) {
    position: sticky;
    top: 0;
    background-color: white;
  }

  :global(main) {
    width: 50%;
    min-height: 100vh;
    margin-left: 50vw;
    position: static;
  }

  :global(.main-page) {
    width: 50%;
    min-height: 100vh;
    margin-left: 50%;
    position: static;
  }

  :global(body) {
    margin: 0;
    overscroll-behavior: none;
    font-family: "Lato", sans-serif;
    overflow-y: hidden;
  }

  @media (max-width: 1200px) {
    .introduction {
      /* display: none; */
      position: sticky;
      z-index: -1;
      width: 100vw;
      height: 100vh;
      top: 0;
    }
    .main-page {
      width: 100vw;
      margin-left: 0;
    }
  }

  @media (min-width: 1199px) {
    .introduction {
      width: 50vw;
    }
  }
</style>
