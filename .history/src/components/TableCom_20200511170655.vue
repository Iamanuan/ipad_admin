// 表格组件
<template>
 <el-table border>
    <el-table-column v-for="(item,index) in titles" :label="item" :key="index" width="180"  type="expand">

    </el-table-column>
  </el-table>
</template>

<script>
 export default {
   data () {
     return {
         titles: ["扣费原因","交易时间","扣费标准", "扣款金额", "余额"],
         rows: [{
        "id": 11,
        "createTime": 1586595414000,
        "updateTime": 1586595414000,
        "user": {
          "id": 5,
          "createTime": 1586594053000, // 交易时间
          "updateTime": 1586594053000, 
          "userName": "local",
          "passWord": "123456",
          "controlHost": "http://127.0.0.1:8081",
          "balance": 4,
          "enable": true,
          "admin": false
        },
        "amount": -0.1,
        "type": "UPDATE",
        "remark": null,
        "balance": 0.7,
        "rechargeLog": null,
        "deductionLog": null
      }]
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
