<template>
  <div>
    <v-date-picker
      :value="range"
      v-bind="settings"
      :columns="$screens({ default: 1, lg: 2 })"
    />

    <button-row @apply="applyFilter" @close="close" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DateFilter',
  data() {
    return {
      settings: {
        firstDayOfWeek: 2,
        isRange: true,
      },
      range: {
        start: new Date(),
        end: new Date(),
      },
    };
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilter() {
      const { start, end } = this.range;
      this.$router.push({
        query: { ...this.$route.query, start: start.toISOString() },
      });

      setTimeout(() => {
        console.log(this.$route.query);
      }, 3000);

      this.close();
    },
    close() {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$root.$emit('bv::hide::popover', `popover-date`);
    },
  },
};
</script>

<style scoped>
.vc-container {
  border: none !important;
}
</style>
