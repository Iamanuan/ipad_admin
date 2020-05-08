<template>
 <div class="tab_menu">
     <div @click="tabSwitch">数据</div>
     <div class="tran_btn" @click="tabSwitch">交易</div>

     <el-button type="primary" @click="loginOut">数据</el-button>
     <el-button type="primary" @click="loginOut">交易</el-button>
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
   color: #ffffff;
 }
</style>
