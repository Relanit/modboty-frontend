<script setup lang="ts">
import AuthContainer from "@/components/AuthContainer.vue";
import FirstContainer from "@/components/FirstContainer.vue";
import { ref } from "vue";
let authText = ref("Авторизация");

let dots = 0;
setInterval(() => {
  authText.value = "Авторизация" + ".".repeat(dots);
  dots = (dots + 1) % 4;
}, 300);
</script>

<template>
  <div class="auth-container">
    <Suspense>
      <template #default>
        <AuthContainer />
      </template>
      <template #fallback>
        <FirstContainer :msg="authText" />
      </template>
    </Suspense>
    <div class="second"></div>
  </div>
</template>

<style scoped>
.auth-container {
  text-align: center;
  position: relative;
  color: #e3e3e3;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.second {
  background-color: #1a1a1a;
  height: calc(60vh - 60px);
}
</style>
