<template>
  <form-group
    id="distance-input"
    v-bind="$attrs"
    :validator="validator"
    horizontal
  >
    <b-input
      v-model.number="distance.amount"
      type="number"
      placeholder="0,00"
      expanded
      @input="validator ? validator.amount.$touch() : null"
    />
    <b-select
      v-model="distance.unit"
      :plceholder="$t('organizer.competitions.unit') || $attrs.label"
      @input="validator ? validator.unit.$touch() : null"
    >
      <option v-for="{ value, label } in units" :key="value" :value="value">
        {{ label }}
      </option>
    </b-select>
  </form-group>
</template>

<script>
export default {
  name: 'DistanceInput',
  props: {
    value: { type: Object, default: null },
    validator: { type: Object, default: null },
  },
  data() {
    return {
      units: [
        { value: 'kilometer', label: 'km' },
        { value: 'mile', label: 'mi' },
        { value: 'meter', label: 'm' },
        { value: 'foot', label: 'ft' },
      ],
    };
  },
  computed: {
    distance: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', { ...this.value, ...val });
      },
    },
  },
};
</script>

<style></style>
