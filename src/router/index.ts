import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthViewVue from "../views/AuthView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Главная | ModBoty",
      description:
        "ModBoty ‒ это модераторский бот для Twitch c возможностью добавления пользовательских команд, управления 7TV смайлами и с многими другими функциями для модерации чата",
      keywords: "Twitch, бот, модератор, модерация, 7тв, 7tv, команды, чат",
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title as string;
});

export default router;
