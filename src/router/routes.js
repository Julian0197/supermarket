// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

// 配置路由
export default [
  {
    path: "/home",
    component: Home,
    meta: { isHideFooter: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { isHideFooter: true },
    name: "search",
    props: true,
  },
  {
    path: "/register",
    component: Register,
    meta: { isHideFooter: false },
  },
  {
    path: "/login",
    component: Login,
    meta: { isHideFooter: false },
  },
  {
    path: "/detail:skuid",
    component: Detail,
    meta: { isHideFooter: true },
  },
  // 重定向：项目跑起来时，访问/，立刻定向到home
  {
    path: "/",
    redirect: "/home",
  },
];
