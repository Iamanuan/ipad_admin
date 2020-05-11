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
         titles: ["扣费原因","交易时间","扣费标准(峰值日活)", "扣款金额", "余额"],
         rows: [
             {
                 "id": 1,
                "kfyy": "扣费原因1",
                "jysj": "交易时间1",
                "kfbz": "扣费标准1",
                "kkje": "扣款金额1",
                "ye": "余额"
            },
            {
                "id": 2,
                "kfyy": "扣费原因2",
                "jysj": "交易时间2",
                "kfbz": "扣费标准2",
                "kkje": "扣款金额2",
                "ye": "余额"
            },
            {
                "id": 3,
                "kfyy": "扣费原因2",
                "jysj": "交易时间3",
                "kfbz": "扣费标准2",
                "kkje": "扣款金额2",
                "ye": "余额"
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
