export default {

  actions: {
    async fetchSingers(ctx) {
      const res = await fetch(
        "https://musicsear4.herokuapp.com/api/v1/search/singer/all/"
      )

      const singers = await res.json()

      ctx.commit('updateSingers', singers.results)
    }
  },

  mutations: {
    updateSingers(state, singers) {
      state.singers = singers
    }
  },

  state: {
    singers: []
  },

  getters: {
    singersList(state) {
      return state.singers
    }
  }

}