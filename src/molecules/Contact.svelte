<script lang="ts">
  import ContactForm from "../atoms/ContactForm.svelte";
  export let form: any;
  export let placeholder: any;
  export let color: any;
</script>

<div class="content-spacing">
  <div class="contact">
    <h2>Contact ✍️</h2>
    <div class="contact-form-placement">
      <ContactForm {form} {placeholder} {color} />
    </div>
  </div>
</div>

<style>
  .content-spacing {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overscroll-behavior: none;
  }
  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  h2 {
    font-size: 50px;
    align-self: center;
    margin: 0;
  }
  .contact-form-placement {
    align-self: center;
  }
</style>
