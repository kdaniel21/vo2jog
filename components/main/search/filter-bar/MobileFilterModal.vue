<template>
  <div id="mobile-filter-modal">
    <b-button
      type="is-primary is-light"
      class="is-fullwidth"
      icon-left="filter"
      @click="isModalActive = true"
    >
      {{ $t('search.filters') }}
    </b-button>

    <b-modal v-model="isModalActive" full-screen has-modal-card>
      <div class="modal-card">
        <header
          class="modal-card-head is-flex is-justify-content-space-between"
        >
          <h2 class="title is-4 modal-card-title mb-0">
            <b-icon icon="filter" />
            <span>{{ $t('search.filters') }}</span>
          </h2>

          <span class="is-clickable" @click="cancel">
            <b-icon icon="times" />
          </span>
        </header>

        <section class="modal-card-body">
          <!-- FILTERS -->
          <category-select
            v-model="selectedSubcategories.main"
            filter-name="main"
          />

          <date-filter v-model="selectedDate" />
          <location-select v-model="selectedLocation" />
          <radius-select v-model="selectedRadius" />

          <category-select
            v-for="{ name } in subcategories"
            :key="name"
            v-model="selectedSubcategories[name]"
            :filter-name="name"
            class="mt-4"
          />

          <!-- CLEAR BUTTON -->
          <div class="is-flex is-justify-content-end">
            <clear-filters class="mb-3" />
          </div>
        </section>

        <footer class="modal-card-foot">
          <b-button
            type="is-primary"
            class="is-fullwidth"
            @click="applyFilters"
          >
            {{ $t('search.apply_filters') }}
          </b-button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MobileFilterModal',
  data() {
    return {
      isModalActive: false,
      selectedDate: [],
      selectedRadius: null,
      selectedLocation: null,
      selectedSubcategories: {},
    };
  },
  computed: {
    ...mapGetters('events', ['subcategories']),
    selected() {
      const selected = {};

      // Remove empty arrays
      Object.keys(this.selectedSubcategories).forEach(key => {
        if (this.selectedSubcategories[key].length)
          selected[key] = this.selectedSubcategories[key];
      });

      // Parse location
      if (this.selectedLocation) {
        selected.lng = this.selectedLocation.coordinates[0];
        selected.lat = this.selectedLocation.coordinates[1];
      }

      // Parse radius
      if (this.selectedRadius) selected.radius = this.selectedRadius;

      // Parse dates
      const { selectedDate } = this;
      if (selectedDate[0]) selected.start = selectedDate[0].toISOString();
      if (selectedDate[1]) selected.end = selectedDate[1].toISOString();

      return selected;
    },
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilters() {
      await this.setFilter(this.selected);

      this.isModalActive = false;
    },
    cancel() {
      this.selectedSubcategories = {};
      this.isModalActive = false;
    },
  },
};
</script>

<style scoped>
#mobile-filter-modal {
  width: 100%;
}
</style>
