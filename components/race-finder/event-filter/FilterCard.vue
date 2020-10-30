<template>
  <b-card id="filter-card">
    <b-card-title>Filter</b-card-title>
    <filter-overview />
  </b-card>
</template>

<script>
import FilterOverview from '@/components/race-finder/event-filter/FilterOverview';

export default {
  name: 'FilterCard',
  components: {
    FilterOverview,
  },
};
</script>

<style></style>
