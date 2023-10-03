import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(createPinia()).use(VueCookies).mount("#app");
