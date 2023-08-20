<script setup lang="ts">
import { register } from "swiper/element/bundle";
import StreamerCard from "./StreamerCard.vue";
import axios from "axios";
register();

const channelsData = await axios
  .get("http://api.modbot.xyz/channels")
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
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
  <h5 v-text="total_channels_label"></h5>
  <div class="carousel">
    <div class="carousel-wrapper">
      <div class="swiper-button-prev-wrapper">
        <div class="swiper-button-prev">
          <svg
            width="50px"
            viewBox="0 0 24 24"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#e3e3e3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.26 15.53L9.73999 12L13.26 8.46997"
              stroke="#e3e3e3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
        <swiper-slide
          v-for="streamer in channelsData.topChannels"
          :key="streamer.name"
        >
          <StreamerCard
            :img="streamer.profile_image"
            :name="streamer.name"
            :followers="streamer.followers"
          />
        </swiper-slide>
      </swiper-container>

      <div class="swiper-button-next-wrapper">
        <div class="swiper-button-next">
          <svg
            width="50px"
            viewBox="0 0 24 24"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#e3e3e3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.74 15.53L14.26 12L10.74 8.46997"
              stroke="#e3e3e3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
}

.carousel-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

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
}

swiper-slide {
  height: 270px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.swiper-button-prev-wrapper,
.swiper-button-next-wrapper {
  width: 50px;
  user-select: none;
}

.swiper-button-next svg,
.swiper-button-prev svg {
  transition: fill 0.4s, width 0.1s;

  & path {
    transition: stroke 0.4s;
  }

  &:hover {
    fill: #858585;

    & path {
      stroke: #333333;
    }
  }

  &:active {
    width: 40px;
  }
}

@media screen and (max-width: 500px) {
  .swiper-button-next svg,
  .swiper-button-prev svg {
    width: 45px;
  }
}
</style>
