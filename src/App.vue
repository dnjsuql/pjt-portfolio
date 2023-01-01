<template>
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <router-view />
  <!-- <TopButton /> -->
</template>

<script>
// import TopButton from '@/components/TopButton.vue';

export default {
  components: {
    // HeaderArea,
    // TopButton,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
