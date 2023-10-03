import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthViewVue from "../views/AuthView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import OAuthCallbackViewVue from "@/views/OAuthCallbackView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Главная | ModBoty",
      description:
        "ModBoty ‒ это модераторский бот для Twitch c возможностью добавления пользовательских команд, управления 7TV смайлами и функциями для модерации чата",
      keywords: "Twitch, бот, модератор, модерация, 7тв, 7tv, команды, чат",
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthViewVue,
    meta: {
      title: "Авторизация | ModBoty",
      description:
        "Получение доступа к дополнительным функциям ModBoty, модераторского бота для Twitch",
    },
  },
  {
    path: "/oauth/twitch/callback",
    name: "twitch-oauth",
    component: OAuthCallbackViewVue,
    meta: {
      title: "Авторизация | ModBoty",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    meta: {
      title: "Страница не найдена",
      description: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title as string;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", to.meta.description as string);
  }
});

export default router;
