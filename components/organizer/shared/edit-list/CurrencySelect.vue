<template>
  <b-dropdown
    :value="value"
    aria-role="list"
    @input="val => $emit('input', val)"
  >
    <b-button slot="trigger" type="is-primary" icon-left="euro-sign">
      {{ value.toUpperCase() || $t('organizer.competitions.currency') }}
    </b-button>

    <b-dropdown-item
      v-for="currency in availableCurrencies"
      :key="currency"
      :value="currency"
      class="is-uppercase"
      aria-role="listitem"
    >
      {{ currency }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'CurrencySelect',
  props: {
    value: { type: String, default: 'huf' },
  },
  data() {
    return {
      availableCurrencies: ['huf', 'eur'],
    };
  },
};
</script>

<style></style>
