// 折线图
<template>
<div class="line_chart_container">
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
   }
 }
</script>

<style lang='less' scoped>
.line_chart_container{
    width: 100%;
    margin-top: 180px;
    position: absolute;
    left: 8%;
}
 
</style>
