<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 管理后台名称区域 -->
      <div class="login_title">IPAD协议后台</div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" prefix-icon="iconfont icon-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="passWord">
          <el-input v-model="loginForm.passWord" prefix-icon="iconfont icon-icon-lock" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns" size="medium">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        userName: 'fenxiang',
        passWord: '1234'
      },
      // 表单的验证规则对象
      loginFormRules:{
        // 验证用户名是否合法
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录按钮方法
    login(){
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return // 验证失败，返回
        const {data: res} = await this.$http.post('user/login', this.loginForm) // 网络请求
        console.log(res)
        if (res.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 获取用户ID、是否是管理员
        // this.$bus.$emit("ID",res.data.id)
        // this.$bus.$emit("ISADMIN",res.data.admin)

        this.$bus.$on("ID",id => {
          console.log(id)
        })
        // 将登录成功后的token，保存到客户端的 sessionStorage 中
        window.sessionStorage.setItem('token', res.data.token)
        // 跳转到主页 /home
        this.$router.push('/home')
      })
    }
  }
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
