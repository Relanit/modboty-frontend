<template>
    <TheNav />
    <router-view />
</template>

<script setup lang="ts">
import TheNav from "@components/TheNav.vue";
</script>

<style lang="scss">
#app {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e3e3e3;
}

body::-webkit-scrollbar {
    width: 12px;
}

body::-webkit-scrollbar-track {
    background: #1e1e1e;
}

body::-webkit-scrollbar-thumb {
    background-color: #4a4a4a;
}

a {
    text-decoration: none;
    color: #78ba52;

    &:hover {
        color: #78ba52;
        text-decoration: underline;
    }
}
</style>
