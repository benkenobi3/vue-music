<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Новые релизы</h1>
          <ul class="showcase-ul">
            <li v-for="album in newRelease" :key="album.id">
              <div class="album">
                <img :src="album.img_url" alt="fail">
                <h4> {{ album.name }} </h4>
                <p> {{ album.type }} * {{ album.date.slice(0, 4) }}</p>
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

  h1 {
    font-weight: 600;
    margin-bottom: 40px;
  }

  p {
    color: #aaa;
  }

  .showcase {
    min-height: 25vh;
    max-height: 25vh;
  }

  .showcase-ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .showcase-ul li {
    display: inline-block;
    margin-right: 56px;
  }

  .album img {
    min-width: 250px;
    max-height: 250px;
    min-width: 250px;
    max-width: 250px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

</style>