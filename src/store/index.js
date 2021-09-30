import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import { get_coin_stats } from '../services/coingecko'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default createStore({
  modules: {
    // example
  },

  state: {
    coin_stats: {}
  },

  mutations: {
    set_coin_stats (state, coins) {
      state.coin_stats = coins
    }
  },

  actions: {
    async update_coin_stats ({ commit }) {
      let coin_stats = await get_coin_stats()
      commit('set_coin_stats', coin_stats)
    }
  },

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING
})