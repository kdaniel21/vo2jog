<template>
  <section id="event-page-faq" class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('event.faq') }}</h2>

      <collapse-card
        v-for="{ question, answer, id } in faq"
        :key="id"
        :title="question"
      >
        <p>{{ answer }}</p>
      </collapse-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventPageFaq',
  props: { faq: { type: Array, default: () => [] } },
};
</script>

<style></style>
