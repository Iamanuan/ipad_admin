import Vue from 'vue'
import Vuex from 'vuex'

//1、安装插件
Vue.use(Vuex)

const state = {
  role:'admian'
}

//2、创建store对象
const store = new Vuex.Store({
  state,
  getters:{
    role(state){
      return state.role
    }
  }
})

//3、挂载在Vue实例上
export default store
