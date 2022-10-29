// search模块的小仓库
import { reqgetGoodsInfo } from "@/api";

const state = {
  goodsInfo: {}
};
const mutations = {
  GETGOODSINFO(state, value) {
    state.goodsInfo = value;
  }
};
const actions = {
  async getGoodsInfo({commit}, skuid) {
    let result = await reqgetGoodsInfo(skuid);
    if (result.code == 200) {
      commit('GETGOODSINFO', result.data)
    }
  }
};
const getters = {

};  

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
