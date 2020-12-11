<template>
  <b-button id="clear-filters" size="sm" @click="resetFilters"
    >Clear Filters</b-button
  >
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ClearFilters',
  methods: {
    ...mapActions('events', ['resetFilters']),
  },
};
</script>

<style></style>
