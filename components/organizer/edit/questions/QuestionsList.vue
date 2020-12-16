<template>
  <div id="questions-list">
    <faq-item
      v-for="faq in questions.slice().reverse()"
      :key="faq.id"
      :faq="faq"
    >
      <delete-button @delete="deleteItem({ name: 'faq', id: faq.id })" />
    </faq-item>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DeleteButton from '@/components/organizer/edit/DeleteButton';

export default {
  name: 'QuestionsList',
  components: { DeleteButton },
  computed: {
    ...mapState({
      questions: state => state.organizer.events.selectedEvent.faq,
    }),
  },
  methods: {
    ...mapActions('organizer/events', ['deleteItem']),
  },
};
</script>

<style></style>
