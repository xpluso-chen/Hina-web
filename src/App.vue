<template>
  <div class="parent">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander a">
      <p>標題</p>
    </div>
    <div class="main-area-content">
      <Button bgColor="#ffb84d" hoverColor="#4d91ff" text="我覺得天氣有點熱" imgSrc="/hand-l.png" class="handOnRight"/>
      <Button bgColor="#ffb84d" hoverColor="#4d91ff" text="我覺得天氣有點冷" imgSrc="/hand-l.png" class="handOnRight"/>
      <Button bgColor="#4d91ff" hoverColor="#000" text="我覺得肚子餓了" imgSrc="/hand-r.png" class="handOnleft"/>
    </div>
    <div class="main-area-footer">留白</div>
  </div>
</template>

<script setup lang="ts">
// import Test from './components/api.vue';
// import Test2 from './components/motto.vue';
// import Test3 from './components/joke.vue';
import Button from './components/Button.vue';

</script>

<style lang="scss" scoped>
@use "sass:map";

.m-5 {
  margin: 20px;
}

.a {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.btn2 {
  @include btn-style(#4446cb, #333);
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
  background-color: red;
  color: yellow;
}
</style>
