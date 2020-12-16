<template>
  <list-card :title="competition.name" accordion="competitions-accordion">
    <pre>{{ competition }}</pre>
  </list-card>
</template>

<script>
export default {
  name: 'CompetitionCard',
  props: { competition: { type: Object, default: null } },
};
</script>

<style></style>
