<template>
  <div id="my-events">
    <b-row class="justify-content-between mx-0">
      <h4>My Races</h4>
      <!-- CREATE MODAL -->
      <b-button v-b-modal.create-modal variant="primary">Create Race</b-button>
    </b-row>

    <p v-if="events.length < 1" class="text-muted">
      No races available. Create one to get started!
    </p>
    <b-card-group deck>
      <event-card v-for="event in events" :key="event._id" :event="event" />
    </b-card-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/organizer/dashboard/EventCard';

export default {
  name: 'MyEvents',
  components: { EventCard },
  computed: {
    ...mapState('organizer/events', ['events']),
  },
};
</script>
