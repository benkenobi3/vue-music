<template>
  <div>
    <b-container fluid>
      <b-row class="search-page">
        <b-col cols=11 offset=1>
          <div v-show="getSearchAlbums.length != 0">
            <h2>Альбомы</h2>
            <ul class="albums">
              <li v-for="album in getSearchAlbums" :key="album.id">
                <div class="album">
                  <h5> {{ album.name }} </h5>
                  <p> {{ album.duration }} </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-show="getSearchSongs.length != 0">
            <h2>Композиции</h2>
            <ul class="songs">
              <li v-for="song in getSearchSongs" :key="song.id">
                <div class="song">
                  <h5> {{ song.name }} </h5>
                  <p> {{ song.duration }} </p>
                </div>
              </li>
            </ul>
          </div>
          <div v-show="getSearchSingers.length != 0">
            <h2>Исполнители</h2>
            <ul class="singers">
              <li v-for="singer in getSearchSingers" :key="singer.id">
                <div class="singer">
                  <h5> {{ singer.name }} </h5>
                </div>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {

    props: ['srch'],

    computed: mapGetters(["getSearchAlbums", "getSearchSongs", "getSearchSingers"]),
    methods: mapActions(["fetchSearchAlbums", "fetchSearchSongs", "fetchSearchSingers"]),
    
    async created() {
      this.fetchSearchAlbums(this.srch);
      this.fetchSearchSongs(this.srch);
      this.fetchSearchSingers(this.srch);
    }

  };
</script>

<style lang="sass">
.search-page
  .ul 
    list-style: none
    margin: 0
    padding: 0

.album 
  background-color:rgba(255, 255, 250, 0.1)
  border-radius: 5px
  padding-left: 5px

.song 
  background-color:rgba(255, 255, 250, 0.1)
  border-radius: 5px
  padding-left: 5px

.singer 
  background-color:rgba(255, 255, 250, 0.1)
  border-radius: 5px
  padding-left: 5px

</style>