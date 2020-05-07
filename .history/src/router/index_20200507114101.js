import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../components/Login.vue')
const Home = () => import('../views/Home.vue')

const routes = [
  {
    path: '/',
    redirdect: '/login'
  },

]

const router = new VueRouter({
  routes
})

export default router
