<template>
  <div id="faq accordion" role="tablist">
    <h5>Frequently Asked Questions</h5>
    <div v-for="question in faq" :key="question._id">
      <b-button
        v-b-toggle="'faq' + question._id"
        block
        variant="link"
        class="text-left"
      >
        {{ question.question }}
      </b-button>
      <b-collapse
        :id="'faq' + question._id"
        role="tabpanel"
        accordion="faq-accordion"
        class="px-3"
      >
        {{ question.answer }}
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Faq',
  computed: {
    ...mapState({
      faq: state => state.events.viewedEvent.faq,
    }),
  },
};
</script>

<style scoped>
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
</style>
