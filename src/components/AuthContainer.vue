<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import FirstContainer from "@/components/FirstContainer.vue";
import axios from "axios";

const route = useRoute();
let code = route.query.code;
let scope = route.query.scope;

let result = ref("Авторизация...");

const authLink =
  "https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=xiudfd2nsod7a4kukl5bluhjt5wedo&redirect_uri=http://localhost:8080/auth&scope=channel:read:subscriptions+moderation:read+channel:manage:broadcast+channel:manage:polls+channel:manage:predictions+channel:read:polls+channel:read:predictions+channel:read:vips+channel:manage:vips&force_verify=true";

if (!(code && scope)) {
  window.location.href = authLink;
} else {
  result.value = await axios
    .post(
      "http://localhost:5000/auth",
      {},
      {
        params: {
          code: code,
          scope: scope,
        },
      }
    )
    .then((response) => response.data["status"])
    .catch((error) =>
      error["response"]["data"]["detail"]["error_code"].toString()
    )
    .catch((error) => error);
}

switch (result.value) {
  case "success":
    result.value = "Авторизация прошла успешно";
    break;
  case "1":
    result.value = `Ошибка авторизации, <a href='${authLink}'>попробуйте ещё раз</a>`;
    break;
  case "2":
    result.value = "Ошибка: бот не подключён к каналу";
    break;
  default:
    result.value = `Произошла неизвестная ошибка: ${result.value}`;
    break;
}
</script>

<template>
  <FirstContainer :msg="result" />
</template>
