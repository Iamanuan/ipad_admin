<template>
  <div class="tab_menu">
    <div 
    class="tab_menu_item" 
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
}

.active{
  background-color: red;
}
</style>
