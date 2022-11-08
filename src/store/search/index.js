// search模块的小仓库
import { reqgetSearchInfo } from "@/api";

const state = {
  searchList: {}
};
const mutations = {
  GETSEARCHLIST(state, value) {
    state.searchList = value;
  },
};
const actions = {
  // 获取search模块数据
  // 箭头函数默认传参为空对象
  async getSearchList({ commit }, params = {}) {
    let result = await reqgetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const getters = {
  //当前形参state，当前仓库中的state，并非大仓库中的那个state
  goodsList(state){
    return state.searchList.goodsList||[];
  }
  ,
  trademarkList(state){
    return state.searchList.trademarkList||[];
  },
  attrsList(state){
    return state.searchList.attrsList||[];
  }
};  

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};