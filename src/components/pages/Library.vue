<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Все альбомы</h1>
          <ul v-if="libraryAlbums">
            <li v-for="album in libraryAlbums" :key="album.id">
              <album-card :album=album></album-card>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import AlbumCard from '../custom/AlbumCard.vue'

export default {

    components: {
      AlbumCard
    },

    computed: mapGetters(["libraryAlbums"]),
    methods: mapActions(["fetchLibrary"]),
    
    async created() {
      this.fetchLibrary();
    }

}
</script>

<style>

</style>