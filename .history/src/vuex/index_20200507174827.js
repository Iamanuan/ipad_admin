import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";

//1、安装插件
Vue.use(Vuex)

const state = {
  roles:['admin']
}

//2、创建store对象
const store = new Vuex.Store({
  state,
  getters
})

//3、挂载在Vue实例上
export default store
