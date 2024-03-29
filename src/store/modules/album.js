export default {

    actions: {
        async fetchNewRelease(ctx) {
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?limit=10"
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

        async fetchLibrary(ctx) {
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?limit=50"
            )
            const albums = await res.json()

            ctx.commit('updateLibrary', albums.results)
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
        updateLibrary(state, albums)
        {
            state.library_albums = albums
        },
        cleanUp(state)
        {
            state.album = null
        }
    },

    state: {
        new_release: [],
        top_albums: [],
        album: [],
        library_albums: []
    },

    getters: {
        newRelease(state) {
            return state.new_release
        },
        currentAlbum(state) {
            return state.album
        },
        topAlbums(state) {
            return state.top_albums
        },
        libraryAlbums(state) {
            return state.library_albums
        }
    },

} 