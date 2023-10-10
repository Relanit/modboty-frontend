<script setup lang="ts">
import { ref } from "vue";
import OAuthContainer from "@components/OAuthContainer.vue";

const authText = ref("Авторизация");

let dots = 0;
setInterval(() => {
    authText.value = "Авторизация" + ".".repeat(dots);
    dots = (dots + 1) % 4;
}, 300);
</script>

<template>
    <div class="oauth_container">
        <Suspense>
            <template #default>
                <OAuthContainer />
            </template>
            <template #fallback>
                <div>
                    <h1>{{ authText }}</h1>
                    <img class="ppCircle" src="@img/ppCircle.gif" alt="ppCircle" />
                </div>
            </template>
        </Suspense>
    </div>
</template>

<style lang="scss" scoped>
.oauth_container {
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    padding-bottom: 30%;
}

.ppCircle {
    margin-top: 15px;
}
</style>
