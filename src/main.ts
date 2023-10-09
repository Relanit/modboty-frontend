import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).use(VueCookieNext).mount("#app");
