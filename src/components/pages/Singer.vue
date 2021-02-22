<template>
  <div>
    <b-container fluid>
      <b-row class="singer-poster">
        <b-col cols="12" class="padding-free">
          <b-img :src=currentSinger.poster_url fluid alt="back"></b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1 class="singer-h1">{{currentSinger.name}}</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'


export default {
  props: ['id'],

  computed: mapGetters(["currentSinger"]),
  methods: mapActions(["fetchSinger", "cleanSinger"]),

  async created() {
    this.fetchSinger(this.id)
  },

  beforeDestroy() {
    this.cleanSinger()
  }

}
</script>

<style lang="sass">

  .padding-free
    padding: 0 !important

  .singer-poster
    height: 70vh
    width: 100vw
    overflow: hidden

  .singer-h1
    font-family: Gilroy
    font-weight: bold
    display: inline-block
    margin-top: 40px 

</style>