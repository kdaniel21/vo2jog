<template>
  <div class="location-filter">
    <h5 class="is-size-5 is-capitalized has-text-weight-medium">
      {{ $t('search.select_location') }}
    </h5>

    <location-autocomplete v-model="location" :append-to-body="false" />

    <h5 class="is-size-6 is-capitalized has-text-weight-medium">
      {{ $t('search.select_radius') }}
    </h5>
    <span
      v-for="radius in radiusOptions"
      :key="radius"
      class="is-clickable"
      @click="selectedRadius = radius"
    >
      <b-tag :type="selectedRadius === radius ? 'is-primary' : null">
        {{ radius }} km
      </b-tag>
    </span>

    <button-row class="mt-3" @cancel="close" @apply="applyFilter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LocationFilter',
  data() {
    return {
      location: null,
      selectedRadius: 30,
      radiusOptions: [10, 30, 50, 70, 100, 200],
    };
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilter() {
      const { coordinates } = this.location;
      if (!coordinates) return;

      const lng = coordinates[0];
      const lat = coordinates[1];
      await this.setFilter({ lat, lng, radius: this.selectedRadius });

      this.close();
    },
    close() {
      this.$parent.$parent.close();
    },
  },
};
</script>
