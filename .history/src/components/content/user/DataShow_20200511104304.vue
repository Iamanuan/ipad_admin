// 用户 数据展示组件
<template>
 <div class="data_show">
     <div class="data_show_item"
          v-for="(item,index) in titles" 
          :key=index>
         <p class="titles">{{item}}</p>
         <p class="nums">{{userdatas[index]}}</p>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         titles:['当前在线人数','本月峰值日活','本月预估费用','余 额'],
         userdatas:[]
     }
   },
   components: {

   },
   created(){
       this.getUserData()
   },
   methods:{
       async getUserData() {
           const data = await this.$http.get('/loginDetail/getMonthStatistics',{Authorization:'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJpZFwiOjcsXCJ1c2VyTmFtZVwiOlwiZmVueGlhbmdcIn0iLCJpYXQiOjE1ODkxNjQzMTksImV4cCI6MTU4OTIwNzUxOX0.wU_v_hhpDZ2FaygSgRYfy2thRgnGP7HrdrVAOtZ3YAA'})
           console.log(data)
        //    if(res.meta.status !== 200) return this.$message.error('获取用户数据失败！')
        //    this.userdatas = res.data

        //    const data = res.data.data[0]
        //    console.log(data)
        //    this.datas.push(data.onlineNum) // 当前在线人数
        //    this.datas.push(data.maxNum)  // 本月峰值日活
        //    this.datas.push('￥' + data.estimateFree)  // 本月预估费用
        //    this.datas.push('￥' + data.userInfo.balance) // 余 额
       }
   }
 }
</script>

<style lang='less' scoped>
.data_show{
    width: 87%;
    margin-top: 40px;
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

    .titles{
        font-size: 14px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    .nums{
        font-size: 22px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-weight: 300;
    }
}
 
</style>
