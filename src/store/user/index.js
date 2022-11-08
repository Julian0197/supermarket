// 登录与注册模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogOut } from "@/api";
import { setToken, getToken, removeToken } from '@/utils/token'

const state = {
  code: "",
  token: getToken(),
  userInfo: {}
};

const mutations = {
  GETCODE(state, value) {
    state.code = value;
  },
  USERLOGIN(state, value) {
    state.token = value
  },
  USERINFO(state, value) {
    state.userInfo = value;
  },
  CLEAR(state) {
    state.token = '';
    state.userInfo = {};
    removeToken();
  }
};

const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code === 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  
  // 用户注册
  async userRegister({commit}, user) {
    let result = await reqUserRegister(user);
    // console.log(result);
    if (result.code == 200) {
      return 'OK';
    } else {
      return Promise.reject(new Error('failed'))
    }
  },

  // 用户登录 token
  async userLogin({commit}, data) {
    let result = await reqUserLogin(data)
    // console.log(result);
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token);

      // 持久化存储token
      setToken(result.data.token);

      return "OK"
    } else {
      return Promise.reject(new Error('failed'))
    }
  },

  // 获取用户信息token
  async userInfo({commit}) {
    let result = await reqUserInfo();
    if (result.code === 200) {
      commit("USERINFO", result.data)
    }
  },

  // 退出登录
  async userLogOut({commit}) {
    let result = await reqLogOut();
    // console.log(result);
    if (result.code == 200) {
      // action中不能操作state，需要提交mutations
      commit("CLEAR");
    }
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
