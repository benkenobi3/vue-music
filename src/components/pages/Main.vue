<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Новые релизы</h1>
          <ul v-if="newRelease">
            <li v-for="album in newRelease" :key="album.id">
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

    computed: mapGetters(["newRelease"]),
    methods: mapActions(["fetchNewRelease"]),
    
    async created() {
      this.fetchNewRelease();
    }

  };

</script>

<style lang="sass">

  .showcase 
    min-height: 60vh
    max-height: 60vh
  
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