import { ofetch } from 'ofetch';

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest() {
      console.log('RequestInterceptorService - intercept');
    },
    onRequestError({ error }) {
      console.error(error);
    }
  });
});
