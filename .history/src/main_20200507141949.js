import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入字体图标样式表
import './assets/font/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

// 配置网络请求根路径
axios.default

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
