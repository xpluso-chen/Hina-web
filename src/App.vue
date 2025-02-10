<template>
  <Test />
  <div>
    <Test2 />
  </div>
  <div>
    <Test3 />
  </div>

  <div class="parent">
    <div class="left-area">1</div>
    <div class="right-area">2</div>
    <div class="main-area-hander a">
      <p>留白</p>
    </div>
    <div class="main-area-content">
      <Test2 />
      <div class="btn-box">
        <button class="btn1"><span>我是首頁按鈕</span></button>
      </div>

      <div class="btn-box">
        <!-- 使用 ref 綁定到這個按鈕元素 -->
        <button class="btn2" ref="btn2" @click="toggleClass"><span>我是首頁按鈕2號</span></button>
      </div>

      <button 
    v-for="(text, index) in ['我是首頁按鈕1', '我是首頁按鈕2']" 
    :key="index" 
    class="btn1 m-5" 
    :class="{ active: activeIndex === index }" 
    @click="setActive(index)"
  >
    <span>{{ text }}</span>
  </button>

    </div>
    <div class="main-area-footer">留白</div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import Test from './components/api.vue';
import Test2 from './components/motto.vue';
import Test3 from './components/joke.vue';

const btn2 = ref<HTMLElement | null>(null);

function toggleClass() {
  nextTick(() => {
    if (btn2.value) {
      btn2.value.classList.toggle('active');
    }
  });
}

const activeIndex = ref(null); // 用來存儲目前點擊的按鈕索引

const setActive = (index) => {
  activeIndex.value = index; // 更新目前點擊的按鈕索引
};
</script>

<style lang="scss">
@use "sass:map";
.m-5{
 margin: 20px;
}
.a {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
 
.btn1 {
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 60px;
  width: 210px;
  opacity: 1;
  background-color: #ffffff;
  border: 2px solid map.get($color, black);

  &:hover {
    animation: rotate 0.7s ease-in-out both;
    @keyframes rotate {
      0% { transform: rotate(0deg) translate3d(0, 0, 0); }
      25% { transform: rotate(3deg) translate3d(0, 0, 0); }
      50% { transform: rotate(-3deg) translate3d(0, 0, 0); }
      75% { transform: rotate(1deg) translate3d(0, 0, 0); }
      100% { transform: rotate(0deg) translate3d(0, 0, 0); }
    }
  }

  span {
    color: map.get($color, black);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;

    &:hover {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;

      @keyframes storm {
        0% { transform: translate3d(0, 0, 0) translateZ(0); }
        25% { transform: translate3d(4px, 0, 0) translateZ(0); }
        50% { transform: translate3d(-3px, 0, 0) translateZ(0); }
        75% { transform: translate3d(2px, 0, 0) translateZ(0); }
        100% { transform: translate3d(0, 0, 0) translateZ(0); }
      }
    }
  }
}

.active {
  background-color: red;
  color: yellow;
}
</style>
