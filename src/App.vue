<template>
    <Nav />
    <router-view />
</template>

<script setup lang="ts">
import Nav from "@components/Nav.vue";
</script>

<style lang="scss">
@import "@scss/default.scss";

#app {
    background-color: #242424;
}
</style>
