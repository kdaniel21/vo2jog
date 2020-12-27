<template>
  <form-group id="new-question" :validator="$v.form.question">
    <b-input
      v-model="form.question"
      :placeholder="$t('organizer.details.add_question')"
      icon="question"
      expanded
    />
    <p class="control">
      <b-button
        type="is-primary"
        :disabled="$v.form.$anyError"
        @click="onCreate"
      >
        {{ $t('common.add') }}
      </b-button>
    </p>
  </form-group>
</template>

<script>
import { mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'NewQuestion',
  data() {
    return {
      form: {
        question: null,
      },
    };
  },
  validations: {
    form: {
      question: { required, maxLength: maxLength(60) },
    },
  },
  methods: {
    ...mapActions('organizer/events', ['addItem']),
    async onCreate() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      await this.addItem({ name: 'faq', data: this.form });

      this.form = {};
      this.$v.form.$reset();
    },
  },
};
</script>

<style></style>
