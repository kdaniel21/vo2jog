<template>
  <div id="mobile-filter-modal" class="w-100 d-sm-none">
    <b-button v-b-modal.filter-modal size="sm">
      <fa icon="filter" />
      <span>Filters</span>
    </b-button>

    <b-modal
      id="filter-modal"
      title="Filters"
      class="p-0"
      @hidden="resetSelected"
    >
      <category-select
        v-for="{ name } in subcategories"
        :key="name"
        v-model="selectedSubcategories[name]"
        :filter-name="name"
        is-mobile
      />

      <clear-filters class="mt-3" />

      <template #modal-footer>
        <b-button
          class="btn-block-xs-only"
          variant="primary"
          @click="applyFilters"
        >
          Apply Filters
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MobileFilterModal',
  data() {
    return {
      selectedSubcategories: {},
    };
  },
  computed: {
    ...mapGetters('events', ['subcategories']),
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilters() {
      // Remove empty arrays
      Object.keys(this.selectedSubcategories).forEach(selected => {
        if (!this.selectedSubcategories[selected].length)
          this.selectedSubcategories[selected] = null;
      });

      await this.setFilter(this.selectedSubcategories);

      this.close();
    },
    close() {
      this.$bvModal.hide('filter-modal');
    },
    resetSelected() {
      this.selectedSubcategories = {};
    },
  },
};
</script>

<style>
#filter-modal > .modal-dialog {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  margin: 0;
}
#filter-modal > * > .modal-content {
  min-height: 100%;
}
</style>
