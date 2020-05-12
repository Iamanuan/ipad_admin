<template>
 <div class="recharge-container">
     <p>充值</p>
     <el-form label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" prefix-icon="iconfont icon-icon-user" clearable></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="passWord">
          <el-input v-model="loginForm.passWord" prefix-icon="iconfont icon-icon-lock" type="password" clearable></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns" size="medium">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
