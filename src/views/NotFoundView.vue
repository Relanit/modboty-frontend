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
.not-found {
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    padding-bottom: 20%;
}
</style>
