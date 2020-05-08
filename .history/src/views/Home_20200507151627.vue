<template>
  <div class="home_container">
    home_container
    
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
