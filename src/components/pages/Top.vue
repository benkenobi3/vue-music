<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Топ-10</h1>
          <b-table striped hover :items="topAlbums" :fields="fields"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {

    data() {
      return {
        fields: [
        {key: 'name', label:'Название', sortable: true},
        {key: 'singers', label:'Исполнители', sortable: true},
        {key: 'duration', label:'Продолжительность', sortable: true},
        {key: 'date', label:'Дата', sortable: true},
        {key: 'rate', label:'Рейтинг', sortable: true},
        ],
      }
    },

    computed: mapGetters(["topAlbums"]),
    methods: mapActions(["fetchTop"]),

    async created() {
      this.fetchTop();
    }

  };
</script>

<style>
  .album-top {
    margin: 0;
    padding: 0;
  }

  .album-top-el {
    background-color:rgba(255, 255, 250, 0.1);
    border-radius: 5px;
    padding-left: 5px;
  }
</style>