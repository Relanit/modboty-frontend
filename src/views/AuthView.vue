<template>
  <head></head>
  <body>
    <FirstContainer :msg="result" />
    <div class="second"></div>
  </body>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import FirstContainer from "@/components/FirstContainer.vue";

const route = useRoute();
let result = route.query.result?.toString() || "3";
switch (result) {
  case "1":
    result = "Авторизация прошла успешно";
    break;
  case "2":
    result = "Ошибка: неверный код";
    break;
  case "3":
    result = "Ошибка авторизации, <a href='test_link'>попробуйте ещё раз</a>";
    break;
  case "4":
    result = "Ошибка: неверные разрешения";
    break;
  case "5":
    result = "Ошибка: бот не подключён к каналу";
    break;
}
</script>

<style scoped>
body {
  margin: 0px;
  text-align: center;
  color: #e3e3e3;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.second {
  background-color: #1a1a1a;
  height: calc(60vh - 60px);
}
</style>
