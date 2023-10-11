<script setup lang="ts">
import { useCookie } from "vue-cookie-next";
import Icon from "./utility/Icon.vue";
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
    <button class="login-button" @click="loginTwitch">
        <Icon icon="twitch" lib="fab" />
        <span>Войти</span>
    </button>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";
.login-button {
    background-color: rgba($color: #000000, $alpha: 0);
    font-weight: 700;
    color: $color;
    border-radius: 7px;
    padding: 4px 10px;
    transition: all 0.3s;
    border: 2px solid $colorDarker;
    transition: all 0.3s;

    > svg {
        margin-right: 4px;
    }

    &:hover {
        background-color: $colorDarker;
        color: $backgroundColor;
    }

    &:active {
        background-color: $colorDarker;
    }
}
</style>
