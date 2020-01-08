<template>
  <div>
    <b-container fluid>
      <b-row class="showcase">
        <b-col cols=11 offset=1>
          <h1>Новые релизы</h1>
          <ul>
            <li v-for="album in newRelease" :key="album.id">
              <div class="album-card">
                <div class="album-image">
                  <img :src="album.img_url" alt="fail">
                  <router-link :to="{ name: 'Альбом', params: { id: album.id }}">
                    <img src="../../assets/more.png" alt="" class="more">
                  </router-link>
                </div>               
                <h4> {{ album.name }} </h4>
                <p> {{ album.type }} • {{ album.date.slice(0, 4) }}</p>
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

  p {
    color: #aaa;
    text-overflow: ellipsis;
  }

  .showcase {
    min-height: 30vh;
    max-height: 30vh;
  }

  .showcase h1 {
    font-weight: 600;
    margin-bottom: 40px;
  }

  .showcase ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .showcase ul li {
    display: inline-block;
    margin-right: 56px;
  }

  .album-card {
    max-width: 15vw;
    max-height: 35vh;
    overflow: hidden;
    white-space: nowrap;
  }

  .album-card h4 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .album-image {
    position: relative;
  }

  .album-image img {
    display: block;
    min-width: 27vh;
    max-height: 27vh;
    min-width: 27vh;
    max-width: 27vh;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .more {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .album-image:hover .more{
    opacity: 1;
  }

</style>