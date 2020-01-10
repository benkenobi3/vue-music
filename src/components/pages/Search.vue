<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Результаты поиска</h1>
          <b-table v-if="getSearch.length != 0" striped hover :items="getSearch"></b-table>
          <div v-else>Поиск не дал результатов</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {

    props: ['srch'],

    computed: mapGetters(["getSearch"]),
    methods: mapActions(["fetchSearch"]),
    
    async created() {
      this.fetchSearch(this.srch);
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