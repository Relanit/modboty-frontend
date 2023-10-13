<script setup lang="ts">
import { ref } from "vue";
import { useCookie } from "vue-cookie-next";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const code = route.query.code;
const state = route.query.state;

const message = ref("Авторизация...");
const result = ref();

const cookie = useCookie();

async function twitchOAuth2() {
    const intent = cookie.getCookie("intent");
    if (!intent) {
        throw new Error("Missing intent cookie");
    }
    cookie.removeCookie("intent");

    result.value = await axios
        .post(
            `${import.meta.env.VITE_APP_API}/oauth/${intent}`,
            { code: code, state: state },
            { withCredentials: true },
        )
        .then((response) => response.data["success"])
        .catch((error) => error["response"]["data"]["detail"])
        .catch((error) => error);
}

if (code !== undefined && state !== undefined) {
    await twitchOAuth2();
} else {
    result.value = "1";
}

switch (result.value) {
    case true:
        message.value = "Авторизация прошла успешно";
        break;
    case undefined:
        message.value = "Вы вошли";
        break;
    case "1":
        message.value = "Ошибка, попробуйте ещё раз";
        break;
    case "2":
        message.value = "Ошибка: бот не подключён к каналу";
        break;
    default:
        message.value = `Произошла неизвестная ошибка: ${result.value}`;
        break;
}
</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <img src="@img/ppStretch.gif" alt="ppStretch" class="ppStretch" />
    </div>
</template>

<style scoped lang="scss">
.ppStretch {
    width: 15em;
}
</style>
