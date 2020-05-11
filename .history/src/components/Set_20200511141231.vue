// 设置组件
<template>
  <div class="set_container">
    <div class="set_box">
      <span class="user_name">{{getName}}</span>
      <div class="btns">
        <el-button type="primary" @click="updatePassword">修改密码</el-button>
        <el-button type="primary" @click="loginOut">退出登录</el-button>
      </div>
    </div>

    <!-- 修改密码弹出框 -->
    <el-dialog
     title="修改密码" 
     :visible.sync="dialogFormVisible" 
     width="30%" 
     top="20vh"
     :model="pwdForm">
      <el-form :rules="updatePwdFormRules">
        <el-form-item label="当前密码" label-width="120px" prop="isEmpty">
          <el-input v-model="pwdForm.originPassWord"></el-input>
        </el-form-item>
        <el-form-item label="新密码" label-width="120px" prop="isEmpty">
          <el-input v-model="pwdForm.newPassWord"></el-input>
        </el-form-item>
        <el-form-item label="重复新密码" label-width="120px" prop="isEmpty">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogFormVisible = false">关 闭</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pwdForm: {
        originPassWord: '123456', // 旧密码
        newPassWord: '123456', // 新密码
      },
      dialogFormVisible: false, // 弹出框显示隐藏
      // 修改密码表单 规则对象
      updatePwdFormRules:{
        // 为空验证
        isEmpty: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ]
      }
    }
  },
  computed: {
    // 判断用户名称还是Admin
    getName() {
      const name = window.sessionStorage.getItem("userName")
      return name !== "admin" ? name : "Admin";
    }
  },
  components: {},
  methods: {
    // 退出登录方法
    loginOut() {
      this.$http
        .get("/user/logout", {
          params: { id: this.id }
        })
        .then(res => {
          if (res.status !== 200) return this.$message.error("退出登录失败！")
          // 清空sessionStorage
          window.sessionStorage.clear()
          // 跳转到login页面
          this.$router.push("/login")
        })
    },
    // 修改密码方法
    async updatePassword() {
      console.log('修改密码方法')
      const data= await this.$http.post('user/updatePassWord',{
        params:{
          originPassWord: "123456",
          newPassWord: "123456"
        },
        headers: {
          token: window.sessionStorage.getItem('token')
        }
      })
      console.log(data)
      // if (res.status !== 200) return this.$message.error("修改密码失败！")
      // this.$message.success("修改密码成功！")
      // this.dialogFormVisible = false
    }
  },
  created() {
    this.id = window.sessionStorage.getItem("id")
  }
}

</script>

<style lang='less' scoped>
.set_container {
  position: absolute;
  right: 10px;
}

.set_box {
  display: flex;
  padding: 30px 0;

  .user_name {
    color: #333333;
    font-size: 22px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    justify-content: start;
  }

  .btns {
    margin-left: 10px;
    .el-button {
      padding: 6px 10px !important;
    }
  }
}
</style>
