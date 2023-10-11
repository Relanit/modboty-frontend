<script setup lang="ts">
import StreamerCard from "./StreamerCard.vue";
import Icon from "./utility/Icon.vue";
import axios from "axios";
import { register } from "swiper/element/bundle";

register();

const channelsData = await axios.get(`${import.meta.env.VITE_APP_API}/channels`).then((response) => {
    return response.data;
});

type Streamer = {
    profile_image: string;
    name: string;
    followers: number | string;
};

channelsData.topChannels.forEach((streamer: Streamer) => {
    streamer["followers"] = streamer["followers"].toLocaleString("ru-RU");
});

function formatChannels(n: number): string {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${n} подключённых каналов`;
    } else if (lastDigit === 1) {
        return `${n} подключённый канал`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${n} подключённых канала`;
    } else {
        return `${n} подключённых каналов`;
    }
}

const totalChannels = formatChannels(channelsData.channelCount);
</script>

<template>
    <div class="main">
        <h2 class="carousel-header">Кто использует ModBoty?</h2>
        <h5>{{ totalChannels }}</h5>
        <div class="carousel">
            <div class="carousel__wrapper">
                <div class="carousel__swiper-button-prev unselectable">
                    <Icon icon="circle-chevron-left" lib="fas" />
                </div>

                <swiper-container
                    :slides-per-view="1"
                    :loop="true"
                    :autoplay="{
                        delay: 5000,
                    }"
                    :navigation="{
                        nextEl: '.carousel__swiper-button-next',
                        prevEl: '.carousel__swiper-button-prev',
                    }"
                    :pagination="true"
                    :allow-touch-move="false"
                >
                    <swiper-slide v-for="streamer in channelsData.topChannels" :key="streamer.name">
                        <StreamerCard
                            :img="streamer.profile_image"
                            :name="streamer.name"
                            :followers="streamer.followers"
                        />
                    </swiper-slide>
                </swiper-container>

                <div class="carousel__swiper-button-next unselectable">
                    <Icon icon="circle-chevron-right" lib="fas" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";

* {
    text-align: center;
}

.main {
    background-color: $secondaryBackgroundColor;
    padding: 50px 0;
}

.carousel {
    display: flex;
    justify-content: center;
    height: 250px;

    &__wrapper {
        display: flex;
        align-items: center;

        > swiper-container {
            width: 450px;
            max-width: 65vw;

            &::part(bullet-active) {
                background-color: $color;
                width: 11px;
                height: 11px;
            }

            &::part(bullet) {
                width: 11px;
                height: 11px;
            }

            > swiper-slide {
                height: 270px;
                display: flex;
                justify-content: center;
            }
        }
    }

    &__swiper-button-next,
    &__swiper-button-prev {
        width: 50px;

        > svg {
            color: $secondaryBackgroundColor;
            font-size: 2.4em;
            transition: all 0.4s, width 0.1s;
            background-color: white;
            border: 3px solid white;
            border-radius: 50%;

            &:hover {
                color: $colorDarker;
                background-color: #333;
                border-color: #333;
            }

            &:active {
                font-size: 1.6em;
            }
        }

        @media screen and (max-width: 500px) {
            > svg {
                font-size: 2em;
            }
        }
    }
}
</style>
