<template>
  <b-autocomplete
    id="location-autocomplete"
    :value="selectedTitle"
    icon="map-marker-alt"
    :data="locations"
    :placeholder="placeholder"
    :loading="loading"
    append-to-body
    clearable
    @typing="onSearch"
    @select="val => $emit('input', val)"
  >
    <template slot-scope="{ option }">
      <b-icon icon="map-marker-alt" />
      <span>{{ option.address.label }}</span>
    </template>

    <template #empty>
      <b-icon icon="map" />
      <span>{{ $t('shared.location_autocomplete.no_data') }}</span>
    </template>
  </b-autocomplete>
</template>

<script>
export default {
  name: 'LocationAutocomplete',
  props: {
    value: { type: Object, default: null },
    placeholder: { type: String, default: 'Vienna' },
  },
  data() {
    return {
      loading: false,
      timer: null,
      locations: [],
    };
  },
  computed: {
    selectedTitle() {
      if (!this.value || !this.value.address) return;

      return this.value.address.label;
    },
  },
  methods: {
    onSearch(searchString) {
      if (!searchString) return;

      this.loading = true;

      // Debounce
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        await this.searchLocation(searchString);
        this.timer = null;
      }, 700);
    },
    async searchLocation(searchString) {
      // Clean axios instance to avoid unnecessary headers
      const axios = this.$axios.create();
      const options = {
        params: {
          q: searchString,
          limit: 5,
          lang: this.$i18n.locale,
          apiKey: this.$config.hereApiKey,
        },
        headers: { Authorization: '' },
      };

      try {
        const res = await axios.get('/here-api/', options);

        this.locations = this.transformLocationData(res.data.items);
      } catch {
        this.$buefy.toast.open({
          message: 'Could not reach servers. Please try again!',
          type: 'is-danger',
          position: 'is-bottom',
        });
      } finally {
        this.loading = false;
      }
    },
    transformLocationData(locationData) {
      return locationData.map(({ address, position }) => ({
        type: 'Point',
        address,
        coordinates: [position.lng, position.lat],
      }));
    },
  },
};
</script>

<style>
.dropdown-content {
  width: max-content;
  max-width: 100%;
}
</style>
