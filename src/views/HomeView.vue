<script setup lang="ts">
import FirstContainer from "@/components/FirstContainer.vue";
</script>

<template>
  <div class="home">
    <FirstContainer msg="Добро пожаловать в ModBoty" />
    <div class="second"></div>
  </div>
</template>

<style>
.second {
  background-color: #1a1a1a;
  height: calc(60vh - 60px);
}
</style>
