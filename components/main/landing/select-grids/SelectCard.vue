<template>
  <nuxt-link
    id="select-card"
    class="mr-3"
    :to="to"
    :style="{ backgroundImage }"
  >
    <h3
      class="overlay-text text-white font-weight-bold text-capitalize text-center"
    >
      {{ text }}
    </h3>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SelectCard',
  props: {
    text: { type: String, default: null },
    image: { type: String, default: null },
    to: { type: String, default: null },
  },
  computed: {
    backgroundImage() {
      return `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85)), url('${this.image}')`;
    },
  },
};
</script>

<style scoped>
#select-card {
  position: relative;
  flex: 0 0 auto;

  background: gray no-repeat center center;
  background-size: cover;

  height: 200px;
  width: 180px;
  border-radius: 10px;
}
#select-card:hover {
  opacity: 0.85;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
