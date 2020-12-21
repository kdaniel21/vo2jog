<template>
  <section id="search-bar" class="card">
    <div class="card-content">
      <b-field :label="$t('common.search')" label-position="on-border" expanded>
        <b-input v-model="searchQuery" :placeholder="$t('common.search')" />
        <location-autocomplete v-model="location" class="is-hidden-mobile" />
        <p class="control">
          <b-button type="is-primary" icon-left="search" @click="applyFilters">
            {{ $t('common.search') }}
          </b-button>
        </p>
      </b-field>
    </div>
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

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
#search-bar {
  @include from($tablet) {
    width: max-content;
  }
}
</style>
