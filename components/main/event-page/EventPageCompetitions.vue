<template>
  <div id="event-page-competitions">
    <h2>Competitions</h2>

    <competition-card
      v-for="competition in competitions"
      :key="competition.id"
      :competition="competition"
    />
  </div>
</template>

<script>
export default {
  name: 'EventPageCompetitions',
  props: { competitions: { type: Array, default: () => [] } },
};
</script>

<style></style>
