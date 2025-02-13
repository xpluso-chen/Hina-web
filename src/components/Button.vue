<template>
  <a class="btn-box" :href="link">
    <img class="handOnleft-img" :src="imgSrc" alt="裝飾左邊用的手">
    <button class="btn" ref="btn" :style="{ '--bg-color': bgColor, '--hover-color': hoverColor }" @click="toggleClass">
      <span>{{ text }}</span>
    </button>
    <img class="handOnRight-img" :src="imgSrc" alt="裝飾右邊用的手">
  </a>
</template>

<script setup lang="ts">
import { ref, nextTick, defineProps } from 'vue';

withDefaults(defineProps<{
  link?: string;
  bgColor?: string;
  hoverColor?: string;
  text?: string;
  imgSrc?: string;
}>(), {
  link: "#"
});

const btn = ref<HTMLElement | null>(null);

function toggleClass() {
  nextTick(() => {
    if (btn.value) {
      btn.value.classList.toggle('active');
    }
  });
}
</script>

<style lang="scss" scoped>
.btn {
  @include btn-style(var(--bg-color), var(--hover-color));
}

.btn-box {
  display: flex;
  align-items: center;
  margin: map-get($interval, s) 0;

  img {
    width: auto;
    height: 16px;
  }
}
</style>