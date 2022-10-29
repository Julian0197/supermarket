import { reqgetBannerList, reqgetCategoryList, reqgetFloorList } from "@/api";

// home模块的小仓库
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
// mutations是唯一修改state的地方
const mutations = {
  REQCATEGORYLIST(state, val) {
    state.categoryList = val;
  },
  REQBANNERLIST(state, val) {
    state.bannerList = val;
  },
  REQFLOORLIST(state, val) {
    state.floorList = val
  }
};
// 用户派发actions的地方，可以书写异步语句
const actions = {
  async categoryList({ commit }) {
    let result = await reqgetCategoryList();
    if (result.code === 200) {
      commit("REQCATEGORYLIST", result.data);
    }
  },
  // 获取首页轮播图数据
  async getBannerList({ commit }) {
    let result = await reqgetBannerList();
    if (result.code === 200) {
      commit("REQBANNERLIST", result.data);
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqgetFloorList();
    if (result.code === 200) {
      commit("REQFLOORLIST", result.data)
    }
  },
};
const getter = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getter,
};
