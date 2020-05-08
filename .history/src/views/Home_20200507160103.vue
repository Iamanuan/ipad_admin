<template>
  <div class="home_container">
    <div class="header_box">
      <Set/>
    </div>
    <div class="center_box"></div>
    <div class="footer_box"></div>
  </div>
</template>

<script>
import Set from '../components/Set'

export default {
  name: 'home',
  components:{
    Set
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
  .home_container{
    background-color: #b4c7d0;
    height: 100%;
    box-sizing: border-box;
  }

  .header_box{
    background-color: #333333;
    height: 10%;
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
