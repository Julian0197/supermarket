// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

// 使用插件
Vue.use(VueRouter);

// 保存VueRouter原型对象的push
let originPush = VueRouter.prototype.push;
// 重写push | replace
VueRouter.prototype.push = function (
  location,
  resolve = () => {},
  reject = () => {}
) {
  return originPush.call(this, location, resolve, reject);
};

let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 返回y=0，代表滚动条在最上方
    return { x: 0, y: 0 };
  },
});

// 全局守卫，前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  //获取仓库中的token-----可以确定用户是登录了
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  // 有token说明已经登录了
  if (token) {
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      // 已经登录了，但访问的是非登录与非注册
      // 登录且拥有用户信息就放心
      if (name) {
        next();
      } else {
        // 登录但没有用户信息
        // 在路由跳转之前获取用户信息再放行
        try {
          //获取用户信息
          await store.dispatch("user/userInfo");
          next();
        } catch (error) {
          //token失效从新登录
          //清除token
          await store.dispatch("user/userLogOut");
          // 回到登录页
          this.$router.push("/login");
        }
      }
    }
  } else {
    next();
  }
});

export default router;
