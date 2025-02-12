<template>
  <section id="index-page">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander column-down">
      <!-- 標題 -->
      <p>標題</p>
    </div>
    <div class="main-area-content">
      <TemperatureApi />
      <div class="btns">
        <Button :bgColor="colorMap.pink" :hoverColor="colorMap.pinkHover" text="我覺得天氣有點熱" imgSrc="/hand-r.png" class="handOnRight" />
        <Button :bgColor="colorMap.ttiffany" :hoverColor="colorMap.ttiffanyHover" text="我覺得天氣有點冷" imgSrc="/hand-r.png" class="handOnRight" />
        <Button :bgColor="colorMap.green" :hoverColor="colorMap.greenHover" text="我覺得肚子餓了" imgSrc="/hand-l.png" class="handOnleft" />
      </div>
    </div>
    <div class="main-area-footer">
      <!-- 留白用 -->
    </div>
  </section>

  <section id="index-page">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander flex-column-end">
      <!-- 標題 -->
      <p>標題</p>
    </div>
    <div class="main-area-content">
      
    </div>
    <div class="main-area-footer">
      <!-- 留白用 -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { colorMap } from './constants/colorMap';
import TemperatureApi from './components/api.vue';
// import Motto from './components/motto.vue';
// import Joke from './components/joke.vue';
import Button from './components/Button.vue';

</script>

<style lang="scss" scoped>
@use "sass:map";
</style>
