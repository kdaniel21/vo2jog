<template>
  <div id="profile-events" class="card">
    <div class="card-content">
      <div class="is-flex is-justify-content-space-between">
        <h2 class="subtitle is-size-4 has-text-weight-medium">
          {{ $t('profile.recent_events') }}
        </h2>
        <b-button type="is-link is-light">
          {{ $t('profile.all_events') }}
        </b-button>
      </div>

      <!-- EVENTS -->
      <event-card-carousel :breakpoints="breakpoints" :events="events" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileEvents',
  data() {
    return {
      events: [],
      breakpoints: {
        600: { itemsToShow: 1 },
        900: { itemsToShow: 2 },
        1200: { itemsToShow: 3 },
        1500: { itemsToShow: 4 },
      },
    };
  },
  async fetch() {
    const { id } = this.$route.params;
    const res = await this.$axios.get(`/api/organizers/${id}/events?limit=6`);

    this.events = res.data.data;
  },
};
</script>
