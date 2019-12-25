<template>
  <div id="app">
    <b-container fluid>
      <b-navbar toggleable="lg" type="dark">
        
        <b-navbar-brand href="#">
          Лого
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav class="ml-auto" justify-content="center" align-v="center">

            <b-nav-item>
              <router-link to="/">
                Главная
              </router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/hotlist">
                Хотлист
              </router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/library">
                Библиотека
              </router-link>
            </b-nav-item>

          </b-navbar-nav>

          <b-navbar-nav class="mr-auto">
            <b-nav-item>
              <b-button pill variant="outline-light">Поиск</b-button>
            </b-nav-item>
          </b-navbar-nav>
          
          <b-navbar-nav style="width: 56px;">
            <p></p>
          </b-navbar-nav>

        </b-collapse>

      </b-navbar>

      <b-row class="content">
        <p>Контентище</p>
      </b-row>

    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

  * {
    color: white;
  }

  b-navbar {
    max-height: 56px;
    min-height: 56px;
  }

</style>
