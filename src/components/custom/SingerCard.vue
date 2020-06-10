<template>
    <div class="singer-card">
      <div class="singer-image">
        <img :src="singer.avatar_url" alt="fail">
        <router-link :to="{ name: 'Исполнитель', params: { id: singer.id }}">
          <img src="../../assets/more.png" alt="" class="more">
        </router-link>
      </div>      
      <h4> {{ singer.name }} </h4>
    </div>
</template>

<script>
export default {
  props: ['singer'],
}
</script>

<style lang="sass">
  .singer-card
    min-width: 27vh
    max-width: 27vh
    max-height: 35vh
    overflow: hidden
    white-space: nowrap
    text-align: center

    h4 
      width: 100%
      overflow: hidden
      text-overflow: ellipsis
      font-family: Gilroy
      font-weight: normal

    p
      font-family: Gilroy

  .singer-image 
    position: relative
    
    
    img 
      display: block
      min-width: 27vh
      max-height: 27vh
      min-width: 27vh
      max-width: 27vh
      margin-bottom: 5px
      border-radius: 50%

    .more 
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      opacity: 0

    &:hover
      .more
        opacity: 1
</style>