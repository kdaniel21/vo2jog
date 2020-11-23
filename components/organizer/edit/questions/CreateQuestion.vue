<template>
  <b-form
    id="create-question"
    ref="create-question"
    @submit.prevent="createQuestion"
  >
    <h4>Create Q&A</h4>

    <label for="question">Question</label>
    <b-form-textarea
      id="question"
      v-model="faq.question"
      placeholder="Where can I park my car?"
      rows="1"
      class="mb-2"
    ></b-form-textarea>

    <label for="answer">Answer</label>
    <b-form-textarea
      id="answer"
      v-model="faq.answer"
      placeholder="There is a parking lot near the entrance."
      rows="3"
    ></b-form-textarea>

    <submit-button submit text="Add Q&A" />
  </b-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'CreateQuestion',
  components: { SubmitButton },
  mixins: [toaster],
  data() {
    return {
      faq: {
        question: null,
        answer: null,
      },
    };
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
  },
  methods: {
    ...mapActions('organizer/events', ['addItem']),
    async createQuestion() {
      try {
        await this.addItem({ name: 'faq', data: this.faq });

        this.successToast('Question successfully added!');
        this.$refs['create-question'].reset();
      } catch (err) {
        this.errorToast('Could not add question. Please try again!');
      }
    },
  },
};
</script>

<style></style>
