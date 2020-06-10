<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset="1">
          <h1 id="top-h">Топ-10</h1>
          <ul id="top-list">
            <li v-for="album in topAlbums" :key="album.id">
              <b-media>
                <template v-slot:aside>
                  <b-img width="64" alt="placeholder" :src="album.img_url"></b-img>
                </template>
                <h4>{{album.name}}</h4>
                <p>{{album.singers[0].name}} • rate: {{album.rate}}</p>
              </b-media>
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

  #top-h
    margin-bottom: 20px

  #top-list
    list-style: none

    li 
      width: 80%

</style>