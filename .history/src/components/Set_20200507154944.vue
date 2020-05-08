<template>
  <div class="set_container">
    <div class="set_box">
      <span class="user_name">后台账号</span>
      <div class="btns">
        <el-button type="primary" @click="loginOut">修改密码</el-button>
        <el-button type="primary" @click="loginOut">退出登录</el-button>
      </div>
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
        this.$http.post("/user/logout").then(res => {
            if (res.status !== 2100) return this.$message.error("退出登录失败");
            // 清空token
            window.sessionStorage.clear();
            // 跳转到login页面
            this.$router.push("/login");
        })
    //   const res = this.$http.post("/user/logout");
    //   console.log(res)

    }
  }
};
</script>

<style lang='less' scoped>
</style>
