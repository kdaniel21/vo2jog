<template>
  <b-navbar id="filter-bar" variant="light" class="d-flex">
    <!-- MAIN CATEGORY -->
    <filter-popover ref="foo" text="Sport" filter-name="main" class="mr-2">
      <category-select slot-scope="{ attrs }" v-bind="attrs" />
    </filter-popover>

    <filter-popover text="Date" filter-name="date" full-width class="mr-2">
      <date-filter />
    </filter-popover>

    <filter-popover
      text="Location"
      filter-name="location"
      full-width
      wide
      class="mr-2"
    >
      <location-filter />
    </filter-popover>

    <filter-popover
      v-for="filter in filters"
      :key="filter"
      :text="filter"
      :filter-name="filter"
      class="mr-2"
    >
      <category-select slot-scope="{ attrs }" v-bind="attrs" />
    </filter-popover>

    <clear-filters />
  </b-navbar>
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
