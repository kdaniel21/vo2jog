<template>
  <b-form id="search-bar" inline @submit.prevent="applyFilters">
    <b-input
      id="search-input"
      v-model="searchQuery"
      class="flex-grow-1 mr-sm-1"
      placeholder="Search Event or Sport"
    ></b-input>

    <b-input-group
      id="location-input-group"
      class="d-none d-sm-flex flex-grow-1 align-items-stretch flex-wrap-0"
    >
      <b-input-group-prepend is-text>
        <fa icon="map-marker-alt" />
      </b-input-group-prepend>

      <location-search
        id="location-input"
        v-model="location"
        placeholder="Location"
        class="mr-sm-1 flex-grow-1"
      >
        <template #option="{ location: { address } }">
          <span>{{ `${address.city}, ${address.countryCode}` }}</span>
        </template>
        <template #selected-option="{ location: { address } }">
          <span>{{ `${address.city}, ${address.countryCode}` }}</span>
        </template>
      </location-search>

      <b-input-group-append>
        <b-button type="submit" variant="primary">
          <fa icon="search" />
        </b-button>
      </b-input-group-append>
    </b-input-group>

    <b-button
      type="submit"
      variant="primary"
      class="d-block d-sm-none btn-block-xs-only mt-1"
    >
      <fa icon="search" />
      <span>Search</span>
    </b-button>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: this.$store.state.events.filters.q,
      location: null,
    };
  },
  created() {
    this.loadFilters();
  },
  methods: {
    ...mapActions('events', ['setFilter', 'loadFilters']),
    applyFilters() {
      let lat, lng;
      if (this.location) {
        const { coordinates } = this.location;
        lng = coordinates[0];
        lat = coordinates[1];
      }

      return this.setFilter({ q: this.searchQuery, lat, lng });
    },
  },
};
</script>
