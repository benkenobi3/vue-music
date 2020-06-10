<template>
  <div>
    <b-container fluid>
      <b-row class="normal-showcase">
          <b-col cols=11 offset=1>
          <h1>Исполнители</h1>
          <ul v-if="singersList">
            <li v-for="singer in singersList" :key="singer.id">
              <singer-card :singer=singer></singer-card>
            </li>
          </ul>
        </b-col>
      </b-row>
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
import SingerCard from '../custom/SingerCard.vue'

export default {

    components: {
      AlbumCard,
      SingerCard
    },

    computed: mapGetters(["libraryAlbums", "singersList"]),
    methods: mapActions(["fetchLibrary", "fetchSingers"]),
    
    async created() {
      this.fetchSingers();
      this.fetchLibrary();
    }

}
</script>

<style lang="sass">

  .normal-showcase
    height: 100%
    margin-bottom: 70px

    h1
      font-family: Gilroy
      font-weight: 600
      margin-bottom: 40px
  
    ul 
      list-style: none
      margin: 0
      padding: 0
  
      li 
        display: inline-block
        margin-right: 56px

</style>