<script setup lang="ts">
import { useCookie } from "vue-cookie-next";
import Icon from "./Icon.vue";
import axios from "axios";

function getOAuth2URL() {
    return axios
        .get(`${import.meta.env.VITE_APP_API}/oauth/url`, {
            withCredentials: true,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error);
        });
}

const cookie = useCookie();
async function loginTwitch() {
    cookie.setCookie("intent", "login");
    const response = await getOAuth2URL();
    const url = response["authorization_url"];
    window.location.href = url;
}
</script>

<template>
    <button class="login-button" @click="loginTwitch"><Icon icon="twitch" lib="fab" />Войти</button>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";
.login-button {
    background-color: rgba($color: #000000, $alpha: 0);
    font-weight: 700;
    color: $color;
    border-radius: 0.35em;
    padding: 0.2em 0.45em;
    transition: all 0.3s;
    border: 2px solid $colorDarker;
    transition: all 0.3s;

    > svg {
        margin-right: 0.2em;
    }

    &:hover {
        background-color: $colorDarker;
        color: $backgroundColor;
    }

    &:active {
        background-color: #424242;
    }
}
</style>
