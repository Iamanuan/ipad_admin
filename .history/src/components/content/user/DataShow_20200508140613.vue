<template>
 <div class="data_show">
     <div class="data_show_item"
          v-for="(item,index) in titles" 
          :key=index>
         <p>{{item}}</p>
         <p>{{datas[index]}}</p>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         titles:['当前在线人数','本月峰值日活','本月预估费用','余 额'],
         datas:[]
     }
   },
   components: {

   },
   created(){
       this.$http.get('loginDetail/getMonthStatistics').then(res => {
           console.log(res)
           const data = res.data.data[0]
           console.log(data)
           this.datas.push(data.onlineNum) // 当前在线人数
           this.datas.push(data.maxNum)  // 本月峰值日活
           this.datas.push(data.estimateFree+1)  // 本月预估费用
        //    this.datas.push('￥' + data.balance) // 余 额
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
