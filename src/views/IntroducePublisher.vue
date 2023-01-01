<template>
  <Header />
  <div class="intro publisher">
    <div class="intro__title">
      WELCOM TO PUBLISHER<br />
      WON-YEOP LIM<br />
      2023 PORTFOLIO<br />
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Swiper />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/common/Header.vue';
import Swiper from '@/components/Swiper.vue';

export default {
  name: 'IntroducePublisher',
  components: {
    Header,
    Swiper,
  },
};
</script>
<style lang="scss">
.intro {
  padding-top: 80px;
  background-color: #000;
  min-height: calc(100vh - 64px);
  &__title {
    padding: 0 60px;
    font-size: 90px;
    color: #fff;
    font-weight: 500;
    line-height: 98px;
  }
}
</style>
