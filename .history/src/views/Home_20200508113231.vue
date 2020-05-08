<template>
  <div class="home_container">
    <div class="header_box">
      <set/>
      <tab-menu :title="['数据','交易']"
                @tabClick='tabclick'/>
    </div>
    <div class="center_box"></div>
    <div class="footer_box">
      <foot/>
    </div>
  </div>
</template>

<script>
import Set from '../components/Set'
import Foot from '../components/Foot'

import TabMenu from './childComps/TabMenu'

export default {
  name: 'home',
  data(){
    return {
    }
  },
  components:{
    Set,
    Foot,
    TabMenu
  },
  computed:{
  },
  methods: {
    // 数据、交易组件切换
    tabclick(){
      
    }
  }
}
</script>

<style lang='less' scoped>
  .home_container{
    height: 100%;
    overflow: hidden;
  }

  .header_box{
    background-color: #e4f5ef;
    height: 10%;
    border-bottom: 1px solid #cccccc;
  }

  .center_box{
    background-color: #ffffff;
    height: 88%;
  }

  .footer_box{
    background-color: #ffffff;
    height: 2%;
    border-top:1px solid #cccccc ;
  }
</style>
