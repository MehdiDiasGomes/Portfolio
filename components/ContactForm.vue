<template>
  <div
    class="flex animate-fade animate-once animate-duration-1000 animate-ease-in relative flex-col gap-3 z-30 h-screen items-center justify-center py-32"
  >
    <img class="absolute top-0 h-full -z-30 w-full" src="~/assets/img/grid-pattern.png" />

    <h2 class="text-primaryPerso text-4xl text-center font-extrabold">
      {{ t("contact.title") }}
    </h2>
    <p class="text-secondary text-center max-w-[600px] mx-auto px-6 mb-4">
      {{ t("contact.description") }}
    </p>

    <form @submit.prevent="submitForm" class="w-full max-w-[600px] px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div class="flex flex-col gap-2">
          <label for="firstName" class="text-white text-sm font-medium">{{
            t("contact.firstName")
          }}</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            v-model="form.firstname"
            :placeholder="t('contact.firstNamePlaceholder')"
            class="bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white inset-shadow-sm p-3 rounded-lg border border-[#1a1d36] focus:border-primaryPerso outline-none transition-all duration-200"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastName" class="text-white text-sm font-medium">{{
            t("contact.lastName")
          }}</label>
          <input
            type="text"
            id="lastName"
            name="lastname"
            v-model="form.lastname"
            :placeholder="t('contact.lastNamePlaceholder')"
            class="bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white inset-shadow-sm p-3 rounded-lg border border-[#1a1d36] focus:border-primaryPerso outline-none transition-all duration-200"
            required
          />
        </div>
      </div>

      <FormField v-slot="{ componentField }" name="email">
        <FormItem class="flex flex-col gap-2 space-y-0 mb-5" v-auto-animate>
          <FormLabel for="email" class="text-white text-sm font-medium">{{
            t("contact.email")
          }}</FormLabel>
          <FormControl>
            <input
              type="email"
              v-bind="componentField"
              id="email"
              name="email"
              v-model="form.email"
              :placeholder="t('contact.emailPlaceholder')"
              class="bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white inset-shadow-sm p-3 rounded-lg border border-[#1a1d36] focus:border-primaryPerso outline-none transition-all duration-200"
              required
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex flex-col gap-2 mb-7">
        <label for="message" class="text-white text-sm font-medium">{{
          t("contact.message")
        }}</label>
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          :placeholder="t('contact.messagePlaceholder')"
          class="bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white inset-shadow-sm p-3 rounded-lg border border-[#1a1d36] focus:border-primaryPerso outline-none transition-all duration-200 min-h-[150px] resize-y"
          required
        ></textarea>
      </div>

      <div class="flex justify-center">
        <Button
          type="submit"
          class="bg-primaryPerso text-black font-bold w-full py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-200"
          :disabled="isSubmitting"
        >
          <div v-if="isSubmitting" class="flex items-center gap-2">
            <Icon name="Loader2" class="animate-spin" />
            {{ t("contact.sending") }}
          </div>
          <div v-else class="flex items-center gap-2">
            {{ t("contact.send") }}
            <Icon name="Send" :stroke-width="1.75" />
          </div>
        </Button>
      </div>

      <div
        v-if="formStatus.show"
        class="mt-5 p-4 rounded-lg text-center"
        :class="
          formStatus.isError ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
        "
      >
        {{ formStatus.message }}
      </div>

      <div class="mt-4 text-xs text-gray-400 text-center">
        {{ t("contact.recaptchaNotice.text") }}
        <a
          href="https://policies.google.com/privacy"
          class="text-primaryPerso hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t("contact.recaptchaNotice.privacyPolicy") }}</a
        >
        {{ t("contact.recaptchaNotice.and") }}
        <a
          href="https://policies.google.com/terms"
          class="text-primaryPerso hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t("contact.recaptchaNotice.termsOfService") }}</a
        >
        {{ t("contact.recaptchaNotice.suffix") }}
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/toast";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import { useReCaptcha } from "vue-recaptcha-v3";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

const { t } = useI18n();

const { executeRecaptcha } = useGoogleRecaptcha();

const form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const formStatus = reactive({
  show: false,
  isError: false,
  message: "",
});

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email({ message: "Email invalide" }),
  }),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const submitForm = handleSubmit(async (values) => {
  const { token } = await executeRecaptcha("submit");
  if (token) {
    try {
      isSubmitting.value = true;
      formStatus.show = false;

      const templateParams = {
        from_name: `${form.firstname} ${form.lastname}`,
        email: form.email,
        message: form.message,
      };

      const response = await emailjs.send(
        "service_7cwu2gi",
        "template_ko0sytg",
        templateParams,
        "4U1La-wWYO81095y-",
      );

      form.firstname = "";
      form.lastname = "";
      form.email = "";
      form.message = "";
      toast({
        description: "Votre message a été envoyé.",
      });
    } catch (error) {
      toast({
        title: "Une erreure s'est produite",
      });
    } finally {
      isSubmitting.value = false;
    }
  } else {
    toast({
      title: "Veuillez vérifier que vous n'êtes pas un robot.",
      variant: "destructive",
    });
  }
});

onMounted(() => {
  emailjs.init("4U1La-wWYO81095y-");
});
</script>
