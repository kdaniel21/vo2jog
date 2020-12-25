<template>
  <div id="organizer-events" class="mt-4">
    <div class="is-flex is-justify-content-space-between">
      <h3 class="title is-size-3">
        {{ $t('organizer_dashboard.my_events') }}
      </h3>

      <b-button type="is-primary is-light" @click="onCreateEvent">
        {{ $t('organizer_create_event.title') }}
      </b-button>
    </div>

    <event-card-carousel :events="events" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import createEvent from '@/mixins/organizer/create-event';

export default {
  name: 'OrganizerEvents',
  mixins: [createEvent],
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
