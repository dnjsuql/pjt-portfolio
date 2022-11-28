<template>
  <Header />
  <div class="publisher">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/common/Header.vue';

export default {
  name: 'IntroducePublisher',
  components: {
    // HelloWorld
    Header,
  },
};
</script>
<style lang="scss">
.publisher {
  min-height: 100vh;
  background-color: #aaa;
}
</style>
