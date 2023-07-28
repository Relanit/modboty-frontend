<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  dark: Boolean,
  title: String,
  text: String,
  img: String,
});
</script>

<template>
  <div :class="[dark ? 'dark' : 'light', 'container']">
    <div :class="[dark ? 'dark' : 'light', 'container__content']">
      <img
        :class="[dark ? 'dark' : 'light', 'container__content__image']"
        :src="props.img"
      />
      <div class="container__content__description">
        <h2 v-html="props.title"></h2>
        <p v-html="props.text"></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.dark {
  background-color: #1a1a1a;
}

.light {
  background-color: #242424;
}

.container__content {
  text-align: left;
  display: flex;
  align-items: center;
}

.container__content.light {
  flex-direction: row-reverse;
}

.container__content__image {
  border-radius: 10px;
  max-width: 90vw;
}

.container__content__image {
  box-shadow: rgb(12, 12, 12) 0px 1px 7px 0px;
}

.container__content__description {
  max-width: 500px;
  margin: 25px;
  vertical-align: text-top;
}

@media screen and (max-width: 800px) {
  .container__content,
  .container__content.light {
    flex-direction: column-reverse;
  }

  .container__content__description {
    margin: 15px;
  }

  p {
    font-size: calc(16px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280));
  }
}
</style>
