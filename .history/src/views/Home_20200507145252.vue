<template>
  <div class="home_container">
    home_container
    <el-button type="primary" @click='loginOut'>退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // 退出登录方法
    loginOut(){
      // 清空token
      window.sessionStorage.getItem('token')

      // 跳转到login页面
    }
  }
}
</script>

<style>
</style>
