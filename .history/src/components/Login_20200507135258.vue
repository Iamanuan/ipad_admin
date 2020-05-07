<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 管理后台名称区域 -->
      <div class="login_title">IPAD协议后台</div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-icon-lock"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns" size="medium">
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang='less' scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 2px #dddddd;
  border: 1px solid #cccccc;

  .login_title{
    font-size: x-large;
    text-align: center;
    height: 69px;
    line-height: 69px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
}

.login_form{
  position: absolute;
  bottom: 20px;
  padding: 0 80px;
  width: 100%;
  box-sizing: border-box;
}

.btns{
  display: flex;
  justify-content: center;
}
</style>
