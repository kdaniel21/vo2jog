<template>
  <b-card id="list-card" no-body class="mb-2">
    <b-card-header
      v-b-toggle="`list-card-${_uid}`"
      class="cursor-pointer d-flex justify-content-between"
      role="tab"
    >
      <span>{{ title }}</span>
      <fa icon="chevron-down" fixed-width />
    </b-card-header>
    <b-collapse
      :id="`list-card-${_uid}`"
      accordion="competitions-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <slot></slot>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    title: { type: String, default: null },
    accordion: { type: String, default: null },
  },
};
</script>

<style></style>
