export default {

    actions: {
        async fetchNewRelease(ctx) {
            
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?page=last&limit=10"
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
        },

        async fetchTop(ctx) {
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/top/"
            )
            const albums = await res.json()

            ctx.commit('updateTop', albums.results)
        },

        cleanUp(ctx) {
            ctx.commit('cleanUp')
        }
    },

    mutations: {
        updateRelease(state, albums) {
            state.new_release = albums
        },
        updateAlbum(state, album)
        {
            state.album = album
        },
        updateTop(state, albums)
        {
            state.top_albums = albums
        },
        cleanUp(state)
        {
            state.album = null
        }
    },

    state: {
        new_release: [],
        top_albums: [],
        album: []
    },

    getters: {
        newRelease(state) {
            return state.new_release.reverse()
        },
        currentAlbum(state) {
            return state.album
        },
        topAlbums(state) {
            return state.top_albums
        }
    },

} 