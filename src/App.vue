<template>
    <TheHeading />
    <router-view />
</template>

<script setup lang="ts">
import TheHeading from "@/components/TheHeading.vue";

// @ is an alias to /src
</script>

<style lang="scss">
#app {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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

a,
a:hover {
    color: #78ba52;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
