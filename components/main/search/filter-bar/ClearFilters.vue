<template>
  <b-button
    type="is-danger is-light"
    icon-left="trash-alt"
    @click="resetFilters"
  >
    {{ $t('search.reset_filters') }}
  </b-button>
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
