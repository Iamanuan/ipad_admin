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
   data() {
       return {
           dataLineChart: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290], // 折线图上渲染的数据
       }
   },
   mounted(){
       this.drawLineChart()
   },
   methods: {
       // 绘制折线图
       drawLineChart(){
           // 初始化echarts 实例
           let lineChart = this.$echarts.init(document.getElementById('lineChart'))
           lineChart.setOption(
               {
                    xAxis: {
                        type: 'category',
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '',
                        data: this.dataLineChart,
                        type: 'line'
                    }]
                }
           )
       },
       // 获取用户数据
        getLineChartData(){
            
        }
   },
   created(){
       this.getLineChartData()
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
