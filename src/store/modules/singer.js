export default {

  actions: {
    async fetchSingers(ctx) {
      const res = await fetch(
        "https://musicsear4.herokuapp.com/api/v1/search/singer/all/"
      )

      const singers = await res.json()

      ctx.commit('updateSingers', singers.results)
    },
    async fetchSinger(ctx, id) {
      const res = await fetch(
        "https://musicsear4.herokuapp.com/api/v1/search/singer/" + id + "/"
      )

      const singer = await res.json()

      ctx.commit('updateSinger', singer)
    },
    cleanSinger(ctx) {
      ctx.commit('clearSinger')
    }
  },

  mutations: {
    updateSingers(state, singers) {
      state.singers = singers
    },
    updateSinger(state, singer) {
      state.singer = singer
    },
    clearSinger(state)
    {
        state.singer = null
    }
  },

  state: {
    singers: [],
    singer: null
  },

  getters: {
    singersList(state) {
      return state.singers
    },
    currentSinger(state) {
      return state.singer
    }
  }

}