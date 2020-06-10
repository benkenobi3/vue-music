<template>
    <div class="album-card">
      <div class="album-image">
        <img :src="album.img_url" alt="fail">
        <router-link :to="{ name: 'Альбом', params: { id: album.id }}">
          <img src="../../assets/more.png" alt="" class="more">
        </router-link>
      </div>               
      <h4> {{ album.name }} </h4>
      <p> {{ album.singers[0].name }} • {{ album.type }} • {{ album.date.slice(0, 4) }}</p>
    </div>
</template>

<script>
export default {
  props: ['album'],
}
</script>

<style lang="sass">
  .album-card
    min-width: 27vh
    max-width: 27vh
    max-height: 35vh
    overflow: hidden
    white-space: nowrap

    h4 
      width: 100%
      overflow: hidden
      text-overflow: ellipsis
      font-family: Gilroy
      font-weight: normal

    p
      font-family: Gilroy

  .album-image 
    position: relative
    
    img 
      display: block
      min-width: 27vh
      max-height: 27vh
      min-width: 27vh
      max-width: 27vh
      margin-bottom: 5px
      border-radius: 5px

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