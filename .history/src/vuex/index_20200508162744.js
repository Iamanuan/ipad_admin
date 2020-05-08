import Vue from 'vue'
import Vuex from 'vuex'

//1、安装插件
Vue.use(Vuex)

const state = {
  id: 0,
  isAdmin: true
}

//2、创建store对象
const store = new Vuex.Store({
  state,
  getters:{
    
  },
  m
})

//3、挂载在Vue实例上
export default store
