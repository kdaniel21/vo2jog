<template>
  <b-carousel-list id="event-card-carousel" v-bind="settings" :data="events">
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
      settings: {
        iconSize: 'is-medium',
        itemsToShow: 1,
        breakpoints: {
          600: { itemsToShow: 2 },
          900: { itemsToShow: 3 },
          1200: { itemsToShow: 4 },
          1500: { itemsToShow: 5 },
        },
      },
    };
  },
};
</script>

<style>
#event-card-carousel {
  height: 290px;
}
</style>
