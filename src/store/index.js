import Vue from 'vue';
import Vuex from 'vuex'

import home from './home'
import search from './search'
import detail from './detail'
import user from './user'

Vue.use(Vuex)

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    user,
  }
})