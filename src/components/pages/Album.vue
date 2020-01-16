<template>
  <div>
    <b-container>
      <b-row class="album-page">
        <b-col cols="6">
          <img :src="currentAlbum.img_url" alt="fail">
        </b-col>
        <b-col cols="6">
          <div class="title">
            <h1> {{ currentAlbum.name }} </h1>
            <p> {{ currentAlbum.type }} • {{ currentAlbum.duration }} • {{ currentAlbum.date }}</p>
          </div>
          <ul class="songs">
            <li v-for="song in currentAlbum.songs" :key="song.id">
              <div class="song">
                <h5> {{ song.name }} </h5>
                <p> {{ song.duration }} </p>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
  
<script>
import {mapGetters, mapActions} from 'vuex'

export default {

    props: ['id'],

    computed: mapGetters(["currentAlbum"]),
    methods: mapActions(["fetchAlbum"]),

    async created() {
      this.fetchAlbum(this.id);
    }

}
</script>
  
<style>

  .album-page {
    min-height: 50vh;
    max-height: 50vh;
  }

  .album-page h1 {
    font-weight: 600;
    margin: 0;
  }

  .album-page img {
    display: block;
    min-width: 500px;
    max-height: 500px;
    min-width: 500px;
    max-width: 500px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .album-page .title {
      margin-bottom: 30px;
  }

  .album-page .songs {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .album-page .song {
    background-color:rgba(255, 255, 250, 0.1);
    border-radius: 5px;
    padding-left: 5px;
  }

  .image-enter {
    opacity: 0;
  }

  .image-enter-to {
    opacity: 1;
  }

</style>