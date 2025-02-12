<template>
  <section id="index-page">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander">
      <!-- 標題 -->
      <div class="today">
        <p class="year">{{ now.getFullYear() }}</p>
        <p class="date">{{ now.getMonth() + 1 }}/{{ now.getDate() }}</p>
      </div>

    </div>
    <div class="main-area-content flex-column-center">

      <div class="content-box">
        <CountyTemperature id="countyTemperature" />
        <Button id="btn1" :bgColor="colorMap.pink" :hoverColor="colorMap.pinkHover" text="我覺得天氣有點熱" imgSrc="/Hina-web/hand-r.png"
          class="handOnRight" />
        <Button id="btn2" :bgColor="colorMap.ttiffany" :hoverColor="colorMap.ttiffanyHover" text="我覺得天氣有點冷"
          imgSrc="/hand-r.png" class="handOnRight" />
        <Button id="btn3" :bgColor="colorMap.green" :hoverColor="colorMap.greenHover" text="我覺得肚子餓了"
          imgSrc="/hand-l.png" class="handOnleft" />
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
import CountyTemperature from './components/api.vue';
// import Motto from './components/motto.vue';
// import Joke from './components/joke.vue';
import Button from './components/Button.vue';

// 抓現在時間
import { ref } from "vue";
const now = ref(new Date());
const updateTime = () => {
  now.value = new Date();
};
</script>

<style lang="scss" scoped>
@use "sass:map";

#index-page {
  .main-area-hander {
    // 置中today
    align-items: center;

    .today {
      // 長度切齊CountyTemperature
      width: 240px;
      color: map.get($color, yellow);

      .year {
        font-size: map-get($font-size, title-m);
      }

      .date {
        font-size: map-get($font-size, title-l);
      }
    }
  }

  .content-box {
    // 網頁版->邊角圓,填色
    width: 400px;
    height: 400px;
    position: relative;
    padding: map.get($interval, xl) 0;
    background-color: map.get($color, yellow);
    border-radius: 50%;
    @extend %flex-column-center;

    #btn1 {
      position: absolute;
      top: 200px;
      left: -300px;
    }

    #btn2 {
      position: absolute;
      top: 60px;
      right: -400px;
    }

    #btn3 {
      position: absolute;
      bottom: -60px;
      left: -50px;
    }
    
    // 手機版->不邊角圓,不填色
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      padding: map.get($interval, m) 0;
      background-color: unset;
      border-radius: unset;
      #btn1,#btn2,#btn3{
        position: unset;
      }
    }

  }
}
</style>
