<template>
 <div class="tab_menu">
     <el-button class="data_btn" type="primary" @click="dataClick" plain>数&nbsp;&nbsp;&nbsp;&nbsp;据</el-button>
     <el-button class="tran_btn" type="primary" @click="tranClick" plain>交&nbsp;&nbsp;&nbsp;&nbsp;易</el-button>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         isShow: 1
     }
   },
   computed: {
     tabSwitch(){
       this.isShow = !this.isShow
       console.log(this.isShow)
     }
   },
   components: {

   },
   methods: {
     // 点击数据
     dataClick(){
       this.isShow = 1
     },
     // 点击交易
     tranClick(){
      this.isShow = 2
      this.$emit()
     }
   }
 }
</script>

<style lang='less' scoped>
  .tab_menu{
    position: absolute;
    left: 13%;
    top: 1%;

    .el-button{
      width: 168px;
      height: 75px;
      font-size: 20px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      word-spacing:25px;
      margin: 0 20px;
    }
  }
</style>
