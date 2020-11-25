<template>
  <b-form
    id="create-question"
    ref="create-question"
    @submit.prevent="createQuestion"
  >
    <h4>Create Q&A</h4>

    <form-group
      label="Question"
      label-for="question"
      :validator="$v.form.question"
    >
      <b-form-textarea
        id="question"
        v-model="form.question"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        placeholder="Where can I park my car?"
        rows="1"
        v-on="listeners"
      ></b-form-textarea>
    </form-group>

    <form-group label="Answer" label-for="answer" :validator="$v.form.answer">
      <b-form-textarea
        id="answer"
        v-model="form.answer"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        placeholder="There is a parking lot near the entrance."
        rows="3"
        v-on="listeners"
      ></b-form-textarea>
    </form-group>

    <submit-button
      submit
      text="Add Q&A"
      class="mt-3"
      :disabled="$v.form.$anyError"
    />
  </b-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';
import toaster from '@/mixins/toaster';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'CreateQuestion',
  components: { SubmitButton },
  mixins: [toaster],
  data() {
    return {
      form: {
        question: null,
        answer: null,
      },
    };
  },
  validations: {
    form: {
      question: { required, maxLength: maxLength(150) },
      answer: { required, maxLength: maxLength(1000) },
    },
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
  },
  methods: {
    ...mapActions('organizer/events', ['addItem']),
    async createQuestion() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      try {
        await this.addItem({ name: 'faq', data: this.form });

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
