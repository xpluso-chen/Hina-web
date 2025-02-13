<template>
  <div class="btn-box">
    <img class="handOnleft-img" :src="imgSrc" alt="裝飾左邊用的手">
    <button class="btn" :class="{ active: isActive }"  :style="{ '--bg-color': bgColor, '--hover-color': hoverColor }" @click="toggleClass">
      <span>{{ text }}</span>
    </button>
    <img class="handOnRight-img" :src="imgSrc" alt="裝飾右邊用的手">
  </div>
</template>

<script setup lang="ts">
import { ref,  defineProps } from 'vue';

defineProps({
  bgColor: { type: String },
  hoverColor: { type: String },
  text: { type: String },
  imgSrc: { type: String }
});

const btn = ref<HTMLElement | null>(null);
const isActive = ref(false);
function toggleClass() {
  isActive.value = true; // 每次點擊時都加上 active
  setTimeout(() => {
    isActive.value = false; // 短暫顯示 active 後自動移除
  }, 2000); // 控制 active 顯示的時間
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