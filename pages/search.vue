<template>
  <div id="search" class="container mt-2">
    <search-area class="mb-4" />

    <search-results />
  </div>
</template>

<script>
export default {
  fetch({ store, route }) {
    return Promise.all([
      store.dispatch('events/fetchCategories'),
      store.dispatch('events/loadFilters', route.query),
    ]);
  },
};
</script>
