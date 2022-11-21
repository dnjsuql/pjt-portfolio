<template>
  <header class="header">
    <div class="header__inner">
      <ul class="header">
        <li>리스트를 작성할 것이란다</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderArea',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
  beforeUnmount() {
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    &__inner {
      height: 50px;
      background-color: rgba($color: #fff, $alpha: .7);
      border-radius: 25px;
    }
  }
</style>
