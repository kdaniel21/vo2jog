<template>
  <b-carousel-list
    id="event-card-carousel"
    ref="carousel"
    v-bind="settings"
    :data="events"
    :items-to-show="itemsToShow"
  >
    <template #item="event">
      <event-card :event="event" />
    </template>
  </b-carousel-list>
</template>

<script>
export default {
  name: 'EventCardCarousel',
  props: {
    events: { type: Array, default: () => [] },
  },
  data() {
    return {
      carouselWidth: null,
      settings: {
        iconSize: 'is-medium',
      },
    };
  },
  computed: {
    itemsToShow() {
      const cardWidth = 290;
      return Math.floor(this.carouselWidth / cardWidth);
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (this.$refs.carousel)
        this.carouselWidth = this.$refs.carousel.$el.clientWidth;
    },
  },
};
</script>

<style>
#event-card-carousel {
  height: 290px;
  max-width: 100%;
}
</style>
