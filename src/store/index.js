import Vue from 'vue'
import Vuex from 'vuex'

import album from './modules/album.js'
import search from './modules/search.js'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        album,
        search
    }

})