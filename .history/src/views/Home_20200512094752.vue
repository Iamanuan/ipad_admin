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
      <!-- 用户区域 -->
      <div class="user_box" v-if="isAdmin">
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
      <!-- 管理员区域 -->
      <div class="admin_box" v-else>
        管理员区域
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
import TableTranDed from "../components/content/user/TableTranDed"

import TabMenu from "./childComps/TabMenu";

import DataShow from "../components/content/user/DataShow";

export default {
  name: "home",
  data() {
    return {
      isDataShow: true,
      isTranShow: false
    };
  },
  components: {
    Set, // 用户设置组件
    Foot, // 底部组件
    LineChart, // 折线图组件
    TableTranDed, // 表格组件
    TabMenu, // 头部 数据、交易 切换组件
    DataShow // 用户数据展示组件
  },
  computed: {
    // 判断权限身份
    isAdmin() {
      console.log(window.sessionStorage.getItem('isAdmin'))
      return !window.sessionStorage.getItem('isAdmin')
    }
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
