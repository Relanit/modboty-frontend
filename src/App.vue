<script setup lang="ts">
import { useStore } from "@store/main";
import Nav from "@components/Nav.vue";
import { storeToRefs } from "pinia";

const store = useStore();
const { navOpen } = storeToRefs(store);
</script>

<template>
    <Nav :class="{ navOpen }" />
    <router-view />
</template>

<style lang="scss">
@import "@scss/default.scss";

#app {
    background-color: #242424;
}
</style>
