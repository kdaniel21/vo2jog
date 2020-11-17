<template>
  <b-row id="age-limit-input" no-gutters>
    <year-of-birth-input
      v-model="ageLimit.minimum"
      label="Minimum Age Limit"
      description="People born in this year and older"
      class="flex-grow-1 mr-sm-3"
      :max="ageLimit.maximum ? ageLimit.maximum - 1 : null"
    />

    <year-of-birth-input
      v-model="ageLimit.maximum"
      label="Maximum Age Limit"
      description="People born in this year and younger"
      class="flex-grow-1 mr-sm-3"
      :min="ageLimit.minimum ? ageLimit.minimum + 1 : null"
    />
  </b-row>
</template>

<script>
import YearOfBirthInput from '@/components/organizer/edit/competition/create/YearOfBirthInput';

export default {
  name: 'AgeLimitInput',
  components: { YearOfBirthInput },
  props: {
    value: {
      type: Object,
      default: () => ({ minimum: null, maximum: null }),
    },
  },
  computed: {
    ageLimit: {
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
