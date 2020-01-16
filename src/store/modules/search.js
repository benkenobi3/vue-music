export default {
    actions: {
        async fetchSearchAlbums (ctx, srch) {

            const res_albums = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?search=" + srch
            )
            const albums = await res_albums.json()
    
            ctx.commit('updateSearchAlbums', albums.results)
        },
        async fetchSearchSongs (ctx, srch) {

            const res_songs = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/song/all/?search=" + srch
            )
            const songs = await res_songs.json()
    
            ctx.commit('updateSearchSongs', songs.results)
        },
        async fetchSearchSingers(ctx, srch) {

            const res_singers = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/singer/all/?search=" + srch
            )
            const singers = await res_singers.json()
    
            ctx.commit('updateSearchSingers', singers.results)
        }
    },

    mutations: {
        updateSearchAlbums (state, albums) {
            state.search.albums = albums
        },
        updateSearchSongs (state, songs) {
            state.search.songs = songs
        },
        updateSearchSingers (state, singers) {
            state.search.singers = singers
        }
    },

    state: {
        search: {
            albums: [],
            songs: [],
            singers: []
        }
    },

    getters: {
        getSearchAlbums(state) {
            return state.search.albums
        },
        getSearchSongs(state) {
            return state.search.songs
        },
        getSearchSingers(state) {
            return state.search.singers
        }
    },
}