<template>
  <b-row id="event-list">
    <b-col v-for="event in events" :key="event.id" cols="12" xl="6">
      <event-list-item :event="event" />
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'EventList',
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
