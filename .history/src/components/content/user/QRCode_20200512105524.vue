// 二维码
<template>
 <div>
    <qriously :value="qrcode" :size="200" />
 </div>
</template>

<script>
 export default {
   data () {
     return {
        qrcode: 'www.baidu.com'
     }
   },
   components: {

   }
 }
</script>

<style lang='less' scoped>

 
</style>
