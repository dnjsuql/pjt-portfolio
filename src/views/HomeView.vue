<template>
  <HeaderVue />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderVue from '@/common/Header.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    HeaderVue,
  },
};
</script>
<style lang="scss">
.home {
  min-height: 100vh;
  background-color: #aaa;
}
</style>
