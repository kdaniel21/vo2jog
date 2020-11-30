<template>
  <b-row id="event-list">
    <b-col v-for="event in events" :key="event.id" cols="12" xl="6">
      <event-list-item :event="event" />
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EventListItem from '@/components/race-finder/event-list/EventListItem';

export default {
  name: 'EventList',
  components: {
    EventListItem,
  },
  async fetch() {
    await this.fetchEvents();
  },
  computed: {
    ...mapState('events', ['events']),
  },
  methods: {
    ...mapActions('events', ['fetchEvents']),
  },
};
</script>
