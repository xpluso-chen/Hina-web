<template>

    <div class="joke-content">
        <!-- 白框 -->
        <p v-if="random.question" v-html="random.question"></p>
        <hr>
        <!-- <button @click="showAns">公布答案</button> -->
        <Button id="showAns" @click="showAns" :bgColor="colorMap.ttiffany" :hoverColor="colorMap.ttiffanyHover"
            text="公布答案" imgSrc="/Hina-web/hand-r.png" class="nohands" />
        <!-- 顯示答案 -->
        <p v-if="random.ans" v-html="random.ans"></p>
    </div>
    <!-- <button @click="jokeAgain">不夠冷再一個</button> -->

</template>

<script setup lang="ts">
// 按鈕樣式
import Button from './Button.vue';
import { colorMap } from '../constants/colorMap';

import { ref, reactive, onMounted } from "vue";
const users = ref<{ question: string, ans: string }[]>([]); // 陣列，存 API 值
const random = reactive({ question: "", ans: "" }); // 只存隨機的 motto
const randomIndex = ref<number | null>(null); // 用來記錄當前的索引

//初始化時的動作  
onMounted(async () => {
    const response = await fetch(`/Hina-web/json/joke.json?t=${new Date().getTime()}`);
    users.value = await response.json();
    // console.log(users.value);
    jokeAgain(); // 先顯示第一個問題
});

function jokeAgain() {
    randomIndex.value = Math.floor(Math.random() * users.value.length);
    random.question = users.value[randomIndex.value].question;
    random.ans = ""; // 清空答案，確保新的問題出來時，不會殘留舊的答案。
}
// 讓 `App.vue` 可以呼叫 `jokeAgain`
defineExpose({ jokeAgain });

function showAns() {
    random.ans = users.value[randomIndex.value].ans;
}
</script>

<style lang="scss" scoped>
@use "sass:map";

.joke-content {
    p {
        padding: map.get($interval, s) 0;
    }

    hr {
        border: map.get($color, black) 1.5px solid;

        @include respond-to(sm) {
            border: map.get($color, black) 0.5px solid;
        }
    }

}
</style>