<template>
  <div id="event-page-location">
    <h2>Location</h2>

    <div>
      <span class="font-weight-bold">Address:</span>
      <span>{{ address }}</span>
    </div>

    <div>
      <span class="font-weight-bold">Coordinates:</span>
      <span>{{ location.coordinates[1] }}&#176;,</span>
      <span>{{ location.coordinates[0] }}&#176;</span>
    </div>

    <location-map
      :lng="location.coordinates[0]"
      :lat="location.coordinates[1]"
      class="mt-3"
    />

    <div class="d-flex justify-content-end">
      <b-button
        variant="primary"
        pill
        :href="navigationUrl"
        target="_blank"
        class="mt-2 btn-block-xs-only"
      >
        <fa icon="directions" fixed-width />
        <span>Plan Route!</span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPageLocation',
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

<style></style>
