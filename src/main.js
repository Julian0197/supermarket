// main.js 入口文件
import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入mock
import "@/mock/mockServe.js"



// 三集联动组件 => 全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名称，第二个参数：哪一个组件
// 轮播图全剧组件
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

// import { reqgetCategoryList } from '@/api'
// reqgetCategoryList();

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 全局事件总线$bus配置
  // 注册路由：底下的写法是KV一致，省略value
  router,
  // 注册仓库：组件案例身上会多出一个$store属性
  store
}).$mount('#app')
