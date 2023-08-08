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
    <img :src="props.img" class="streamer-card__img" />
    <div class="streamer-card__description">
      <p v-html="props.name" class="streamer-card__description__name"></p>
      <p
        v-html="props.followers"
        class="streamer-card__description__followers"
      ></p>
    </div>
  </div>
</template>

<style>
.streamer-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.streamer-card__img {
  border-radius: 50%;
  margin-right: 30px;
  width: 150px;
  box-shadow: rgb(12, 12, 12) 0px 0px 7px 1px;
}

.streamer-card__description__name {
  font-size: 30px;
  overflow-wrap: break-word;
  max-width: 250px;
}

.streamer-card__description__followers {
  font-size: 24px;
}

@media screen and (max-width: 600px) {
  .streamer-card {
    flex-direction: column;
    line-height: 25px;
  }

  .streamer-card__img {
    width: 120px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
}
</style>
