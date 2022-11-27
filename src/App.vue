<template>
  <HeaderArea />
  <!-- <nav> -->
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <router-view />
  <TopButton />
</template>

<script>
import HeaderArea from '@/common/Header.vue';
import TopButton from '@/components/TopButton.vue';

export default {
  components: {
    HeaderArea,
    TopButton,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
