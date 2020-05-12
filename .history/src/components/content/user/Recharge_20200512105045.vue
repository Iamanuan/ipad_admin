<template>
 <div class="recharge-container">
     <p>充值</p>
     <el-form label-width="0px" :model="rechargeForm">
        <!-- 订单号 -->
        <el-form-item prop="orderNumber">
          <el-input v-model="rechargeForm.orderNumber" clearable></el-input>
        </el-form-item>
        <!-- 充值金额 -->
        <el-form-item prop="rechargeAmount">
          <el-input v-model="rechargeForm.rechargeAmount" clearable></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns" size="medium">
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         rechargeForm:{

         }
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
