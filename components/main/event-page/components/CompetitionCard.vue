<template>
  <collapse-card :title="competition.name">
    <pre>{{ competition }}</pre>
  </collapse-card>
</template>

<script>
export default {
  name: 'CompetitionCard',
  props: { competition: { type: Object, default: null } },
};
</script>

<style></style>
