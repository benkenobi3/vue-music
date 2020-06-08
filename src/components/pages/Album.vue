<template>
  <div>
    <b-container>
      <b-row class="main-area">
        <b-col cols="6">
          <img :src="currentAlbum.img_url">
        </b-col>
        <b-col cols="6">
          <div>
            <h1> {{currentAlbum.name}} </h1>
            <div class="info">
              <div class="info-line w-100">
                Исполнитель <b-link>{{currentAlbum.singers[0].name}}</b-link>
              </div>
              <br>
              <div class="info-line w-100">
                Тип <b-link>{{currentAlbum.type}}</b-link>
              </div>
              <div class="info-line w-100">
                Дата выхода <b-link>{{currentAlbum.date}}</b-link>
              </div>

              <div class="info-line w-100">
                Длительность <b-link>{{currentAlbum.duration}}</b-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="songs-area">
        <b-col cols="12">
          <h2>Треки</h2>
          <ul class="songs">
            <li v-for="song in currentAlbum.songs" :key="song.id">
              <div class="song">
                <h5> {{song.name}} </h5>
                <p> {{song.duration}} </p>
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
    methods: mapActions(["fetchAlbum", "cleanUp"]),

    async created() {
      this.fetchAlbum(this.id)
    },
    
    beforeDestroy() {
      this.cleanUp()
    }

}
</script>
  
<style lang="sass">

  .main-area
    min-height: 50vh
    max-height: 50vh

    h1
      font-family: Gilroy
      font-weight: bold
      margin: 0

    img 
      display: block
      min-width: 500px
      max-height: 500px
      min-width: 500px
      max-width: 500px
      margin-bottom: 5px
      border-radius: 5px
    
    .info
      margin-top: 100px

      .info-line
        font-family: Gilroy
        font-size: 1.5em

        a
          margin-left: 20px


  .songs-area

    h2
      margin-top: 50px
      margin-bottom: 20px

    .songs
      list-style: none
      margin: 0
      padding: 0

    .song 
      background-color: rgba(255, 255, 250, 0.1)
      border-radius: 5px
      padding-left: 5px


  .image-enter 
    opacity: 0

  .image-enter-to 
    opacity: 1

</style>