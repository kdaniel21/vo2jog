<template>
  <div id="card-events">
    <div class="d-flex justify-content-between">
      <b-card-title>Events</b-card-title>
      <nuxt-link to="/">All Events</nuxt-link>
    </div>

    <event-card-carousel :events="events" />
  </div>
</template>

<script>
export default {
  name: 'ProfileEvents',
  data() {
    return {
      events: [],
    };
  },
  async fetch() {
    const { id } = this.$route.params;
    const res = await this.$axios.get(`/api/organizers/${id}/events?limit=6`);

    this.events = res.data.data;
  },
};
</script>
