<template>
  <div class="set_container">
    <div class="set_box">
      <span class="user_name">后台账号</span>
      <el-form-item class="btns">
        <el-button type="primary" @click="loginOut">修改密码</el-button>
        <el-button type="primary" @click="loginOut">退出登录</el-button>
      </el-form-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    // 退出登录方法
    loginOut() {
       const result = this.$http.post('/user/logout')
      // 清空token
      window.sessionStorage.clear();

      // 跳转到login页面
      this.$router.push("/login");
    }
  }
};
</script>

<style lang='less' scoped>
</style>
