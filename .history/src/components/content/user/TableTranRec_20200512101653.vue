// 用户-交易记录-充值
<template>
 <el-table border :data="tableData">
    <el-table-column label="支付宝订单号"  align="center" prop="kfyy"></el-table-column>
    <el-table-column label="交易时间" align="center" prop="jysj"></el-table-column>
    <el-table-column label="交易金额" align="center" prop="kfbz"></el-table-column>
    <el-table-column label="扣款金额" align="center" prop="kkje"></el-table-column>
    <el-table-column label="余额" align="center" prop="ye"></el-table-column>
  </el-table>
</template>

<script>
 export default {
   data () {
     return {
         tableData: [
             {
                 "id": 1,
                "kfyy": "扣费原因1",
                "jysj": "交易时间1",
                "kfbz": "扣费标准1",
                "kkje": "扣款金额1",
                "ye": "余额1"
            },
            {
                "id": 2,
                "kfyy": "扣费原因2",
                "jysj": "交易时间2",
                "kfbz": "扣费标准2",
                "kkje": "扣款金额2",
                "ye": "余额2"
            },
            {
                "id": 3,
                "kfyy": "扣费原因3",
                "jysj": "交易时间3",
                "kfbz": "扣费标准3",
                "kkje": "扣款金额3",
                "ye": "余额3"
            }
        ]
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
