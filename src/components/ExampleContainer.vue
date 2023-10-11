<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    dark: Boolean,
    title: String,
    text: String,
    img: String,
});
</script>

<template>
    <div class="container" :class="dark ? 'dark' : 'light'">
        <div class="container__content" :class="{ light: !dark }">
            <img class="container__image" :src="props.img" />
            <div class="container__description">
                <h2 v-html="props.title"></h2>
                <p v-html="props.text"></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";

.container {
    min-width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    padding: 3rem 0.5rem;

    &__content {
        text-align: left;
        display: flex;
        align-items: center;

        &.light {
            flex-direction: row-reverse;
        }
    }

    &__image {
        border-radius: 10px;
        box-shadow: rgb(12, 12, 12) 0px 1px 7px 0px;
        max-width: 90vw;
    }

    &__description {
        max-width: 500px;
        margin: 25px;
        vertical-align: text-top;
    }

    &.dark {
        background-color: $backgroundColor;
    }

    &.light {
        background-color: $secondaryBackgroundColor;
    }
}

@media screen and (max-width: 800px) {
    .container__content,
    .container__content.light {
        flex-direction: column-reverse;
        &__description {
            margin: 15px;
        }

        p {
            font-size: calc(16px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280));
        }
    }
}
</style>
