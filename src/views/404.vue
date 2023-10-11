<script setup lang="ts"></script>

<template>
    <div class="not-found">
        <div class="not-found__wrapper">
            <h1>Ошибка 404: страница не найдена</h1>
            <img src="@img/ppCheck.gif" alt="ppCheck" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@scss/constants.scss";

.not-found {
    background-color: $backgroundColor;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-bottom: 30%;
}
</style>
