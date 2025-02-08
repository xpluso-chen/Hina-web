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
      <Test2 /><button class="btn1">123151</button>
    </div>
    <div class="main-area-footer">留白</div>
  </div>

 

</template>

<script setup lang="ts">
import Test from './components/api.vue'
import Test2 from './components/motto.vue'
import Test3 from './components/joke.vue'


</script>

<style lang="scss" scoped>
@use "sass:map";

.a {
  // 貼底
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.btn1{
  // 飄出去
  position: absolute;
  top: -100px;
  left: -100px;
}
</style>
