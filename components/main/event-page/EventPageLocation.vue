<template>
  <section id="event-page-location" class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('common.location') }}</h2>

      <div>
        <span class="has-text-weight-medium">
          {{ $t('common.address') }}:
        </span>
        <span>{{ address }}</span>
      </div>

      <div>
        <span class="has-text-weight-medium">
          {{ $t('event.coordinates') }}:
        </span>
        <span>{{ location.coordinates[1] }}&#176;,</span>
        <span>{{ location.coordinates[0] }}&#176;</span>
      </div>

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
import LocationMap from '@/components/shared/LocationMap';

export default {
  name: 'EventPageLocation',
  components: { LocationMap },
  props: { location: { type: Object, default: null } },
  data() {
    return {
      addressElements: [
        { name: 'houseNumber', append: '.' },
        { name: 'street', append: ',' },
        { name: 'city', append: '' },
        { name: 'postalCode', append: ',' },
        { name: 'county', append: ',' },
        { name: 'state', append: ',' },
        { name: 'countryName', append: '' },
      ],
    };
  },
  computed: {
    address() {
      return this.addressElements.reduce((address, { name, append }) => {
        const value = this.location.address[name];
        if (!value) return address;

        return `${address} ${value}${append} `;
      }, '');
    },
    navigationUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.address}`;
    },
  },
};
</script>

<style scoped></style>
