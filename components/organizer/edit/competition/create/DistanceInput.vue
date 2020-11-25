<template>
  <b-row id="distance-input" no-gutters>
    <b-col cols="6" md="3">
      <form-group
        :label="label"
        label-for="distance-input"
        class="flex-grow-1 mr-sm-3"
      >
        <b-form-input
          id="distance-input"
          v-model.number="distance.amount"
          type="number"
          :step="0.01"
          class="flex-grow-1"
          novalidate
        ></b-form-input>
      </form-group>
    </b-col>
    <b-col cols="6" md="3">
      <form-group label="Unit">
        <b-form-select
          v-model="distance.unit"
          :options="unitOptions"
        ></b-form-select>
      </form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    label: { type: String, default: 'Distance' },
    defaultUnit: { type: String, default: 'kilometer' },
    value: {
      type: Object,
      default: () => ({ amount: null, unit: 'meter' }),
    },
  },
  data() {
    return {
      unitOptions: ['kilometer', 'meter', 'mile', 'foot'],
    };
  },
  computed: {
    distance: {
      get() {
        if (!this.value) return { amount: null, unit: this.defaultUnit };

        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
