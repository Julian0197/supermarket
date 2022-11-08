// 当前模块 API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequests";

// 三级联动接口
// api/product/getBaseCategoryList get 无参数
// axios发请求返回结果Promise对象
export const reqgetCategoryList = () => {
  return requests.get(`/product/getBaseCategoryList`);
};

// 获取banner轮播图数据
// 没有中括号相当于return
export const reqgetBannerList = () => mockRequests.get("/banner");

// 获取floor数据
export const reqgetFloorList = () => mockRequests.get("/floor");

// 获取search数据，请求方式post，需要带参数
// 默认参数至少是空对象，否则post请求无法成功
export const reqgetSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

// 获取产品信息的接口
export const reqgetGoodsInfo = (skuid) =>
  requests({
    url: `/item/${skuid}`,
    method: "get",
  });

// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

// 完成注册
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });

// 登录
export const reqUserLogin = (data) =>
  requests({ url: "user/passport/login", data, method: "post" });

// 使用token向服务器获取用户信息
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
export const reqLogOut = () =>
  requests({ url: "/user/passport/logout", method: "get" });
