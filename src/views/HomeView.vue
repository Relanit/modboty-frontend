<script setup lang="ts">
import ExampleContainer from "@/components/ExampleContainer.vue";
import FirstContainer from "@/components/FirstContainer.vue";
import StreamersCarousel from "@/components/StreamersCarousel.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
    <div class="home">
        <FirstContainer msg="Бот для модерации и управления 7TV" :home="true" />
        <ExampleContainer
            :dark="true"
            title="Пользовательские команды"
            text="Добавляйте команды с указанным текстом;<br>Создавайте таймеры для автоматической отправки команд;<br> Используйте переменные для создания интерактивных команд"
            img="img/commands.gif"
        />
        <ExampleContainer
            :dark="false"
            title="Управление смайлами"
            text="Добавляйте, удаляйте, переименовывайте смайлы; <br/> Меняйте и копируйте наборы 7TV; <br/>Управляйте редакторами 7TV"
            img="img/7tv.gif"
        />
        <ExampleContainer
            :dark="true"
            title="Управление випами"
            text="Позвольте выбранным модераторам управлять випами, с возможностью выдачи випа на указанный срок"
            img="img/vips.gif"
        />
        <ExampleContainer
            :dark="false"
            title="Настройки стрима"
            text="Легко меняйте название и категорию стрима;<br>Создайте элиасы, чтобы менять категорию в два клика"
            img="img/streaminfo.gif"
        />
        <ExampleContainer
            :dark="true"
            title="А также управление ставками, банфразы и <a href='https://docs.modbot.xyz'>многое другое</a>"
            img="img/predictions.gif"
        />
        <Suspense>
            <template #default>
                <StreamersCarousel />
            </template>
            <template #fallback>Загрузка стримеров...</template>
        </Suspense>
    </div>
    <TheFooter />
</template>

<style scoped></style>
