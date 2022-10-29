// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// 使用插件
Vue.use(VueRouter)


// 保存VueRouter原型对象的push
let originPush = VueRouter.prototype.push;
// 重写push | replace
VueRouter.prototype.push = function(location, resolve=()=>{}, reject=()=>{}) {
  return originPush.call(this, location, resolve, reject)
}

export default new VueRouter ({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 返回y=0，代表滚动条在最上方
    return {x:0,y:0};
  }
})
