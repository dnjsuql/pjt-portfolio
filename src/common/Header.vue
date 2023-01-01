<template>
  <header class="header">
    <div class="header__inner">
      <ul class="header__list">
        <li v-for="item in menuList" :key="item" class="header__item">
          <a href="#a">{{ item }}</a>
        </li>
      </ul>
      <div class="header__menu">menu</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuList: ['로고1', '로고2'],
    };
  },
  methods: {},
  mounted() {},
  beforeUnmount() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 0 60px;
  width: 100%;
  box-sizing: border-box;
  background-color: #000;
  &__inner {
    height: 64px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__list {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__item {
    margin: 0 10px;
  }
}
</style>
