<script setup lang="ts">
import { ref } from "vue";
import type { User } from "@structures/User";

defineProps<{
    user: User;
    scale?: string;
    textScale?: string;
}>();

const userTag = ref<HTMLElement | null>(null);
</script>

<template>
    <a v-if="user" ref="userTag" class="user-tag unstyled-link">
        <span class="user-picture-wrapper">
            <img :src="user.avatar_url" :style="{ height: scale, width: scale }" />
        </span>

        <span class="username" :loading="!user?.id">
            {{ user.display_name ?? user.username }}
        </span>
    </a>
</template>

<style scoped lang="scss">
@import "@scss/constants.scss";

.user-tag {
    display: inline-block;
    vertical-align: middle;

    cursor: inherit;
    &[clickable="true"] {
        cursor: pointer;
    }

    .user-picture-wrapper > img {
        vertical-align: middle;
        border-radius: v-bind(scale);
        box-sizing: border-box;
        border: 0.01em solid $color;
        clip-path: circle(99% at 50% 50%);
        height: v-bind(scale);
        width: v-bind(scale);
        margin-right: calc(v-bind(scale) * 0.15);
        text-indent: calc(v-bind(scale) * 2);

        &[suspense="true"] {
            border: 0.25em solid currentColor;
            opacity: 0.05;
        }
    }

    [loading="true"] {
        &.avatar {
            border-style: none;
        }
        &.username {
            min-width: 6em;
            height: 1em;
        }
    }

    .username {
        display: inline-block;
        vertical-align: middle;
        font-size: v-bind(textScale);
        color: $color;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.user-card-popper {
    position: absolute;
    z-index: 100;
}
</style>
