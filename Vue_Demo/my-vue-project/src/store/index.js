import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  level: '第一周',
  allTime: 0,
  adminInfo: {
    avatar: 'default.jpg'
  }
}

const getter = {
  getAdminInfo: function (state) {
    return state.adminInfo.avatar
  }
}

const mutations = {
  saveAdminInfo (state, adminInfo) {
    state.adminInfo = adminInfo
  }
}

const actions = {
  addNum ({ commit, state }, id) {

  }
}

export default new Vuex.Store({
  state,
  getter,
  mutations,
  actions
})
