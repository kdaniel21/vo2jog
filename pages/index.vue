<template>
  <div>
    <search-area />

    <b-container class="py-5 py-md-3">
      <sport-select class="mt-5 mt-md-1" />

      <distance-select class="mt-3 mt-md-5" />

      <popular-event-list class="mt-3 mt-md-5" />
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'landing',
};
</script>

<style scoped></style>
