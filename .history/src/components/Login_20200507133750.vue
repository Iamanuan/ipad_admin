<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 管理后台名称区域 -->
      <div class="login_title">IPAD协议后台</div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login_form">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-button type="primary">登录</el-button>
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
}
</style>
