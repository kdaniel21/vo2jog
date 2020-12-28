<template>
  <section id="event-page-location" class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('common.location') }}</h2>

      <location-data :location="location" />

      <div class="is-flex is-justify-content-end mt-1">
        <b-button
          type="is-primary is-light"
          icon-left="directions"
          tag="a"
          :href="navigationUrl"
          target="_blank"
          class="is-fullwidth-mobile"
        >
          {{ $t('event.plan_route') }}
        </b-button>
      </div>

      <location-map
        :location="location.coordinates"
        height="min(500px, 60vh)"
        class="mt-3"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventPageLocation',
  props: { location: { type: Object, default: null } },
  computed: {
    navigationUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.address}`;
    },
  },
};
</script>

<style scoped></style>
