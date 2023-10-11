<script setup lang="ts">
import Logo from "@base/Logo.vue";

// import LoginButton from "@components/LoginButton.vue";
</script>

<template>
    <nav>
        <div class="nav-content">
            <router-link class="app-title unstyled-link" to="/">
                <Logo class="logo" />
            </router-link>
            <button class="toggle-collapse">
                <Icon icon="bars" />
            </button>
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
    max-height: 7.5rem;
    min-height: 4.5rem;
    font-size: 1.25rem;
}

nav > .nav-content {
    padding: 0 1.5vw;
    display: flex;
    height: 4rem;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 1px 2px 0 #0000001a;
    background-color: $secondaryBackgroundColor;

    > .app-title > .logo {
        width: 100px;
    }
}

.toggle-collapse {
    display: none;
    background-color: transparent;
    font-size: 2em;
    color: inherit;
    border: 0.1em solid transparent;
    padding: 0.5em;
    border-radius: 0.5em;
    place-self: center;
    &:hover {
        border-color: #303030;
    }
    &:active {
        background-color: #424242;
    }
}

@media screen and (max-width: 1000px) {
    .toggle-collapse {
        margin-left: auto;
        display: block;
    }
}
</style>
