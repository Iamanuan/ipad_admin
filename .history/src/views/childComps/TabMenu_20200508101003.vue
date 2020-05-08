<template>
 <div class="tab_menu">
     <div class="data_btn" @click="tabSwitch">数据</div>
     <div class="tran_btn" @click="tabSwitch">交易</div>
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
