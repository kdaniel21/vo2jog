<template>
  <div id="popular-event-list">
    <h3>Most Popular Events</h3>

    <div class="d-flex flex-nowrap overflow-auto justify-content-md-between">
      <event-card
        v-for="event in events"
        :key="event._id"
        :event="event"
        class="flex-row-item"
      />
    </div>
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
