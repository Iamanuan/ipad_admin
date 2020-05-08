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
            if (res.status !== 200) return this.$message.error("退出登录失败");
            // 清空token
            window.sessionStorage.clear();
            // 跳转到login页面
            this.$router.push("/login");
        })
    }
  }
};
</script>

<style lang='less' scoped>
.set_container{
    position: absolute;
    right: 10px;
}

.set_box{
  display: flex;
  padding: 0 20px;
  .user_name{
      color: #ffffff;
      font-size: 28px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      justify-content: start;
    }
}
</style>
