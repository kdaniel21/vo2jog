<template>
  <div id="event-page-faq">
    <h2>Questions</h2>

    <list-card
      v-for="{ question, answer, id } in faq"
      :key="id"
      :title="question"
    >
      <p>{{ answer }}</p>
    </list-card>
  </div>
</template>

<script>
export default {
  name: 'EventPageFaq',
  props: { faq: { type: Array, default: () => [] } },
};
</script>

<style></style>
