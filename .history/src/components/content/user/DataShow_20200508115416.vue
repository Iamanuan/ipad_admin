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
         titles:['']
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
