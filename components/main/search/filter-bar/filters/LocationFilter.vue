<template>
  <div class="location-filter">
    <location-select v-model="location" />

    <radius-select v-model="selectedRadius" />

    <button-row class="mt-3" @cancel="close" @apply="applyFilter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LocationFilter',
  props: { value: { type: Object, default: null } },
  data() {
    return {
      location: null,
      selectedRadius: null,
    };
  },
  watch: {
    location(val) {
      this.$emit('input', val);
    },
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
      this.$parent.$parent.toggle();
    },
  },
};
</script>
