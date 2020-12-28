<template>
  <section id="search-bar">
    <b-field :label="$t('common.search')" label-position="on-border" expanded>
      <b-input v-model="searchQuery" :placeholder="$t('common.search')" />
      <location-autocomplete v-model="location" class="is-hidden-mobile" />
      <p class="control">
        <b-button type="is-primary" icon-left="search" @click="applyFilters">
          {{ $t('common.search') }}
        </b-button>
      </p>
    </b-field>
  </section>
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
  methods: {
    ...mapActions('events', ['setFilter']),
    applyFilters() {
      let lat, lng;
      if (this.location) {
        const { coordinates } = this.location;
        lng = coordinates[0];
        lat = coordinates[1];
      }

      return this.setFilter({ search: this.searchQuery, lat, lng });
    },
  },
};
</script>
