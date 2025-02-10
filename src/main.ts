import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss' // 直接載入 SCSS，Vite 會自動轉換
import $ from 'jquery'

createApp(App).mount('#app')
// 將 jQuery 設定為全局變數
App.config.globalProperties.$ = $

