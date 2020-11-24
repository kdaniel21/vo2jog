<template>
  <div id="categories">
    <h3>Categories</h3>
    <categories-select />
  </div>
</template>

<script>
import CategoriesSelect from '@/components/organizer/edit/categories/CategoriesSelect';

export default {
  name: 'categories',
  components: { CategoriesSelect },
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
};
</script>

<style></style>
