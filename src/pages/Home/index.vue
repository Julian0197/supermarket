<template>
  <div>
    <!-- 三级联动组件已被注册为全局组件，不需要import -->
    <type-nav></type-nav>
    <list-container></list-container>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 派发action获取floor组件的数据
    this.$store.dispatch("home/getFloorList");
  },
  computed: {
    ...mapState('home', ['floorList'])
  }
};
</script>

<style lang="less" scoped></style>
