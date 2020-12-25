<template>
  <div id="organizer-events" class="mt-4">
    <h3 class="title is-size-3 mb-2">
      {{ $t('organizer_dashboard.my_events') }}
    </h3>

    <event-card-carousel :events="events" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'OrganizerEvents',
  computed: {
    events() {
      return this.$store.state.organizer.events.events.map(event => ({
        ...event,
        url: `/organizers/edit/${event.id}`,
      }));
    },
  },
  mounted() {
    if (!this.events.length) this.fetchEvents();
  },
  methods: {
    ...mapActions('organizer/events', ['fetchEvents']),
  },
};
</script>

<style></style>
