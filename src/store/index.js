import Vue from 'vue'
import Vuex from 'vuex'

import album from './modules/album.js'
import search from './modules/search.js'
import singer from './modules/singer.js'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        album,
        search,
        singer
    }

})