<template>
  <div class="home_container">
    <!-- 头部区域 -->
    <div class="header_box">
      <!-- 设置组件 -->
      <set/>
      <!-- 头部Tab组件 -->
      <tab-menu :titles="['数 据','交 易']"
                @tabClick='tabclick'/>
    </div>
    <!-- 内容区域 -->
    <div class="center_box">
      <!-- 用户区域 -->
      <div class="user_box">
        <!-- 用户数据展示组件 -->
        <data-show />
      </div>
      <!-- 管理员区域 -->
      <div class="admin_box">

      </div>
    </div>
    <!-- 底部区域 -->
    <div class="footer_box">
      <foot/>
    </div>
  </div>
</template>

<script>
import Set from '../components/Set'
import Foot from '../components/Foot'

import TabMenu from './childComps/TabMenu'

import DataShow from '../components/content/user/DataShow'

export default {
  name: 'home',
  data(){
    return {
    }
  },
  components:{
    Set, // 用户设置组件
    Foot, // 底部组件
    TabMenu, // 头部 数据、交易 切换组件
    DataShow, // 用户数据展示组件
  },
  computed:{
  },
  methods: {
    // 数据、交易组件切换
    tabclick(index){
      switch(index){
        case 0:
          console.log('数据')
          break;
        case 1:
          console.log('交易')
          break
      }
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
