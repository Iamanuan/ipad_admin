<template>
 <div class="data_show">
     <div class="data_show_item"
          v-for="(item,index) in titles" 
          :key=index>
         <p>{{item}}</p>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         titles:['当前在线人数','本月峰值日活','本月预估费用','余额']
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
