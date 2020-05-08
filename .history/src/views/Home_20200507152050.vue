<template>
  <div class="home_container">
    <div class="header_box"></div>
    <div class="conter_box"></div>
    <div class="footer_box"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // 退出登录方法
    loginOut(){
      // 清空token
      window.sessionStorage.clear()

      // 跳转到login页面
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
