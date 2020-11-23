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
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CategoriesSelect },
};
</script>

<style></style>
