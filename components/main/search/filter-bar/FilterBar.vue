<template>
  <div id="filter-bar" class="is-flex mb-2 is-justify-content-space-between">
    <div class="is-flex">
      <filter-dropdown
        v-for="{ text, filterName, name, component } in filters"
        :key="filterName || name"
        :text="text"
        :filter-name="filterName || name"
      >
        <component
          :is="component || 'category-select'"
          slot-scope="{ attrs }"
          v-bind="attrs"
        />
      </filter-dropdown>
    </div>

    <div>
      <mobile-filter-modal />
      <!-- <clear-filters class="is-hidden-mobile" /> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DateFilter from './filters/DateFilter';
import LocationFilter from './filters/LocationFilter';
import CategorySelect from './filters/CategorySelect';

export default {
  name: 'FilterBar',
  components: { CategorySelect, DateFilter, LocationFilter },
  data() {
    return {
      categories: [
        { text: this.$t('search.sport'), filterName: 'main' },
        {
          text: this.$t('common.date'),
          filterName: 'date',
          component: 'date-filter',
        },
        {
          text: this.$t('common.location'),
          filterName: 'location',
          component: 'location-filter',
        },
      ],
    };
  },
  fetch() {
    return Promise.all([this.fetchCategories(), this.loadFilters()]);
  },
  computed: {
    ...mapGetters('events', ['subcategories']),
    filters() {
      return [...this.categories, ...this.subcategories];
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
