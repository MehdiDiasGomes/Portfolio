<template>
  <div class="relative flex flex-col gap-8 items-center justify-center mt-32 px-6">
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <img class="absolute top-0 h-full w-full opacity-30" src="~/assets/img/grid-pattern.png" />
    </div>

    <div class="text-center fade-in space-y-4 max-w-2xl">
      <div class="flex items-center justify-center gap-4 mb-4">
        <div class="h-px w-12 lg:w-16 bg-gradient-to-r from-transparent via-purple-500 to-purple-500"></div>
        <h2 class="text-white text-4xl lg:text-5xl text-center font-bold">
          {{ t("contact.title") }}
        </h2>
        <div class="h-px w-12 lg:w-16 bg-gradient-to-l from-transparent via-blue-500 to-blue-500"></div>
      </div>

      <p class="text-gray-300 text-center text-base lg:text-lg leading-relaxed">
        {{ t("contact.description") }}
      </p>
    </div>

    <form @submit.prevent="submitForm" class="w-full max-w-2xl fade-in">
      <div class="glass-effect-dark rounded-3xl p-8 lg:p-10 border border-purple-500/20 shadow-2xl">
        <div ref="formFields">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="flex flex-col gap-3">
              <label for="firstName" class="text-white text-sm font-semibold">
                {{ t("contact.firstName") }}
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                v-model="form.firstname"
                :placeholder="t('contact.firstNamePlaceholder')"
                class="glass-effect text-white p-4 rounded-xl border border-purple-500/20 focus:border-purple-500/50 outline-none smooth-transition placeholder:text-gray-500"
                required
              />
            </div>
            <div class="flex flex-col gap-3">
              <label for="lastName" class="text-white text-sm font-semibold">
                {{ t("contact.lastName") }}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastname"
                v-model="form.lastname"
                :placeholder="t('contact.lastNamePlaceholder')"
                class="glass-effect text-white p-4 rounded-xl border border-purple-500/20 focus:border-purple-500/50 outline-none smooth-transition placeholder:text-gray-500"
                required
              />
            </div>
          </div>

          <FormField v-slot="{ componentField }" name="email">
            <FormItem class="flex flex-col gap-3 space-y-0 mb-6" v-auto-animate>
              <FormLabel for="email" class="text-white text-sm font-semibold">
                {{ t("contact.email") }}
              </FormLabel>
              <FormControl>
                <input
                  type="email"
                  v-bind="componentField"
                  id="email"
                  name="email"
                  v-model="form.email"
                  :placeholder="t('contact.emailPlaceholder')"
                  class="glass-effect text-white p-4 rounded-xl border border-purple-500/20 focus:border-purple-500/50 outline-none smooth-transition placeholder:text-gray-500"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="flex flex-col gap-3 mb-8">
            <label for="message" class="text-white text-sm font-semibold">
              {{ t("contact.message") }}
            </label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              :placeholder="t('contact.messagePlaceholder')"
              class="glass-effect text-white p-4 rounded-xl border border-purple-500/20 focus:border-purple-500/50 outline-none smooth-transition min-h-[180px] resize-y placeholder:text-gray-500"
              required
            ></textarea>
          </div>

          <div class="flex justify-center">
            <Button
              type="submit"
              class="w-full text-lg"
              :content="isSubmitting ? t('contact.sending') : t('contact.send')"
              :icon="isSubmitting ? 'Loader2' : 'Send'"
              variant="primary"
              :disabled="isSubmitting"
            />
          </div>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="formStatus.show"
              class="mt-6 p-4 rounded-xl text-center font-semibold"
              :class="
                formStatus.isError
                  ? 'glass-effect border border-red-500/30 text-red-400'
                  : 'glass-effect border border-green-500/30 text-green-400'
              "
            >
              {{ formStatus.message }}
            </div>
          </Transition>

          <div class="mt-6 text-xs text-gray-400 text-center leading-relaxed">
            {{ t("contact.recaptchaNotice.text") }}
            <a
              href="https://policies.google.com/privacy"
              class="text-purple-400 hover:text-purple-300 smooth-transition hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >{{ t("contact.recaptchaNotice.privacyPolicy") }}</a>
            {{ t("contact.recaptchaNotice.and") }}
            <a
              href="https://policies.google.com/terms"
              class="text-purple-400 hover:text-purple-300 smooth-transition hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >{{ t("contact.recaptchaNotice.termsOfService") }}</a>
            {{ t("contact.recaptchaNotice.suffix") }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser";
import Button from "@/components/common/Button.vue";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/toast";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import { useReCaptcha } from "vue-recaptcha-v3";

import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

const { t } = useI18n();
const [formFields] = useAutoAnimate()

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
