<template>
  <div class="home_container">
    <div class="header_box">
      <set/>
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

import {mapGetters} from 'vuex'

export default {
  name: 'home',
  components:{
    Set,
    Foot
  },
  computed:{
    ...mapGetters(['roles'])
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
  .home_container{
    background-color: #b4c7d0;
    height: 100%;
    overflow: hidden;
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
