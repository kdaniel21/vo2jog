<template>
  <div id="faq-item">
    <div class="d-flex justify-space-between">
      <b-button
        v-b-toggle="'faq' + _uid"
        block
        variant="link"
        class="text-left"
      >
        {{ faq.question }}
      </b-button>
      <slot></slot>
    </div>
    <b-collapse
      :id="'faq' + _uid"
      role="tabpanel"
      accordion="faq-accordion"
      class="px-3"
    >
      {{ faq.answer }}
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    faq: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
</style>
