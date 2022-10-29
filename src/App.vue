<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知vuex发送请求，获取数据，存储到仓库中
    // 派发一个action，获取typeNav的数据，只需要获取一次
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style scoped></style>
