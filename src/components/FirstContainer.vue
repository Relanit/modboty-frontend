<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  msg: String,
});
</script>

<template>
  <div class="first">
    <div class="container">
      <div class="logo"></div>
      <p v-html="props.msg"></p>
    </div>
  </div>
</template>

<style>
.first {
  background-color: #242424;
  height: 40vh;
  position: relative;
  font-size: 1.5rem;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  background: url("../assets/logo.svg") no-repeat;
  background-size: contain;
  margin: auto;
  width: 300px;
  min-height: 80px;
}

@media screen and (max-width: 600px) {
  .logo {
    width: 200px;
    min-height: 60px;
  }
}
</style>
