<template>
  <div id="filter-modal">
    <b-button v-b-modal.filter-modal variant="link">Filter Results</b-button>
    <b-modal id="filter" :hide-header="true">
      <filter-overview />
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'FilterModal',
};
</script>

<style scoped>
#filter {
  max-width: 100% !important;
  margin: 0 !important;
}
#filter > .modal-body {
  height: 87vh;
  overflow-y: scroll;
}
</style>
