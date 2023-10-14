<script setup lang="ts">
import { useStore } from "@store/main";
import Nav from "@components/Nav.vue";
import { setupActor } from "@/ActorLogic";
import { storeToRefs } from "pinia";

const store = useStore();
const { isAuthenticated, navOpen } = storeToRefs(store);

setupActor(isAuthenticated);
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
