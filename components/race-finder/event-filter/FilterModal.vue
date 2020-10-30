<template>
  <div id="filter-modal">
    <b-button v-b-modal.filter-modal variant="link">Filter Results</b-button>
    <b-modal id="filter-modal" :hide-header="true">
      <filter-overview />
    </b-modal>
  </div>
</template>

<script>
import FilterOverview from '@/components/race-finder/event-filter/FilterOverview';

export default {
  name: 'FilterModal',
  components: {
    FilterOverview,
  },
};
</script>

<style>
.modal-dialog {
  max-width: 100% !important;
  margin: 0 !important;
}
.modal-body {
  height: 87vh;
  overflow-y: scroll;
}
</style>
