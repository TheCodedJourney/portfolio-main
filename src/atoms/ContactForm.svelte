<script lang="ts">
  import Button from "$lib/Button.svelte";
  import Modal from "../atoms/Modal.svelte";
  import { enhance, applyAction } from "$app/forms";

  export let form: any;
  export let placeholder: any;
  //   export let color: string;
  let checkboxValue = true;
  let showModal = false;

  let submitAgain = false;
</script>

<!-- {color} -->
<Button on:click={() => (showModal = true)}>👋 Say hello</Button>

<Modal bind:showModal>
  <div slot="header">
    <h2 class="form-title">
      <div class="title-a">👋</div>
      <div class="title-b">Say hello</div>
    </h2>
  </div>
  <!-- successul send -->
  {#if placeholder?.classes == "successful-send" && !submitAgain}
    <div class="success-modal">
      <div class="centering">
        <div class="centering">
          <div class="success-page">
            <h2>Message sent</h2>
            <p>
              I'll be in touch shortly. In the meantime you can reach out to me
              on
              <a href="https://twitter.com/TheCodedJourney" target="_blank"
                >Twitter</a
              >
              or
              <a href="https://www.linkedin.com/in/leggtom/" target="_blank"
                >LinkedIn</a
              >
            </p>
            <p style="font-size: 5rem; margin-top: 2rem; margin-bottom: 1rem;">
              👨🏻‍💻
            </p>
            <!-- {color} -->
            <Button on:click={() => (submitAgain = true)}>Back to form</Button>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <!-- show form and validate when forms not working -->
  {#if !placeholder?.message || placeholder?.classes === "unsuccessful-send" || submitAgain}
    <form
      method="POST"
      use:enhance={async ({ formElement, formData }) => {
        return async ({ result, update }) => {
          if (result.type === "success") {
            placeholder = result?.data?.body;
            submitAgain = false;
            formElement.reset();
          }

          if (result.type === "failure") {
            placeholder = result?.data?.body;
            await applyAction(result);
          }
          update();
        };
      }}
    >
      <!-- {#if placeholder?.message}
        <h3 class={placeholder?.classes}>{placeholder?.message}</h3>
        {/if}
        {#if !placeholder?.message}
        <h3>This is when there are no placeholder messages</h3>
        {/if} -->

      <div class="form-fields">
        <div>
          <div class="input-field">
            <label class="label-title" for="name">Full Name</label>
            <input
              class={form?.errors?.name ? "error" : ""}
              type="text"
              id="name"
              name="name"
              aria-describedby="name"
              value={form?.name ?? ""}
            />
            {#if form?.errors?.name}
              <span class="error-text" id="name">{form?.errors?.name[0]}</span>
            {/if}
          </div>
        </div>
        <div>
          <div class="input-field">
            <label class="label-title" for="company">Company</label>
            <input
              class={form?.errors?.company ? "error" : ""}
              type="text"
              id="company"
              name="company"
              aria-describedby="company"
              value={form?.data?.company ?? ""}
            />
            {#if form?.errors?.company}
              <span class="error-text" id="company"
                >{form?.errors?.company[0]}</span
              >
            {/if}
          </div>
        </div>
        <div>
          <div class="input-field">
            <label class="label-title" for="email">Email address</label>
            <input
              class={form?.errors?.email ? "error" : ""}
              type="text"
              id="email"
              name="email"
              aria-describedby="email"
              value={form?.data?.email ?? ""}
            />
            {#if form?.errors?.email}
              <span class="error-text">{form?.errors?.email[0]}</span>
            {/if}
          </div>
        </div>
        <div class="">
          <div class="input-field">
            <label class="label-title" for="message">Your message</label>
            <textarea
              rows="5"
              cols="50"
              id="message"
              name="message"
              aria-describedby="message"
              value={form?.data?.message ?? ""}
              class={form?.errors?.message ? "error" : ""}
            />
            {#if form?.errors?.message}
              <span class="error-text">{form?.errors?.message[0]}</span>
            {/if}
          </div>
        </div>
        <div class="input-field-checkbox">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            bind:checked={checkboxValue}
            value={checkboxValue}
            class={form?.errors?.terms ? "error" : ""}
            aria-describedby="terms"
          />
          <label class="checkbox-title" for="terms">
            I agree to be a nice and kind person!</label
          >
        </div>
        {#if form?.errors?.terms}
          <span class="error-text">{form?.errors?.terms[0]}</span>
        {:else if checkboxValue === false}
          <span class="error-text"> This is a required field</span>
        {/if}

        <div class="button-position">
          <button type="submit" class="submit">
            <!-- {color} -->
            <Button>Send Message</Button>
          </button>
        </div>
      </div>
    </form>
  {/if}
</Modal>

<slot />

<style>
  h2 {
    font-weight: 400;
  }
  .centering {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
  }
  .success-modal {
    padding: 1rem;
  }
  .success-page {
    width: 100%;
    max-width: 300px;
    text-align: center;
    color: #2e3030;
    margin-bottom: 5rem;
  }

  :root {
    --form-padding: 1.875rem;
    --placeholder-padding: 15px;
    --input-border: 2px;
    --header-color: #2e304b;
  }
  .error {
    border: 2px solid #fd8e8e !important;
  }

  .error-text {
    font-size: 14px;
    color: #fd8e8e;
  }
  .form-title {
    color: var(--header-color);
    display: flex;
    gap: 1rem;
    font-size: 18px;
  }
  .input-field-checkbox {
    background-color: #fff;
    display: flex;
    position: relative;
  }
  .input-field-checkbox input[type="checkbox"] {
    appearance: none;
    position: absolute;
    left: 0;
    top: -3px;
    border-color: #8ee7fd;
  }
  .input-field-checkbox input[type="checkbox"]:checked + label::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"></path></svg>');
    position: absolute;
    left: 2px;
    top: -1px;
    border-color: #8ee7fd;
  }
  .input-field-checkbox label {
    margin-left: 2.75rem;
  }
  form {
    padding: var(--form-padding);
    padding-top: 0;
  }
  .input-field {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }

  .checkbox-title {
    font-weight: 400;
    font-size: 16px;
    color: rgb(107, 108, 123);
  }
  .input-field-checkbox {
    display: flex;
    gap: 1rem;
  }

  .title-a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-position {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-b {
    display: flex;
    align-items: center;
  }

  .form-fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
  }

  button {
    background-color: white;
    border: none;
    border-radius: 100px;
    width: fit-content;
  }

  input:not(#terms) {
    min-height: 30px;
    padding: 20px;
    margin: 0;
    border: 2px solid transparent;
    background-color: #f7f7f7;
    border-radius: 5px;
    color: inherit;
    font: inherit;
  }

  #terms {
    min-height: 25px;
    padding: 12px;
    margin: 0;
    border: 2px solid #8ee7fd;
    background-color: #f7f7f7;
    border-radius: 5px;
    color: inherit;
    font: inherit;
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .label-title {
    font-size: 16px;
    color: #2e304b;
  }

  .submit {
    background: none;
    border: none;
    font: inherit;
  }

  textarea {
    min-height: 50px;
    resize: none;
    padding: var(--placeholder-padding);
    margin: 0;
    border: var(--input-border) solid hsla(0, 0%, 100%, 0);
    background-color: #f7f7f7;
    border-radius: 5px;
    color: inherit;
    font: inherit;
  }
</style>
