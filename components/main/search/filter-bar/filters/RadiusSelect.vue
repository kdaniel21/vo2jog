<template>
  <div id="radius-select">
    <h5 class="is-size-5 is-capitalized has-text-weight-medium my-4">
      {{ $t('search.select_radius') }}
    </h5>
    <span
      v-for="radius in radiusOptions"
      :key="radius"
      class="is-clickable"
      @click="selectedRadius = radius"
    >
      <b-tag :type="selectedRadius === radius ? 'is-primary' : null">
        {{ radius }} km
      </b-tag>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RadiusSelect',
  props: { value: { type: Number, default: 30 } },
  data() {
    return {
      radiusOptions: [10, 30, 50, 70, 100, 200],
    };
  },
  computed: {
    selectedRadius: {
      get() {
        return this.value || 30;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style></style>
