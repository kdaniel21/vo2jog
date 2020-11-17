<template>
  <div id="questions-list">
    <faq-item
      v-for="faq in questions.slice().reverse()"
      :key="faq._id"
      :faq="faq"
    >
      <delete-button @delete="deleteItem({ name: 'faq', id: faq._id })" />
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
      questions: state => state.organizer.selectedEvent.faq,
    }),
  },
  methods: {
    ...mapActions('organizer', ['deleteItem']),
  },
};
</script>

<style></style>
