// 折线图
<template>
<div class="line_chart_container">
    <p>用户数据</p>
    <div id="lineChart" :style="{width:'1000px',height:'300px'}">

    </div>
</div>
</template>

<script>
 export default {
   name: 'LineChart',
   mounted(){
       this.drawLineChart()
   },
   methods: {
       drawLineChart(){
           // 初始化echarts 实例
           let lineChart = this.$echarts.init(document.getElementById('lineChart'))
           lineChart.setOption(
               {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                }
           )
       }
   },
   created(){
       this.get
   }
 }
</script>

<style lang='less' scoped>
.line_chart_container{
    width: 92%;
    margin-top: 180px;
    position: absolute;
    left: 8%;

    p{
        padding-left: 65px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 18px;
    }
}
 
</style>
