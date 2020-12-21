<template>
  <div>
    <v-date-picker v-model="range" v-bind="settings" columns="1" />

    <button-row @apply="applyFilter" @cancel="close" />
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
        start: this.$dateFns.set(new Date(), {
          hours: 0,
          minutes: 1,
          seconds: 0,
        }),
        end: this.$dateFns.set(new Date(), {
          hours: 23,
          minutes: 59,
          seconds: 59,
        }),
      },
    };
  },
  created() {
    const { start, end } = this.$route.query;
    if (start) this.range.start = new Date(start);
    if (end) this.range.end = new Date(end);
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilter() {
      const start = this.range.start.toISOString();
      const end = this.range.end.toISOString();

      await this.setFilter({ start, end });

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
