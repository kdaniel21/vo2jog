<template>
  <div id="questions">
    <create-question />

    <div v-if="selectedEvent.faq.length">
      <hr />
      <h4>Current Questions</h4>
      <faq-item
        v-for="faq in selectedEvent.faq.slice().reverse()"
        :key="faq._id"
        :faq="faq"
      >
        <fa
          icon="minus-circle"
          @click="$store.dispatch('organizer/deleteFaq', faq._id)"
        />
      </faq-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateQuestion from '@/components/organizer/edit/questions/CreateQuestion';
import FaqItem from '@/components/race-page/FaqItem';

export default {
  name: 'Questions',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CreateQuestion, FaqItem },
  computed: {
    ...mapState('organizer', ['selectedEvent']),
  },
};
</script>

<style></style>
