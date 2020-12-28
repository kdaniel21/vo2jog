<template>
  <b-carousel
    v-if="event"
    id="event-page-photo"
    :autoplay="false"
    indicator-custom
    :indicator-inside="false"
    :overlay="gallery"
    @click="switchGallery(true)"
  >
    <b-carousel-item v-for="image in images" :key="image">
      <b-image
        :src="image"
        ratio="5by3"
        style="height: 100%; width: 100%; object-fit: contain"
      />
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
    event: { type: Object, default: null },
  },
  data() {
    return {
      gallery: false,
    };
  },
  computed: {
    images() {
      return [this.event.imageCover, ...this.event.images];
    },
  },
  methods: {
    switchGallery(value) {
      // this.gallery = value;
      // if (value) return document.documentElement.classList.add('is-clipped');
      // return document.documentElement.classList.remove('is-clipped');
    },
  },
};
</script>

<style scoped>
#event-page-photo {
  max-height: 50vh;
}
.image > img {
  object-fit: contain;
  max-height: 50vh;
}
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
  max-height: unset;
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>
