<template>
  <b-carousel
    :autoplay="false"
    indicator-custom
    :indicator-inside="false"
    :overlay="gallery"
    @click="switchGallery(true)"
  >
    <b-carousel-item v-for="image in images" :key="image">
      <a class="image">
        <img :src="image" />
      </a>
    </b-carousel-item>
    <span
      v-if="gallery"
      class="modal-close is-large"
      @click="switchGallery(false)"
    />
    <template slot="indicators" slot-scope="{ image }">
      <figure class="al image" :draggable="false">
        <img :draggable="false" :src="image" :title="image" />
      </figure>
    </template>
  </b-carousel>
</template>

<script>
export default {
  name: 'EventPagePhoto',
  props: {
    images: { type: Array, default: () => [] },
  },
  data() {
    return {
      gallery: false,
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) return document.documentElement.classList.add('is-clipped');

      return document.documentElement.classList.remove('is-clipped');
    },
  },
};
</script>

<style scoped>
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>
