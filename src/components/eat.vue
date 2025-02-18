<template>

        <div>
            <!-- 白框 -->
            <p v-if="random.eat" v-html="random.eat"></p>
        </div>
        <!-- <button @click="eatAgain">我需要再一碗</button> -->

</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const users = ref<{ eat: string }[]>([]); // 陣列，存 API 值
const random = reactive({ eat: "" }); // 只存隨機的 eat

//初始化時的動作  
onMounted(async () => {
    const response = await fetch("/Hina-web/json/eat.json");
    users.value = await response.json();
    
    eatAgain();
});

function eatAgain(){
    const randomIndex = Math.floor(Math.random() * users.value.length);
    return random.eat = users.value[randomIndex].eat;
}

// 讓 `App.vue` 可以呼叫 `eatAgain`
defineExpose({ eatAgain });

</script>

<style lang="scss" scoped>
@use "sass:map";
div{
    display: flex;
    width: 100%;
    justify-content: center;
    // 確保星星中的P不管長短都在星星中間
    p {
      /* 設置文字描邊*/
      @extend %text-outline-stroke;
      @include title-style(map.get($color, orange));
    }
}

</style>