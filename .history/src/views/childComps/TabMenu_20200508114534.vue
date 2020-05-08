<template>
  <div class="tab_menu">
    <div class="tab_menu_item" 
         v-for="(item,index) in titles" 
         :key="index"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style lang='less' scoped>
.tab_menu {
  position: absolute;
  left: 13%;
  top: 1%;
  display: flex;

  .tab_menu_item{
    cursor: pointer;
    border: 1px solid #b3d8ff;
    text-align: center;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    margin-right: 15px;
    border-radius: 4px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #409eff;
    background-color: #ecf5ff;
    justify-content: start;
  }
}

.active{
  background-color: #409EFF !important;
  color: #ffffff !important;
}
</style>
