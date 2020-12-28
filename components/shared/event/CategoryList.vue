<template>
  <div v-if="categories" class="is-clipped">
    <b-tag
      v-for="category in categories"
      :key="category"
      class="mr-1 is-capitalized"
      ellipsis
      type="is-primary is-light"
    >
      {{ category }}
    </b-tag>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: { categories: { type: Array, default: null } },
};
</script>

<style></style>
