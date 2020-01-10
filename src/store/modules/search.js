export default {
    actions: {
        async fetchSearch (ctx, srch) {
            const res_albums = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?search=" + srch
            )
            const albums = await res_albums.json()
    
            ctx.commit('updateSearch', albums.results)
        }
    },

    mutations: {
        updateSearch (state, albums) {
            state.search = albums
        }
    },

    state: {
        search: []
    },

    getters: {
        getSearch(state) {
            return state.search
        }
    },
}