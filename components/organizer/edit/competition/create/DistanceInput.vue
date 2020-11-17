<template>
  <b-row id="distance-input" no-gutters>
    <b-col cols="12" md="6" class="d-flex flex-wrap">
      <b-form-group
        label="Distance"
        label-for="distance-input"
        class="flex-grow-1 mr-sm-3"
      >
        <b-form-input
          id="distance-input"
          v-model.number="distance.length"
          type="number"
          :step="0.01"
          class="flex-grow-1"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Unit">
        <b-form-select
          v-model="distance.unit"
          :options="unitOptions"
        ></b-form-select>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({ length: null, unit: 'kilometer' }),
    },
  },
  data() {
    return {
      unitOptions: ['kilometer', 'meter', 'mile'],
    };
  },
  computed: {
    distance: {
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
