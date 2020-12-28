<template>
  <div v-if="location" id="location-data">
    <div>
      <span class="has-text-weight-medium"> {{ $t('common.address') }}: </span>
      <span>{{ address }}</span>
    </div>

    <div>
      <span class="has-text-weight-medium">
        {{ $t('event.coordinates') }}:
      </span>
      <span>{{ location.coordinates[1] }}&#176;,</span>
      <span>{{ location.coordinates[0] }}&#176;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationData',
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
  },
};
</script>

<style></style>
