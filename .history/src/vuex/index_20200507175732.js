import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import getters from "./getters";

//1、安装插件
Vue.use(Vuex)

const state = {
  roles:'admin'
}

//2、创建store对象
const store = new Vuex.Store({
  state
})

//3、挂载在Vue实例上
export default store
