<template>
    <div class="btn-box">
      <button 
        class="btn"
        ref="btn"
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
  
   defineProps({
    bgColor: { type: String},
    hoverColor: { type: String },
    text:{type: String }
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
    @extend %flex-center;
    align-items: center;
    img {
      width: auto;
      height: 36px;
    }
  }
  
  
  </style>
  