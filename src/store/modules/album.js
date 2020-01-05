export default {

    actions: {
        async fetchNewRelease(ctx) {
            
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?page=8"
            )
            const albums = await res.json()

            ctx.commit('updateRelease', albums.results)
        },

        async fetchAlbum(ctx, id) {
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/" + id + "/"
            )
            const album = await res.json()

            ctx.commit('updateAlbum', album)
        }
    },

    mutations: {
        updateRelease(state, albums) {
            state.new_release = albums
        },
        updateAlbum(state, album)
        {
            state.album = album
        }
    },

    state: {
        new_release: [],
        album: []
    },

    getters: {
        newRelease(state) {
            return state.new_release
        },
        currentAlbum(state) {
            return state.album
        }
    },

} 