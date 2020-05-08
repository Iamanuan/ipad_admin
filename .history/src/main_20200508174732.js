import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
let echarts = require('echarts/lib/chart/bar')
// 导入字体图标样式表
import './assets/font/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 配置网络请求根路路径
axios.defaults.baseURL = 'http://192.168.8.114:8085/'
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
