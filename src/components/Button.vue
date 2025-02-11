<template>
    <div class="btn-box">
      <button 
        class="btn2"
        ref="btn2"
        :style="{ '--bg-color': bgColor, '--hover-color': hoverColor }"
        @click="toggleClass"
      >
        <span>{{text}}</span>
      </button>
      <img src="/public/hand-l.png" alt="裝飾">
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, nextTick, defineProps } from 'vue';
  
  const props = defineProps({
    bgColor: { type: String},
    hoverColor: { type: String },
    text:{type: String }
  });
  
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
    @include btn-style(var(--bg-color), var(--hover-color));
  }
  
  .btn-box {
    @extend %flex-center;
    align-items: center;
    img {
      width: auto;
      height: 36px;
    }
  }
  
  .active {
    background-color: red !important;
    color: yellow !important;
  }
  </style>
  