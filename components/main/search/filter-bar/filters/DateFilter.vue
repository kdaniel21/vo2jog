<template>
  <div id="date-filter">
    <h5 class="is-size-5 is-capitalized has-text-weight-medium">
      {{ $t('search.select_date') }}
    </h5>

    <b-datepicker v-model="range" v-bind="settings" class="my-4" />

    <button-row @apply="applyFilter" @cancel="close" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DateFilter',
  props: { value: { type: Array, default: () => [] } },
  data() {
    return {
      range: [],
      settings: {
        placeholder: 'Select Date',
        range: true,
        inline: true,
        locale: this.$i18n.locale,
        firstDayOfWeek: 1,
      },
    };
  },
  watch: {
    range(val) {
      this.$emit('input', val);
    },
  },
  created() {
    const { start, end } = this.$route.query;
    if (start) this.range[0] = new Date(start);
    if (end) this.range[1] = new Date(end);
  },
  methods: {
    ...mapActions('events', ['setFilter']),
    async applyFilter() {
      const start = this.range[0].toISOString();
      const end = this.range[1].toISOString();

      await this.setFilter({ start, end });

      this.close();
    },
    close() {
      this.$parent.$parent.toggle();
    },
  },
};
</script>

<style lang="scss">
// Remove visible box and align
#date-filter {
  margin: 0 -1rem;

  & > h5 {
    margin: 0 1rem;
  }

  .dropdown-menu {
    width: 100% !important;

    .dropdown-content {
      width: 100%;
    }
  }
}
</style>
