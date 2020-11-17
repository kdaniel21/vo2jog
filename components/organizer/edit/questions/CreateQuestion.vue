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

    <div class="d-flex justify-content-end">
      <b-button
        type="submit"
        variant="primary"
        class="mt-3 pull-right btn-block-xs-only"
        >Add Q&A</b-button
      >
    </div>
  </b-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';

export default {
  name: 'CreateQuestion',
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
    ...mapState('organizer', ['selectedEvent']),
  },
  methods: {
    ...mapActions('organizer', ['addItem']),
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
