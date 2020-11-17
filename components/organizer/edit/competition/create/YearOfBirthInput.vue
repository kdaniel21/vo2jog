<template>
  <b-form-group
    id="year-of-birth-input"
    :label="label"
    label-for="birthyear-input"
    :description="description"
  >
    <b-form-input
      id="birthyear-input"
      v-model.number="selectedYear"
      placeholder="Year of birth"
      :min="min"
      :max="max"
      type="number"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  name: 'YearOfBirthInput',
  props: {
    value: { type: Number, default: null },
    label: { type: String, default: 'Year of Birth' },
    description: { type: String, default: null },
    min: { type: Number, default: new Date().getFullYear() - 100 },
    max: { type: Number, default: new Date().getFullYear() },
  },
  computed: {
    selectedYear: {
      get() {
        return this.value;
      },
      set(val) {
        if (val === 0) this.$emit('input', null);

        this.$emit('input', val);
      },
    },
  },
};
</script>

<style></style>
