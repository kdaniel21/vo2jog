<template>
  <div id="questions-list">
    <collapse-card
      v-for="question in selectedEvent.faq"
      :key="question.id"
      :title="question.question"
    >
      <template #header>
        <div v-if="!editedQuestion || editedQuestion.id !== question.id">
          {{ question.question }}
        </div>
        <form-group
          v-else
          :validator="$v.editedQuestion.question"
          class="is-flex-grow-1"
        >
          <b-input
            v-model="editedQuestion.question"
            @input="$v.editedQuestion.question.$touch"
          />
        </form-group>
      </template>

      <template #default>
        <!-- NORMAL STATE -->
        <div v-if="!editedQuestion || editedQuestion.id !== question.id">
          {{ question.answer }}

          <!-- EDIT BUTTON -->
          <div class="is-pulled-right is-clickable">
            <span @click="editedQuestion = question">
              <b-icon icon="edit" />
            </span>
            <span @click="onDeleteQuestion(item)">
              <b-icon icon="trash-alt" />
            </span>
          </div>
        </div>

        <!-- EDIT STATE -->
        <div v-else>
          <form-group :validator="$v.editedQuestion.answer">
            <b-input
              v-model="editedQuestion.answer"
              type="textarea"
              @input="$v.editedQuestion.answer.$touch"
            />
          </form-group>
          <div class="is-flex is-justify-content-end mt-2 buttons">
            <b-button @click="onCancel">
              {{ $t('common.cancel') }}
            </b-button>
            <b-button type="is-primary" @click="onSave">
              {{ $t('common.save') }}
            </b-button>
          </div>
        </div>
      </template>
    </collapse-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'QuestionsList',
  data() {
    return {
      editedQuestion: null,
    };
  },
  validations: {
    editedQuestion: {
      question: { required, maxLength: maxLength(60) },
      answer: { required, maxLength: maxLength(400) },
    },
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
  },
  methods: {
    ...mapActions('organizer/events', ['updateItem']),
    async onSave() {
      this.$v.editedQuestion.$touch();
      if (this.$v.editedQuestion.$anyError) return;

      await this.updateItem({ name: 'faq', data: this.editedQuestion });
      this.onCancel();
    },
    onCancel() {
      this.editedQuestion = null;
      this.$v.editedQuestion.$reset();
    },
  },
};
</script>

<style></style>
