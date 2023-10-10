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

const total_channels_label = `${channelsData.channelCount} подключённых каналов`;
</script>

<template>
    <h2 class="carousel-header">Кто использует ModBoty?</h2>
    <h5>{{ total_channels_label }}</h5>
    <div class="carousel">
        <div class="carousel-wrapper">
            <div class="swiper-button-prev">
                <Icon icon="circle-chevron-left" lib="fas" />
            </div>

            <swiper-container
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                    delay: 5000,
                }"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                :pagination="true"
                :allow-touch-move="false"
            >
                <swiper-slide v-for="streamer in channelsData.topChannels" :key="streamer.name">
                    <StreamerCard :img="streamer.profile_image" :name="streamer.name" :followers="streamer.followers" />
                </swiper-slide>
            </swiper-container>

            <div class="swiper-button-next">
                <Icon icon="circle-chevron-right" lib="fas" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.carousel-header {
    margin-top: 50px;
}

.carousel {
    display: flex;
    justify-content: center;
    height: 250px;
    margin-bottom: 50px;

    .carousel-wrapper {
        display: flex;
        align-items: center;

        swiper-container {
            width: 450px;
            max-width: 65vw;

            &::part(bullet-active) {
                background-color: #e3e3e3;
                width: 11px;
                height: 11px;
            }

            &::part(bullet) {
                width: 11px;
                height: 11px;
            }

            swiper-slide {
                height: 270px;
                display: flex;
                justify-content: center;
            }
        }

        .swiper-button-next,
        .swiper-button-prev {
            width: 50px;
            user-select: none;

            svg {
                color: #242424;
                font-size: 2.4em;
                transition: all 0.4s, width 0.1s;
                background-color: white;
                border: 3px solid white;
                border-radius: 50%;

                &:hover {
                    color: #858585;
                    background-color: #333;
                    border-color: #333;
                }

                &:active {
                    font-size: 1.6em;
                }
            }

            @media screen and (max-width: 500px) {
                svg {
                    font-size: 2em;
                }
            }
        }
    }
}
</style>
