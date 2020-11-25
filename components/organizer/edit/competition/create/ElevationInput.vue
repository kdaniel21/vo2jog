<template>
  <div id="elevation-input">
    <!-- POSITIVE -->
    <distance-input
      v-model="elevation.positive"
      class="w-100"
      default-unit="meter"
      :label="isNegativeDifferent ? 'Positive Elevation' : 'Elevation'"
    />

    <!-- TOGGLE NEGATIVE -->
    <b-checkbox v-model="isNegativeDifferent" switch>
      Negative elevation is different
    </b-checkbox>

    <!-- NEGATIVE -->
    <distance-input
      v-if="isNegativeDifferent"
      v-model="elevation.negative"
      class="w-100"
      default-unit="meter"
      label="Negative Elevation"
    />
  </div>
</template>

<script>
import DistanceInput from '@/components/organizer/edit/competition/create/DistanceInput';

export default {
  name: 'ElevationInput',
  components: { DistanceInput },
  props: {
    value: {
      type: Object,
      default: () => ({
        positive: { amount: null, unit: 'meter' },
        negative: { amount: null, unit: 'meter' },
      }),
    },
  },
  data() {
    return {
      isNegativeDifferent: false,
    };
  },
  computed: {
    elevation: {
      get() {
        if (!this.value)
          return {
            positive: { amount: null, unit: 'meter' },
            negative: { amount: null, unit: 'meter' },
          };

        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  created() {
    this.isNegativeDifferent = !!this.elevation.negative.amount;
  },
};
</script>
