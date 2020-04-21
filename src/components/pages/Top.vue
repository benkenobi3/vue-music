<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Топ-10</h1>
          <ul id="top-list">
            <li v-for="album in topAlbums" :key="album.id">

            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {

    computed: mapGetters(["topAlbums"]),
    methods: mapActions(["fetchTop"]),

    async created() {
      this.fetchTop();
    }

  };
</script>

<style lang="sass">

</style>