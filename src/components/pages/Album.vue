<template>
  <div>
    <b-container v-if="currentAlbum">
      <b-row class="main-area">
        <b-col xl="6">
          <b-img :src="currentAlbum.img_url">
          </b-img>
        </b-col>
        <b-col xl="6">
          <div>
            <h1> {{currentAlbum.name}} </h1>
            <div class="info">
              <table class="table">
                <tbody>
                  <tr>
                    <td><span class="info-line">Исполнитель</span></td>
                    <td><b-link v-if="currentAlbum.singers" :to="{ name: 'Исполнитель', params: { id: currentAlbum.singers[0].id }}">
                        {{currentAlbum.singers[0].name}}
                      </b-link> </td>
                  </tr>
                  <br>
                  <tr>
                    <td><span class="info-line">Тип альбома</span></td>
                    <td><b-link>{{currentAlbum.type}}</b-link></td>
                  </tr>
                  <tr>
                    <td><span class="info-line">Дата выхода</span></td>
                    <td><b-link>{{currentAlbum.date}}</b-link></td>
                  </tr>
                  <tr>
                    <td><span class="info-line">Количество треков</span></td>
                    <td><b-link>{{currentAlbum.songs.length}}</b-link></td>
                  </tr>
                  <tr>
                    <td><span class="info-line">Длительность</span></td>
                    <td><b-link>{{currentAlbum.duration}}</b-link></td>
                  </tr>
                  <tr>
                    <td><span class="info-line">Ваша оценка</span></td>
                    <td>
                      <b-form-rating
                        class="rate"
                        inline
                        no-border
                        size="lg"
                        icon-empty="heart"
                        icon-half="heart-half"
                        icon-full="heart-fill"
                        v-model="value">
                      </b-form-rating>
                    </td>
                  </tr>
                </tbody>
              </table>
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

    data() {
      return {
        value: 3
      }
    },
    
    beforeDestroy() {
      this.cleanUp()
    }

}
</script>
  
<style lang="sass">

  .main-area
    height: 100%

    h1
      font-family: Gilroy
      font-weight: bold
      margin: 0
      display: inline-block
      margin-right: 20px

    h5
      display: inline-block
      vertical-align: top
      font-family: Gilroy
      font-weight: 200

    img 
      display: block
      min-width: 30em
      max-height: 30em
      min-width: 30em
      max-width: 30em
      margin-bottom: 5px
      border-radius: 5px
    
    .info
      margin-top: 50px

      .info-line
        font-family: Gilroy
        font-size: 1.5em

        a
          margin-left: 20px

      th, td 
        border: 0
        margin-left: 0
        padding-left: 0

    .rate
      background-color: #000
      outline: none !important
      box-shadow: none !important
      padding: 0 
      margin-top: -4px
      margin-left: -4px

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