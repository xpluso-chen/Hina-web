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
    class="btn m-5" 
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

<style lang="scss" scoped>
@use "sass:map";

.m-5{
 margin: 20px;
}
.a {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
 
// .btn1{
//     @include btn-style(#4446cb, #333);
// }

.active {
  background-color: red;
  color: yellow;
}
</style>
