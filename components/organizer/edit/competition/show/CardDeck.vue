<template>
  <b-card-group deck>
    <competition-card
      v-for="competition in competitions"
      :key="competition.name"
      :competition="competition"
    />
  </b-card-group>
</template>

<script>
import { mapState } from 'vuex';
import CompetitionCard from '@/components/organizer/edit/competition/show/CompetitionCard';

export default {
  name: 'CardDeck',
  components: { CompetitionCard },
  computed: {
    ...mapState({
      competitions: state => state.organizer.events.selectedEvent.competitions,
    }),
  },
};
</script>

<style></style>
