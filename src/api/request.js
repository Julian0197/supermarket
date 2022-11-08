// 对于axios的二次封装
import store from '@/store';
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
// start,done 表示进度条开始和结束
import 'nprogress/nprogress.css'

// 1. 利用axios对象的方法create，创建一个axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径：发送请求时，路径中会出现api
  baseURL: "/api",
  timeout: 5000
});
// 请求拦截器：发送请求之前，可以监测，在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  // config：配置对象，对象里面有一个属性很重要，headers请求头

  // 判断是否需要token给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;

  }
  nprogress.start();//进度条开始
  return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，再做一些事情
  // 进度条结束
  nprogress.done();
  return res.data;
}, (error) => {
  //  响应失败的回调函数
  return Promise.reject(new Error('fail'))
})

// 对外暴露
export default requests;