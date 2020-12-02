<template>
  <filter-item :title="name">
    <b-form-checkbox-group
      v-model="selectedItems"
      :options="options"
    ></b-form-checkbox-group>
  </filter-item>
</template>

<script>
export default {
  name: 'FilterCheckbox',
  props: {
    name: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedItems: [],
    };
  },
};
</script>

<style></style>
