<script setup lang="ts">
import Icon from "@/components/utility/Icon.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <div class="socials">
            <a href="https://t.me/modboty" target="_blank">
                <Icon icon="telegram" lib="fab" />
            </a>

            <a href="https://twitch.tv/modboty" target="_blank">
                <Icon icon="twitch" lib="fab" />
            </a>

            <a href="https://discordapp.com/users/632210040245452811" target="_blank">
                <Icon icon="discord" lib="fab" />
            </a>

            <a href="https://github.com/relanit" target="_blank">
                <Icon icon="github" lib="fab" />
            </a>
        </div>
        <p>© {{ currentYear }} Relanit. Не связано с Twitch.</p>
    </footer>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";

footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: $secondaryBackgroundColor;
    box-shadow: 0 -1px 2px 0 #0000001a;
    min-height: 156px;
    gap: 30px;
    padding: 30px;
    justify-content: center;

    > .socials {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;

        > a svg {
            color: $color;
            font-size: 1.5em;
            transition: color 0.4s ease;

            &:hover {
                color: $colorDarker;
            }
        }
    }
}
</style>
