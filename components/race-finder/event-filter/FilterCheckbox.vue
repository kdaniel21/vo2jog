<template>
  <filter-item :title="name">
    <b-form-checkbox-group
      v-model="selectedItems"
      :options="options"
    ></b-form-checkbox-group>
  </filter-item>
</template>

<script>
import FilterItem from '@/components/race-finder/event-filter/FilterItem';

export default {
  name: 'FilterCheckbox',
  components: {
    FilterItem,
  },
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
