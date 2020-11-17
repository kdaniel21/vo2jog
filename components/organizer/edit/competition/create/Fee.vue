<template>
  <div id="fee">
    <div class="d-flex justify-content-between flex-wrap mb-3">
      <h5 class="align-self-end mb-sm-0">Price Steps</h5>
      <b-button
        v-b-modal.price-step-modal
        variant="outline-primary"
        class="btn-block-xs-only"
        >Add Step</b-button
      >
    </div>
    <p>
      If you don't want to raise the price leading to the race, please specify
      one with an end date of the raceday's date.
    </p>
    <price-step-modal @add-step="val => priceSteps.push(val)" />
    <hr />
    <price-step-list
      :price-steps="priceSteps"
      @delete="index => priceSteps.splice(index)"
    />
  </div>
</template>

<script>
import PriceStepModal from '@/components/organizer/edit/competition/create/PriceStepModal';
import PriceStepList from '@/components/organizer/edit/competition/create/PriceStepList';

export default {
  name: 'Fee',
  components: {
    PriceStepModal,
    PriceStepList,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cascading: false,
    };
  },
  computed: {
    priceSteps: {
      get() {
        return this.value;
      },
      set(val) {
        // Return as sorted array
        this.$emit('input', val.sort(this.sortByDate));
      },
    },
  },
  methods: {
    sortByDate(a, b) {
      const aTime = a.getTime() || 0;
      const bTime = b.getTime() || 0;
      if (aTime === bTime) return 0;

      return aTime > bTime ? 1 : -1;
    },
  },
};
</script>

<style></style>
