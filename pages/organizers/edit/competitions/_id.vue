<template>
  <create-competition :competition="competition" />
</template>

<script>
import { mapState } from 'vuex';
import CreateCompetition from '@/components/organizer/edit/competition/create/CreateCompetition';

export default {
  components: { CreateCompetition },
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  computed: {
    ...mapState({
      competition(state) {
        return state.organizer.events.selectedEvent.competitions.find(
          competition => competition._id === this.$route.params.id
        );
      },
    }),
  },
};
</script>

<style></style>
