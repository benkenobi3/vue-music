<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=12>
          <ul class="showcase-ul">
            <li v-for="album in newRelease" :key="album.id">
              <div class="album">
                <h3> {{ album.name }} </h3>
                <p> {{ album.duration }} </p>
              </div>
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

    computed: mapGetters(["newRelease"]),
    methods: mapActions(["fetchNewRelease"]),
    
    async mounted() {
      this.fetchNewRelease();
    }

  };

</script>

<style>

  .showcase {
    min-height: 25vh;
    max-height: 25vh;
  }

  .showcase-ul {
    list-style: none;
  }

  .showcase-ul li {
    float: left;
  }

  .album {
    margin: 0;
    padding: 0;
  }

</style>