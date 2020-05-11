// 表格组件
<template>
 <el-table>
    <el-table-column label="日期" width="180"></el-table-column>
  </el-table>
</template>

<script>
 export default {
   data () {
     return {
         titles: ["扣费原因",                               扣费标准(峰值日活）                                       扣款金额                                            余额                                                          交易时间            ]
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
