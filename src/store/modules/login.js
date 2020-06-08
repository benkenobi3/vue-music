export default {
  actions: {
    async login(ctx, username, password) {
      const res = await fetch(
        "https://musicsear4.herokuapp.com/api/v1/passport/login/"
      )

      const token = await res.json()

      ctx.commit('updateToken', token.token)
    }
  },

  mutations: {

  },

  state: {
    token: ""
  },

  getters: {

  }
}