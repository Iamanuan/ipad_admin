// 表格组件
<template>
 <el-table>
    <el-table-column v-for="(item,index) in titles" :label="item[index]" :key="index" width="180"></el-table-column>
  </el-table>
</template>

<script>
 export default {
   data () {
     return {
         titles: ["扣费原因","交易时间","扣费标准(峰值日活）", "扣款金额", "余额"]
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
