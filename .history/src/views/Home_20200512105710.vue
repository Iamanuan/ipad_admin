<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header height="100px">
      <!-- 设置组件 -->
      <set />
      <!-- 头部Tab组件 -->
      <tab-menu :titles="['数 据','交 易']" @tabClick="tabclick" />
    </el-header>
    <!-- 内容区域 -->
    <el-main>
      <!-- 管理员区域 -->
      <div v-if="isAdmin === 'true'" class="admin_box">
        管理员区域
      </div>
      <!-- 用户区域 -->
      <div v-else class="user_box">
        <!-- 数据 -->
        <div class="user_data" v-show="isDataShow">
          <!-- 用户数据展示组件 -->
          <data-show />
          <!-- 用户折线图 -->
          <line-chart />
        </div>
        <!-- 交易 -->
        <div class="user_tran" v-show="isTranShow">

          <!-- 表格-扣费 -->
          <table-tran-ded />
        </div>
      </div>
    </el-main>
    <!-- 底部区域 -->
    <el-footer>
      <foot />
    </el-footer>
  </el-container>
</template>

<script>
import Set from "../components/Set";
import Foot from "../components/Foot";
import LineChart from "../components/LineChart";

import TabMenu from "./childComps/TabMenu";

import DataShow from "../components/content/user/DataShow";
import TableTran from "../components/content/user/TableTran"
import Balance from "../components/content/user/Balance"
import Balance from "../components/content/user/Balance"
import Balance from "../components/content/user/Balance"

export default {
  name: "home",
  data() {
    return {
      isDataShow: true,
      isTranShow: false,
      isAdmin: false
    };
  },
  components: {
    Set, // 用户设置组件
    Foot, // 底部组件
    LineChart, // 折线图组件
    TableTran, // 用户表格组件
    TabMenu, // 头部 数据、交易 切换组件
    DataShow // 用户数据展示组件
  },
  computed: {
  },
  methods: {
    // 数据、交易组件切换
    tabclick(index) {
      switch (index) {
        case 0:
          this.isDataShow = true;
          this.isTranShow = false;
          break;
        case 1:
          this.isDataShow = false;
          this.isTranShow = true;
          break;
      }
    }
  },
  created(){
    // 判断权限身份
    this.isAdmin = window.sessionStorage.getItem('isAdmin')
    console.log(this.isAdmin)
  }
};
</script>

<style lang='less' scoped>
.home_container {
  height: 100%;
  overflow: hidden;
}

.el-header {
  background-color: #e4f5ef;
  border-bottom: 1px solid #cccccc;
}

.el-main {
  background-color: #ffffff;
}

.el-footer {
  background-color: #ffffff;
  border-top: 1px solid #cccccc;
  height: 30px !important;
  line-height: 30px;
}
</style>
