<template>
  <VueSlickCarousel
    v-if="events.length"
    id="event-card-carousel"
    v-bind="settings"
  >
    <event-card
      v-for="(event, i) in events"
      :key="event._id + i"
      :event="event"
      :index="i"
    />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'EventCardCarousel',
  components: { VueSlickCarousel },
  props: {
    events: { type: Array, default: () => [] },
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: false,
        slidesPerRow: 2,
      },
    };
  },
};
</script>

<style>
.slick-prev::before,
.slick-next::before {
  color: #000 !important;
}
</style>
