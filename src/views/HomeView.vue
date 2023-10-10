<script setup lang="ts">
import ExampleContainer from "@components/ExampleContainer.vue";
import FirstContainer from "@components/FirstContainer.vue";
import StreamersCarousel from "@components/StreamersCarousel.vue";
import TheFooter from "@components/TheFooter.vue";
import stvSrc from "@img/7tv.gif";
import commandsSrc from "@img/commands.gif";
import predictionSrc from "@img/predictions.gif";
import streaminfoSrc from "@img/streaminfo.gif";
import vipsSrc from "@img/vips.gif";
</script>

<template>
    <div class="home">
        <FirstContainer msg="Бот для модерации и управления 7TV" :home="true" />
        <ExampleContainer
            :dark="true"
            title="Пользовательские команды"
            text="Добавляйте команды с указанным текстом;<br>Создавайте таймеры для автоматической отправки команд;<br> Используйте переменные для создания интерактивных команд"
            :img="commandsSrc"
        />
        <ExampleContainer
            :dark="false"
            title="Управление смайлами"
            text="Добавляйте, удаляйте, переименовывайте смайлы; <br/> Меняйте и копируйте наборы 7TV; <br/>Управляйте редакторами 7TV"
            :img="stvSrc"
        />
        <ExampleContainer
            :dark="true"
            title="Управление випами"
            text="Позвольте выбранным модераторам управлять випами, с возможностью выдачи випа на указанный срок"
            :img="vipsSrc"
        />
        <ExampleContainer
            :dark="false"
            title="Настройки стрима"
            text="Легко меняйте название и категорию стрима;<br>Создайте элиасы, чтобы менять категорию в два клика"
            :img="streaminfoSrc"
        />
        <ExampleContainer
            :dark="true"
            title="А также управление ставками, банфразы и <a href='https://docs.modbot.xyz'>многое другое</a>"
            :img="predictionSrc"
        />
        <Suspense>
            <template #default>
                <StreamersCarousel />
            </template>
            <template #fallback>Получение стримеров...</template>
        </Suspense>
    </div>
    <TheFooter />
</template>
