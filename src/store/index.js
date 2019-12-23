import Vue from 'vue'
import Vuex from 'vuex'

import album from './modules/album'

Vue.use(Vuex)

export default new Vuex.Store({

    actions: {},
    mutations: {},
    state: {
        albums: []
    },
    getters: {
        allAlbums(){
            return this.state.albums
        }
    },

    modules: {
        album
    }

})