<template>
  <div id="_id">
    <create-competition :competition="competition" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateCompetition from '@/components/organizer/edit/competition/create/CreateCompetition';

export default {
  name: '_id',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CreateCompetition },
  computed: {
    ...mapState({
      competition(state) {
        return state.organizer.selectedEvent.competitions.find(
          competition => competition._id === this.$route.params.id
        );
      },
    }),
  },
};
</script>

<style></style>
