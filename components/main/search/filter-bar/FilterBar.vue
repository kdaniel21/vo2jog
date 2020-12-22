<template>
  <div id="filter-bar" class="is-flex mb-2 is-justify-content-space-between">
    <div class="is-flex">
      <filter-dropdown :text="$t('search.sport')" filter-name="main">
        <category-select slot-scope="{ attrs }" v-bind="attrs" />
      </filter-dropdown>

      <filter-dropdown :text="$t('common.date')" filter-name="date">
        <date-filter />
      </filter-dropdown>

      <filter-dropdown :text="$t('common.location')" filter-name="location">
        <location-filter />
      </filter-dropdown>

      <filter-dropdown
        v-for="filter in filters"
        :key="filter"
        :filter-name="filter"
        class="is-hidden-mobile"
      >
        <category-select slot-scope="{ attrs }" v-bind="attrs" />
      </filter-dropdown>
    </div>

    <div>
      <clear-filters class="is-hidden-mobile" />
    </div>
  </div>
  <!-- <div id="filter-bar" class="d-flex mb-2 justify-content-between">
    <div class="d-flex">

    <div>
      <mobile-filter-modal />
    </div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FilterBar',
  data() {
    return {
      categories: null,
      manuallyDefinedFilters: ['main'],
    };
  },
  fetch() {
    return Promise.all([this.fetchCategories(), this.loadFilters()]);
  },
  computed: {
    ...mapGetters('events', ['subcategories']),
    filters() {
      return this.subcategories
        .filter(
          subcategory => !this.manuallyDefinedFilters.includes(subcategory)
        )
        .map(filter => filter.name);
    },
  },
  methods: {
    ...mapActions('events', ['fetchCategories', 'loadFilters']),
  },
};
</script>

<style scoped>
#item {
  max-width: 300px;
}
</style>
