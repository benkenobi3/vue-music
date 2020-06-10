<template>
  <div id="app">
    <b-container fluid>
      <b-navbar toggleable="lg" class="navbar" fixed="top">
        
        <b-navbar-brand to="/">
          <img src="./assets/zik.png" alt="logo" style="width: 60px; height: 56px;" class="ml-3">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav v-if="is_search" class="ml-auto" justify-content="center" align-v="center">
              <b-form-input
                id="search-form"
                v-model="search_text"
                ></b-form-input>
          </b-navbar-nav>

          <b-navbar-nav v-else class="ml-auto" justify-content="center" align-v="center">

            <b-nav-item active class="mr-4">
              <router-link to="/">
                Главная
              </router-link>
            </b-nav-item>

            <b-nav-item class="mr-4">
              <router-link to="/top">
                Топ-10
              </router-link>
            </b-nav-item>

            <b-nav-item class="mr-4">
              <router-link to="/library">
                Библиотека
              </router-link>
            </b-nav-item>

          </b-navbar-nav>

          <b-navbar-nav class="mr-auto">
            <b-nav-item>
              <b-button id="search" pill variant="black" v-on:click="goSearch">
                <b-icon icon="search"></b-icon>
              </b-button>
            </b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav justify-content="center">
            <a href="/login" class="mr-3">Вход</a>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>

    </b-container>
    
    <div class="content" v-on:click="is_search=false">
      <router-view></router-view>
    </div>
    

  </div>
</template>

<script>
  export default {

    data () {
      return {
        is_search: false,
        search_text: ""
      }
    },

    methods: {

      goSearch () {

        if (this.is_search) {
          if (this.search_text != "") {

            this.$router.push({
              name: "Поиск",
              path: '/',
              params: {srch: this.search_text}
            });

          }
          else {
            this.is_search = false
          }
        }
        else
        {
          this.is_search = true
          this.search_text = ""
        }

      },
    }

  }
</script>

<style lang="sass">

  @font-face
    font-family: Gilroy
    src: url(assets/fonts/Gilroy-Regular.woff)
    font-weight: normal


  @font-face
    font-family: Gilroy
    src: url(assets/fonts/Gilroy-Medium.woff)
    font-weight: bold

  
  @font-face
    font-family: Gilroy
    src: url(assets/fonts/Gilroy-Light.woff)
    font-weight: 200


  @font-face
    font-family: Gilroy
    src: url(assets/fonts/Gilroy-ExtraBold.woff)
    font-weight: 800


  p
    color: #aaa
    text-overflow: ellipsis
  

  input
    outline: none !important
    box-shadow: none !important
  

  button
    outline: none !important
    box-shadow: none !important
  

  #search-form
    min-width: 30vw
    max-width: 30vw
    background-color: #232323
    border-color: #232323
    margin-right: 5px
    color: white
  

  .navbar
    background-color: black
    max-height: 56px
    min-height: 56px
  

  .router-link-exact-active
    color: white
  

  .content
    padding-top: 120px
    width: 100%
    height: 100%
  
</style>
