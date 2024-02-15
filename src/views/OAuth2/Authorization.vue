<script setup lang="ts">
import { useCookie } from "vue-cookie-next";
import { axiosClient } from "@/axios";

function getOAuth2URL() {
    return axiosClient.get("/oauth/url").then((response) => {
        return response.data;
    });
}

async function authorizeTwitch() {
    const response = await getOAuth2URL();
    const url = response["authorization_url"];
    window.location.href = url;
}

const cookie = useCookie();
cookie.setCookie("intent", "authorize", { domain: ".modboty.com" });
await authorizeTwitch();
</script>
