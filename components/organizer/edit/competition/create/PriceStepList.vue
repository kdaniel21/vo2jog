<template>
  <b-list-group id="price-step-list" class="mb-3">
    <p v-if="!priceSteps.length" class="text-muted text-center">
      No pricing step added yet. Please add one!
    </p>
    <b-list-group-item
      v-for="(step, index) in priceSteps"
      :key="step.price"
      class="d-flex justify-content-between"
    >
      <span>
        {{ $dateFns.lightFormat(step.startDate, 'yyyy.MM.dd') }} -
        {{ $dateFns.lightFormat(step.endDate, 'yyyy.MM.dd') }}
      </span>
      <span>
        {{ step.price.toFixed(2) }} {{ step.currency.toUpperCase() }}
        <fa
          icon="trash"
          class="ml-1 cursor-pointer"
          @click="$emit('delete', index)"
        />
      </span>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'PriceStepList',
  props: {
    priceSteps: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
