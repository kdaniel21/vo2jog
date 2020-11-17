<template>
  <b-row id="price-input" no-gutters>
    <b-form-group label="Price" label-for="amount-input" class="mr-2">
      <b-form-input
        id="amount-input"
        v-model.number="fee.price"
        type="number"
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Currency">
      <b-form-select v-model="fee.currency" :options="currencyOptions">
      </b-form-select>
    </b-form-group>
  </b-row>
</template>

<script>
export default {
  name: 'PriceInput',
  props: {
    value: {
      type: Object,
      default: () => ({ price: null, currency: 'eur' }),
    },
  },
  data() {
    return {
      currencyOptions: ['eur', 'huf'],
    };
  },
  computed: {
    fee: {
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
