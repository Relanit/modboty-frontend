<script setup lang="ts">
import axios from "axios";
import { inject } from "vue";
import { VueCookies } from "vue-cookies";
import config from "src/config.json";

function getOAuth2URL() {
  return axios
    .get(`${config.API}/oauth/url`, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function authorizeTwitch() {
  const response = await getOAuth2URL();
  const url = response["authorization_url"];
  window.location.href = url;
}

const $cookies = inject<VueCookies>("$cookies");
if ($cookies) {
  $cookies.set("intent", "authorize");
  await authorizeTwitch();
} else {
  console.error("Failed to inject $cookies");
}
</script>

<template>
  <div></div>
</template>

<style scoped></style>
