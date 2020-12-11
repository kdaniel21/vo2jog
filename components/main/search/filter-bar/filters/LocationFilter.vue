<template>
  <div id="location-filter">
    <location-search v-model="location" />

    <h5 class="mb-0">Select Radius</h5>
    <div class="d-flex flex-wrap w-100">
      <b-button
        v-for="radiusOption in radiusOptions"
        :key="radiusOption"
        size="sm"
        :variant="radius === radiusOption ? 'primary' : 'secondary'"
        class="mr-1 mt-1 flex-shrink-0"
        @click="radius = radiusOption"
      >
        {{ radiusOption }} km
      </b-button>
    </div>

    <button-row @cancel="close" @apply="applyFilter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LocationFilter',
  data() {
    return {
      location: null,
      radius: 30,
      radiusOptions: [10, 30, 50, 70, 100, 200],
    };
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilter() {
      const { position } = this.location;
      if (!position) return;

      const { lat, lng } = position;
      await this.setFilter({ lat, lng, radius: this.radius });

      this.close();
    },
    close() {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$root.$emit('bv::hide::popover', 'popover-location');
    },
  },
};
</script>

<style></style>
