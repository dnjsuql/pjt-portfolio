<template>
  <div class="main">
    <h1>퍼블리셔 / 프론트엔드 임원엽입니다.</h1>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'mainArea',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background-color: skyblue;
}
</style>