<template>
  <HeaderComponent />
  <router-view />
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue"; // @ is an alias to /src
</script>

<style lang="scss">
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e3e3;
  background-color: #1a1a1a;
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
