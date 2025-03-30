import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LfTZwQrAAAAALwtAffDteP8oVySXcp_AdyXVkc_',
        loaderOptions: {
            autoHideBadge: true,
            explicitRenderParameters: {
                // badge: 'bottomleft',
            }
        },
    });
});