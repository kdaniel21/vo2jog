<template>
  <b-row id="button-row" class="d-flex justify-content-end">
    <filter-modal class="mr-2 d-md-none" />
    <filter-map />
  </b-row>
</template>

<script>
import FilterModal from '@/components/race-finder/event-filter/FilterModal';
import FilterMap from '@/components/race-finder/event-filter/FilterMap';

export default {
  name: 'ButtonRow',
  components: {
    FilterModal,
    FilterMap,
  },
};
</script>

<style></style>
