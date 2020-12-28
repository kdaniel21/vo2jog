<template>
  <b-carousel-list
    id="event-card-carousel"
    ref="carousel"
    :data="events"
    :items-to-show="itemsToShow"
    icon-size="is-medium"
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
    };
  },
  computed: {
    itemsToShow() {
      const cardWidth = 300;
      return this.carouselWidth / cardWidth;
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
      if (!this.$refs.carousel) return;

      this.carouselWidth = this.$refs.carousel.$el.clientWidth;
    },
  },
};
</script>

<style scoped>
#event-card-carousel {
  height: 290px;
}
</style>
