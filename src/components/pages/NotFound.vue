<template>
  <div>
    <b-container fluid class="not-found-content">
      <b-row align-h="center" class="not-found-content">
        <b-col cols="3" align-self="center"> 
          <div class="error">
            404
            <br>
            Not Found
          </div>
        </b-col>
      </b-row> 
    </b-container>
  </div>
</template>

<script>
export default {
    name: '404 Not Found'
}
</script>

<style>
    .not-found-content {
        height: 80vh;
    }

    .error {
        width: 100%;
        height: 100%;
        text-align: center;
        color: white;
        font-size: 60px;
    }
</style>