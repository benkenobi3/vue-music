export default {

    actions: {
        async fetchNewRelease(ctx) {
            
            const res = await fetch(
                "https://musicsear4.herokuapp.com/api/v1/search/album/all/?page=8"
            );
            const albums = await res.json();

            ctx.commit('updateRelease', albums.results)
        }
    },

    mutations: {
        updateRelease(state, albums) {
            state.new_release = albums
        }
    },

    state: {
        new_release: []
    },

    getters: {
        newRelease(state) {
            return state.new_release
        }
    },

} 