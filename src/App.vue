<template>
  <!-- 首頁 -->
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
    <div class="main-area-content">

      <div class="content-box">
        <CountyTemperature id="countyTemperature" />
        <a href="#joke-page">
          <Button id="btn1" :bgColor="colorMap.pink" :hoverColor="colorMap.pinkHover" text="我覺得天氣有點熱"
            imgSrc="/Hina-web/hand-r.png" class="handOnRight" />
        </a>
        <a href="#motto-page">
          <Button id="btn2" :bgColor="colorMap.ttiffany" :hoverColor="colorMap.ttiffanyHover" text="我覺得天氣有點冷"
            imgSrc="/Hina-web/hand-r.png" class="handOnRight" />
        </a>
        <a href="#eat-page">
          <Button id="btn3" :bgColor="colorMap.green" :hoverColor="colorMap.greenHover" text="我覺得肚子餓了"
            imgSrc="/Hina-web/hand-l.png" class="handOnleft" />
        </a>
      </div>
    </div>
    <div class="main-area-footer">
      <!-- 留白用 -->
    </div>
  </section>
  <!-- 冷笑話頁 -->
  <section id="joke-page">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander">
      <!-- 標題 -->
      <span>天氣有點熱嗎?</span>
      <span>講個冷笑話讓你涼快一下</span>

    </div>
    <div class="main-area-content">
      <div class="dialog">
        <!-- 綁定 Joke.vue，讓它可以被控制 -->
        <Joke ref="jokeComponent" />
      </div>
      <div class="againBtn">
        <!-- <button @click="jokeAgain">不夠冷，再一個！</button> -->
        <Button @click="jokeAgain" :bgColor="colorMap.pink" :hoverColor="colorMap.pinkHover" text="不夠冷，再一個！"
          imgSrc="/Hina-web/hand-r.png" class="nohands" />
      </div>
    </div>
    <div class="main-area-footer">
      <!-- 留白用 -->
    </div>
  </section>
  <!-- 雞湯頁 -->
  <section id="motto-page">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander">
      <!-- 標題 -->
      <span>天冷不是冷</span>
      <span>心灰意冷才是真的冷</span>
      <span>給你一碗雞湯溫暖一下</span>

    </div>
    <div class="main-area-content">
      <div class="dialog">
        <!-- 綁定 motto.vue，讓它可以被控制 -->
        <Motto ref="mottoComponent" />
      </div>
      <div class="againBtn">
        <Button @click="mottoAgain" :bgColor="colorMap.orange" :hoverColor="colorMap.orangeHover" text="我需要再一碗"
          imgSrc="/Hina-web/hand-r.png" class="nohands" />
      </div>
    </div>
    <div class="main-area-footer">
      <!-- 留白用 -->
    </div>
  </section>
  <!-- 吃吃頁 -->
  <section id="eat-page">
    <div class="left-area"></div>
    <div class="right-area"></div>
    <div class="main-area-hander">
      <!-- 標題 -->
      <span>肚子餓了嗎?</span>
      <span>幫你想一下吃什麼</span>
      <Button @click="eatAgain" :bgColor="colorMap.deepYellow" :hoverColor="colorMap.deepYellowHover" text="再想一個"
        imgSrc="/Hina-web/hand-r.png" class="nohands" />

    </div>
    <div class="main-area-content">
      <div class="eat-page-content">
        <div class="star-box">
          <Eat ref="eatComponent" class="eat-text" />
        </div>
        <div class="magican-box">

        </div>
      </div>


    </div>
    <div class="main-area-footer">
      <!-- 留白用 -->
    </div>
  </section>

</template>

<script setup lang="ts">
import { colorMap } from './constants/colorMap';
import CountyTemperature from './components/api.vue';
import Motto from './components/motto.vue';
import Joke from './components/joke.vue';
import Eat from './components/eat.vue';
import Button from './components/Button.vue';

// 抓現在時間
import { ref } from "vue";
const now = ref(new Date());
const updateTime = () => {
  now.value = new Date();
};

// 抓joke.vue的jokeAgain()
const jokeComponent = ref(null);
function jokeAgain() {
  jokeComponent.value?.jokeAgain();
}

// 抓motto.vue的jokeAgain()
const mottoComponent = ref(null);
function mottoAgain() {
  mottoComponent.value?.mottoAgain();
}
// 抓eat.vue的jokeAgain()
const eatComponent = ref(null);
function eatAgain() {
  eatComponent.value?.eatAgain();
}


</script>

<style lang="scss" scoped>
@use "sass:map";

.dialog {
  width: 100%;
  height: 100%;
  color: map.get($color, black);
  background-color: map.get($color, white);
  border: map.get($color, black) 1px solid;
  border-radius: 20px;
  margin: map.get($interval, m) 0;
  // 對標題和按鈕的距離
  padding: map.get($interval, m);
  // 左右對齊標題
}

.againBtn {
  padding: 0 map.get($interval, m);
  // 左右對齊標題
}

#index-page {
  background-color: map.get($color,orange);
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

  .main-area-content {
    @extend %flex-column-center;

    .content-box {
      // 網頁版->邊角圓,填色
      width: 400px;
      height: 400px;
      position: relative;
      background-color: #EFE2C0;
      border-radius: 50%;
      padding-top: map.get($interval, l);
      padding-bottom: map.get($interval, xl);
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
        right: -300px;
      }

      #btn3 {
        position: absolute;
        bottom: -60px;
        left: -50px;
      }
      @include respond-to(md){
        #btn1 {
        left: -210px;
      }

      #btn2 {
        right: -200px;
      }
      }

      // 手機版->不邊角圓,不填色
      @include respond-to(sm) {
        width: 100%;
        height: auto;
        padding: 0 0;
        background-color: unset;
        border-radius: unset;

        #btn1,
        #btn2,
        #btn3 {
          position: unset;
        }
      }

    }
  }
}

#joke-page {
  background-color: hsla(178, 38%, 56%, 0.8);
  position: relative; // 讓偽元素參考這個區塊定位
  
  &::after {
    content: "";
    position: absolute; // 讓它能覆蓋父元素
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block; // 讓偽元素佔滿區域
    background-image: url("/Hina-web/bg-joke.png");
    background-repeat: repeat;
    z-index: -1; // 讓背景圖片疊在顏色之下
  }
  .main-area-hander {
    span {
      /* 設置文字描邊*/
      @extend %text-outline-stroke;
      @include title-style(map.get($color, orange));
    }
  }

}

#motto-page {

  background-color: map.get($color, yellow);
  .main-area-hander {
    span {
      /* 設置文字描邊*/
      @extend %text-outline-stroke;
      @include title-style(map.get($color, ttiffany));
    }
  }
}

#eat-page {
  background-color: map.get($color, perple);
  .main-area-hander {
    height: 24vh;
    span {
      /* 設置文字描邊*/
      @extend %text-outline-stroke;
      @include title-style(map.get($color, yellow));
    }
  }

  .main-area-content {
    padding: unset;
    
    .eat-page-content {
      width: 100%;
      height: 60vh;
      @include respond-to(md){
        margin-top: 20vh;
        height: auto;
      }
      @include respond-to(xs) {
        overflow: hidden;
        // 手機版讓星星超過頁面時消失
        height: 70vh;
        margin-top: 0vh;
      }

      .star-box {
        width: 360px;
        height: 360px;
        background-image: url("/Hina-web/Star-pink.svg");
        background-repeat: no-repeat;
        position: relative;
        top: 20px;
        left: 300px;

        @include respond-to(md) {
          top: -120px;
          left: 240px;
        }
        @include respond-to(sm) {
          // top: 20px;
          left: 100px;
        }
        @include respond-to(xs) {
          top: 20px;
        }
        @include respond-to(xxxs) {
          left: 0px;
        }

        .eat-text {
          position: absolute;
          top: 156px;
          left: 10px;
          z-index: 3;
          @include respond-to (xs){
            left: 0px;
          }
        }
      }

      .magican-box {
        width: 200px;
        height: 240px;
        background-image: url("/Hina-web/magician1.svg");
        background-repeat: no-repeat;
        position: relative;
        top: -120px;
        left: 20px;
        z-index: 5;

        @include respond-to(sm) {
          top: -120px;
          left: 8px;
        }
      }
    }
  }

}
</style>
