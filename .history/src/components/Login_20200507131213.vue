<template>
  <div class="login_container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang='less' scoped>
.login_container {
  background-color: #2b4b6b;
}
</style>
