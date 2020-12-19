<template>
  <div>
    <vue-glide
      v-if="events.length"
      id="event-card-carousel"
      v-bind="settings"
      :rewind="false"
    >
      <vue-glide-slide v-for="event in events" :key="event.id">
        <event-card :event="event" class="h-100" />
      </vue-glide-slide>

      <template slot="control">
        <b-button data-glide-dir="<" variant="light">
          <fa icon="chevron-left" />
        </b-button>
        <b-button data-glide-dir=">" variant="light">
          <fa icon="chevron-right" />
        </b-button>
      </template>
    </vue-glide>
  </div>
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
        type: 'slider',
        gap: 5,
        rewind: false,
        perView: 3.5,
        bound: true,
        breakpoints: {
          675: { perView: 1 },
          900: { perView: 1.5 },
          1050: { perView: 2.3 },
          1350: { perView: 3 },
        },
      },
    };
  },
};
</script>

<style>
div[data-glide-el='controls'] {
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
}
button[data-glide-dir='<'],
button[data-glide-dir='>'] {
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
button[data-glide-dir='<'] {
  left: -20px;
}
button[data-glide-dir='>'] {
  right: -20px;
}
</style>
