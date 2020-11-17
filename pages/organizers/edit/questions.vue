<template>
  <div id="questions">
    <create-question />

    <div v-if="questions && questions.length">
      <hr />
      <h4>Current Questions</h4>
      <questions-list />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateQuestion from '@/components/organizer/edit/questions/CreateQuestion';
import QuestionsList from '@/components/organizer/edit/questions/QuestionsList';

export default {
  name: 'Questions',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CreateQuestion, QuestionsList },
  computed: {
    ...mapState({ questions: state => state.organizer.selectedEvent.faq }),
  },
};
</script>

<style></style>
