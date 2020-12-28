<template>
  <div id="event-page-hero" class="hero" :style="{ backgroundImage }">
    <div class="hero-body">
      <div class="container is-hidden-mobile">
        <div class="columns is-justify-content-end is-vcentered">
          <event-page-basic-information
            class="column is-narrow"
            :event="event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPageHero',
  props: { event: { type: Object, default: null } },
  computed: {
    backgroundImage() {
      if (!this.event) return;

      return `url(${this.event.imageCover})`;
    },
  },
};
</script>

<style scoped>
#event-page-hero {
  height: min(800px, 60vh);
  background-size: cover;
}
.container {
  height: 100%;
}
.columns {
  height: 100%;
}
.column {
  height: max-content;
}
</style>
