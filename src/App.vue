<template>
  <div id="app">
    <b-container fluid>
      <b-navbar toggleable="lg" class="navbar" fixed="top">
        
        <b-navbar-brand href="/">
          <img src="./assets/zik.png" alt="logo" style="width: 60px; height: 56px;" class="ml-3">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav v-if="isSearch" class="ml-auto" justify-content="center" align-v="center">
              <b-form-input
                id="search-form"
                v-model="search"
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
          
          <b-navbar-nav style="width: 56px;">
            <p>ACC</p>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>

      <b-row class="content" v-on:click="isSearch=false">
        <b-col cols="12">
          <router-view></router-view>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        isSearch: false,
        search: ""
      }
    },

    methods: {
      goSearch () {
        if (this.isSearch) {
          if (this.search != "") {
            this.$router.push({name: "Поиск", params: {srch: this.search}});
          }
          else {
            this.isSearch = false
          }
        }
        else
        {
          this.isSearch = true
          this.search = ""
        }
      },
    }

  }
</script>

<style>

  p {
    color: #aaa;
    text-overflow: ellipsis;
  }

  input {
    outline: none !important;
    box-shadow: none !important;
  }

  button {
    outline: none !important;
    box-shadow: none !important;
  }

  #search-form {
    min-width: 30vw;
    max-width: 30vw;
    background-color: #232323;
    border-color: #232323;
    margin-right: 5px;
    color: white;
  }

  .navbar {
    background-color: black;
    max-height: 56px;
    min-height: 56px;
  }

  .router-link-exact-active {
    color: white;
  }

  .content {
    margin-top: 126px;
    width: 100%;
    height: 100%;
  }

  
</style>
