<template>
  <div id="popular-event-list">
    <h3>Most Popular Events</h3>

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
