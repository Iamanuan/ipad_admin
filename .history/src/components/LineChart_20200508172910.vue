<template>
<div class="line_chart_container">
    <div id="lineChart" :style="{width:'600px',height:'300px'}">

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
           let lineChart = this.$echarts.init()
       }
   }
 }
</script>

<style lang='less' scoped>
.line_chart_container{
    width: 100%;
}
 
</style>
