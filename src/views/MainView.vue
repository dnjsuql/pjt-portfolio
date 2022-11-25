<template>
  <div class="main">
    <div class="main__content">
      <div class="main__title">
        <h1>프로젝트 포트폴리오</h1>
      </div>
      <div class="main__link">
        <router-link to="/home">웹퍼블리셔 임원엽입니다.</router-link> |
        <router-link to="/about">웹디자이너 이영우입니다.</router-link>
      </div>
    </div>
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
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__title {
    text-align: center;
    h1 {
      font-size: 48px;
      font-weight: 700;
      color: #fff;
    }
  }
  &__link {
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
  }
}
</style>