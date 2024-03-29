import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@views/home/Home.vue"),
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
        component: () => import("@views/OAuth2/Authorization.vue"),
        meta: {
            title: "Авторизация | ModBoty",
            description: "Получение доступа к дополнительным функциям ModBoty, модераторского бота для Twitch",
        },
    },
    {
        path: "/oauth/callback",
        name: "OAuth2",
        component: () => import("@views/OAuth2/OAuthCallback.vue"),
        meta: {
            title: "OAuth2 callback | ModBoty",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@views/404.vue"),
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

router.afterEach((to) => {
    document.title = to.meta.title as string;
    // eslint-disable-next-line quotes
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", to.meta.description as string);
    }
});

export default router;
