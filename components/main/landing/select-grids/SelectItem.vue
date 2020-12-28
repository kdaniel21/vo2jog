<template>
  <nuxt-link id="select-item" :to="to">
    <figure
      class="image is-vertical-center is-overlay is-justify-content-center"
      :style="{ backgroundImage }"
    >
      <h3
        class="is-size-3 has-text-centered has-text-light has-text-weight-medium"
      >
        {{ text }}
      </h3>
    </figure>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SelectItem',
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
.image {
  height: 200px;

  background: gray no-repeat center center;
  background-size: cover;
  border-radius: 5px;
}
</style>
