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
         titles:['当前在线人数','本月峰值日活','本月预估费用','余 额'],
         datas:{
             onlineNum,
             maxNum
         }
     }
   },
   components: {

   },
   created(){
       this.$http.get('loginDetail/getMonthStatistics').then(res => {
           console.log(res)
       })
   }
 }
</script>

<style lang='less' scoped>
.data_show{
    width: 87%;
    margin-top: 20px;
    position: absolute;
    left: 13%;
}

.data_show_item{
    width: 205px;
    height: 115px;
    margin-right: 10px;
    border: 1px solid #cccccc;
    text-align: center;
    float: left;
}

 
</style>
