<template>
  <div id="filter-bar" class="is-flex mb-2 is-justify-content-between">
    <div class="is-flex">
      <filter-dropdown :text="$t('search.sport')" filter-name="main">
        <category-select slot-scope="{ attrs }" v-bind="attrs" />
      </filter-dropdown>

      <filter-dropdown text="Date" filter-name="date">
        <date-filter />
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
  </div>
  <!-- <div id="filter-bar" class="d-flex mb-2 justify-content-between">
    <div class="d-flex">
      <!-- MAIN CATEGORY
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
        class="mr-2 d-none d-sm-block"
      >
        <category-select slot-scope="{ attrs }" v-bind="attrs" />
      </filter-popover>
    </div>

    <div>
      <mobile-filter-modal />
      <clear-filters class="d-none d-sm-block" />
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
