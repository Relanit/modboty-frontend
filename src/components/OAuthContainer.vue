<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { inject } from "vue";
import { VueCookies } from "vue-cookies";
import axios from "axios";
import config from "src/config.json";

const route = useRoute();
let code = route.query.code;
let state = route.query.state;

let result = ref("Авторизация...");

const $cookies = inject<VueCookies>("$cookies");

async function twitchOAuth2() {
  if (!$cookies) {
    return console.error("Failed to inject $cookies");
  }

  const intent = $cookies.get("intent");
  if (!intent) {
    return console.error("Missing intent cookie");
  }
  $cookies.remove("intent");

  result.value = await axios
    .post(
      `${config.API}/oauth/${intent}`,
      { code: code, state: state },
      { withCredentials: true }
    )
    .then((response) => response.data["status"])
    .catch((error) => error["response"]["data"]["detail"])
    .catch((error) => error);
}

if (code !== undefined && state !== undefined) {
  await twitchOAuth2();
} else {
  result.value = `1`;
}

switch (result.value) {
  case "success":
    result.value = "Авторизация прошла успешно";
    break;
  case "1":
    result.value = `Ошибка, попробуйте ещё раз`;
    break;
  case "2":
    result.value = "Ошибка: бот не подключён к каналу";
    break;
  case "Авторизация...":
    result.value = "Авторизация...";
    break;
  default:
    result.value = `Произошла неизвестная ошибка: ${result.value}`;
    break;
}
</script>

<template>
  <div>
    <h1 v-html="result"></h1>
    <img src="/img/ppStretch.gif" alt="ppStretch" />
  </div>
</template>
