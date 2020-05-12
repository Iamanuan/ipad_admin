// 用户-余额
<template>
 <div>
     余额：￥ {{balance}}
 </div>
</template>

<script>
 export default {
   data () {
     return {
         balance: 0
     }
   },
   components: {

   },
   methods(){
       getBalance() {
           this.balance = '100'
       }
   }
 }
</script>

<style lang='less' scoped>

 
</style>