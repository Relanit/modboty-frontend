import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import App from "./App.vue";
import router from "./router";
import "@/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .use(createPinia())
    .use(VueCookieNext)
    .mount("#app");
