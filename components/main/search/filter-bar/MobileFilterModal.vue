<template>
  <div id="mobile-filter-modal" class="w-100 d-sm-none">
    <b-button v-b-modal.filter-modal size="sm">
      <fa icon="filter" />
      <span>Filters</span>
    </b-button>

    <b-modal id="filter-modal" class="p-0">
      <h3>Filters</h3>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'MobileFilterModal',
};
</script>

<style>
#filter-modal > .modal-dialog {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  margin: 0;
}
#filter-modal > * > .modal-content {
  min-height: 100%;
}
</style>
