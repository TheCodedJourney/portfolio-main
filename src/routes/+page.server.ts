/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
  runtime: "nodejs18.x",
};

import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import z from "zod";
import sgMail from "@sendgrid/mail/index";
import { env } from "$env/dynamic/private";

const {
  SENDGRID_API_KEY,
  EMAIL_DESTINATION,
  EMAIL_REPLY_TO,
  TEMPLATE_ID,
  TEST,
} = env;

console.log("TEST ENV FILE:", TEST);

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Please provide your full name" }),
  company: z
    .string()
    .min(1, { message: "Please provide the name of your company" }),
  email: z.string().email({ message: "Please provide a valid email address" }),
  message: z.string().min(1, { message: "Please write a nice message 😊" }),
  terms: z.literal("true", {
    errorMap: () => ({ message: "This is a required field" }),
  }),
});

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const form = contactFormSchema.safeParse(formData);

    if (!form.success) {
      return fail(400, {
        data: formData,
        errors: form.error.flatten().fieldErrors,
        body: {
          message: "Please review the form and try again.",
          classes: "unsuccessful-send",
        },
      });
    }

    try {
      sgMail.setApiKey(SENDGRID_API_KEY);

      const dynamicData = {
        name: form.data.name,
        company: form.data.company,
        email: form.data.email,
        message: form.data.message,
      };

      await sgMail.send({
        to: EMAIL_DESTINATION,
        from: EMAIL_REPLY_TO,
        templateId: TEMPLATE_ID,
        dynamicTemplateData: dynamicData,
      });
    } catch (err: any) {
      if (err.response) {
        console.error(err.response.body?.errors);
        return fail(400, {
          data: formData,
          body: {
            message: "Upstream Error: " + err.response.body?.errors[0]?.message,
            classes: "unsuccessful-send",
          },
        });
      }
    }

    return {
      status: 200,
      body: {
        message: "Your message has been sent. Thank you!",
        classes: "successful-send",
      },
    };
  },
};
