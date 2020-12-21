<template>
  <div v-if="categories" class="is-clipped">
    <span
      v-for="category in categories"
      :key="category"
      class="tag is-primary mr-1 is-capitalized is-light"
    >
      {{ category }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: { categories: { type: Array, default: null } },
};
</script>

<style></style>
