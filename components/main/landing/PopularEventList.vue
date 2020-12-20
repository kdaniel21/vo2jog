<template>
  <div id="popular-event-list">
    <h2 class="title has-text-capitalized">
      {{ $t('landing.popular_events.title') }}
    </h2>

    <event-card-carousel :events="events" />
  </div>
</template>

<script>
export default {
  name: 'PopularEventList',
  data() {
    return {
      events: [],
    };
  },
  async fetch() {
    const res = await this.$axios.get('/api/events');
    const {
      data: { data },
    } = res;

    if (!data || !data.length) return;
    this.events = [...data];
  },
};
</script>

<style scoped>
.flex-row-item {
  flex: 0 0 auto;
}
</style>
