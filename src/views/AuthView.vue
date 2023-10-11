<script setup lang="ts">
import { useCookie } from "vue-cookie-next";
import axios from "axios";

function getOAuth2URL() {
    return axios
        .get(`${import.meta.env.VITE_APP_API}/oauth/url`, {
            withCredentials: true,
        })
        .then((response) => {
            return response.data;
        });
}

async function authorizeTwitch() {
    const response = await getOAuth2URL();
    const url = response["authorization_url"];
    window.location.href = url;
}

const cookie = useCookie();
cookie.setCookie("intent", "authorize");
await authorizeTwitch();
</script>
