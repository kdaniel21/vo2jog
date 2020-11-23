<template>
  <b-form-group
    id="category-select-input"
    :label="label"
    label-class="text-capitalize"
    label-for="category-select"
    :description="description"
  >
    <v-select
      id="category-select"
      v-model="selected"
      :options="options"
      multiple
    >
      <template #option="option">
        <span class="text-capitalize">{{ option.label }}</span>
      </template>

      <template #selected-option="option">
        <span class="text-capitalize">{{ option.label }}</span>
      </template>
    </v-select>
  </b-form-group>
</template>

<script>
export default {
  name: 'CategorySelectInput',
  props: {
    value: { type: Array, default: () => [] },
    label: { type: String, default: null },
    description: { type: String, default: null },
    options: { type: Array, default: () => [] },
  },
  computed: {
    selected: {
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
