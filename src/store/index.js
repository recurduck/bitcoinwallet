import Vue from 'vue'
import Vuex from 'vuex'
import { userService } from '../services/user.service.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
    addMove(state, { move }) {
      state.user.moves.push(move);
    },
    signout(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, {userName} ) {
      const user = await userService.signUp(userName);
      commit({ type: 'setUser', user });
    },
    async onAddMove({ commit }, {move} ) {
      commit({ type: 'addMove', move });
    },
    async logout({ commit } ) {
      commit({ type: 'signout' });
    },
  },
})
