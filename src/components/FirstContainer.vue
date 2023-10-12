<script setup lang="ts">
import { defineProps } from "vue";
import Logo from "@base/Logo.vue";

const props = defineProps({
    msg: String,
    home: Boolean,
});
</script>

<template>
    <div class="first-container">
        <div class="first-container__content">
            <Logo class="logo" />
            <h2>{{ props.msg }}</h2>
            <button class="first-container__add-button" v-if="props.home">
                <a href="https://docs.modbot.xyz/install">Добавить бота</a>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";

.first-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $secondaryBackgroundColor;
    height: 40vh;
    text-align: center;

    .logo {
        width: 19em;
    }

    &__add-button {
        font-weight: 700;
        font-size: 1.25rem;
        background-color: $color;
        border-radius: 7px;
        border: none;
        padding: 7px 30px;
        margin-top: 20px;
        transition: background-color 0.3s;

        &:hover {
            background-color: $colorDarker;
        }

        > a {
            color: $backgroundColor;
            text-decoration: none;
        }
    }

    @media screen and (max-width: 650px) {
        .logo {
            width: 15em;
            min-height: 60px;
        }

        &__add-button {
            padding: 7px 22px;
        }
    }
}
</style>
