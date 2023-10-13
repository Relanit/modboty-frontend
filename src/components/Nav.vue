<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@store/main";
import Icon from "@components/utility/Icon.vue";
import LoginButton from "@components/utility/LoginButton.vue";
import Logo from "@base/Logo.vue";

const store = useStore();
const route = useRoute();

const toggleNav = () => {
    store.setNavOpen(!store.navOpen);
};

watch(route, () => {
    store.setNavOpen(false);
});
</script>

<template>
    <nav>
        <div class="nav-content">
            <router-link to="/" class="app-title unstyled-link">
                <Logo class="logo" />
            </router-link>
            <button class="toggle-collapse" @click="toggleNav">
                <Icon icon="bars" size="xs" />
            </button>
            <div class="collapse">
                <div class="nav-links">
                    <div>
                        <router-link to="/" class="nav-link">Главная</router-link>
                    </div>
                    <div>
                        <a href="https://docs.modbot.xyz" class="nav-link">Команды</a>
                    </div>
                    <div>
                        <a href="https://www.donationalerts.com/r/relanit" class="nav-link">Поддержать разработчика</a>
                    </div>
                    <div class="login">
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";

nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    max-height: 4rem;
    min-height: 4rem;
    font-size: 1.25rem;
    box-shadow: 0 1px 2px 0 #0000001a;
}

nav > .nav-content {
    padding: 0 1.5vw;
    display: flex;
    height: 4rem;
    width: 100%;
    z-index: 1000;
    background-color: $secondaryBackgroundColor;
}

.app-title {
    display: flex;
    align-items: center;

    .logo {
        width: 7em;
        margin-right: 0.25em;
    }
}

.collapse {
    display: flex;
    flex-grow: 1;

    .nav-links {
        display: flex;
        justify-content: right;
        gap: 0.25em;
        flex-grow: 1;
    }
}

.nav-link {
    transition: color 0.3s;
    color: inherit;
    font-weight: 500;
    display: grid;
    place-items: center;
    padding: 0.6em;
    height: 100%;
    font-size: 0.85em;
}

.login {
    display: grid;
    place-items: center;
}

.toggle-collapse {
    display: none;
    background-color: transparent;
    font-size: 1.5em;
    color: inherit;
    border: 0.1em solid transparent;
    padding: 0 0.4em;
    margin-right: 0.3em;
    border-radius: 0.3em;
    place-self: center;
    &:hover {
        border-color: $colorDarker;
    }
    &:active {
        background-color: #424242;
    }
}

@media screen and (max-width: 1000px) {
    .navOpen {
        box-shadow: none;
        .collapse {
            min-height: calc(100vh - 4rem);
            min-width: 100%;
            top: 4rem;
            left: 0;
            backdrop-filter: blur(0.8em) grayscale(40%) brightness(60%);
            position: absolute;
            flex-direction: column;

            .nav-links {
                flex-direction: column;
            }
        }
        .nav-link {
            width: 100vw;
        }
    }

    nav:not(.navOpen) {
        .collapse {
            display: none;
        }
    }
    .toggle-collapse {
        margin-left: auto;
        display: block;
    }
}
</style>
