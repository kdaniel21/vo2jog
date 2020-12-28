<template>
  <section id="event-page-competitions" class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('event.competitions') }}</h2>

      <competition-card
        v-for="competition in competitions"
        :key="competition.id"
        :competition="competition"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventPageCompetitions',
  props: { competitions: { type: Array, default: () => [] } },
};
</script>

<style></style>
