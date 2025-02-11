<template>
    <div class="btn-box">
        <!-- 使用 ref 綁定到這個按鈕元素 -->
        <button class="btn2" ref="btn2" @click="toggleClass"><span>我是首頁按鈕2號</span></button>
        <img src="/public/hand-l.png" alt="裝飾">
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
const btn2 = ref<HTMLElement | null>(null);

function toggleClass() {
  nextTick(() => {
    if (btn2.value) {
      btn2.value.classList.toggle('active');
    }
  });
}
</script>

<style lang="scss" scoped>
.btn2 {
  @include btn-style(#4dff91, #333);
}
.btn-box {
  @extend %flex-center;
  align-items: center;
  img{
    width: auto;
    height: 36px;
  }
}
.active {
  background-color: red;
  color: yellow;
}
</style>