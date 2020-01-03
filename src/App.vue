<template>
  <div id="app">
    <b-container fluid>
      <b-navbar toggleable="lg" type="dark" fixed="top">
        
        <b-navbar-brand href="/">
          <img src="./assets/zik.png" alt="logo" style="width: 60px; height: 56px;" class="ml-3">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav v-if="srch">
            <b-nav-item>
              
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav v-else class="ml-auto" justify-content="center" align-v="center">

            <b-nav-item active class="mr-4">
              <router-link to="/">
                Главная
              </router-link>
            </b-nav-item>

            <b-nav-item class="mr-4">
              <router-link to="/hotlist">
                Хотлист
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
              <b-button id="search" pill variant="outline-light">Поиск</b-button>
            </b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav style="width: 56px;">
            <p>ACC</p>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>

      <b-row class="content">
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
        srch: false,
      }
    }
  }
</script>

<style>

  b-navbar {
    max-height: 56px;
    min-height: 56px;
  }

  .router-link-exact-active {
    color: white;
  }

  .content {
    margin-top: 126px;
  }

</style>
