<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    msg: String,
    home: Boolean,
});
</script>

<template>
    <div class="first-container">
        <div class="first-container__content">
            <div class="first-container__content__logo"></div>
            <h2>{{ props.msg }}</h2>
            <button class="first-container__content__add-button" v-if="props.home">
                <a href="https://docs.modbot.xyz/install">Добавить бота</a>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.first-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #242424;
    height: 40vh;
    font-size: 1.5rem;
}

.first-container__content__logo {
    background: url("../assets/logo.svg") no-repeat;
    background-size: contain;
    margin: auto;
    width: 300px;
    min-height: 80px;
}

.first-container__content__add-button {
    font-weight: 700;
    font-size: 20px;
    background-color: #e3e3e3;
    border-radius: 7px;
    border: none;
    padding: 7px 30px;
    margin-top: 20px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #858585;
    }

    & a {
        color: #1a1a1a;
        text-decoration: none;
    }
}

@media screen and (max-width: 600px) {
    .first-container__content__logo {
        width: 220px;
        min-height: 60px;
    }

    .first-container__content__add-button {
        font-size: 16px;
        padding: 7px 22px;
    }
}
</style>
