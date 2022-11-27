<template>
  <header class="header">
    <div class="header__inner">
      <ul class="header__list">
        <li v-for="item in menuList" :key="item" class="header__item">
          <a href="#a">{{ item }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderArea',
  data() {
    return {
      menuList: ['첫번째메뉴', '두번째메뉴', '세번째메뉴'],
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
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  &__inner {
    height: 50px;
    background-color: rgba($color: #fff, $alpha: 0.7);
    border-radius: 25px;
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
