<template>
  <div>
    <b-container fluid class="login-page">
      <b-row class="align-items-center justify-content-center">
        <b-col lg="4">
          <h1 class="text-center mt-3">MUSIC SEARCH</h1>
        </b-col>
      </b-row>
      <b-row class="align-items-center justify-content-center mt-4">
        <b-col lg="3">
          <div class="border-box p-3 pt-4 pb-4 mt-4">
            <label for="username">Имя пользователя</label>
            <b-form-input id="username" type="text"></b-form-input>
            <label for="password" class="mt-3">Пароль</label>
            <a href="" class="hint text-right">Забыли пароль?</a>
            <b-form-input id="password" type="password"></b-form-input>
            <b-button id="login-btn" class="mt-4" variant="danger" v-on:click="login">
              Войти
            </b-button>
          </div>
          <div class="border-box p-3 mt-5">
            <p>Еще нет аккаунта?</p>
            <a href="" class="hint text-right">Создать аккаунт</a>
          </div>
          <div class="footer justify-content-center">
            <a href="">Поддержка</a>
            <a href="" class="ml-3">Соглашение</a>
            <a href="" class="ml-3">Связаться с нами</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login: function() {
        
    }
  }

}
</script>

<style lang="sass">

.login-page
  min-height: 50vh
  max-height: 50vh

  h1
    font-family: Gilroy
    font-weight: bold
    font-size: 72px

  .border-box
    border: solid 1px
    border-color: #fff
    border-radius: 10px
    position: relative

    p
      display: inline-block
      width: 60%
      font-family: Gilroy
      font-weight: normal
      font-size: 1.1em
      color: #fff
      margin: 0

    label
      display: inline-block
      width: 60%
      font-family: Gilroy
      font-weight: 200
      font-size: 1.1em
  
    .hint
      display: inline-block
      width: 40%
      font-family: Gilroy
      font-weight: 200
      font-size: 1em
      color: #1f9f88

  .footer
    display: flex
    position: relative
    margin-top: 7em

    a
      display: inline-block
      font-family: Gilroy
      font-weight: 200
      font-size: 1em

  #login-btn
    box-shadow: 0px 4px 4px rgba(31, 159, 136, 0.6)
    border-color: #1f9f88
    font-family: Gilroy
    font-weight: normal
    font-size: 1.5em
    width: 100%
    background-color: #1f9f88
  
</style>