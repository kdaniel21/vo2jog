<template>
  <div id="filter-bar" class="is-flex mb-2 is-justify-content-space-between">
    <div
      class="is-flex-grow-1 is-flex is-justify-content-space-between is-hidden-mobile"
    >
      <div>
        <filter-dropdown
          v-for="{ text, name, component } in filters"
          :key="name"
          :text="text"
          :filter-name="name"
        >
          <component
            :is="component || 'category-select'"
            slot-scope="{ attrs }"
            v-bind="attrs"
          />
        </filter-dropdown>
      </div>

      <clear-filters />
    </div>

    <mobile-filter-modal class="is-hidden-tablet" />
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
      mainCategories: [
        { text: this.$t('search.sport'), name: 'main' },
        {
          text: this.$t('common.date'),
          name: 'date',
          component: 'date-filter',
        },
        {
          text: this.$t('common.location'),
          name: 'location',
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
      return [...this.mainCategories, ...this.subcategories];
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
