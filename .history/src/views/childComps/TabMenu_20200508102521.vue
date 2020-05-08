<template>
 <div class="tab_menu">
     <el-button class="data_btn" type="primary" @click="tabSwitch" plain>数据</el-button>
     <el-button class="tran_btn" type="primary" @click="tabSwitch" plain>交易</el-button>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         isShow: null
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
     // 
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
      height: 59px;
      font-size: 20px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      word-spacing:25px;
    }
  }
</style>
