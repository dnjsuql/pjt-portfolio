<template>
  <div class="top-button" v-show="visible" @click="scrollTop()">
    <div class="top-button__inner">
      <span class="top-button__text">위로</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopButton',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }, 200);
    },
    scrollListener() {
      this.visible = window.scrollY > 10;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  &__inner {
    width: 50px;
    height: 50px;
    background-color: skyblue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__text {
    font-size: 14px;
    color: #fff;
  }
}
</style>
