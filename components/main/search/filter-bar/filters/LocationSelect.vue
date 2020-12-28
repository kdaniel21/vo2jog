<template>
  <div id="location-select">
    <h5 class="is-size-5 is-capitalized has-text-weight-medium">
      {{ $t('search.select_location') }}
    </h5>
    <location-autocomplete v-model="location" :append-to-body="false" />
  </div>
</template>

<script>
export default {
  name: 'LocationSelect',
  props: { value: { type: Object, default: null } },
  computed: {
    location: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style></style>
