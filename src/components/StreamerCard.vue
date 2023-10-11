<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    img: String,
    name: String,
    followers: String,
});
</script>

<template>
    <div class="streamer-card">
        <img :src="props.img" class="streamer-card__avatar unselectable" />
        <div class="streamer-card__description">
            <p class="streamer-card__name">{{ props.name }}</p>
            <p class="streamer-card__followers">{{ props.followers }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.streamer-card {
    display: flex;
    justify-content: center;
    align-items: center;

    &__avatar {
        border-radius: 50%;
        margin-right: 30px;
        width: 150px;
        box-shadow: rgb(12, 12, 12) 0px 0px 7px 1px;
    }

    &__name {
        font-size: 30px;
        overflow-wrap: break-word;
        max-width: 250px;
    }

    &__followers {
        font-size: 24px;
    }
}

@media screen and (max-width: 600px) {
    .streamer-card {
        flex-direction: column;
        line-height: 25px;

        &__avatar {
            width: 120px;
            margin-right: 0px;
            margin-bottom: 10px;
        }
    }
}
</style>
