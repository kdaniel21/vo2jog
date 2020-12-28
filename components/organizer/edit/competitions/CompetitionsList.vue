<template>
  <b-tabs id="competitions-list" v-model="selectedCompetition" type="toggle">
    <b-tab-item
      v-for="competition in selectedEvent.competitions"
      :key="competition.id"
      :label="competition.name"
    >
      <edit-competition :competition="competition" />
    </b-tab-item>
  </b-tabs>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CompetitionsList',
  data() {
    return {
      selectedCompetition: 0,
    };
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
  },
};
</script>

<style></style>
